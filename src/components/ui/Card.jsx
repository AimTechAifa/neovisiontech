// src/components/ui/Card.jsx
import React from "react";

const Card = ({ children, className = "", hover = true }) => {
  return (
    <div
      className={`
        relative p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10
        ${hover ? "hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/30 hover:-translate-y-1 hover:border-slate-300 dark:hover:border-white/20 cursor-pointer" : ""}
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;