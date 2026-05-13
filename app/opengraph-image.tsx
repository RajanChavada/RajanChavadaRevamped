import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Rajan Chavada — ML Software Engineer"
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
          backgroundColor: "#FAFAF7",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            color: "#5C5C5C",
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          chavada.vercel.app
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "#1A1A1A",
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            Rajan Chavada
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#5C5C5C",
              fontFamily: "sans-serif",
            }}
          >
            ML Software Engineer · Agentic AI · Production Systems
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              padding: "10px 20px",
              borderRadius: 999,
              border: "1px solid #E5E2D8",
              backgroundColor: "#FFFFFF",
              fontSize: 22,
              color: "#1A1A1A",
            }}
          >
            Patent-pending agentic RAG · 18,000+ RBC traders
          </div>
          <div
            style={{
              padding: "10px 20px",
              borderRadius: 999,
              border: "1px solid #E5E2D8",
              backgroundColor: "#FFFFFF",
              fontSize: 22,
              color: "#1A1A1A",
            }}
          >
            Rosetta · 2,000+ downloads
          </div>
          <div
            style={{
              padding: "10px 20px",
              borderRadius: 999,
              border: "1px solid #E5E2D8",
              backgroundColor: "#FFFFFF",
              fontSize: 22,
              color: "#1A1A1A",
            }}
          >
            Neurovn · live on PyPI
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
