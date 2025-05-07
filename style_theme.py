# style_theme.py
import os
from typing import Dict, Any, List, Optional, Union
from mcp.server.fastmcp import FastMCP, Context

# Create our MCP server
style_theme = FastMCP(
    "ComponentStyleTheme",
    instructions="""# Welcome to the StyleATC Component Styling System

This tool helps you create and manage a centralized theme for dynamically styled React components using Tailwind CSS.

## Core Concepts

1.  **Global Styles**: Centralized colors, spacing, and typography values (`view_theme`).
2.  **Components**: Base UI element types (e.g., button, card) defined in `theme.json`. Each component generates a *single* React file (e.g., `Button.jsx`).
3.  **Variants**: Different stylistic versions of the same component type (e.g., default, primary, secondary), defined under the component in `theme.json`. The single React file handles rendering all its variants via a `variant` prop.
4.  **Elements**: Specific sub-parts *within a component variant* that can have their own styles (e.g., the 'item' or 'trigger' within an 'accordion' variant). Defined in the `elements` dictionary *inside* a variant.
5.  **Extends**: A variant can use the `extends` property (e.g., `"extends": "button.default"`) to inherit the base `tailwind` string from another variant. **Note:** Currently, nested `elements` are **not** automatically inherited via `extends`; they are copied only during *creation* if not explicitly provided (see `create_component_variant`).

## Getting Started

1.  View the current theme configuration as JSON:
    ```
    view_theme()
    ```
2.  List available component types and their defined variants:
    ```
    list_components()
    ```
3.  Get detailed computed styles for a specific component variant:
    ```
    get_component_details(component_type="button", variant="primary")
    ```

## Common Tasks

### Updating Styles

1.  **Update a Variant's Property** (e.g., its main `tailwind`, `description`, `extends`):
    ```
    update_variant_property(
        component_type="button",
        variant="primary",
        property_name="tailwind",
        value="new-tailwind-classes..."
    )
    ```
2.  **Update an Element's Property** (within a specific variant):
    ```
    update_variant_element(
        component_type="accordion",
        variant="default",
        element_name="trigger",
        property_name="tailwind",
        value="new-tailwind-for-trigger..."
    )
    ```
3.  **Update a Global Color**:
    ```
    update_global_color(color_name="primary", color_value="#8b5cf6")
    ```

### Creating New Styles

1.  **Create a New Component Variant**:
    ```
    create_component_variant(
        component_type="button",
        variant="warning",
        extends="button.default",
        tailwind="bg-yellow-500 hover:bg-yellow-600",
        text_color="white",
        description="A warning button"
    )
    ```
    *   **Note on Elements:** If `extends` is used (e.g., `extends="button.default"`) and you **do not** provide an `elements` dictionary in the `create_component_variant` call, the system will attempt to **copy** the `elements` structure from the base variant (`button.default` in this case) into the new variant (`warning`). If you provide an `elements` dictionary, your provided one will be used.

### Generating Components & Style Guide

1.  **Generate/Update All Component Files**: (Use this after theme changes)
    ```
    generate_all_components()
    ```
    *   This processes each component type defined in the theme and generates/overwrites its corresponding dynamic React component file (e.g., `output/components/Button.jsx`, `output/components/Card.jsx`) based on the latest theme data and boilerplate templates. Each file includes logic for all its variants.
2.  **Generate/Update Style Guide Page**:
     ```
     generate_style_guide()
     ```
     * This generates/overwrites the `output/StyleGuide.jsx` file, which imports the generated components and displays examples of each variant.
3.  **Update Preview App**: (Copies generated files to the preview app source)
    ```
    update_preview()
    ```

### Preview and Testing

1.  **Start Preview Server**: (Runs Astro dev server)
    ```
    start_preview_server()
    ```
2.  **Stop Preview Server**:
    ```
    stop_preview_server()
    ```
    The preview server usually runs at `http://localhost:3000`.

### Managing Changes

1.  **Save Theme Changes**: (Persists theme modifications to `theme_config.json`)
    ```
    save_theme()
    ```
2.  **Check for Unsaved Changes**:
    ```
    has_unsaved_changes()
    ```
3.  **Revert Theme Changes**: (Reloads from the last saved `theme_config.json`)
    ```
    revert_theme()
    ```

## File Locations

-   **Boilerplate Templates**: `boilerplate/*.jsx` (These NEED to be updated manually for the `getStyle()` system).
-   **Theme Configuration**: `data/theme_config.json`.
-   **Generated Components**: `data/output/components/*.jsx`.
-   **Generated Style Guide**: `data/output/StyleGuide.jsx`.
-   **Preview App Source**: `preview/src/`. Generated files are copied into `preview/src/output/`.

## Best Practices

1.  **Use Global Colors**: Reference `global.colors.*` in variant/element properties where possible.
2.  **Use `default` as Base**: Define common structure/layout in the `default` variant.
3.  **Use `extends`**: Use `extends: "component.default"` in other variants to inherit base `tailwind` (remember elements are copied on creation, not dynamically inherited).
4.  **Generate After Changes**: Run `generate_all_components()` and `generate_style_guide()` after modifying the theme.
5.  **Update Preview**: Run `update_preview()` before checking the preview server.
6.  **Save Your Changes**: Use `save_theme()` regularly.

## Typical Workflow

1.  Modify theme (`update_variant_*`, `update_global_color`, `create_component_variant`).
2.  Generate component files: `generate_all_components()`.
3.  Generate style guide page: `generate_style_guide()`.
4.  Update preview app files: `update_preview()`.
5.  Start/check preview server: `start_preview_server()`.
6.  Review changes visually. Repeat steps 1-5 as needed.
7.  Save theme changes: `save_theme()`.

Let me know if you have any questions!
""",
)

