// src/components/ui/AnimatedBackground.jsx
import React from "react";

/**
 * Animated gradient orbs background component
 * Creates a premium floating blob effect
 */
const AnimatedBackground = ({ variant = "default" }) => {
    const variants = {
        default: (
            <>
                {/* Blue-purple orb - top left */}
                <div
                    className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full blur-[100px] md:blur-[150px] opacity-25 dark:opacity-50"
                    style={{
                        background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                        top: "-10%",
                        left: "-5%",
                        animation: "float 20s ease-in-out infinite",
                    }}
                />
                {/* Pink-purple orb - bottom right */}
                <div
                    className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full blur-[80px] md:blur-[120px] opacity-20 dark:opacity-40"
                    style={{
                        background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
                        bottom: "0%",
                        right: "-10%",
                        animation: "float 15s ease-in-out infinite reverse",
                    }}
                />
                {/* Cyan orb - center */}
                <div
                    className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full blur-[60px] md:blur-[100px] opacity-15 dark:opacity-35"
                    style={{
                        background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
                        top: "40%",
                        left: "30%",
                        animation: "float 25s ease-in-out infinite 5s",
                    }}
                />
            </>
        ),
        hero: (
            <>
                <div
                    className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full blur-[120px] md:blur-[180px] opacity-30 dark:opacity-60"
                    style={{
                        background: "linear-gradient(135deg, #3b82f6, #6366f1, #8b5cf6)",
                        top: "-20%",
                        right: "-10%",
                        animation: "float 18s ease-in-out infinite",
                    }}
                />
                <div
                    className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full blur-[80px] md:blur-[120px] opacity-20 dark:opacity-45"
                    style={{
                        background: "linear-gradient(135deg, #ec4899, #f43f5e)",
                        bottom: "10%",
                        left: "5%",
                        animation: "float 22s ease-in-out infinite reverse",
                    }}
                />
            </>
        ),
        subtle: (
            <>
                <div
                    className="absolute w-[500px] h-[500px] rounded-full blur-[150px] opacity-10 dark:opacity-25"
                    style={{
                        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                        top: "20%",
                        right: "10%",
                        animation: "float 30s ease-in-out infinite",
                    }}
                />
            </>
        ),
    };

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a]" />
            {/* Orbs */}
            {variants[variant] || variants.default}
            {/* Noise texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
