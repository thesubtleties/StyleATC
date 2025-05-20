# theme_config.py
import json
import os
import re
from typing import Dict, Any, Optional, Union, List, Set
import copy


class ThemeReference:
    """A reference to another value in the theme"""

    def __init__(self, path: str):
        self.path = path

    def resolve(self, theme):
        """Resolve this reference to its actual value"""
        parts = self.path.split(".")
        current = theme

        for part in parts:
            if hasattr(current, part):
                current = getattr(current, part)
            elif isinstance(current, dict) and part in current:
                current = current[part]
            else:
                return None

        return current

    def __str__(self):
        return self.path


class ComputedProperty:
    """A property that is computed from other properties"""

    def __init__(self, template: str):
        self.template = template

    def compute(self, obj, theme):
        """Compute the value by replacing placeholders with actual values"""
        result = self.template

        # Find all placeholders in the format {{property_name}}
        placeholders = re.findall(r"{{(.*?)}}", self.template)

        # Replace each placeholder with its resolved value
        for placeholder in placeholders:
            if hasattr(obj, placeholder):
                value = getattr(obj, placeholder)

                # If the value is a ThemeReference, resolve it
                if isinstance(value, ThemeReference):
                    value = value.resolve(theme)

                result = result.replace(f"{{{{{placeholder}}}}}", str(value))

        return result

    def __str__(self):
        return self.template


class ThemeElement:
    """Base class for theme elements with reference resolution"""

    def __init__(self, **kwargs):
        for key, value in kwargs.items():
            if key == "elements" and isinstance(value, dict):
                # Handle nested elements specifically for ComponentVariant
                elements_dict = {}
                for elem_name, elem_data in value.items():
                    if isinstance(elem_data, dict):
                        # !!! Recursively call from_dict or constructor
                        elements_dict[elem_name] = ComponentElement.from_dict(
                            elem_data
                        )
                    else:
                        # Handle potential error or simple assignment if structure allows
                        elements_dict[elem_name] = elem_data  # Or log warning
                setattr(self, key, elements_dict)
            elif key == "computed" and isinstance(value, dict):
                # Handle nested computed properties
                computed_props = {}
                for prop_name, template in value.items():
                    computed_props[prop_name] = ComputedProperty(template)
                setattr(self, key, computed_props)
            elif isinstance(value, str) and value.startswith("global."):
                setattr(self, key, ThemeReference(value))
            # Add handling for other nested types if needed
            else:
                setattr(self, key, value)

    def to_dict(self):
        """Convert to dictionary for serialization"""
        result = {}
        for key, value in self.__dict__.items():
            if isinstance(value, ThemeReference):
                result[key] = value.path
            elif isinstance(value, dict) and key == "computed":
                computed_dict = {}
                for prop_name, prop in value.items():
                    if isinstance(prop, ComputedProperty):
                        computed_dict[prop_name] = prop.template
                result[key] = computed_dict
            elif isinstance(value, ThemeElement):
                result[key] = value.to_dict()
            elif isinstance(value, dict):
                result[key] = {
                    k: v.to_dict() if isinstance(v, ThemeElement) else v
                    for k, v in value.items()
                }
            else:
                result[key] = value
        return result

    @classmethod
    def from_dict(cls, data):
        """Create from dictionary"""
        return cls(**data)