# Define the base directory for file operations
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.environ.get("DATA_DIR", os.path.join(BASE_DIR, "data"))
BOILERPLATE_DIR = os.path.join(BASE_DIR, "boilerplate")
OUTPUT_DIR = os.path.join(DATA_DIR, "output")
COMPONENTS_DIR = os.path.join(OUTPUT_DIR, "components")

# Ensure directories exist
os.makedirs(DATA_DIR, exist_ok=True)
os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(COMPONENTS_DIR, exist_ok=True)


# RESOURCES: Allow reading files from the data directory
@style_theme.resource("file://{path}")
def read_file(path: str) -> str:
    """Read a file from the data directory."""
    # Ensure the path doesn't try to escape the data directory
    safe_path = os.path.normpath(os.path.join(DATA_DIR, path))
    if not safe_path.startswith(DATA_DIR):
        raise ValueError(
            f"Access denied: Cannot access paths outside {DATA_DIR}"
        )

    try:
        with open(safe_path, "r") as f:
            return f.read()
    except FileNotFoundError:
        return f"Error: File {path} not found"
    except Exception as e:
        return f"Error reading file: {str(e)}"


@style_theme.resource("directory://{path}")
def list_directory(path: str = "") -> str:
    """List files in the data directory."""
    # Ensure the path doesn't try to escape the data directory
    safe_path = os.path.normpath(os.path.join(DATA_DIR, path))
    if not safe_path.startswith(DATA_DIR):
        raise ValueError(
            f"Access denied: Cannot access paths outside {DATA_DIR}"
        )

    try:
        if not os.path.isdir(safe_path):
            return f"Error: {path} is not a directory"

        files = os.listdir(safe_path)
        result = []

        for file in files:
            full_path = os.path.join(safe_path, file)
            file_type = "Directory" if os.path.isdir(full_path) else "File"
            size = (
                os.path.getsize(full_path)
                if os.path.isfile(full_path)
                else "-"
            )
            result.append(f"{file} ({file_type}, {size} bytes)")

        return f"Contents of {path or 'root directory'}:\n" + "\n".join(result)
    except Exception as e:
        return f"Error listing directory: {str(e)}"


