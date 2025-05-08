import os

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
}


class StyleGuideGenerator:
    def __init__(self, theme, boilerplate_dir, output_dir):
        self.theme = theme
        self.boilerplate_dir = boilerplate_dir
        self.output_dir = output_dir
        self.sections_dir = os.path.join(boilerplate_dir, "sections")
        self.variants_dir = os.path.join(boilerplate_dir, "variants")
        self.components_to_import = []
        self.components_to_include_in_sections = []
        self._discover_components()

    def _to_pascal_case(self, name: str) -> str:
        """Converts a name (potentially kebab-case or just lowercase) to PascalCase."""
        if not name:
            return ""
        return "".join(word.capitalize() for word in name.split("-"))

    def _make_js_safe_identifier(self, name: str) -> str:
        """Converts a name to PascalCase and makes it JS keyword-safe."""
        pascal_name = self._to_pascal_case(name)

        return pascal_name + "Component"

    def _discover_components(self):
        """
        Scans the boilerplate directory to find component templates
        (files matching *_template.jsx), creates JS-safe PascalCase names for imports,
        and original base names for theme lookups.
        Excludes 'style_guide_template.jsx'.
        """
        template_suffix = "_template.jsx"
        exclude_file = "style_guide_template.jsx"

        # Initialize lists at the start of discovery
        self.components_to_import = (
            []
        )  # Will store JS-safe PascalCase names (e.g., "Button", "SwitchComponent")
        self.components_for_theme_lookup = (
            []
        )  # Will store original lowercase/kebab-case base names (e.g., "button", "switch", "profile-card")
        self.components_to_include_in_sections = []

        try:
            if not os.path.exists(self.boilerplate_dir):
                print(
                    f"Warning: Boilerplate directory not found: {self.boilerplate_dir}"
                )
                return  # Exit early if boilerplate dir doesn't exist

            for filename in os.listdir(self.boilerplate_dir):
                full_path = os.path.join(self.boilerplate_dir, filename)

                if (
                    os.path.isfile(full_path)
                    and filename.endswith(template_suffix)
                    and filename != exclude_file
                ):
                    # base_name_from_template is extracted directly from the filename
                    # e.g., "button" from "button_template.jsx"
                    # e.g., "switch" from "switch_template.jsx"
                    # e.g., "profile-card" from "profile-card_template.jsx"
                    base_name_from_template = filename[: -len(template_suffix)]

                    if base_name_from_template:
                        # 1. For JS imports and component filenames:
                        #    Convert to JS-safe PascalCase.
                        #    "button" -> "Button"
                        #    "switch" -> "SwitchComponent"
                        #    "profile-card" -> "ProfileCard"
                        js_safe_pascal_name = self._make_js_safe_identifier(
                            base_name_from_template
                        )
                        if (
                            js_safe_pascal_name
                            not in self.components_to_import
                        ):
                            self.components_to_import.append(
                                js_safe_pascal_name
                            )

                        # 2. For theme lookups (e.g., self.theme.components[theme_key_name])
                        #    and for section/variant template filenames if they are based on
                        #    the original lowercase/kebab-case names.
                        #    We use the base_name_from_template directly here,
                        #    assuming your theme keys and template naming conventions use it.
                        #    (e.g., theme uses 'switch', section template is style_guide_switch_section.jsx)
                        theme_key_name = base_name_from_template  # This is already "button", "switch", "profile-card"
                        if (
                            theme_key_name
                            not in self.components_for_theme_lookup
                        ):
                            self.components_for_theme_lookup.append(
                                theme_key_name
                            )
                    if (
                        theme_key_name
                        not in self.components_to_include_in_sections
                    ):
                        self.components_to_include_in_sections.append(
                            theme_key_name
                        )  #
                    else:
                        print(
                            f"Warning: Extracted empty base_name from template file: {filename}"
                        )

            # Optional: Sort the lists alphabetically for consistent output order
            self.components_to_import.sort()
            self.components_for_theme_lookup.sort()
            self.components_to_include_in_sections.sort()
            if not self.components_to_import:
                print(
                    "Warning: No component templates found or processed in boilerplate directory."
                )

        except FileNotFoundError:
            print(
                f"Error: Boilerplate directory not found at {self.boilerplate_dir} during discovery."
            )
            self.components_to_import = []
            self.components_for_theme_lookup = []
            self.components_to_include_in_sections = []
        except Exception as e:
            print(
                f"An unexpected error occurred during component discovery: {e}"
            )
            self.components_to_import = []
            self.components_for_theme_lookup = []
            self.components_to_include_in_sections = []

    def generate(self):
        """Generate the complete style guide"""
        # Check if discovery failed and lists are empty
        if (
            not self.components_to_import
            and not self.components_to_include_in_sections
        ):
            # This check depends if _discover_components clears the lists on error
            return {
                "error": "Component discovery failed or no components found."
            }

        try:
            # Load the main template
            template_path = os.path.join(
                self.boilerplate_dir, "style_guide_template.jsx"
            )
            if not os.path.exists(template_path):
                return {"error": f"Main template not found: {template_path}"}
            with open(template_path, "r") as f:
                template = f.read()

            # Generate all sections based on the *dynamically discovered* list
            component_sections = self._generate_all_sections()

            # Generate colors object
            colors_object = self._generate_colors_object()

            # Generate component imports based on the *dynamically discovered* list
            component_imports = self._generate_component_imports()

            # Replace placeholders in the main template
            content = template.replace(
                "{{COMPONENT_IMPORTS}}", component_imports
            )
            content = content.replace(
                "{{COMPONENT_EXAMPLES}}", component_sections
            )
            content = content.replace("{{COLORS_OBJECT}}", colors_object)

            # Write the output file to the specified output_dir
            output_path = os.path.join(self.output_dir, "StyleGuide.jsx")
            os.makedirs(os.path.dirname(output_path), exist_ok=True)

            with open(output_path, "w") as f:
                f.write(content)

            return {
                "success": True,
                "message": f"Generated style guide at {output_path}",
                "path": output_path,
            }
        except Exception as e:
            return {"error": f"Error generating style guide: {str(e)}"}

    def _generate_component_imports(self):
        """Generate import statements for all DISCOVERED components used in the style guide"""
        imports = [
            "import React from 'react';",
            "import { useState, useEffect } from 'react';",  # Keep common hooks
        ]

        # Add import for each component found during discovery
        for (
            component_name
        ) in self.components_to_import:  # Use the discovered list
            # The path is relative to the generated StyleGuide.jsx (in output_dir)
            # Assumes components are in output_dir/components/ComponentName.jsx
            import_path = f"./components/{component_name}"  # Assumes component file uses PascalCase
            imports.append(
                # Using 'default as' is safer if components use `export default`
                # If they use named exports, change to: f"import {{ {component_name} }} from '{import_path}';"
                # Check if your actual component files (Button.jsx etc) use default or named exports
                f"import {{ default as {component_name} }} from '{import_path}';"
            )

        return "\n".join(imports)

    def _generate_all_sections(self):
        """Generate all component sections based on the DISCOVERED list"""
        sections = []

        # Generate each section based on the discovered list (lowercase names)
        for component_type in self.components_to_include_in_sections:
            section = self._generate_section(component_type)
            if section:
                sections.append(section)

        return "\n\n".join(sections)

    def _generate_section(self, component_type):
        """Generate a section for a specific component type"""
        # Check if the component exists in the theme
        if component_type not in self.theme.components:
            return ""

        # Load the section template
        section_path = os.path.join(
            self.sections_dir, f"style_guide_{component_type}_section.jsx"
        )
        if not os.path.exists(section_path):
            return ""

        with open(section_path, "r") as f:
            section_template = f.read()

        # Generate variants for this component
        variants_html = self._generate_variants(component_type)

        # Replace placeholders in the section template
        section_html = section_template.replace(
            f"{{{{ {component_type.upper()}_VARIANTS }}}}", variants_html
        )

        return section_html

    def _generate_variants(self, component_type: str) -> str:
        """Generate HTML for all variants of a component using its specific variant template."""
        # Construct PascalCase name for the variant template filename
        # Assumes component_type is lowercase 'accordion', needs 'Accordion'
        # This logic might need adjustment based on your exact naming convention
        # If component_type can be 'profile-card', this needs more robust conversion
        component_name_pascal = self._to_pascal_case(component_type)

        # Load the variant template ONCE before the loop
        variant_template_path = os.path.join(
            self.variants_dir,
            f"style_guide_{component_name_pascal}_variant.jsx",  # Use PascalCase here based on your example filename
        )
        if not os.path.exists(variant_template_path):
            return f"<!-- Variant template missing for {component_type} at {variant_template_path} -->"

        try:
            with open(variant_template_path, "r") as f:
                variant_template = f.read()
        except Exception as e:
            return f"<!-- Error loading variant template for {component_type}: {e} -->"

        variants_html_list = []  # Use a list for cleaner appends

        # Check if component type exists and has variants
        if (
            component_type not in self.theme.components
            or not self.theme.components[component_type].variants
        ):
            return f"<!-- No variants defined for {component_type} -->"

        # Generate HTML for each variant
        for variant_name, variant_obj in self.theme.components[
            component_type
        ].variants.items():
            # Get variant properties safely
            description = getattr(
                variant_obj,  # Access the actual variant object
                "description",
                f"The {variant_name} variant of {component_type}.",
            )
            if not isinstance(
                description, str
            ):  # Handle non-string descriptions if necessary
                description = str(description)

            # Start with a fresh copy of the template for each variant
            variant_html = variant_template

            # --- Perform replacements ---
            # NOTE: Ensure placeholders match EXACTLY (case, spaces)
            variant_html = variant_html.replace(
                "{{ VARIANT_NAME }}", variant_name
            )
            variant_html = variant_html.replace(
                "{{VARIANT_NAME}}", variant_name
            )  # Handle potential lack of spaces
            variant_html = variant_html.replace(
                "{{ VARIANT_NAME_CAPITALIZED }}", variant_name.capitalize()
            )  # Simple capitalize might need adjustment for multi-word names
            variant_html = variant_html.replace(
                "{{ DESCRIPTION }}", description
            )
            # REMOVED: variant_html = variant_html.replace('variant="variants"', f'variant="{variant_name}"')

            variants_html_list.append(variant_html)

        return "\n".join(variants_html_list)

    def _generate_colors_object(self):
        """Generate the colors object for the style guide"""
        colors_obj = "{\n"

        # Add primary colors
        for name, color in self.theme.global_values.colors.items():
            if isinstance(color, dict):
                # Handle nested color objects like text
                colors_obj += f"    {name}: {{\n"
                for subname, subcolor in color.items():
                    colors_obj += f"      {subname}: '{subcolor}',\n"
                colors_obj += "    },\n"
            else:
                colors_obj += f"    {name}: '{color}',\n"

        # Add derived colors for the style guide
        primary_color = self.theme.global_values.colors.get(
            "primary", "#3b82f6"
        )
        muted_color = self.theme.global_values.colors.get("text", {}).get(
            "muted", "#9ca3af"
        )

        colors_obj += f"    background: '#f9fafb',\n"
        colors_obj += f"    headerBg: '{primary_color}',\n"
        colors_obj += f"    headerText: '#ffffff',\n"
        colors_obj += f"    footerBg: '{primary_color}',\n"
        colors_obj += f"    footerText: '#ffffff',\n"
        colors_obj += f"    cardBg: '#ffffff',\n"
        colors_obj += f"    muted: '{muted_color}',\n"
        colors_obj += f"    sectionHeadingColor: '{primary_color}',\n"

        colors_obj += "  }"
        return colors_obj
