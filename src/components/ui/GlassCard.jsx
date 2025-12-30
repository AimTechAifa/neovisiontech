// src/components/ui/GlassCard.jsx
import React from "react";
import { GlowingEffect } from "./glowing-effect";

/**
 * Premium glassmorphism card component with glowing border effect
 */
const GlassCard = ({
  children,
  variant = "default",
  hover = true,
  glow = false,
  glowingBorder = true,
  glowColor = "blue",
  className = "",
  onClick,
}) => {
  const variants = {
    default: `
      bg-white/70 dark:bg-white/5
      backdrop-blur-xl
      border border-slate-200/50 dark:border-white/10
      shadow-lg shadow-slate-900/5 dark:shadow-black/20
    `,
    dark: `
      bg-slate-900/80 dark:bg-black/60
      backdrop-blur-xl
      border border-slate-700/50 dark:border-white/10
      shadow-xl shadow-black/20
    `,
    light: `
      bg-white/90 dark:bg-white/10
      backdrop-blur-lg
      border border-white/50 dark:border-white/20
      shadow-lg shadow-slate-900/5 dark:shadow-black/10
    `,
    gradient: `
      bg-gradient-to-br from-white/80 to-white/40 dark:from-white/10 dark:to-white/5
      backdrop-blur-xl
      border border-white/50 dark:border-white/10
      shadow-xl shadow-slate-900/10 dark:shadow-black/30
    `,
  };

  const glowColors = {
    blue: "hover:shadow-blue-500/20 dark:hover:shadow-blue-500/30",
    purple: "hover:shadow-purple-500/20 dark:hover:shadow-purple-500/30",
    pink: "hover:shadow-pink-500/20 dark:hover:shadow-pink-500/30",
    cyan: "hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/30",
  };

  const hoverEffects = hover
    ? `
      transition-all duration-300 ease-out
      hover:-translate-y-1 hover:scale-[1.01]
      hover:border-slate-300/80 dark:hover:border-white/20
      hover:shadow-2xl
      ${glow ? glowColors[glowColor] || glowColors.blue : ""}
    `
    : "";

  return (
    <div
      className={`
        relative rounded-[1.25rem] border-[0.75px] border-slate-200 dark:border-white/10 p-2 md:rounded-[1.5rem] md:p-3
        ${hoverEffects}
        ${onClick ? "cursor-pointer" : ""}
      `}
      onClick={onClick}
    >
      {glowingBorder && (
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
      )}
      <div className={`
                relative flex flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] 
                ${variants[variant]}
                p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]
                ${className}
            `}>
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
