// src/components/ui/RevealOnScroll.jsx
import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

/**
 * Wrapper component that reveals children with animation on scroll
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to reveal
 * @param {string} props.animation - Animation type: 'fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom', 'blur'
 * @param {number} props.delay - Animation delay in ms
 * @param {number} props.duration - Animation duration in ms
 * @param {string} props.className - Additional classes
 */
const RevealOnScroll = ({
    children,
    animation = "fade-up",
    delay = 0,
    duration = 700,
    className = "",
    threshold = 0.1,
}) => {
    const [ref, isVisible] = useScrollReveal({ threshold });

    const animations = {
        "fade-up": {
            hidden: "opacity-0 translate-y-8",
            visible: "opacity-100 translate-y-0",
        },
        "fade-down": {
            hidden: "opacity-0 -translate-y-8",
            visible: "opacity-100 translate-y-0",
        },
        "fade-left": {
            hidden: "opacity-0 translate-x-8",
            visible: "opacity-100 translate-x-0",
        },
        "fade-right": {
            hidden: "opacity-0 -translate-x-8",
            visible: "opacity-100 translate-x-0",
        },
        zoom: {
            hidden: "opacity-0 scale-95",
            visible: "opacity-100 scale-100",
        },
        blur: {
            hidden: "opacity-0 blur-sm scale-98",
            visible: "opacity-100 blur-0 scale-100",
        },
        none: {
            hidden: "",
            visible: "",
        },
    };

    const anim = animations[animation] || animations["fade-up"];

    return (
        <div
            ref={ref}
            className={`transform transition-all ease-out ${isVisible ? anim.visible : anim.hidden
                } ${className}`}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
};

/**
 * Container for staggered reveal of multiple items
 */
export const RevealStagger = ({
    children,
    staggerDelay = 100,
    animation = "fade-up",
    className = "",
}) => {
    const [ref, isVisible] = useScrollReveal();

    return (
        <div ref={ref} className={className}>
            {React.Children.map(children, (child, index) => (
                <div
                    className={`transform transition-all duration-700 ease-out ${isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                        }`}
                    style={{ transitionDelay: `${index * staggerDelay}ms` }}
                >
                    {child}
                </div>
            ))}
        </div>
    );
};

export default RevealOnScroll;
