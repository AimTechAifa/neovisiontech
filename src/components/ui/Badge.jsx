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
    default: "bg-slate-100 border-slate-200 text-slate-600",
    blue: "bg-blue-50 border-blue-100 text-blue-600",
    green: "bg-emerald-50 border-emerald-100 text-emerald-600",
    amber: "bg-amber-50 border-amber-100 text-amber-600",
    purple: "bg-purple-50 border-purple-100 text-purple-600",
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