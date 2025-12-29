// src/components/ui/GradientText.jsx
import React from "react";

/**
 * Animated gradient text component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Text content
 * @param {string} props.gradient - Gradient preset or custom gradient
 * @param {boolean} props.animated - Whether to animate the gradient
 * @param {string} props.className - Additional classes
 */
const GradientText = ({
    children,
    gradient = "primary",
    animated = false,
    className = "",
    as: Component = "span",
}) => {
    const gradients = {
        primary: "from-blue-600 via-indigo-600 to-purple-600",
        secondary: "from-purple-600 via-pink-500 to-red-500",
        cyber: "from-cyan-400 via-blue-500 to-purple-600",
        sunset: "from-orange-500 via-pink-500 to-purple-600",
        aurora: "from-green-400 via-cyan-500 to-blue-600",
        gold: "from-amber-400 via-yellow-500 to-orange-500",
        neon: "from-pink-500 via-purple-500 to-indigo-500",
    };

    const gradientClass = gradients[gradient] || gradient;

    return (
        <Component
            className={`bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent ${animated ? "animate-gradient-x bg-[length:200%_auto]" : ""
                } ${className}`}
        >
            {children}
        </Component>
    );
};

export default GradientText;
