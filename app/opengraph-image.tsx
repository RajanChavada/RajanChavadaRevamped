import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Rajan Chavada: I build tools engineers actually keep using"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "72px 80px",
          backgroundColor: "#F5F1E6",
          backgroundImage:
            "linear-gradient(rgba(27,25,20,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(27,25,20,0.07) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          fontFamily: "Georgia, serif",
          color: "#1B1914",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 3, textTransform: "uppercase", color: "#8A8377", fontFamily: "monospace" }}>
          chavada.vercel.app
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 110, lineHeight: 1 }}>Rajan Chavada</div>
          <div style={{ display: "flex", fontSize: 40, fontFamily: "sans-serif" }}>
            I build tools engineers&nbsp;
            <span style={{ background: "#FFD666", padding: "0 6px" }}>actually keep using.</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 20, fontSize: 22, fontFamily: "monospace", color: "#E8501A" }}>
          <span>NEUROVN</span>
          <span>·</span>
          <span>CACHELANE</span>
          <span>·</span>
          <span>ROSETTA</span>
          <span>·</span>
          <span>BREE (YC)</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
