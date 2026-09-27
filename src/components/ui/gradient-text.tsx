import type { ElementType, ReactNode } from "react";

const gradients: Record<string, string> = {
  primary: "from-blue-600 via-indigo-600 to-purple-600",
  secondary: "from-purple-600 via-pink-500 to-red-500",
  cyber: "from-cyan-400 via-blue-500 to-purple-600",
  sunset: "from-orange-500 via-pink-500 to-purple-600",
  aurora: "from-green-400 via-cyan-500 to-blue-600",
  gold: "from-amber-400 via-yellow-500 to-orange-500",
  neon: "from-pink-500 via-purple-500 to-indigo-500",
};

export default function GradientText({
  children,
  gradient = "primary",
  animated = false,
  className = "",
  as: Component = "span",
}: {
  children: ReactNode;
  gradient?: string;
  animated?: boolean;
  className?: string;
  as?: ElementType;
}) {
  const gradientClass = gradients[gradient] || gradient;
  return (
    <Component
      className={`bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent ${animated ? "animate-gradient-x bg-[length:200%_auto]" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
