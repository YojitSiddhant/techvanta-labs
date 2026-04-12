import { ImageResponse } from "next/og";

export const alt = "TechVanta Labs digital technology solutions";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7fbff",
          color: "#111827",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
          border: "24px solid #152235",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "76px",
              height: "76px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#152235",
              color: "#ffffff",
              fontSize: "30px",
              fontWeight: 800,
            }}
          >
            TV
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "32px", fontWeight: 800 }}>TechVanta Labs</span>
            <span style={{ color: "#3d83df", fontSize: "24px", fontWeight: 700 }}>
              Bhopal, India
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <h1
            style={{
              maxWidth: "920px",
              margin: 0,
              fontSize: "78px",
              lineHeight: 1.02,
              letterSpacing: 0,
            }}
          >
            Custom software, websites, mobile apps, and scalable digital systems.
          </h1>
          <p
            style={{
              maxWidth: "900px",
              margin: 0,
              color: "#344256",
              fontSize: "30px",
              lineHeight: 1.35,
            }}
          >
            ERP, CRM, analytics, cloud, security, branding, and digital marketing built around real
            business workflows.
          </p>
        </div>

        <div style={{ display: "flex", gap: "16px", color: "#ffffff", fontSize: "24px" }}>
          {["Software", "Web", "Mobile", "Cloud", "Growth"].map((item) => (
            <span key={item} style={{ background: "#3d83df", padding: "12px 18px" }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
