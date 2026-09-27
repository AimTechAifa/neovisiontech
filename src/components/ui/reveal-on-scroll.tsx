"use client";

import { Children, type ReactNode, useEffect, useRef, useState } from "react";

function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible] as const;
}

const animations: Record<string, { hidden: string; visible: string }> = {
  "fade-up": { hidden: "opacity-0 translate-y-8", visible: "opacity-100 translate-y-0" },
  "fade-down": { hidden: "opacity-0 -translate-y-8", visible: "opacity-100 translate-y-0" },
  "fade-left": { hidden: "opacity-0 translate-x-8", visible: "opacity-100 translate-x-0" },
  "fade-right": { hidden: "opacity-0 -translate-x-8", visible: "opacity-100 translate-x-0" },
  zoom: { hidden: "opacity-0 scale-95", visible: "opacity-100 scale-100" },
  blur: { hidden: "opacity-0 blur-sm", visible: "opacity-100 blur-0" },
  none: { hidden: "", visible: "" },
};

export default function RevealOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  threshold = 0.1,
  id,
}: {
  children: ReactNode;
  animation?: string;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  id?: string;
}) {
  const [ref, isVisible] = useScrollReveal(threshold);
  const anim = animations[animation] ?? animations["fade-up"];
  return (
    <div
      id={id}
      ref={ref}
      className={`transform transition-all ease-out ${isVisible ? anim.visible : anim.hidden} ${className}`}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function RevealStagger({
  children,
  staggerDelay = 100,
  className = "",
}: {
  children: ReactNode;
  staggerDelay?: number;
  animation?: string;
  className?: string;
}) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => (
        <div
          className={`transform transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: `${index * staggerDelay}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
