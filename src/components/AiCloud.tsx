import React, { useEffect, useRef } from "react";

export const AiCloud: React.FC = () => {
  const cloudRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cloud = cloudRef.current;
    if (!cloud) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    let t = 0;

    const animate = () => {
      t += 0.015;

      const offsetX = Math.sin(t) * 18;
      const offsetY = Math.cos(t * 1.2) * 12;

      cloud.style.transform = `translate(${x + offsetX}px, ${y + offsetY}px)`;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div
      ref={cloudRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 180,
        height: 180,
        borderRadius: "50%",
        background:
          "radial-gradient(circle at 50% 50%, #00eaffaa, #0088aa55, transparent)",
        filter: "blur(35px)",
        opacity: 0.55,
        mixBlendMode: "screen",
        animation: "cloudPulse 2.8s ease-in-out infinite",
        pointerEvents: "none",
        zIndex: 999999,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};
