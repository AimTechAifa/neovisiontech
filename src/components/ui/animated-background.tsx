export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a]" />
      <div
        className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full blur-[100px] md:blur-[150px] opacity-25 dark:opacity-50"
        style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", top: "-10%", left: "-5%", animation: "float 20s ease-in-out infinite" }}
      />
      <div
        className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full blur-[80px] md:blur-[120px] opacity-20 dark:opacity-40"
        style={{ background: "linear-gradient(135deg, #ec4899, #8b5cf6)", bottom: "0%", right: "-10%", animation: "float 15s ease-in-out infinite reverse" }}
      />
      <div
        className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full blur-[60px] md:blur-[100px] opacity-15 dark:opacity-35"
        style={{ background: "linear-gradient(135deg, #06b6d4, #3b82f6)", top: "40%", left: "30%", animation: "float 25s ease-in-out infinite 5s" }}
      />
    </div>
  );
}
