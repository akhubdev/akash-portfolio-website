
import { ImageResponse } from "next/og";

export const alt = "Akash Das | Data Analyst Portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#F8F7F4",
          padding: "65px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontWeight: 700,
            color: "#292929",
            marginBottom: 35,
          }}
        >
          Akash Das
          <span style={{ color: "#E98272" }}>.</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#292929",
            maxWidth: 1000,
          }}
        >
          <span>Turning Data Into</span>
          <span>Meaningful Business</span>
          <span>Insights.</span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#777777",
            marginTop: 28,
          }}
        >
          Data Analyst Portfolio
        </div>

        <div
          style={{
            display: "flex",
            gap: 14,
            marginTop: 30,
          }}
        >
          {["Excel", "Power BI", "SQL", "Python"].map((skill) => (
            <div
              key={skill}
              style={{
                display: "flex",
                backgroundColor: "#FCEAE6",
                color: "#292929",
                padding: "10px 22px",
                borderRadius: 30,
                fontSize: 21,
                fontWeight: 600,
              }}
            >
              {skill}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 21,
            color: "#777777",
            marginTop: 30,
          }}
        >
          Retail · E-commerce · Supply Chain Analytics
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
