# theme_tools.py
import os
import json
from typing import Dict, Any, Optional, List, Union
from theme_engine import ThemeEngine

# Initialize the theme engine
engine = ThemeEngine()


# Resource functions
def resource_view_theme() -> str:
    """
    View the current theme configuration as a JSON string.
    Designed for machine parsing.
    """
    try:
        theme = engine.get_theme()
        if not theme:
            # Return JSON-like error message
            return json.dumps({"error": "Theme not loaded or initialized."})

        # Convert the entire theme object to its dictionary representation
        theme_dict = theme.to_dict()

        # Dump the dictionary to a JSON string
        # Use indent=2 for some basic machine readability if inspected,
        # or None for the most compact representation. Let's use 2 for balance.
        json_output = json.dumps(theme_dict, indent=2)

        return json_output

    except Exception as e:
        # Return JSON error message
        try:
            error_json = json.dumps(
                {"error": f"Failed to serialize theme to JSON: {str(e)}"}
            )
            return error_json
        except Exception:  # Fallback if error itself can't be serialized
            return '{"error": "An unexpected error occurred while trying to report a theme serialization error."}'


def resource_view_components() -> str:
    """View available components and their variants."""
    try:
        components = engine.list_components()

        result = "# Available Components\n\n"

        for component_type, variants in components.items():
            result += f"## {component_type}\n\n"
            result += "Variants:\n"
            for variant in variants:
                result += f"- {variant}\n"
            result += "\n"

        return result
    except Exception as e:
        return f"Error viewing components: {str(e)}"


def resource_get_boilerplate(name: str) -> str:
    """Get a boilerplate template file by name."""
    try:
        base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        boilerplate_dir = os.path.join(base_dir, "boilerplate")

        file_path = os.path.join(boilerplate_dir, f"{name}.txt")
        if not os.path.exists(file_path):
            file_path = os.path.join(
                boilerplate_dir, f"{name}_radix_template.txt"
            )

        with open(file_path, "r") as f:
            return f.read()
    except FileNotFoundError:
        return f"Error: Boilerplate {name} not found"
    except Exception as e:
        return f"Error reading boilerplate: {str(e)}"


# Tool functions
def tool_list_components() -> str:
    """List all available components and their variants"""
    try:
        components = engine.list_components()

        # Format the result as a string
        output = "Available components:\n\n"
        for component_type, variants in components.items():
            output += f"Component: {component_type}\n"
            output += f"Variants: {', '.join(variants)}\n\n"

        return output
    except Exception as e:
        return f"Error listing components: {str(e)}"


def tool_get_component_details(component_type: str, variant: str) -> str:
    """Get detailed information about a component variant"""
    try:
        result = engine.get_component_details(component_type, variant)

        if "error" in result:
            return result["error"]

        # Format the result as a string
        output = f"Component: {result['component']}\n\n"
        output += "Properties:\n"

        for key, value in result["properties"].items():
            output += f"- {key}: {value}\n"

        output += (
            f"\nComputed Tailwind Classes:\n{result['computed_tailwind']}"
        )

        return output
    except Exception as e:
        return f"Error getting component details: {str(e)}"


def tool_get_component_elements(component_type: str) -> str:
    """Get all elements of a component"""
    try:
        result = engine.get_component_elements(component_type)

        if "error" in result:
            return result["error"]

        if "message" in result and not result.get("elements"):
            return result["message"]

        # Format the result as a string
        output = f"Elements for component '{component_type}':\n\n"

        for element_name, properties in result["elements"].items():
            output += f"Element: {element_name}\n"
            output += "Properties:\n"

            for key, value in properties.items():
                output += f"- {key}: {value}\n"

            output += "\n"

        return output
    except Exception as e:
        return f"Error getting component elements: {str(e)}"


def tool_update_variant_property(  # <<< Renamed
    component_type: str,
    variant: str,
    property_name: str,
    value: str,  # MCP seems to pass strings, engine method handles Any
    auto_save: bool = False,
) -> str:
    """Update a property OF A COMPONENT VARIANT"""
    try:
        # Call the correctly named engine method
        result = (
            engine.update_variant_property(  # <<< Correct engine method call
                component_type, variant, property_name, value, auto_save
            )
        )

        if "error" in result:
            return result["error"]

        computed_tailwind_info = result.get("computed_tailwind", {})
        root_tailwind = computed_tailwind_info.get("root", "[Not Available]")
        return f"{result.get('message', 'Update successful.')}\nNew computed root tailwind: {root_tailwind}"

    except Exception as e:
        return f"Error updating variant property: {str(e)}"


def tool_update_variant_element(  # <<< Renamed
    component_type: str,
    variant: str,
    element_name: str,
    property_name: str,
    value: str,  # MCP seems to pass strings, engine method handles Any
    auto_save: bool = False,
) -> str:
    """Update a property OF AN ELEMENT WITHIN A COMPONENT VARIANT"""
    try:
        # Call the correctly named engine method
        result = (
            engine.update_variant_element(  # <<< Correct engine method call
                component_type,
                variant,
                element_name,
                property_name,
                value,
                auto_save,
            )
        )

        if "error" in result:
            return result["error"]

        computed_tailwind_info = result.get("computed_tailwind", {})
        element_tailwind = computed_tailwind_info.get(
            element_name, "[Not Available]"
        )
        return f"{result.get('message', 'Update successful.')}\nNew computed tailwind for element '{element_name}': {element_tailwind}"

    except Exception as e:
        return f"Error updating variant element property: {str(e)}"


