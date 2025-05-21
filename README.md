# StyleATC Tailwind Styling System (Dockerized)

This repository contains the StyleATC Tailwind Styling System, an MCP (Multi-Capability Platform) application designed to manage a centralized design theme for React components using Tailwind CSS. This system is intended to be run as a Docker container.

The system allows you to define core design values (colors, spacing, typography, animations) and component variants through a structured configuration file (`theme_config.json`). It then generates dynamic React component files and a Style Guide page based on this configuration and provided boilerplate templates.

This README provides instructions for setting up and running the system using **Docker**.

## Features

*   **Centralized Theme Configuration**: Define and manage design tokens and component styles in `theme_config.json`.
*   **Dynamic Component Generation**: Generate React component files that use the theme data to apply styles via Tailwind CSS classes.
*   **Style Guide Generation**: Create a comprehensive Style Guide page showcasing all components and their variants.
*   **Preview Application**: A simple Astro application to preview the generated components and style guide, also runnable within the Docker environment.
*   **Natural Language MCP Interface**: Interact with the styling system using conversational language. The system understands your requests and selects the appropriate internal tools.
*   **Manage Theme Changes**: Tools to update, create, and delete component variants and global values.
*   **Save and Revert Changes**: Persist theme modifications or revert to the last saved state.

## Prerequisites

Before you begin, ensure you have the following installed and configured:

*   **Docker Desktop** (for Windows/Mac) or **Docker Engine + Docker CLI** (for Linux).
    *   For Windows users: Ensure Docker Desktop is set up to work with WSL 2 if you are using WSL to manage your files.
*   **Git**: For cloning the repository.
*   **An MCP Desktop Client (e.g., Claude Desktop)**: A desktop application that supports connecting to MCP servers via stdio. This client will be configured to execute the Docker container.
*   **Text Editor/IDE**: For editing configuration files if needed (though most changes should be via MCP).

## Getting Started (Docker)

