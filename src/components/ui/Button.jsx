// src/components/ui/Button.jsx
import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  icon,
  iconPosition = "right",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30",
    secondary:
      "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg shadow-slate-900/25 hover:bg-slate-800 dark:hover:bg-slate-100",
    outline:
      "border-2 border-slate-200 dark:border-white/20 text-slate-700 dark:text-white hover:border-slate-300 dark:hover:border-white/40 hover:bg-slate-50 dark:hover:bg-white/10 bg-white dark:bg-transparent",
    ghost: "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10",
    white: "bg-white text-slate-900 shadow-lg hover:bg-slate-100",
  };

  const sizes = {
    sm: "h-9 px-4 text-xs gap-1.5",
    md: "h-11 px-6 text-sm gap-2",
    lg: "h-14 px-8 text-base gap-2.5",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
};

export default Button;