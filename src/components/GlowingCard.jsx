import React from "react";
import { GlowingEffect } from "./ui/glowing-effect";
import { cn } from "../lib/utils";

export default function GlowingCard({
    title,
    description,
    icon,
    className,
    children,
    spread = 40,
    proximity = 60,
    borderWidth = 2,
    variant = "default",
    glow = true,
}) {
    return (
        <div className={cn(
            "group relative rounded-2xl border border-slate-200 dark:border-white/10 p-1 transition-all duration-300",
            className
        )}>
            <GlowingEffect
                glow={glow}
                disabled={false}
                spread={spread}
                proximity={proximity}
                inactiveZone={0.05}
                borderWidth={borderWidth}
                variant={variant}
            />

            <div className="relative rounded-xl bg-white dark:bg-slate-900/80 backdrop-blur-sm p-6 h-full">
                {icon && (
                    <div className="mb-4 w-fit rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-2.5 text-blue-600 dark:text-blue-400">
                        {icon}
                    </div>
                )}

                {title && (
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        {title}
                    </h3>
                )}

                {description && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {description}
                    </p>
                )}

                {children}
            </div>
        </div>
    );
}