1.  **Clone the Repository:**
    Open your terminal (e.g., WSL, PowerShell, macOS/Linux terminal) and navigate to an appropriate directory.
    ```bash
    git clone https://github.com/thesubtleties/StyleATC.git
    cd your/diretory/here/style_guide
    ```
    *(You will now be in the `style_guide` directory, which we'll treat as the project root for Docker operations).*

2.  **Build the Docker Image:**
    From the `style_guide` directory (which should contain your `Dockerfile` and optionally a `docker-compose.yml`):
    ```bash
    docker build -t mcp/style-guide .
    ```
    Or, if you have a `docker-compose.yml` configured to build the service:
    ```bash
    docker compose build
    # or for older versions:
    # docker-compose build
    ```
    This command will:
    *   Download the base Python image.
    *   Copy your application code from the current directory ( `.` ) into the image.
    *   Install Python dependencies (like `fastmcp`) *inside the Docker image* as per your `Dockerfile`.
    *   Install Node.js dependencies for the `preview` app *inside the Docker image* if your Dockerfile handles this.

3.  **Prepare Local Directories for Volume Mounting (If Necessary):**
    The Docker setup will mount local directories from your `style_guide` folder into the container so that your theme data, generated output, and preview source are persistent. Critically, the `data` and `preview` directories must exist within your *cloned `style_guide` directory on your host machine*.
    *   `style_guide/data`
    *   `style_guide/preview`

    The `data` directory will store `theme_config.json` and the `output` of generated components/style guide.
    The `preview` directory contains the source for the Astro preview app.

4.  **Configure your MCP Desktop Client:**
    Open your client's configuration file (e.g., `claude_desktop_config.json`). Add or modify the `mcpServers` section to run the Docker container. **Replace `/your/host/path/to/StyleATC/projects/brainstorm/style_guide/` with the actual absolute path to your cloned `style_guide` directory on your host machine.**

    *   **Pathing Note**: The `src` path for `--mount` needs to be the absolute path on your host system that Docker can access.
        *   Windows (Docker Desktop with WSL backend): Often `/mnt/c/Users/YourUser/.../StyleATC/projects/brainstorm/style_guide` or a similar WSL path if files are in the Linux filesystem.
        *   macOS/Linux: A standard absolute path like `/Users/youruser/.../StyleATC/projects/brainstorm/style_guide`.

    Example `claude_desktop_config.json` entry:
    ```json
    {
      "mcpServers": {
        "styleGuide": {
          "command": "docker", 
          "args": [
            "run",
            "-i", // Interactive, keep STDIN open
            "--rm", // Automatically remove the container when it exits
            "--mount",
            "type=bind,src=/your/host/path/to/StyleATC/projects/style_guide/data,dst=/data,readonly=false",
            "--mount",
            "type=bind,src=/your/host/path/to/StyleATC/projects/style_guide/preview,dst=/app/preview,readonly=false",
            "-p",
            "3000:3000", // Map port 3000 on host to 3000 in container for preview server
            "mcp/style-guide" // The Docker image tag used during `docker build`
          ]
        }
      }
    }

    // WSL

       {
     "mcpServers": {
       "styleGuide": {
         "command": "wsl",
         "args": [
           "docker",
           "run",
           "-i",
           "--rm",
           "--mount",
           "type=bind,src=/home/user/your/directory/style_guide/data,dst=/data,readonly=false",
           "--mount",
           "type=bind,src=/home/user/your/directory/style_guide/preview,dst=/app/preview,readonly=false",
           "-p",
           "3000:3000",
           "mcp/style-guide"
         ]
       }
     }
   }

    ```
    *   **Explanation of `args`:**
        *   `run -i --rm`: Runs a new container interactively and removes it on exit.
        *   `--mount type=bind,src=...,dst=...,readonly=false`: Mounts your local `data` and `preview` directories (from within your `style_guide` host folder) into the container. `readonly=false` allows the MCP to Drite changes.
        *   `-p 3000:3000`: Exposes port 3000 from the container to port 3000 on your host machine for the preview server.
        *   `mcp/style-guide`: The name/tag of the Docker image you built (e.g., `mcp/style-guide` if you used `docker build -t mcp/style-guide .`).

    Save the configuration file and restart your MCP desktop client if necessary.

## Interacting with the StyleATC System

Once your MCP desktop client is configured, connecting to the "styleGuide" server will start the Docker container. You can then interact with it **using natural language**. You do not need to explicitly call the tool function names. Describe what you want to do, and the system will determine the appropriate action.

For example, instead of typing `list_components()`, you can say:
*   "Show me the available components."

### Key Tools and Functionality (For Reference)

While you'll primarily use natural language, understanding the system's underlying capabilities can be helpful:

*   **Displaying Information:**
    *   `welcome()`: Provides an overview of the system.
    *   `list_components()`: Lists components and variants.
    *   `list_animations()`: Lists global animation names.
    *   `get_component_details()`, `get_variant_details()`: Show style details.
    *   `get_animation_details()`: Shows CSS for an animation name.
*   **Modifying Styles:**
    *   `update_variant_property()`: Updates variant properties (e.g., `tailwind` classes, including `animate-*`).
    *   `update_variant_element()`: Updates properties of elements within variants.
    *   `update_global_color()`: Updates global colors.
*   **Creating and Deleting Styles:**
    *   `create_component_variant()`: Creates new component variants.
    *   `delete_component_variant()`: Deletes variants.
*   **Code Generation and Preview:**
    *   `generate_all_components()`, `generate_style_guide()`: Generate code.
    *   `update_preview()`: Copies generated files to the preview app.
    *   `start_preview_server()`, `stop_preview_server()`: Manage the preview server.
*   **Theme File Management:**
    *   `save_theme()`, `has_unsaved_changes()`, `revert_theme()`: Manage `theme_config.json`.

Again, **you typically do not need to use these exact function calls**. Simply tell the system what you want to achieve in plain language.

## Previewing Changes (with Docker)

1.  Use the MCP tools to generate components and update the preview (e.g., "generate all components and update the preview app").
2.  Start the Astro preview server from within the MCP session:
    *   "Start the preview server."
    The preview server will run *inside the Docker container* on port 3000. Because of the `-p 3000:3000` mapping, you can access it from your host machine's browser at `http://localhost:3000`.

3.  To stop the preview server:
    *   "Stop the preview server."

## Troubleshooting

*   **Docker Build Failures**: Check your `Dockerfile` (located in the `style_guide` directory) for syntax errors and ensure all necessary base images and build tools are accessible.
*   **Container Fails to Start (via MCP client)**:
    *   Verify the Docker image name (`mcp/style-guide` in the example) in your client config matches the tag you used during `docker build`.
    *   Try running the `docker run` command (from your client's `args`) manually in your terminal to see specific errors from Docker.
*   **Volume Mount Issues**:
    *   Ensure the `src` path in your client's `--mount` option is the correct **absolute path on your host machine** to the `style_guide/data` and `style_guide/preview` directories.
    *   The target paths (`dst`) inside the container (`/data`, `/app/preview`) must match what the application scripts expect.
*   **Preview Server Not Accessible (`http://localhost:3000`)**:
    *   Confirm the `-p 3000:3000` port mapping is in your client's Docker execution arguments.
    *   Check the MCP server logs (if visible in your client) or Docker container logs to ensure the Astro server inside the container started successfully and is listening on `0.0.0.0:3000`.
*   **Changes Not Persisting (e.g., `theme_config.json` resets)**:
    *   The most common cause is an incorrect `src` path for the `/data` volume mount. The application inside Docker is writing to `/data`, but if it's not correctly mapped to your *host's* `style_guide/data` directory, changes will be lost when the container stops.
*   **Tailwind/Animation Issues in Preview**: This usually relates to the Tailwind CSS configuration (`tailwind.config.js`) within your *frontend project* (wherever you plan to use the generated components) or the inclusion of your CSS file with `@keyframes`. This setup is external to the StyleATC MCP server itself but impacts how styles are rendered.

