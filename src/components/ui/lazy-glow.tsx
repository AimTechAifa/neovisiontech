"use client";

import dynamic from "next/dynamic";

const GlowingEffect = dynamic(
  () => import("./glowing-effect").then((mod) => mod.GlowingEffect),
  { ssr: false },
);

export default GlowingEffect;
