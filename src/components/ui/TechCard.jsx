// src/components/ui/TechCard.jsx
import React from "react";

const TechCard = ({ name, color, icon }) => {
  return (
    <div className="group relative p-4 rounded-2xl bg-white border border-slate-200 hover:border-transparent hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center gap-3">
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 p-3"
        style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}
      >
        {icon}
      </div>
      <span className="text-xs font-semibold text-slate-700 text-center leading-tight">
        {name}
      </span>
    </div>
  );
};

export default TechCard;