# TOOLS: Manage components and theme
@style_theme.tool()
def welcome() -> str:
    """Get a user-friendly welcome message explaining how to interact with the styling system."""
    return """
Hello! Welcome to the StyleATC Component Styling System. I'm here to help you manage the look and feel of your React components.

**What can we do?**

Think of me as your assistant for styling tasks. You can ask me to:

*   **Show Current Styles:** See the overall theme configuration or details about specific components and their variants (like "show me the theme" or "what does the primary button look like?").
*   **Modify Styles:** Change global colors, update the appearance of component variants (like "make the default button background gray"), or tweak specific parts (elements) of a component (like "change the accordion trigger's text color").
*   **Create New Styles:** Define new variants for existing components (like "create a 'danger' button variant based on the default").
*   **Generate Code & Previews:** After making changes, ask me to generate the updated React component files, create the visual style guide page, and update the preview application so you can see the results.
*   **Manage Changes:** Save your work to the theme configuration file or revert to the last saved version.

**How to Interact:**

Just tell me what you want to accomplish in plain language! I understand requests like:

*   _"Update the global primary color to #FF6347"_
*   _"Show me the details for the 'card' component's 'default' variant"_
*   _"Create a 'ghost' variant for the button that extends 'button.default' and has a transparent background"_
*   _"Generate all components and update the preview"_
*   _"Save the theme changes"_

I will figure out which internal tools need to be called based on your request.

**Getting Started:**

A good way to begin is to see the current setup. Try asking me:

"**Show me the theme configuration**"

Let me know what you'd like to do!
"""


@style_theme.tool()
def start_preview_server() -> str:
    """Start the Astro preview server to view the components

    This will:
    1. Navigate to the preview directory
    2. Install dependencies if needed
    3. Start the development server

    The server will run in the background. Use stop_preview_server() to stop it.
    """
    # Import here to avoid circular imports
    from theme_tools import tool_start_preview_server

    return tool_start_preview_server()


@style_theme.tool()
def stop_preview_server() -> str:
    """Stop the Astro preview server that was started with start_preview_server()"""
    # Import here to avoid circular imports
    from theme_tools import tool_stop_preview_server

    return tool_stop_preview_server()


@style_theme.tool()
def view_theme() -> str:
    """View the current theme configuration"""
    # Import here to avoid circular imports
    from theme_tools import resource_view_theme

    return resource_view_theme()


@style_theme.tool()
def view_components() -> str:
    """View available components and their variants"""
    # Import here to avoid circular imports
    from theme_tools import resource_view_components

    return resource_view_components()


@style_theme.tool()
def get_boilerplate(name: str) -> str:
    """Get a boilerplate template file by name

    Args:
        name: The name of the boilerplate template
    """
    # Import here to avoid circular imports
    from theme_tools import resource_get_boilerplate

    return resource_get_boilerplate(name)


@style_theme.tool()
def list_components() -> str:
    """List all available components and their variants"""
    # Import here to avoid circular imports
    from theme_tools import tool_list_components

    return tool_list_components()


@style_theme.tool()
def get_component_details(component_type: str, variant: str) -> str:
    """Get detailed information about a component variant

    Args:
        component_type: The type of component (e.g., 'button', 'dropdown')
        variant: The variant of the component (e.g., 'primary', 'secondary')
    """
    # Import here to avoid circular imports
    from theme_tools import tool_get_component_details

    return tool_get_component_details(component_type, variant)


# elements are stored in the variant
# @style_theme.tool()
# def get_component_elements(component_type: str) -> str:
#     """Get all elements of a component

#     Args:
#         component_type: The type of component (e.g., 'dropdown', 'tabs')
#     """
#     from theme_tools import tool_get_component_elements

#     return tool_get_component_elements(component_type)


def get_variant_details(component_type: str, variant: str) -> Dict[str, Any]:
    """Get detailed information about a component variant

    Args:
        component_type: The type of component (e.g., 'button', 'dropdown')
        variant: The variant of the component (e.g., 'primary', 'secondary')
    """
    # Import here to avoid circular imports
    from theme_tools import tool_get_variant_details

    return tool_get_variant_details(component_type, variant)


@style_theme.tool()
def update_variant_property(  # <<< Renamed
    component_type: str,
    variant: str,
    property_name: str,
    value: str,
    auto_save: bool = False,
) -> str:
    """Update a property of a component VARIANT (e.g., tailwind, description)."""
    from theme_tools import (
        tool_update_variant_property,
    )

    return tool_update_variant_property(
        component_type, variant, property_name, value, auto_save
    )


@style_theme.tool()
def update_variant_element(
    component_type: str,
    variant: str,
    element_name: str,
    property_name: str,
    value: str,
    auto_save: bool = False,
) -> str:
    """Update a property of a specific element WITHIN a component VARIANT."""
    from theme_tools import (
        tool_update_variant_element,
    )

    return tool_update_variant_element(  # <<< Call renamed tool function
        component_type, variant, element_name, property_name, value, auto_save
    )


