# StyleATC Tailwind Styling System (WSL Direct Execution)

This repository ([https://github.com/thesubtleties/StyleATC.git](https://github.com/thesubtleties/StyleATC.git)) contains the StyleATC Tailwind Styling System, an MCP (Multi-Capability Platform) application designed to manage a centralized design theme for React components using Tailwind CSS.

The system allows you to define core design values (colors, spacing, typography, animations) and component variants through a structured configuration file (`theme_config.json`). It then generates dynamic React component files and a Style Guide page based on this configuration and provided boilerplate templates.

This README provides instructions for setting up and running the system **directly within a WSL (Windows Subsystem for Linux) environment.**

## Features

- **Centralized Theme Configuration**: Define and manage design tokens and component styles in `theme_config.json`.
- **Dynamic Component Generation**: Generate React component files that use the theme data to apply styles via Tailwind CSS classes.
- **Style Guide Generation**: Create a comprehensive Style Guide page showcasing all components and their variants.
- **Preview Application**: A simple Astro application to preview the generated components and style guide.
- **Natural Language MCP Interface**: Interact with the styling system using conversational language. The system understands your requests and selects the appropriate internal tools.
- **Manage Theme Changes**: Tools to update, create, and delete component variants and global values.
- **Save and Revert Changes**: Persist theme modifications or revert to the last saved state.

## Prerequisites

Before you begin, ensure you have the following installed and configured:

- **Windows Subsystem for Linux (WSL)**: Set up and install a Linux distribution (e.g., Ubuntu) in WSL. Follow the official Microsoft documentation: [Install WSL](https://docs.microsoft.com/en-us-us/windows/wsl/install)
- **Git**: For cloning the repository (can be installed in WSL).
- **Python 3.8 or higher**: Including `pip` for package management within your WSL distribution.
- **Node.js and npm**: Required for the Astro preview application within your WSL distribution. Install via your WSL distribution's package manager or nvm.
- **Tailwind CSS Setup**: Your frontend project where you will use the generated components must have Tailwind CSS configured, including the setup for custom animations in `tailwind.config.js` that map to the `animate-*` utility names used in your `theme_config.json`. The `@keyframes` CSS should be in a file included in your Tailwind build process.
- **MCP Desktop Client (e.g., Claude Desktop)**: A desktop application that supports connecting to MCP servers via stdio (the StyleATC server runs via stdio).

## Getting Started (WSL - Direct Execution)

1.  **Clone the Repository:**
    Open your WSL terminal and navigate to an appropriate directory (e.g., `~/projects`).

    ```bash
    git clone https://github.com/thesubtleties/StyleATC.git
    cd StyleATC
    ```

2.  **Navigate to the Project Directory in WSL:**
    From the root of your cloned `StyleATC` repository:

    ```bash
    cd projects/brainstorm/style_guide
    ```

3.  **Set up a Python Virtual Environment (Recommended):**
    This isolates the project's Python dependencies.

    ```bash
    python3 -m venv .venv
    source .venv/bin/activate
    ```

    _(If `python3` doesn't work, try `python` if it points to Python 3.)_

4.  **Install Python Dependencies:**
    Install the necessary Python packages. At a minimum, `fastmcp` is required. If you have a `requirements.txt` file in this directory, use:

    ```bash
    pip install -r requirements.txt
    ```

    Otherwise, install `fastmcp` manually:

    ```bash
    pip install fastmcp
    ```

5.  **Install Node.js Dependencies for the Preview App:**
    Navigate from the `style_guide` directory to the `preview` directory and install its dependencies.

    ```bash
    cd ../../preview  # From projects/brainstorm/style_guide, goes to StyleATC/preview
    npm install
    cd ../brainstorm/style_guide # Navigate back to the StyleATC/projects/brainstorm/style_guide directory
    ```

6.  **Configure your Theme:**
    Edit the `data/theme_config.json` file (within the `StyleATC/projects/brainstorm/style_guide` directory). Define your desired colors, spacing, font sizes, animations, and component variants. A default `theme_config.json` might be created on the first run by the MCP if it doesn't exist.

7.  **Connect via your MCP Desktop Client:**
    You will configure your MCP desktop client (like Claude) to execute the `style_theme.py` script within your WSL environment.

    Open your client's configuration file (e.g., `claude_desktop_config.json`). Add or modify the `mcpServers` section with an entry for `styleGuide`. **You will need to replace `/home/<your_wsl_username>/path/to/` with the actual absolute path to the cloned `StyleATC` directory within your WSL file system.**

    Example `claude_desktop_config.json` entry:

    ```json
    {
      "mcpServers": {
        "styleGuide": {
          "command": "wsl",
          "args": [
            "/home/<your_wsl_username>/path/to/StyleATC/projects/brainstorm/style_guide/.venv/bin/python",
            "/home/<your_wsl_username>/path/to/StyleATC/projects/brainstorm/style_guide/style_theme.py"
          ]
        }
      }
    }
    ```

    - **Explanation for Client Configuration:**
      - `"command": "wsl"`: Instructs the desktop client to use WSL to run the command.
      - `"args"`: A list containing the command and its arguments to run within WSL.
        - The first argument is the **absolute path** to the Python interpreter within your virtual environment inside WSL.
        - The second argument is the **absolute path** to your `style_theme.py` script within your WSL file system.
      - **Path Format**: Paths within the `args` should be Linux-style absolute paths as seen from within WSL (e.g., starting with `/home/...` or `/mnt/c/...` if your cloned repo is on a Windows drive accessible via WSL).

    Save the configuration file and restart your MCP desktop client if necessary for the changes to take effect.

## Interacting with the StyleATC System

Once your MCP desktop client is connected to the "styleGuide" server, you can interact with it **using natural language**. You do not need to explicitly call the tool function names. Describe what you want to do, and the system will determine the appropriate action.

For example, instead of typing `list_components()`, you can say:

- "Show me the available components."
- "What components can I work with?"

Instead of `update_variant_property(component_type="button", variant="primary", property_name="tailwind", value="bg-red-500 text-white")`, you might say:

- "Make the primary button background red and its text white."
- "Update the primary button's tailwind classes to be `bg-red-500 text-white`."

The system will interpret your request and invoke the necessary internal tools.

### Key Tools and Functionality (For Reference)

While you'll primarily use natural language, understanding the system's underlying capabilities can be helpful. The StyleATC system can perform tasks related to:

- **Displaying Information:**
  - `welcome()`: Provides an overview of the system.
  - `list_components()`: Lists all available components and their variants.
  - `list_animations()`: Lists the names of all configured global animations.
  - `get_component_details(component_type, variant)`: Shows detailed properties and computed Tailwind for a specific component variant.
  - `get_variant_details(component_type, variant)`: Similar to `get_component_details`, focusing on variant properties.
  - `get_animation_details(animation_name)`: Shows the CSS value for a specific animation name.
  - `view_theme()`: (If re-enabled) Shows the entire theme configuration as JSON.
- **Modifying Theme Styles:**
  - `update_variant_property(component_type, variant, property_name, value, auto_save)`: Updates a specific property of a component variant (e.g., `tailwind`, `description`).
  - `update_variant_element(component_type, variant, element_name, property_name, value, auto_save)`: Updates a property of a specific element within a component variant.
  - `update_global_color(color_name, color_value, auto_save)`: Updates a global color value.
- **Creating and Deleting Styles:**
  - `create_component_variant(component_type, variant, extends, tailwind, color, text_color, description, auto_save)`: Creates a new variant for a component.
  - `delete_component_variant(component_type, variant, auto_save)`: Deletes a specific variant from a component.
- **Code Generation and Preview:**
  - `generate_all_components()`: Generates/updates all React component files based on the theme.
  - `generate_style_guide()`: Generates/updates the `StyleGuide.jsx` page.
  - `update_preview()`: Copies generated files to the preview application.
  - `start_preview_server()`: Starts the Astro development server for the preview app.
  - `stop_preview_server()`: Stops the Astro development server.
- **Theme File Management:**
  - `save_theme()`: Saves all current theme changes to `data/theme_config.json`.
  - `has_unsaved_changes()`: Checks if there are pending modifications to the theme.
  - `revert_theme()`: Discards unsaved changes and reloads the theme from `data/theme_config.json`.

Again, **you typically do not need to use these exact function calls**. Simply tell the system what you want to achieve in plain language.

## Previewing Changes

Within your MCP client session:

1.  Ask the system to generate components and update the preview (e.g., "generate all components and update the preview app").
2.  Start the Astro preview server:

    - "Start the preview server."
      The server will run in the background within your WSL environment. By default, Astro runs on `localhost:3000`. You should be able to access it from your Windows browser at `http://localhost:3000`.

3.  To stop the preview server:
    - "Stop the preview server."

## Troubleshooting

- **MCP Client Cannot Connect**:
  - Double-check your `claude_desktop_config.json` for typos in the `"command"` and `"args"` paths. Paths must be **absolute Linux paths** as seen from within WSL. Ensure you've replaced `<your_wsl_username>` and `path/to/` correctly.
  - Ensure Python and `fastmcp` are correctly installed in your WSL virtual environment. The path to `python` in your venv must be correct.
  - Try running the server script manually in WSL to see errors: from the `StyleATC/projects/brainstorm/style_guide` directory, run `source .venv/bin/activate` then `python style_theme.py`.
- **File Not Found Errors (from the server)**:
  - Ensure the `data/` and `boilerplate/` directories exist within `StyleATC/projects/brainstorm/style_guide`. The MCP server expects these relative to its script location.
- **Permission Denied**: Ensure your user in WSL has write permissions to the `StyleATC/projects/brainstorm/style_guide/data/` and `StyleATC/preview/src/output/` directories.
- **Node.js/npm Issues**: If preview server startup fails (via MCP command), ensure Node.js and npm are correctly installed in WSL and that dependencies in the `StyleATC/preview/` directory have been installed (`cd path/to/StyleATC/preview && npm install`).
- **Tailwind/Animation Issues in Preview**: Verify your project's `tailwind.config.js` properly extends `animation` and `keyframes`, and that your main CSS file (with `@keyframes`) is included in your Tailwind build process.
