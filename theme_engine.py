# theme_engine.py
import os
import json
import copy
import re
from typing import Dict, Any, Optional, List, Union

from theme_config import (
    ThemeConfig,
    GlobalValues,
    Component,
    ComponentVariant,
    ComponentElement,
    ThemeReference,
    ComputedProperty,
)


JS_RESERVED_KEYWORDS = {
    "break",
    "case",
    "catch",
    "class",
    "const",
    "debugger",
    "default",
    "delete",
    "do",
    "else",
    "export",
    "extends",
    "false",
    "finally",
    "for",
    "function",
    "if",
    "import",
    "in",
    "instanceof",
    "new",
    "null",
    "return",
    "super",
    "switch",
    "this",
    "throw",
    "true",
    "try",
    "typeof",
    "var",
    "void",
    "while",
    "with",
    "yield",
    "enum",
    "implements",
    "interface",
    "let",
    "package",
    "private",
    "protected",
    "public",
    "static",
    "await",
    # Add more if needed, or use a more comprehensive list
}


class ThemeEngine:
    """Singleton class to manage the theme configuration"""

    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(ThemeEngine, cls).__new__(cls)
            cls._instance._initialized = False
        return cls._instance

    def __init__(self):
        if self._initialized:
            return

        # Set up paths explicitly
        self._base_dir = "/app"
        self._data_dir = os.environ.get("DATA_DIR", "/data")
        self._config_path = os.path.join(self._data_dir, "theme_config.json")
        self._boilerplate_dir = os.path.join(self._base_dir, "boilerplate")
        self._output_dir = os.path.join(self._data_dir, "output")
        self._components_dir = os.path.join(self._output_dir, "components")
        self._preview_dir = os.path.join(self._base_dir, "preview")

        # Ensure directories exist
        os.makedirs(self._data_dir, exist_ok=True)
        os.makedirs(self._output_dir, exist_ok=True)
        os.makedirs(self._components_dir, exist_ok=True)
        os.makedirs(self._preview_dir, exist_ok=True)

        # Initialize theme
        self._theme = None
        self._original_theme = None
        self._has_unsaved_changes = False
        self._load_theme()
        self._initialized = True

    def _to_pascal_case(self, name: str) -> str:
        """Converts a name (potentially kebab-case or just lowercase) to PascalCase."""
        if not name:
            return ""
        # Handle cases like "onetimepassword" becoming "Onetimepassword"
        # or "profile-card" becoming "ProfileCard"
        return "".join(word.capitalize() for word in name.split("-"))

    def _make_js_safe_identifier(self, name: str) -> str:
        """Converts a name to PascalCase and makes it JS keyword-safe."""
        pascal_name = self._to_pascal_case(name)
        # Check against lowercase version as well, as some linters/tools might be sensitive
        # Also, ensure the original check for pascal_name itself being a keyword is there.
        if (
            pascal_name.lower() in JS_RESERVED_KEYWORDS
            or pascal_name in JS_RESERVED_KEYWORDS
        ):
            return pascal_name + "Component"  # common convention
        return pascal_name

    def _load_theme(self):
        """Load the theme configuration from disk"""
        self._theme = ThemeConfig.load(self._config_path)
        # Make a deep copy of the original state
        self._original_theme = self._theme.deep_copy()
        self._has_unsaved_changes = False

    def _save_theme(self):
        """Save the theme configuration to disk"""
        self._theme.save(self._config_path)
        # Update the original state after saving
        self._original_theme = self._theme.deep_copy()
        self._has_unsaved_changes = False

    def has_unsaved_changes(self) -> bool:
        """Check if there are unsaved changes"""
        return self._has_unsaved_changes

    def get_theme(self) -> ThemeConfig:
        """Get the current theme configuration"""
        return self._theme

    def list_components(self) -> Dict[str, List[str]]:
        """List all available components and their variants"""
        result = {}

        for comp_name, component in self._theme.components.items():
            variants = list(component.variants.keys())
            result[comp_name] = variants

        return result

    def get_component_details(
        self, component_type: str, variant: str
    ) -> Dict[str, Any]:
        """Get detailed information about a component variant"""
        if component_type not in self._theme.components:
            return {"error": f"Component type '{component_type}' not found"}

        if variant not in self._theme.components[component_type].variants:
            return {
                "error": f"Variant '{variant}' not found for component '{component_type}'"
            }

        component_variant = self._theme.components[component_type].variants[
            variant
        ]
        full_tailwind = component_variant.get_full_tailwind(self._theme)

        return {
            "component": f"{component_type}.{variant}",
            "properties": component_variant.to_dict(),
            "computed_tailwind": full_tailwind,
        }

    def get_variant_details(
        self, component_type: str, variant: str
    ) -> Dict[str, Any]:
        """
        Get detailed information about a component variant, including its elements.
        """
        if not self._theme or component_type not in self._theme.components:
            return {"error": f"Component type '{component_type}' not found"}
        component = self._theme.components[component_type]

        if variant not in component.variants:
            return {
                "error": f"Variant '{variant}' not found for component '{component_type}'"
            }
        component_variant = component.variants[variant]

        variant_properties = component_variant.to_dict()
        root_computed_tailwind = component_variant.get_full_tailwind(
            self._theme
        )

        # Compute tailwind for each element within this variant
        element_computed_tailwind = {}
        if (
            hasattr(component_variant, "elements")
            and component_variant.elements
        ):
            for name, element_obj in component_variant.elements.items():
                # Check if element_obj is indeed an ComponentElement instance
                if isinstance(element_obj, ComponentElement):
                    element_computed_tailwind[name] = (
                        element_obj.get_full_tailwind(self._theme)
                    )
                else:
                    return {
                        "error": f"Item '{name}' in elements of {component_type}.{variant} is not a ComponentElement object."
                    }

        return {
            "component": component_type,
            "variant": variant,
            "properties": variant_properties,  # Should contain 'tailwind', 'description', 'elements', etc.
            "computed_tailwind": {
                "root": root_computed_tailwind,
                "elements": element_computed_tailwind,  # Include computed element tailwind
            },
        }

    def get_all_variant_styles(self, component_type: str) -> Dict[str, Any]:
        """
        Computes and returns the styles (root and elements) for ALL variants
        of a given component type. (Includes description).
        [Implementation remains the same as the previous correct version]
        """
        if not self._theme or component_type not in self._theme.components:
            # Removed logging
            return {"error": f"Component type '{component_type}' not found"}

        component = self._theme.components[component_type]
        if not component.variants:
            # Removed logging
            return {}  # Return empty dict if no variants

        all_styles = {}
        errors_found = []
        for variant_name, variant_obj in component.variants.items():
            variant_details = self.get_variant_details(
                component_type, variant_name
            )
            if "error" in variant_details:
                errors_found.append(
                    f"Error getting details for {component_type}.{variant_name}: {variant_details['error']}"
                )
                continue
            computed = variant_details.get("computed_tailwind", {})
            description = getattr(variant_obj, "description", "")
            style_data = {
                "root": computed.get("root", ""),
                "elements": computed.get("elements", {}),
                "description": description,
            }
            all_styles[variant_name] = style_data

        # Optionally handle errors_found list if needed, but removed logging

        return all_styles

    def update_variant_property(
        self,
        component_type: str,
        variant: str,
        property_name: str,
        value: Any,  # Allow different types
        auto_save: bool = False,
    ) -> Dict[str, Any]:
        """
        Update a top-level property (e.g., tailwind, description) of a component variant.
        Does NOT update elements within the variant.
        """
        if not self._theme or component_type not in self._theme.components:
            return {"error": f"Component type '{component_type}' not found"}
        component = self._theme.components[component_type]

        if variant not in component.variants:
            return {
                "error": f"Variant '{variant}' not found for component '{component_type}'"
            }
        component_variant = component.variants[variant]

        if property_name == "elements":
            return {
                "error": "Use update_variant_element or update_variant methods to modify elements."
            }

        try:
            if (
                property_name
                in [
                    "color",
                    "text_color",
                ]  # Add other referenceable props if needed
                and isinstance(value, str)
                and value.startswith("global.")
            ):
                setattr(
                    component_variant, property_name, ThemeReference(value)
                )
            elif property_name == "extends":
                setattr(
                    component_variant,
                    property_name,
                    value if isinstance(value, str) else None,
                )
            else:
                # Basic type checking or conversion might be needed here based on property
                setattr(component_variant, property_name, value)

            self._has_unsaved_changes = True
            if auto_save:
                self._save_theme()
                save_message = " and saved to disk"
            else:
                save_message = " (not yet saved to disk)"

            root_computed_tailwind = component_variant.get_full_tailwind(
                self._theme
            )

            return {
                "success": True,
                "message": f"Updated {component_type}.{variant}.{property_name} to '{value}'{save_message}",
                "computed_tailwind": {"root": root_computed_tailwind},
            }
        except AttributeError:
            return {
                "error": f"Property '{property_name}' not found or cannot be set on variant '{component_type}.{variant}'"
            }
        except Exception as e:
            return {"error": f"An unexpected error occurred: {e}"}

    def update_variant_element(
        self,
        component_type: str,
        variant: str,
        element_name: str,
        property_name: str,
        value: Any,
        auto_save: bool = False,
    ) -> Dict[str, Any]:
        """Update a property of a specific element WITHIN a component variant."""
        if not self._theme or component_type not in self._theme.components:
            return {"error": f"Component type '{component_type}' not found"}
        component = self._theme.components[component_type]

        if variant not in component.variants:
            return {
                "error": f"Variant '{variant}' not found for component '{component_type}'"
            }
        component_variant = component.variants[variant]

        # Ensure the variant has an elements dictionary and it's a dict
        if not hasattr(component_variant, "elements") or not isinstance(
            component_variant.elements, dict
        ):
            component_variant.elements = {}

        # Get or create the element object
        if element_name not in component_variant.elements or not isinstance(
            component_variant.elements[element_name], ComponentElement
        ):
            component_variant.elements[element_name] = ComponentElement()
        element = component_variant.elements[element_name]

        try:
            if property_name.startswith("computed."):
                computed_prop_name = property_name.split(".", 1)[1]
                if not hasattr(element, "computed") or not isinstance(
                    element.computed, dict
                ):
                    element.computed = {}
                element.computed[computed_prop_name] = ComputedProperty(
                    str(value)
                )  # Ensure value is string for template
            elif (
                property_name in ["color", "text_color"]
                and isinstance(value, str)
                and value.startswith("global.")
            ):
                setattr(element, property_name, ThemeReference(value))
            else:
                # Basic type checking or conversion might be needed here
                setattr(element, property_name, value)

            self._has_unsaved_changes = True
            if auto_save:
                self._save_theme()
                save_message = " and saved to disk"
            else:
                save_message = " (not yet saved to disk)"

            element_computed_tailwind = element.get_full_tailwind(self._theme)

            return {
                "success": True,
                "message": f"Updated {component_type}.{variant}.elements.{element_name}.{property_name} to '{value}'{save_message}",
                "computed_tailwind": {element_name: element_computed_tailwind},
            }
        except AttributeError:
            return {
                "error": f"Property '{property_name}' not found or cannot be set on element '{component_type}.{variant}.elements.{element_name}'"
            }
        except Exception as e:
            return {"error": f"An unexpected error occurred: {e}"}

    def update_global_color(
        self, color_name: str, color_value: str, auto_save: bool = False
    ) -> Dict[str, Any]:
        """Update a global color value"""
        if (
            not self._theme
            or not self._theme.global_values
            or not self._theme.global_values.colors
        ):
            return {"error": "Global values or colors not initialized"}

        parts = color_name.split(".")
        target_dict = self._theme.global_values.colors
        prop_name = parts[-1]

        try:
            # Traverse dictionary for nested paths
            for i, part in enumerate(parts[:-1]):
                if part not in target_dict or not isinstance(
                    target_dict[part], dict
                ):
                    # Create nested dict if it doesn't exist
                    target_dict[part] = {}
                target_dict = target_dict[part]

            # Set the final value
            target_dict[prop_name] = color_value
        except Exception as e:
            return {"error": f"Failed to set global color '{color_name}': {e}"}

        self._has_unsaved_changes = True
        if auto_save:
            self._save_theme()
            save_message = " and saved to disk"
        else:
            save_message = " (not yet saved to disk)"

        return {
            "success": True,
            "message": f"Updated global.colors.{color_name} to '{color_value}'{save_message}",
        }

    def create_component_variant(
        self,
        component_type: str,
        variant: str,
        extends: Optional[str] = None,
        tailwind: Optional[str] = None,
        color: Optional[str] = None,
        text_color: Optional[str] = None,
        description: Optional[str] = None,
        elements: Optional[Dict[str, Any]] = None,  # Allow passing elements
        auto_save: bool = False,
    ) -> Dict[str, Any]:
        """
        Creates or updates a component variant using the update_variant method.
        Pass variant properties and optional elements dictionary.
        """
        data = {}
        if extends is not None:
            data["extends"] = extends
        if tailwind is not None:
            data["tailwind"] = tailwind
        if color is not None:
            data["color"] = color
        if text_color is not None:
            data["text_color"] = text_color
        if description is not None:
            data["description"] = description
        if elements is not None:
            data["elements"] = elements  # Pass elements dict

        # Use update_variant which handles creation if variant doesn't exist
        result = self.update_variant(component_type, variant, data, auto_save)

        # Adjust message slightly if it was purely a creation
        if (
            "success" in result
            and f"Created {component_type}.{variant}:"
            in result.get("message", "")
        ):
            result["message"] = result["message"].replace(
                "Updated", "Created"
            )  # Simple replace might suffice

        return result

    def update_variant(
        self,
        component_type: str,
        variant: str,
        data: Dict[
            str, Any
        ],  # Dict with variant props and optionally 'elements' dict
        auto_save: bool = False,
    ) -> Dict[str, Any]:
        """
        Updates multiple properties and/or elements of a component variant.
        Creates the variant if it doesn't exist. If creating and 'extends' is used,
        it will attempt to copy the 'elements' dictionary from the base variant
        unless 'elements' are explicitly provided in the 'data'.

        'data' dict can contain keys like 'tailwind', 'description', 'extends',
        and an 'elements' key whose value is another dict: {'element_name': {'prop': value}}.
        """

        if not self._theme or component_type not in self._theme.components:
            return {"error": f"Component type '{component_type}' not found"}
        component = self._theme.components[component_type]

        # --- Get or Create Variant ---
        variant_created = False
        if variant not in component.variants:
            variant_created = True
            # Create a new variant object
            new_variant = ComponentVariant()

            # --- Inherit elements if extending and elements not provided ---
            extends_path = data.get("extends")
            elements_provided = "elements" in data

            if (
                extends_path
                and isinstance(extends_path, str)
                and not elements_provided
            ):
                try:
                    # expecting "component_type.variant_name" format
                    base_comp_type, base_variant_name = extends_path.split(".")
                    # Check if extending from within the same component type
                    if (
                        base_comp_type == component_type
                        and base_variant_name in component.variants
                    ):
                        base_variant = component.variants[base_variant_name]
                        # Check if base variant has elements and copy them DEEPLY
                        if (
                            hasattr(base_variant, "elements")
                            and base_variant.elements
                            and isinstance(base_variant.elements, dict)
                        ):
                            # Use deepcopy to avoid modifying the original base elements
                            new_variant.elements = copy.deepcopy(
                                base_variant.elements
                            )
                            print(
                                f"[INFO] Copied elements from '{extends_path}' to new variant '{component_type}.{variant}'."
                            )  # Temp feedback
                        else:
                            print(
                                f"[INFO] Base variant '{extends_path}' has no elements to copy."
                            )  # Temp feedback
                    else:
                        # Extending from different component types not handled here, just warn
                        print(
                            f"[WARNING] Cannot find base variant '{extends_path}' within component '{component_type}' to copy elements from."
                        )  # Temp feedback

                except ValueError:
                    print(
                        f"[WARNING] Invalid 'extends' format: '{extends_path}'. Expected 'component.variant'. Cannot copy elements."
                    )  # Temp feedback
                except Exception as e:
                    print(
                        f"[WARNING] Error copying elements during variant creation for '{component_type}.{variant}': {e}"
                    )  # Temp feedback
            elif elements_provided:
                print(
                    f"[INFO] Elements explicitly provided for new variant '{component_type}.{variant}', not copying from base."
                )  # Temp feedback
            else:
                print(
                    f"[INFO] No 'extends' or no explicit 'elements' provided for new variant '{component_type}.{variant}'. Starting with empty elements."
                )  # Temp feedback

            # Assign the newly prepared variant object
            component.variants[variant] = new_variant

        # Get the variant object (either existing or newly created)
        component_variant = component.variants[variant]

        updated_props_summary = []
        updated_elements_summary = {}  # Track {element_name: [prop1, prop2]}
        errors = []

        # --- Update Variant-Level Properties ---
        for prop_name, value in data.items():
            if prop_name == "elements":
                continue  # Handle elements dict separately below

            # Call the dedicated method for updating variant properties
            # Ensure `update_variant_property` method exists in this class!
            result = self.update_variant_property(
                component_type, variant, prop_name, value, auto_save=False
            )
            if "error" in result:
                errors.append(
                    f"Error updating property '{prop_name}': {result['error']}"
                )
                continue  # Log error but try to continue
            updated_props_summary.append(prop_name)

        # --- Update Element Properties (if 'elements' key is in data) ---
        if "elements" in data and isinstance(data["elements"], dict):
            # Ensure component_variant.elements dictionary exists
            if not hasattr(component_variant, "elements") or not isinstance(
                component_variant.elements, dict
            ):
                component_variant.elements = (
                    {}
                )  # Create if it wasn't created/copied earlier

            for element_name, element_data in data["elements"].items():
                if not isinstance(element_data, dict):
                    errors.append(
                        f"Invalid data format for element '{element_name}'. Expected dict, got {type(element_data)}."
                    )
                    continue

                # Check if element exists, create if not (within this update process)
                element_created_in_update = False
                if (
                    element_name not in component_variant.elements
                    or not isinstance(
                        component_variant.elements[element_name],
                        ComponentElement,
                    )
                ):
                    # If element doesn't exist OR is not the right type, create/overwrite
                    component_variant.elements[element_name] = (
                        ComponentElement()
                    )
                    element_created_in_update = True
                    print(
                        f"[INFO] Created/Reset element '{element_name}' in '{component_type}.{variant}' during update."
                    )  # Temp feedback

                # Initialize tracking for this element if needed
                if element_name not in updated_elements_summary:
                    updated_elements_summary[element_name] = []

                # Iterate through properties provided for this specific element
                for prop_name, value in element_data.items():
                    # Call the dedicated method for updating element properties
                    # Ensure `update_variant_element` method exists in this class!
                    result = self.update_variant_element(
                        component_type,
                        variant,
                        element_name,
                        prop_name,
                        value,
                        auto_save=False,
                    )
                    if "error" in result:
                        errors.append(
                            f"Error updating element '{element_name}.{prop_name}': {result['error']}"
                        )
                        continue  # Continue with next property/element
                    updated_elements_summary[element_name].append(prop_name)

        # --- Handle Errors ---
        if errors:
            print(
                f"[ERROR] Errors occurred during update_variant for {component_type}.{variant}:\n - "
                + "\n - ".join(errors)
            )  # Temp feedback
            # Don't save if errors occurred during the update process itself
            return {
                "error": "Errors occurred during update, changes not saved.",
                "details": errors,
                "message": f"Update for {component_type}.{variant} failed. See details.",
            }

        # --- Final Save ---
        changes_made = bool(
            updated_props_summary
            or any(updated_elements_summary.values())
            or variant_created
        )
        save_message = ""
        if changes_made:
            self._has_unsaved_changes = True
            if auto_save:
                try:
                    self._save_theme()
                    save_message = " and saved to disk"
                except Exception as e:
                    # Report save error, but update might have partially succeeded in memory
                    return {
                        "error": f"Update applied in memory but failed to auto-save: {e}"
                    }
            else:
                save_message = " (not yet saved to disk)"
        else:
            # If no errors and no changes, report success with no changes message
            return {
                "success": True,
                "message": f"No effective changes applied for {component_type}.{variant}.",
            }

        # --- Generate Summary Message ---
        action = "Created" if variant_created else "Updated"
        msg_parts = []
        if updated_props_summary:
            msg_parts.append(
                f"properties ({', '.join(updated_props_summary)})"
            )
        if any(updated_elements_summary.values()):
            element_updates = [
                f"{el}({', '.join(props)})"
                for el, props in updated_elements_summary.items()
                if props
            ]
            if (
                element_updates
            ):  # Avoid adding "elements ()" if no props were actually updated
                msg_parts.append(f"elements ({', '.join(element_updates)})")

        if not msg_parts and variant_created:
            msg = f"Created empty variant {component_type}.{variant}"  # Handle creation with no data
        elif not msg_parts and not variant_created:
            # This case handled above by "No effective changes"
            pass
        else:
            msg = (
                f"{action} {component_type}.{variant}: {'; '.join(msg_parts)}"
            )

        msg += save_message

        # --- Get Updated Details for Return ---
        # Ensure `get_variant_details` method exists in this class!
        variant_details = self.get_variant_details(component_type, variant)
        computed_tailwind = variant_details.get(
            "computed_tailwind", {}
        )  # Default to empty dict

        return {
            "success": True,
            "message": msg,
            "computed_tailwind": computed_tailwind,  # Return computed styles for feedback
        }

    def save_theme(self) -> Dict[str, Any]:
        """Explicitly save the current theme state to disk"""
        if not self._has_unsaved_changes:
            return {"success": True, "message": "No changes to save"}
        try:
            self._save_theme()
            return {"success": True, "message": "Theme saved to disk"}
        except Exception as e:
            return {"error": f"Failed to save theme: {e}"}

    def revert_theme(self) -> Dict[str, Any]:
        """Revert to the last saved state"""
        if not self._has_unsaved_changes:
            return {"success": True, "message": "No changes to revert"}

        if self._original_theme is None:
            return {"error": "Original theme state not found."}

        self._theme = self._original_theme.deep_copy()
        self._has_unsaved_changes = False
        return {
            "success": True,
            "message": "Theme reverted to last saved state",
        }

    def render_component(self, component_type: str) -> Dict[str, Any]:
        """
        Generates a single React component file (e.g., Button.jsx) containing logic
        to dynamically apply styles for any of its variants based on a 'variant' prop,
        using an injected 'getStyle' helper function.
        """
        # Removed logging

        # 1. Get styles for ALL variants
        all_variant_styles = self.get_all_variant_styles(component_type)
        if "error" in all_variant_styles:
            # Removed logging
            return {
                "error": f"Failed to get variant styles: {all_variant_styles['error']}"
            }
        if not all_variant_styles:
            # Removed logging
            return {
                "success": True,
                "message": f"No variants defined for {component_type}, component file not generated.",
                "path": None,
            }

        # 2. Convert styles dictionary to a JSON string for injection
        try:
            # Using separators=(',', ':') creates the most compact JSON
            styles_json_string = json.dumps(
                all_variant_styles, separators=(",", ":")
            )
            # Basic escaping for JS string literal
            styles_json_string = styles_json_string.replace(
                "\\", "\\\\"
            ).replace("'", "\\'")
        except Exception as e:
            # Removed logging
            return {"error": f"JSON serialization failed: {e}"}

        # 3. Load the template
        template_base_name = f"{component_type}_template.jsx"
        template_path = os.path.join(self._boilerplate_dir, template_base_name)
        if not os.path.exists(template_path):
            # Removed logging
            return {"error": f"Template not found: {template_base_name}"}
        try:
            with open(template_path, "r") as f:
                template_content = f.read()
        except Exception as e:
            # Removed logging
            return {"error": f"Failed to read template: {e}"}

        # 4. Prepare JavaScript injection snippet with getStyle function
        js_injection = f"""
/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{styles_json_string}');
const getStyle = (elementName) => {{
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || {{ root: '', elements: {{}} }};
  if (elementName === 'root') {{
    return variantStyles.root || '';
  }}
  const elementStyles = variantStyles.elements || {{}};
  return elementStyles[elementName] || '';
}};
/* --- End Injected Logic --- */
"""

        # 5. Perform SINGLE Marker Replacement for the logic block
        rendered_content = template_content
        logic_marker = "/* INJECT_VARIANT_STYLING_LOGIC */"
        if logic_marker in rendered_content:
            rendered_content = rendered_content.replace(
                logic_marker, js_injection
            )
            # Removed logging
        else:
            # Removed logging
            # Still important to know if the injection point is missing
            print(
                f"WARNING: Marker '{logic_marker}' not found in template {template_base_name}. Styling logic not injected."
            )

        # 6. Clean up old placeholders (still useful)
        rendered_content = re.sub(
            r"\{\{[a-zA-Z0-9_]+Tailwind\}\}", "", rendered_content
        )
        rendered_content = re.sub(
            r"\{\{fullTailwind\}\}", "", rendered_content
        )

        # 7. Determine Output Path and Save
        output_component_filename_base = self._make_js_safe_identifier(
            component_type
        )
        output_filename = f"{output_component_filename_base}.jsx"
        output_path = os.path.join(self._components_dir, output_filename)
        try:
            os.makedirs(os.path.dirname(output_path), exist_ok=True)
            with open(output_path, "w") as f:
                f.write(rendered_content)
            # Removed logging
        except Exception as e:
            # Removed logging
            return {"error": f"Failed to write component file: {e}"}

        return {
            "success": True,
            "message": f"Dynamic component generated and saved to {output_path}",
            "path": output_path,
        }

    def generate_all_components(self) -> Dict[str, Any]:
        """
        Generates a single dynamic component file (e.g., Button.jsx) for each
        component type defined in the theme, containing logic for all its variants.
        """
        results = []
        errors = []
        if not self._theme or not self._theme.components:
            # Removed logging
            return {"error": "Theme not loaded or no components defined."}

        # Removed logging
        component_ids = list(
            self._theme.components.keys()
        )  # Get the IDs (e.g., 'button', 'accordion')
        print(
            f"Attempting to generate components for types: {component_ids}"
        )  # Temporary print for debugging

        for component_type_id in component_ids:
            print(
                f"Generating component for: {component_type_id}"
            )  # Temporary print
            # Call the *new* render_component, which handles all variants internally
            # It only needs the component type ID now.
            result = self.render_component(
                component_type_id
            )  # <<< THE KEY CHANGE IS HERE

            if result.get("error"):
                errors.append(
                    {"component": component_type_id, "error": result["error"]}
                )
                print(
                    f"Error generating component for '{component_type_id}': {result['error']}"
                )  # Temp print
                # Removed logging
            elif result.get("success"):
                # Check if a path was actually generated (it might be None if no variants)
                if result.get("path"):
                    results.append(
                        {
                            "component": component_type_id,
                            "path": result["path"],
                        }
                    )
                    print(
                        f"Success generating component file for '{component_type_id}' at {result['path']}"
                    )  # Temp print
                    # Removed logging
                else:
                    print(
                        f"Skipped generating file for '{component_type_id}' (Reason: {result.get('message', 'No variants/styles')})"
                    )  # Temp print
                    # Removed logging for skipped generation

        success = len(errors) == 0
        message = f"Generated {len(results)} dynamic component files."
        if errors:
            message += f" Encountered {len(errors)} errors."
        # Removed logging
        print(
            f"Component generation finished. Success: {success}. Message: {message}"
        )  # Temp print

        return {
            "success": success,
            "results": results,
            "errors": errors,
            "message": message,
        }

    def generate_style_guide(self) -> Dict[str, Any]:
        """Generate a comprehensive style guide using StyleGuideGenerator"""
        try:
            from style_guide_generator import StyleGuideGenerator
        except ImportError:
            return {"error": "StyleGuideGenerator class not found."}

        if not self._theme:
            return {"error": "Theme not loaded, cannot generate style guide."}

        generator = StyleGuideGenerator(
            theme=self._theme,
            boilerplate_dir=self._boilerplate_dir,
            output_dir=self._output_dir,
        )
        return (
            generator.generate()
        )  # Let the generator handle its own errors/success messages

    def update_preview(self) -> Dict[str, Any]:
        """Update the Astro preview with the latest generated components"""
        try:
            # First generate the StyleGuide
            style_guide_result = self.generate_style_guide()
            if "error" in style_guide_result:
                return style_guide_result

            # Then copy all files to the preview directory
            preview_output_dir = os.path.join(
                self._base_dir, "preview", "src", "output"
            )

            # Ensure the preview output directory exists
            os.makedirs(preview_output_dir, exist_ok=True)
            os.makedirs(
                os.path.join(preview_output_dir, "components"), exist_ok=True
            )

            # Copy the StyleGuide.jsx file
            styleguide_src = os.path.join(self._output_dir, "StyleGuide.jsx")
            styleguide_dst = os.path.join(preview_output_dir, "StyleGuide.jsx")
            if os.path.exists(styleguide_src):
                with open(styleguide_src, "r") as src_file:
                    with open(styleguide_dst, "w") as dst_file:
                        dst_file.write(src_file.read())

            # Copy all component files
            components_src_dir = os.path.join(self._output_dir, "components")
            components_dst_dir = os.path.join(preview_output_dir, "components")

            copied_files = []
            for filename in os.listdir(components_src_dir):
                if filename.endswith(".jsx"):
                    src_path = os.path.join(components_src_dir, filename)
                    dst_path = os.path.join(components_dst_dir, filename)

                    with open(src_path, "r") as src_file:
                        with open(dst_path, "w") as dst_file:
                            dst_file.write(src_file.read())

                    copied_files.append(filename)

            # Copy the style summary if it exists
            summary_src = os.path.join(self._output_dir, "style_summary.md")
            summary_dst = os.path.join(preview_output_dir, "style_summary.md")
            if os.path.exists(summary_src):
                with open(summary_src, "r") as src_file:
                    with open(summary_dst, "w") as dst_file:
                        dst_file.write(src_file.read())
                copied_files.append("style_summary.md")

            return {
                "success": True,
                "message": f"Preview updated successfully with StyleGuide.jsx and {len(copied_files)} component files",
                "files": copied_files,
            }
        except Exception as e:
            return {"error": f"Error updating preview: {str(e)}"}

    _preview_server_process = None

    def start_preview_server(self) -> Dict[str, Any]:
        """Start the Astro preview server"""
        try:
            import subprocess
            import os

            # Check if directory exists
            if not os.path.exists(self._preview_dir):
                return {
                    "error": f"Preview directory not found: {self._preview_dir}"
                }

            # Check if package.json exists
            package_json_path = os.path.join(self._preview_dir, "package.json")
            if not os.path.exists(package_json_path):
                return {
                    "error": f"package.json not found in preview directory: {self._preview_dir}"
                }

            # Create a shell script to run the server
            script_path = os.path.join(self._data_dir, "start_astro.sh")
            with open(script_path, "w") as f:
                f.write(
                    f"""#!/bin/bash
    cd {self._preview_dir}
    nohup npm run dev -- --host 0.0.0.0 --port 3000 > {self._data_dir}/astro_stdout.log 2> {self._data_dir}/astro_stderr.log &
    echo $! > {self._data_dir}/astro_pid.txt
    echo "Astro server started with PID $(cat {self._data_dir}/astro_pid.txt)"
    """
                )

            # Make the script executable
            os.chmod(script_path, 0o755)

            # Run the script
            result = subprocess.run(
                [script_path], shell=True, capture_output=True, text=True
            )

            if result.returncode != 0:
                return {
                    "error": f"Failed to start preview server: {result.stderr}"
                }

            return {
                "success": True,
                "message": "Astro preview server started. You can access it at http://localhost:3000. Output is being logged to astro_stdout.log and astro_stderr.log in the data directory.",
            }
        except Exception as e:
            return {"error": f"Error starting preview server: {str(e)}"}

    def stop_preview_server(self) -> Dict[str, Any]:
        """Stop the Astro preview server"""
        try:
            import os
            import subprocess

            # Check if we have a PID file
            pid_file = os.path.join(self._data_dir, "astro_pid.txt")
            if not os.path.exists(pid_file):
                return {
                    "success": True,
                    "message": "No Astro preview server is running",
                }

            # Create a shell script to stop the server
            script_path = os.path.join(self._data_dir, "stop_astro.sh")
            with open(script_path, "w") as f:
                f.write(
                    f"""#!/bin/bash
    if [ -f {pid_file} ]; then
        PID=$(cat {pid_file})
        if kill -0 $PID 2>/dev/null; then
            kill $PID
            echo "Stopped Astro server with PID $PID"
        else
            echo "Astro server with PID $PID is not running"
        fi
        rm {pid_file}
    else
        echo "No Astro server PID file found"
    fi
    """
                )

            # Make the script executable
            os.chmod(script_path, 0o755)

            # Run the script
            result = subprocess.run(
                [script_path], shell=True, capture_output=True, text=True
            )

            return {
                "success": True,
                "message": f"Astro preview server stopped: {result.stdout.strip()}",
            }
        except Exception as e:
            return {"error": f"Error stopping preview server: {str(e)}"}