class GlobalValues(ThemeElement):
    def __init__(
        self,
        colors=None,
        spacing=None,
        fontSizes=None,
        animations=None,
        **kwargs,
    ):  # Add animations=None
        self.colors = colors or {
            "primary": "#7c3aed",
            "secondary": "#00f9ff",
            "success": "#16a34a",
            "warning": "#f59e0b",
            "error": "#ef4444",
            "neutral": "#f3f4f6",
            "text": {
                "primary": "#111827",
                "secondary": "#4b5563",
                "muted": "#9ca3af",
            },
            "accent": "#0d9488",
            "gold": "#ca8a04",
            "background": {"light": "#f8fafc", "dark": "#0f172a"},
        }
        self.spacing = spacing or {
            "xs": "0.25rem",
            "sm": "0.5rem",
            "md": "1rem",
            "lg": "1.5rem",
            "xl": "2rem",
        }
        self.fontSizes = fontSizes or {
            "xs": "0.75rem",
            "sm": "0.875rem",
            "md": "1rem",
            "lg": "1.125rem",
            "xl": "1.25rem",
        }
        # New: Initialize animations attribute with your provided list
        self.animations = animations or {
            "enterFromRight": "enterFromRight 250ms ease",
            "enterFromLeft": "enterFromLeft 250ms ease",
            "exitToRight": "exitToRight 250ms ease",
            "exitToLeft": "exitToLeft 250ms ease",
            "scaleIn": "scaleIn 200ms ease",
            "scaleOut": "scaleOut 200ms ease",
            "fadeIn": "fadeIn 200ms ease",
            "fadeOut": "fadeOut 200ms ease",
            "wiggle": "wiggle 1s ease-in-out infinite",
            "slideUpAndFade": "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
            "slideRightAndFade": "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
            "slideDownAndFade": "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
            "slideLeftAndFade": "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
            "overlayShow": "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
            "contentShow": "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
            "contentHide": "contentHide 100ms ease-in",
            "bounce": "bounce 1s infinite",
            "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            "shakeX": "shakeX 1s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite",
            "shakeY": "shakeY 1s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite",
            "flipX": "flipX 1s cubic-bezier(0.455, 0.03, 0.515, 0.955)",
            "flipY": "flipY 1s cubic-bezier(0.455, 0.03, 0.515, 0.955)",
            "spin": "spin 1s linear infinite",
            "swing": "swing 2s ease-in-out infinite",
            "slideInTop": "slideInTop 0.5s ease-out",
            "slideInRight": "slideInRight 0.5s ease-out",
            "slideInBottom": "slideInBottom 0.5s ease-out",
            "slideInLeft": "slideInLeft 0.5s ease-out",
            "scaleUp": "scaleUp 0.5s ease-out",
            "focusPulse": "focusPulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            "bounceIn": "bounceIn 0.75s",
            "bounceInDown": "bounceInDown 1s",
            "bounceInLeft": "bounceInLeft 1s",
            "bounceInRight": "bounceInRight 1s",
            "bounceInUp": "bounceInUp 1s",
            "bounceOut": "bounceOut 0.75s",
            "bounceOutDown": "bounceOutDown 1s",
            "bounceOutLeft": "bounceOutLeft 1s",
            "bounceOutRight": "bounceOutRight 1s",
            "bounceOutUp": "bounceOutUp 1s",
            "fadeInDown": "fadeInDown 1s",
            "fadeInLeft": "fadeInLeft 1s",
            "fadeInRight": "fadeInRight 1s",
            "fadeInUp": "fadeInUp 1s",
            "fadeOutDown": "fadeOutDown 1s",
            "fadeOutLeft": "fadeOutLeft 1s",
            "fadeOutRight": "fadeOutRight 1s",
            "fadeOutUp": "fadeOutUp 1s",
            "lightSpeedInRight": "lightSpeedInRight 1s cubic-bezier(0.36, 0, 0.66, -0.56)",
            "lightSpeedInLeft": "lightSpeedInLeft 1s cubic-bezier(0.36, 0, 0.66, -0.56)",
            "lightSpeedOutRight": "lightSpeedOutRight 0.75s cubic-bezier(0.36, 0, 0.66, -0.56)",
            "lightSpeedOutLeft": "lightSpeedOutLeft 0.75s cubic-bezier(0.36, 0, 0.66, -0.56)",
            "rotateIn": "rotateIn 1s ease-in-out",
            "rotateInDownLeft": "rotateInDownLeft 1s ease-in-out",
            "rotateInDownRight": "rotateInDownRight 1s ease-in-out",
            "rotateInUpLeft": "rotateInUpLeft 1s ease-in-out",
            "rotateInUpRight": "rotateInUpRight 1s ease-in-out",
            "rotateOut": "rotateOut 1s ease-in-out",
            "rotateOutDownLeft": "rotateOutDownLeft 1s ease-in-out",
            "rotateOutDownRight": "rotateOutDownRight 1s ease-in-out",
            "rotateOutUpLeft": "rotateOutUpLeft 1s ease-in-out",
            "rotateOutUpRight": "rotateOutUpRight 1s ease-in-out",
            "zoomIn": "zoomIn 0.5s ease-in-out",
            "zoomInDown": "zoomInDown 1s ease-in-out",
            "zoomInLeft": "zoomInLeft 1s ease-in-out",
            "zoomInRight": "zoomInRight 1s ease-in-out",
            "zoomInUp": "zoomInUp 1s ease-in-out",
            "zoomOut": "zoomOut 0.5s ease-in-out",
            "zoomOutDown": "zoomOutDown 1s ease-in-out",
            "zoomOutLeft": "zoomOutLeft 1s ease-in-out",
            "zoomOutRight": "zoomOutRight 1s ease-in-out",
            "zoomOutUp": "zoomOutUp 1s ease-in-out",
            "rollIn": "rollIn 1s cubic-bezier(0.55, -0.05, 0.67, 1.55)",
            "rollOut": "rollOut 1s cubic-bezier(0.55, -0.05, 0.67, 1.55)",
        }

        super().__init__(**kwargs)


