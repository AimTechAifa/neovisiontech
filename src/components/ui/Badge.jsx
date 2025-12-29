// src/components/ui/Badge.jsx
import React from "react";

const Badge = ({
  children,
  variant = "default",
  dot = false,
  animated = false,
  className = "",
}) => {
  const variants = {
    default: "bg-slate-100 dark:bg-white/10 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300",
    blue: "bg-blue-50 dark:bg-blue-500/10 border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400",
    green: "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400",
    amber: "bg-amber-50 dark:bg-amber-500/10 border-amber-100 dark:border-amber-500/20 text-amber-600 dark:text-amber-400",
    purple: "bg-purple-50 dark:bg-purple-500/10 border-purple-100 dark:border-purple-500/20 text-purple-600 dark:text-purple-400",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${variants[variant]} ${className}`}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          {animated && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
          )}
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
        </span>
      )}
      <span className="text-xs font-bold uppercase tracking-wider">{children}</span>
    </div>
  );
};

export default Badge;