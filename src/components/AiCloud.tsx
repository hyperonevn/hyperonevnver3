import React from "react";

export const AiCloud: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "92%", // dưới nút Enter
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 220,
        height: 220,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, #00eaffdd 0%, #0090c077 40%, transparent 70%)",
        filter: "blur(45px)",
        opacity: 0.85,
        animation: "aiPulseStrong 1.8s ease-in-out infinite",
        pointerEvents: "none",
        zIndex: 2, // dưới nút
        mixBlendMode: "screen",
      }}
    />
  );
};