def tool_update_global_color(
    color_name: str, color_value: str, auto_save: bool = False
) -> str:
    """Update a global color value"""
    try:
        result = engine.update_global_color(color_name, color_value, auto_save)

        if "error" in result:
            return result["error"]

        return result["message"]
    except Exception as e:
        return f"Error updating global color: {str(e)}"


def tool_create_component_variant(
    component_type: str,
    variant: str,
    extends: str = None,
    tailwind: str = None,
    color: str = None,
    text_color: str = None,
    description: str = "",
    auto_save: bool = False,
) -> str:
    """Create a new component variant or update an existing one"""
    try:
        result = engine.create_component_variant(
            component_type,
            variant,
            extends,
            tailwind,
            color,
            text_color,
            description,
            auto_save,
        )

        if "error" in result:
            return result["error"]

        return result["message"]
    except Exception as e:
        return f"Error creating/updating component variant: {str(e)}"


def tool_create_component_element(
    component_type: str,
    element_name: str,
    tailwind: str = None,
    color: str = None,
    text_color: str = None,
    auto_save: bool = False,
) -> str:
    """Create a new component element"""
    try:
        result = engine.create_component_element(
            component_type,
            element_name,
            tailwind,
            color,
            text_color,
            auto_save,
        )

        if "error" in result:
            return result["error"]

        return result["message"]
    except Exception as e:
        return f"Error creating component element: {str(e)}"


def tool_save_theme() -> str:
    """Save the current theme state to disk"""
    try:
        result = engine.save_theme()
        return result["message"]
    except Exception as e:
        return f"Error saving theme: {str(e)}"


def tool_revert_theme() -> str:
    """Revert to the last saved state"""
    try:
        result = engine.revert_theme()
        return result["message"]
    except Exception as e:
        return f"Error reverting theme: {str(e)}"


def tool_has_unsaved_changes() -> str:
    """Check if there are unsaved changes"""
    try:
        if engine.has_unsaved_changes():
            return "There are unsaved changes to the theme"
        else:
            return "The theme has no unsaved changes"
    except Exception as e:
        return f"Error checking for unsaved changes: {str(e)}"


def tool_generate_component(
    component_type: str,
) -> str:  # Removed variant argument
    """Generate a component file containing all its variants"""
    try:
        # Call the updated engine method which only needs component_type
        result = engine.render_component(component_type)

        if "error" in result:
            return result["error"]

        # Return success message (might include path or just message)
        return result.get("message", "Component generated successfully.")
    except Exception as e:
        return f"Error generating component {component_type}: {str(e)}"


def tool_generate_all_components() -> str:
    """Generate all components from their templates and configurations"""
    try:
        result = engine.generate_all_components()

        output = f"{result['message']}\n\n"

        if result["errors"]:
            output += "Errors:\n"
            for error in result["errors"]:
                output += f"- {error['component']}: {error['error']}\n"
            output += "\n"

        output += "Generated components:\n"
        for item in result["results"]:
            output += f"- {item['component']}: {item['path']}\n"

        return output
    except Exception as e:
        return f"Error generating all components: {str(e)}"


def tool_start_preview_server() -> str:
    """Start the Astro preview server"""
    try:
        result = engine.start_preview_server()

        if "error" in result:
            return result["error"]

        return result["message"]
    except Exception as e:
        return f"Error starting preview server: {str(e)}"


def tool_stop_preview_server() -> str:
    """Stop the Astro preview server"""
    try:
        result = engine.stop_preview_server()

        if "error" in result:
            return result["error"]

        return result["message"]
    except Exception as e:
        return f"Error stopping preview server: {str(e)}"


def tool_update_preview() -> str:
    """Update the Astro preview with the latest generated components"""
    try:
        result = engine.update_preview()

        if "error" in result:
            return result["error"]

        return (
            f"{result['message']}\nFiles copied: {', '.join(result['files'])}"
        )
    except Exception as e:
        return f"Error updating preview: {str(e)}"


def tool_list_templates() -> str:
    """List all available component templates in the boilerplate directory"""
    try:
        # Get the boilerplate directory
        boilerplate_dir = os.path.join(
            os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
            "boilerplate",
        )

        # Get all template files with .jsx extension
        template_files = []
        for filename in os.listdir(boilerplate_dir):
            if filename.endswith(".jsx") or filename.endswith("_template.jsx"):
                template_files.append(filename)

        if not template_files:
            return "No JSX template files found in the boilerplate directory."

        # Group templates by component type
        component_templates = {}
        for filename in template_files:
            # Extract component type from filename
            if "_template.jsx" in filename:
                component_type = filename.split("_template.jsx")[0]
            elif ".jsx" in filename:
                component_type = filename.split(".jsx")[0]
            else:
                continue

            if component_type not in component_templates:
                component_templates[component_type] = []

            component_templates[component_type].append(filename)

        # Format the result
        result = "# Available Component Templates\n\n"

        for component_type, templates in sorted(component_templates.items()):
            result += f"## {component_type.capitalize()}\n\n"
            for filename in templates:
                result += f"- {filename}\n"
            result += "\n"

        return result
    except Exception as e:
        return f"Error listing templates: {str(e)}"


def tool_generate_style_guide() -> str:
    """Generate a new StyleGuide.jsx file from a template using the current theme"""
    try:
        result = engine.generate_style_guide()  # Call the engine method

        if "error" in result:
            return result["error"]

        return result["message"]
    except Exception as e:
        return f"Error generating StyleGuide.jsx: {str(e)}"