class ComponentVariant(ThemeElement):
    def __init__(
        self,
        tailwind="",
        extends=None,
        color=None,
        text_color=None,
        description="No description provided.",
        **kwargs,
    ):
        self.tailwind = tailwind
        self.extends = extends
        self.color = color
        self.text_color = text_color
        self.description = description
        super().__init__(**kwargs)

    def get_full_tailwind(self, theme):
        """Compute the full tailwind classes with resolved references"""
        # Start with base classes if this extends another component
        base_classes = ""
        if self.extends:
            extends_parts = self.extends.split(".")
            if len(extends_parts) == 2:
                component_type, variant = extends_parts
                if (
                    component_type in theme.components
                    and variant in theme.components[component_type].variants
                ):
                    base_component = theme.components[component_type].variants[
                        variant
                    ]
                    base_classes = base_component.tailwind

        # Add this component's tailwind classes
        result = f"{base_classes} {self.tailwind}".strip()

        # Add color-specific classes if color is specified
        if hasattr(self, "color") and self.color:
            bg_color = self.color
            if isinstance(bg_color, ThemeReference):
                bg_color = bg_color.resolve(theme)

            # Default to white text if text_color is not specified
            text_color = "white"

            # Check if there's a specific text color defined
            if hasattr(self, "text_color") and self.text_color:
                if isinstance(self.text_color, ThemeReference):
                    text_color = self.text_color.resolve(theme)
                else:
                    text_color = self.text_color

            # Add the color classes
            if bg_color and bg_color != "transparent":
                if bg_color.startswith("#"):
                    color_classes = f"bg-[{bg_color}] text-{text_color} focus:ring-[{bg_color}]"
                else:
                    color_classes = f"bg-{bg_color} text-{text_color} focus:ring-{bg_color}"
                result = f"{result} {color_classes}"
            elif bg_color == "transparent":
                # For transparent backgrounds
                if text_color.startswith("#"):
                    result = f"{result} bg-transparent text-[{text_color}]"
                else:
                    result = f"{result} bg-transparent text-{text_color}"

        # Handle text-only styling (for ghost buttons, etc.)
        elif hasattr(self, "text_color") and self.text_color:
            text_color = self.text_color
            if isinstance(text_color, ThemeReference):
                text_color = text_color.resolve(theme)

            # For text-only styling (like ghost buttons)
            if text_color and text_color.startswith("#"):
                text_color_classes = f"text-[{text_color}]"
            else:
                # If it's a direct color name like 'white' or 'gray-700'
                text_color_classes = f"text-{text_color}"

            result = f"{result} {text_color_classes}"

        return result


class ComponentElement(ThemeElement):
    def __init__(
        self, tailwind="", color=None, text_color=None, computed=None, **kwargs
    ):
        self.tailwind = tailwind
        self.color = color
        self.text_color = text_color
        self.computed = computed
        super().__init__(**kwargs)

    def get_full_tailwind(self, theme):
        """Get the full tailwind classes for this element"""
        if (
            hasattr(self, "computed")
            and self.computed
            and "fullTailwind" in self.computed
        ):
            return self.computed["fullTailwind"].compute(self, theme)

        result = self.tailwind

        # Add color if specified
        if hasattr(self, "color") and self.color:
            color_value = self.color
            if isinstance(color_value, ThemeReference):
                color_value = color_value.resolve(theme)

            if color_value and color_value.startswith("#"):
                result = f"{result} bg-[{color_value}]"
            elif color_value:
                result = f"{result} bg-{color_value}"

        # Add text color if specified
        if hasattr(self, "text_color") and self.text_color:
            text_color = self.text_color
            if isinstance(text_color, ThemeReference):
                text_color = text_color.resolve(theme)

            if text_color and text_color.startswith("#"):
                result = f"{result} text-[{text_color}]"
            elif text_color:
                result = f"{result} text-{text_color}"

        return result


class Component(ThemeElement):
    def __init__(self, variants=None, **kwargs):
        self.variants = variants or {}
        super().__init__(**kwargs)


class ThemeConfig(ThemeElement):
    def __init__(self, global_values=None, components=None, **kwargs):
        self.global_values = global_values or GlobalValues()
        self.components = components or {}
        super().__init__(**kwargs)

    @classmethod
    def load(cls, file_path):
        """Load theme configuration from a JSON file"""
        if not os.path.exists(file_path):
            # Create default config
            return cls()

        with open(file_path, "r") as f:
            data = json.load(f)

        # Create global values
        global_values = GlobalValues.from_dict(data.get("global", {}))

        # Create components

        components = {}
        for comp_name, comp_data in data.get("components", {}).items():
            variants = {}
            # Process variants - EXPECT elements INSIDE variant data
            for variant_name, variant_data in comp_data.get(
                "variants", {}
            ).items():  # Iterate variants dict
                # ComponentVariant.from_dict should now handle the nested 'elements'
                variants[variant_name] = ComponentVariant.from_dict(
                    variant_data
                )

            # Assign variants to the Component object
            components[comp_name] = Component(variants=variants)

        return cls(global_values=global_values, components=components)

    def save(self, file_path):
        """Save theme configuration to a JSON file"""
        data = self.to_dict()

        # Ensure directory exists
        os.makedirs(os.path.dirname(file_path), exist_ok=True)

        with open(file_path, "w") as f:
            json.dump(data, f, indent=2)

    def deep_copy(self):
        """Create a deep copy of this theme configuration"""
        return copy.deepcopy(self)
