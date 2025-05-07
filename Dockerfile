# Dockerfile
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Install Node.js for potential style preview
RUN apt-get update && apt-get install -y \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

# Install MCP
RUN pip install --no-cache-dir "mcp[cli]"

# Copy all your Python files
COPY style_theme.py /app/
COPY theme_config.py /app/
COPY theme_engine.py /app/
COPY theme_tools.py /app/
COPY style_guide_generator.py /app/

# Copy boilerplate templates
COPY boilerplate/ /app/boilerplate/

# Create directory for data that will be mounted
RUN mkdir -p /data
RUN mkdir -p /data/output
RUN mkdir -p /data/output/components

# Set environment variables
ENV PYTHONUNBUFFERED=1
ENV DATA_DIR=/data

# Command to run the MCP server
CMD ["python", "style_theme.py"]