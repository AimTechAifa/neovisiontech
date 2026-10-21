"use client";

import dynamic from "next/dynamic";

const FloatingPaths = dynamic(
  () => import("@/components/ui/background-paths").then((mod) => mod.FloatingPaths),
  { ssr: false },
);

export default function HeroPaths() {
  return (
    <>
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </>
  );
}
