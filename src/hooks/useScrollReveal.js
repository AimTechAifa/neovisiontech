// src/hooks/useScrollReveal.js
import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for scroll-triggered reveal animations
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Margin around root
 * @param {boolean} options.triggerOnce - Only trigger once
 * @returns {[React.RefObject, boolean]} - Ref and visibility state
 */
export const useScrollReveal = (options = {}) => {
    const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [threshold, rootMargin, triggerOnce]);

    return [ref, isVisible];
};

/**
 * Hook for staggered animations on multiple elements
 * @param {number} itemCount - Number of items to animate
 * @param {number} staggerDelay - Delay between each item in ms
 * @returns {[React.RefObject, boolean, Function]} - Container ref, visibility, and delay calculator
 */
export const useStaggeredReveal = (itemCount, staggerDelay = 100) => {
    const [containerRef, isVisible] = useScrollReveal();

    const getDelay = (index) => index * staggerDelay;

    return [containerRef, isVisible, getDelay];
};

export default useScrollReveal;