@style_theme.tool()
def update_global_color(
    color_name: str, color_value: str, auto_save: bool = False
) -> str:
    """Update a global color value

    Args:
        color_name: The name of the color (e.g., 'primary', 'secondary', 'text.primary')
        color_value: The new color value (e.g., '#ff41b4')
        auto_save: Whether to automatically save changes to disk (default: False)
    """
    from theme_tools import tool_update_global_color

    return tool_update_global_color(color_name, color_value, auto_save)


@style_theme.tool()
def create_component_variant(
    component_type: str,
    variant: str,
    extends: str = None,
    tailwind: str = None,
    color: str = None,
    text_color: str = None,
    description: str = None,
    auto_save: bool = False,
) -> str:
    """Create a new component variant or update an existing one

    Args:
        component_type: The type of component (e.g., 'button', 'dropdown')
        variant: The name for the variant (e.g., 'outline', 'ghost')
        extends: Optional base component to extend from (e.g., 'button.base')
        tailwind: Optional tailwind classes for the component
        color: Optional color reference (e.g., 'global.colors.primary') or value (e.g., '#ff41b4')
        text_color: Optional text color reference or value
        description: Optional description of the variant (e.g., 'A ghost button with no background')
        auto_save: Whether to automatically save changes to disk (default: False)
    """

    from theme_tools import tool_create_component_variant

    return tool_create_component_variant(
        component_type,
        variant,
        extends,
        tailwind,
        color,
        text_color,
        description,
        auto_save,
    )


# @style_theme.tool()
# def create_component_element(
#     component_type: str,
#     element_name: str,
#     tailwind: str = None,
#     color: str = None,
#     text_color: str = None,
#     auto_save: bool = False,
# ) -> str:
#     """Create a new component element

#     Args:
#         component_type: The type of component (e.g., 'dropdown', 'tabs')
#         element_name: The name for the new element (e.g., 'header', 'footer')
#         tailwind: Optional tailwind classes for the element
#         color: Optional color reference (e.g., 'global.colors.primary') or value (e.g., '#ff41b4')
#         text_color: Optional text color reference or value
#         auto_save: Whether to automatically save changes to disk (default: False)
#     """
#     # Import here to avoid circular imports
#     from theme_tools import tool_create_component_element

#     return tool_create_component_element(
#         component_type, element_name, tailwind, color, text_color, auto_save
#     )


@style_theme.tool()
def save_theme() -> str:
    """Save the current theme state to disk"""
    # Import here to avoid circular imports
    from theme_tools import tool_save_theme

    return tool_save_theme()


@style_theme.tool()
def revert_theme() -> str:
    """Revert to the last saved state"""
    # Import here to avoid circular imports
    from theme_tools import tool_revert_theme

    return tool_revert_theme()


@style_theme.tool()
def has_unsaved_changes() -> str:
    """Check if there are unsaved changes"""
    # Import here to avoid circular imports
    from theme_tools import tool_has_unsaved_changes

    return tool_has_unsaved_changes()


@style_theme.tool()
def generate_component(component_type: str) -> str:  # Removed variant argument
    """Generate a single dynamic component file for a specific type.
       This file will contain logic for all its variants.

    Args:
        component_type: The type of component (e.g., 'button', 'dropdown')
    """
    # Import here to avoid circular imports
    from theme_tools import tool_generate_component

    return tool_generate_component(component_type)  # Pass only component_type


@style_theme.tool()
def generate_all_components() -> str:
    """Generate all components from their templates and configurations"""
    # Import here to avoid circular imports
    from theme_tools import tool_generate_all_components

    return tool_generate_all_components()


@style_theme.tool()
def update_preview() -> str:
    """Update the Astro preview with the latest generated components"""
    # Import here to avoid circular imports
    from theme_tools import tool_update_preview

    return tool_update_preview()


@style_theme.tool()
def generate_style_guide() -> str:
    """Generate a new StyleGuide.jsx file from a template using the current theme"""
    from theme_tools import tool_generate_style_guide

    return tool_generate_style_guide()


if __name__ == "__main__":
    # Run the server with stdio transport
    style_theme.run(transport="stdio")
