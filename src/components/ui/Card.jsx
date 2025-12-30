// src/components/ui/Card.jsx
import React from "react";
import { GlowingEffect } from "./glowing-effect";

const Card = ({ children, className = "", hover = true, glow = true }) => {
  return (
    <div
      className={`
        relative rounded-2xl border border-slate-200 dark:border-white/10 p-2 md:p-3
        ${hover ? "hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/30" : ""}
        transition-all duration-300
      `}
    >
      {glow && (
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
        relative flex flex-col gap-4 overflow-hidden rounded-xl border border-slate-100 dark:border-white/5 
        bg-white dark:bg-slate-900/80 p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]
        ${className}
      `}>
        {children}
      </div>
    </div>
  );
};

export default Card;