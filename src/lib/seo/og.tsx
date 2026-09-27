import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export async function renderOg(title: string, subtitle: string) {
  const logo = await readFile(path.join(process.cwd(), "public/images/logo-og.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1e1b4b 55%, #312e81 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={logoSrc} alt="" width={72} height={72} style={{ borderRadius: 16 }} />
          <div style={{ fontSize: 28, fontWeight: 700 }}>NeoVision Tech</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05, letterSpacing: -1 }}>{title}</div>
          <div style={{ fontSize: 28, color: "#c7d2fe", maxWidth: 900 }}>{subtitle}</div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
