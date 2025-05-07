#!/bin/bash

# Define the target directory relative to the script's location
# Assumes the script is run from the root directory containing 'boilerplate'
TARGET_DIR="./boilerplate"

# Check if the target directory exists
if [ ! -d "$TARGET_DIR" ]; then
  echo "Error: Directory '$TARGET_DIR' not found."
  echo "Please run this script from the root directory of your project."
  exit 1
fi

echo "Changing directory to '$TARGET_DIR'..."
cd "$TARGET_DIR" || exit 1 # Change directory or exit if it fails

echo "Looking for *_template.jsx files to rename..."

# Loop through only files matching the pattern directly in this directory
# Using nullglob ensures the loop doesn't run if no files match
shopt -s nullglob
for f in *_template.jsx; do
  # Check if it's a regular file (though the glob should mostly handle this)
  if [ -f "$f" ]; then
    # Generate the lowercase name using tr
    new_name=$(echo "$f" | tr '[:upper:]' '[:lower:]')

    # Check if the name is actually different (to avoid renaming if already lowercase)
    if [ "$f" != "$new_name" ]; then
      # Check if the target name already exists (optional safety check)
      if [ -e "$new_name" ]; then
        echo "Warning: Target file '$new_name' already exists. Skipping rename for '$f'."
      else
        echo "Renaming '$f' to '$new_name'"
        # Perform the rename
        mv "$f" "$new_name"
      fi
    # else
      # Optional: echo "Skipping '$f' (already lowercase or no change)"
    fi
  fi
done

# Optional: Turn nullglob off if needed later in a larger script
# shopt -u nullglob

echo "Finished processing templates in '$TARGET_DIR'."
# Go back to the original directory
cd ..
echo "Changed back to the parent directory."

exit 0