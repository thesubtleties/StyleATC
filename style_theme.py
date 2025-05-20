# style_theme.py
import os
from typing import Dict, Any, List, Optional, Union
from mcp.server.fastmcp import FastMCP, Context

# Create our MCP server
style_theme = FastMCP(
    "StyleATC Tailwind Styling System",
    instructions="""# Welcome to the StyleATC Component Styling System

    Probably call the welcome tool first to get an overview of the system and then give the user a quick summary of how to use it.

This tool helps you create and manage a centralized theme for dynamically styled React components using Tailwind CSS.

## Core Concepts

1.  **Global Styles**: Centralized colors, spacing, typography, and **configured Tailwind animation utility names** are managed (`view_theme`, `list_animations`, `get_animation_details`). The actual `@keyframes` definitions should be provided in your project's main CSS files and configured in `tailwind.config.js` to work with the `animate-*` classes.
2.  **Components**: Base UI element types (e.g., button, card) defined in `theme.json`. Each component generates a *single* React file (e.g., `Button.jsx`) that uses theme data to apply styles.
3.  **Variants**: Different stylistic versions of the same component type (e.g., default, primary, secondary). Styles, including animations, are defined under the component in `theme.json`. The generated React file handles rendering all its variants via a `variant` prop.
4.  **Elements**: Specific sub-parts *within a component variant* that can have their own styles. Defined in the `elements` dictionary *inside* a variant.
5.  **Extends**: A variant can use the `extends` property (e.g., `"extends": "button.default"`) to inherit the base `tailwind` string from another variant. Note: nested `elements` are copied only during *creation* if not explicitly provided.

## Getting Started

1.  View the current theme configuration as JSON:
    ```
    view_theme()
    ```
2.  List available component types and their defined variants:
    ```
    list_components()
    ```
3.  List available global animation names:
    ```
    list_animations()
    ```
4.  Get detailed style properties and computed Tailwind classes for a specific component variant:
    ```
    get_component_details(component_type="button", variant="primary")
    ```
5.  Get the CSS value definition for a specific animation name (for reference):
    ```
    get_animation_details(animation_name="fadeIn")
    ```

## Common Tasks

### Managing Styles

1.  **Update a Variant's or Element's Tailwind Classes**: Modify the `tailwind` property of a component variant or a specific element within a variant. Include standard Tailwind classes and **animation classes like `animate-[animationName]`** (e.g., `animate-fadeIn`) referencing names from `list_animations()`.
    ```
    update_variant_property(
        component_type="button",
        variant="primary",
        property_name="tailwind",
        value="bg-blue-500 text-white rounded animate-pulse" # Example including animation class
    )
    ```
    ```
    update_variant_element(
        component_type="accordion",
        variant="default",
        element_name="trigger",
        property_name="tailwind",
        value="px-2 py-1 font-semibold animate-bounce" # Example including animation class
    )
    ```
2.  **Update a Global Color**:
    ```
    update_global_color(color_name="primary", color_value="#8b5cf6")
    ```
3.  **Create a New Component Variant**:
    ```
    create_component_variant(
        component_type="button",
        variant="warning",
        extends="button.default",
        tailwind="bg-yellow-500 hover:bg-yellow-600 animate-shakeX", # Example with animation class
        text_color="white",
        description="A warning button with a shake animation on interaction."
    )
    ```
    *   Note on Elements: If `extends` is used and you do not provide an `elements` dictionary, the system will attempt to copy the `elements` structure from the base variant.
4.  **Delete a Component Variant**:
    ```
    delete_component_variant(component_type="button", variant="secondary")
    ```

### Generating Components & Style Guide

1.  **Generate/Update All Component Files**: (Use this after theme changes) This processes each component type defined in the theme and generates/overwrites its corresponding dynamic React component file based on the latest theme data. Each file includes logic for all its variants.
    ```
    generate_all_components()
    ```
2.  **Generate/Update Style Guide Page**: This generates/overwrites the `output/StyleGuide.jsx` file, which imports the generated components and displays examples of each variant.
     ```
     generate_style_guide()
     ```
3.  **Update Preview App**: Copies generated files to the preview app source directory (`preview/src/output/`).
    ```
    update_preview()
    ```

### Preview and Testing

1.  **Start Preview Server**: Starts the Astro development server for viewing components.
    ```
    start_preview_server()
    ```
2.  **Stop Preview Server**: Stops the Astro development server.
    ```
    stop_preview_server()
    ```
    The preview server usually runs at `http://localhost:3000`.

### Managing Changes

1.  **Save Theme Changes**: Persists theme modifications to `data/theme_config.json`. If you make changes to the theme, you should usually save them unless they seem like they might be breaking.
    ```
    save_theme()
    ```
2.  **Check for Unsaved Changes**:
    ```
    has_unsaved_changes()
    ```
3.  **Revert Theme Changes**: Reloads the theme from the last saved `theme_config.json`.
    ```
    revert_theme()
    ```

## File Locations

-   **Boilerplate Templates**: `boilerplate/*.jsx` (Need manual updates for the `getStyle()` system).
-   **Theme Configuration**: `data/theme_config.json`.
-   **Generated Components**: `data/output/components/*.jsx`.
-   **Generated Style Guide**: `data/output/StyleGuide.jsx`.
-   **Preview App Source**: `preview/src/`. Generated files are copied into `preview/src/output/`.
-   **Global CSS (@keyframes)**: The actual `@keyframes` animation definitions should be in your project's main CSS files (e.g., `src/index.css`), configured in `tailwind.config.js`.

## Best Practices

1.  **Use Global Values**: Reference colors, spacing, font sizes, and animation names (via `animate-*` classes in `tailwind`) defined in the global theme.
2.  **Use `default` as Base**: Define common structure/layout in the `default` variant.
3.  **Use `extends`**: Use `extends: "component.default"` to inherit base `tailwind` classes.
4.  **Generate After Changes**: Run generation tools after modifying the theme.
5.  **Update Preview**: Run `update_preview()` before checking the preview server.
6.  **Save Your Changes**: Use `save_theme()` regularly.

## Typical Workflow

1.  Modify theme (using update, create, or delete tools). Include animation classes like `animate-[animationName]` in `tailwind` properties as needed.
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
# @style_theme.resource("file://{path}")
# def read_file(path: str) -> str:
#     """Read a file from the data directory."""
#     # Ensure the path doesn't try to escape the data directory
#     safe_path = os.path.normpath(os.path.join(DATA_DIR, path))
#     if not safe_path.startswith(DATA_DIR):
#         raise ValueError(
#             f"Access denied: Cannot access paths outside {DATA_DIR}"
#         )

#     try:
#         with open(safe_path, "r") as f:
#             return f.read()
#     except FileNotFoundError:
#         return f"Error: File {path} not found"
#     except Exception as e:
#         return f"Error reading file: {str(e)}"


# @style_theme.resource("directory://{path}")
# def list_directory(path: str = "") -> str:
#     """List files in the data directory."""
#     # Ensure the path doesn't try to escape the data directory
#     safe_path = os.path.normpath(os.path.join(DATA_DIR, path))
#     if not safe_path.startswith(DATA_DIR):
#         raise ValueError(
#             f"Access denied: Cannot access paths outside {DATA_DIR}"
#         )

#     try:
#         if not os.path.isdir(safe_path):
#             return f"Error: {path} is not a directory"

#         files = os.listdir(safe_path)
#         result = []

#         for file in files:
#             full_path = os.path.join(safe_path, file)
#             file_type = "Directory" if os.path.isdir(full_path) else "File"
#             size = (
#                 os.path.getsize(full_path)
#                 if os.path.isfile(full_path)
#                 else "-"
#             )
#             result.append(f"{file} ({file_type}, {size} bytes)")

#         return f"Contents of {path or 'root directory'}:\n" + "\n".join(result)
#     except Exception as e:
#         return f"Error listing directory: {str(e)}"


# TOOLS: Manage components and theme
@style_theme.tool()
def welcome() -> str:
    """Get a user-friendly welcome message explaining how to interact with the styling system."""
    return """

This is the documentation for the StyleATC Component Styling System. This system provides tools for managing a centralized theme for dynamically styled React components using Tailwind CSS.

The core concepts and capabilities available within this system are as follows:

**Core Concepts:**

*   **Global Styles**: Centralized colors, spacing, typography, and **configured Tailwind animation utility names** are managed. The actual `@keyframes` definitions should be provided in your project's main CSS files and configured in `tailwind.config.js` to work with the `animate-*` classes.
*   **Components**: Base UI element types (e.g., button, card) are defined. Each component corresponds to a single generated React file.
*   **Variants**: Different stylistic versions of the same component type (e.g., default, primary, secondary), defined under the component. Styles, including animations, are applied via Tailwind classes within the `tailwind` property. The generated React file handles rendering these variants based on a 'variant' prop.
*   **Elements**: Specific sub-parts *within a component variant* that can have their own styles, defined in the 'elements' dictionary within a variant.
*   **Extends**: Variants can inherit the base 'tailwind' string from other variants using the 'extends' property (e.g., `"extends": "button.default"`). Note that nested 'elements' are copied on creation, not dynamically inherited via 'extends'.

**Available Tools and Functionality:**

The system provides the following functions/tools that can be executed:

*   **Show Styles (`list_components`, `get_component_details`, `get_variant_details`, `list_animations`, `get_animation_details`)**: The system can list available component types and their variants, retrieve detailed computed styles for specific component variants, **list available global animation names, and get the CSS value for a specific animation (for reference).**
*   **Modify Styles (`update_variant_property`, `update_variant_element`, `update_global_color`)**: The system can update properties of component variants and their nested elements, as well as update global color values. **When applying animations, add the corresponding `animate-*` Tailwind utility class (e.g., `animate-fadeIn`, `animate-bounce`) to the `tailwind` property.**
*   **Create Styles (`create_component_variant`)**: New variants can be defined for existing components.
*   **Delete Styles (`delete_component_variant`)**: Specific variants can be removed from a component's configuration.
*   **Generate Code & Previews (`generate_all_components`, `generate_style_guide`, `update_preview`)**: The system can generate updated React component files based on the current theme, create the visual style guide page, and copy generated files to the preview application source directory (`preview/src/output/`).
*   **Manage Changes (`save_theme`, `has_unsaved_changes`, `revert_theme`)**: The current theme state can be saved to `data/theme_config.json`, checked for unsaved changes, or reverted to the last saved state.
*   **Preview Server Management (`start_preview_server`, `stop_preview_server`)**: The Astro preview development server can be started and stopped to view changes.

**Interaction:**

Users will provide requests in natural language. The system should interpret these requests and map them to the appropriate tool function to execute the requested action. Examples of user requests include:

*   "Update the global primary color to #FF6347"
*   "Show me the details for the 'card' component's 'default' variant"
*   **"List all available animations"**
*   **"Get details for the 'bounceIn' animation"**
*   "Create a 'ghost' variant for the button that extends 'button.default' and has a transparent background"
*   "Delete the 'outline' variant from the button"
*   "Generate all components and update the preview"
*   "Save the theme changes"

When a user first interacts with the system, providing an overview of its capabilities (like this document) is helpful. A suggested initial user interaction is to ask to see the theme configuration, **list available components, or list available animations.**
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


# unsure we want to allow returning the whole theme as it is large
# @style_theme.tool()
# def view_theme() -> str:
#     """View the current theme configuration"""
#     # Import here to avoid circular imports
#     from theme_tools import resource_view_theme

#     return resource_view_theme()


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


@style_theme.tool()
def list_animations() -> str:
    """
    List all available global animations configured in the theme.
    """
    from theme_tools import tool_list_animations

    return tool_list_animations()


@style_theme.tool()
def get_animation_details(animation_name: str) -> str:
    """
    Get the CSS value for a specific global animation.

    Args:
        animation_name: The name of the animation.
    """
    from theme_tools import tool_get_animation_details

    return tool_get_animation_details(animation_name)


@style_theme.tool()
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


@style_theme.tool()
def delete_component_variant(
    component_type: str, variant: str, auto_save: bool = False
) -> str:
    """Delete a specific variant from a component.

    Args:
        component_type: The type of component (e.g., 'button', 'dropdown')
        variant: The name of the variant to delete (e.g., 'secondary', 'outline')
        auto_save: Whether to automatically save changes to disk (default: False)
    """
    from theme_tools import tool_delete_component_variant

    return tool_delete_component_variant(component_type, variant, auto_save)


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
