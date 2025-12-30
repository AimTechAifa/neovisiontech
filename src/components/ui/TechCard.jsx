import { GlowingEffect } from "./glowing-effect";

const TechCard = ({ name, color, icon }) => {
  return (
    <div className="relative rounded-2xl p-0.5">
      <div className="absolute inset-0 rounded-2xl">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
      </div>
      <div className="group relative h-full w-full p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/5 hover:border-transparent transition-all duration-300 hover:-translate-y-1 flex flex-col items-center gap-3">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg dark:shadow-black/20 transition-transform group-hover:scale-110 p-3"
          style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}
        >
          {icon}
        </div>
        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 text-center leading-tight">
          {name}
        </span>
      </div>
    </div>
  );
};

export default TechCard;