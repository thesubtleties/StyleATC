#!/bin/bash

# Directory paths
BOILERPLATE_DIR="./boilerplate"
SECTIONS_DIR="$BOILERPLATE_DIR/sections"
VARIANTS_DIR="$BOILERPLATE_DIR/variants"

# Create directories if they don't exist
mkdir -p "$SECTIONS_DIR"
mkdir -p "$VARIANTS_DIR"

# Function to create empty files
create_empty_files() {
    component_name=$(echo "$1" | sed -E 's/(_radix)?_template\.jsx$//')
    
    section_file="$SECTIONS_DIR/style_guide_${component_name}_section.jsx"
    variant_file="$VARIANTS_DIR/style_guide_${component_name}_variant.jsx"
    
    # Create section file if it doesn't exist
    if [ ! -f "$section_file" ]; then
        touch "$section_file"
        echo "Created empty section file: $section_file"
    fi
    
    # Create variant file if it doesn't exist
    if [ ! -f "$variant_file" ]; then
        touch "$variant_file"
        echo "Created empty variant file: $variant_file"
    fi
}

# Process specific components from your tree
components=(
    "toast_radix_template.jsx"
    "checkbox_radix_template.jsx"
    "collapsible_radix_template.jsx"
    "contextmenu_radix_template.jsx"
    "dialog_radix_template.jsx"
    "dropdown_radix_template.jsx"
    "form_radix_template.jsx"
    "header_template.jsx"
    "hovercard_radix_template.jsx"
    "label_radix_template.jsx"
    "menubar_radix_template.jsx"
    "modal_radix_template.jsx"
    "navigationmenu_radix_template.jsx"
    "onetimepassword_radix_template.jsx"
    "popover_radix_template.jsx"
    "profile_card_template.jsx"
    "progress_radix_template.jsx"
    "radiogroup_radix_template.jsx"
    "scrollarea_radix_template.jsx"
    "select_radix_template.jsx"
    "separator_radix_template.jsx"
    "slider_radix_template.jsx"
    "switch_radix_template.jsx"
    "tabs_radix_template.jsx"
    "toggle_radix_template.jsx"
    "togglegroup_radix_template.jsx"
    "toolbar_radix_template.jsx"
    "tooltip_radix_template.jsx"
)

# Create files for each component
for component in "${components[@]}"; do
    create_empty_files "$component"
done

echo "Done creating empty template files."