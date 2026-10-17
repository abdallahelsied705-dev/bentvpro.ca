import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Teal "Canadian aurora" home-screen icon, replacing the inherited US artwork.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(120px 120px at 30% 20%, #0d9488, #04100e)",
        }}
      >
        <div
          style={{
            width: 104,
            height: 88,
            borderRadius: 16,
            border: "7px solid #14b8a6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: "16px solid transparent",
              borderBottom: "16px solid transparent",
              borderLeft: "26px solid #5fe9c3",
              marginLeft: 6,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
