import React from "react";

export const HyperMEMockupSection: React.FC = () => {
  return (
    <div
      className="rounded-[32px] overflow-hidden mx-auto"
      style={{
        width: 390,
        background:
          "linear-gradient(160deg, rgba(5,15,25,0.97), rgba(0,5,10,0.94))",
        border: "1.4px solid rgba(90,180,255,0.32)",
        boxShadow:
          "0 0 55px rgba(80,180,255,0.25), inset 0 0 25px rgba(120,220,255,0.12)",
      }}
    >
      {/* COVER */}
      <div
        style={{
          height: 170,
          background:
            "radial-gradient(circle at 25% 30%,rgba(0,200,255,0.25),transparent 40%),linear-gradient(135deg,#00283f,#00121f,#00385b)",
          backgroundSize: "220% 220%",
          animation: "auroraShift 10s ease-in-out infinite alternate",
          position: "relative",
        }}
      >
        {/* AVATAR 1/2 OVERLAY */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: -55,
            transform: "translateX(-50%)",
            width: 115,
            height: 115,
            borderRadius: "50%",
            background: "#0b1a27",
            padding: 5,
            boxShadow: "0 0 38px rgba(100,200,255,0.45)",
          }}
        >
          <img
            src="https://raw.githubusercontent.com/hyperonevn/hyperonevnver3/main/hyperme.jpg"
            alt="avatar"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid rgba(100,200,255,0.85)",
            }}
          />

          {/* VERIFIED */}
          <div
            style={{
              position: "absolute",
              bottom: 4,
              right: 4,
              width: 28,
              height: 28,
              background: "#00b4ff",
              borderRadius: "50%",
              color: "white",
              fontSize: 16,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 12px rgba(0,220,255,0.6)",
            }}
          >
            ✓
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-6 pb-10 pt-16 text-center">

        {/* NAME */}
        <h1
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#e9f6ff",
          }}
        >
          HYPER ME
        </h1>

        {/* VERIFIED TAG */}
        <p
          style={{
            marginTop: 6,
            fontSize: 12,
            display: "inline-block",
            padding: "4px 10px",
            borderRadius: 6,
            background: "rgba(0,180,255,0.12)",
            border: "1px solid rgba(0,180,255,0.3)",
            color: "#8cd6ff",
            letterSpacing: 0.5,
          }}
        >
          VERIFIED IDENTITY
        </p>

        {/* SHORT DESCRIPTION */}
        <p
          style={{
            marginTop: 14,
            color: "#9dccff",
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          Digital Identity Platform for Vietnam
        </p>

        {/* COMPANY */}
        <div
          style={{
            marginTop: 18,
            padding: "14px 20px",
            borderRadius: 14,
            background: "rgba(8,20,35,0.85)",
            border: "1px solid rgba(100,200,255,0.22)",
          }}
        >
          <p
            style={{ fontSize: 12, color: "#a8c8dd", marginBottom: 3 }}
          >
            Powered by
          </p>
          <p
            style={{ fontSize: 15, color: "#8cd6ff", fontWeight: 700 }}
          >
            HYPER ONE CO., LTD.
          </p>
        </div>

        {/* QR */}
        <div className="mt-6">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=135x135&data=https://hyperme.profile.io.vn"
            style={{
              margin: "0 auto",
              padding: 8,
              background: "rgba(255,255,255,0.04)",
              borderRadius: 12,
              border: "1px solid rgba(120,200,255,0.25)",
            }}
          />
        </div>

        {/* CONTACT BUTTONS */}
        <div className="mt-6 space-y-3">

          <div
            className="w-full py-2 rounded-lg text-white text-sm"
            style={{
              background: "rgba(0,180,255,0.08)",
              border: "1px solid rgba(0,180,255,0.25)",
            }}
          >
            🌐 hyperme.profile.io.vn
          </div>

          <div
            className="w-full py-2 rounded-lg text-white text-sm"
            style={{
              background: "rgba(0,180,255,0.08)",
              border: "1px solid rgba(0,180,255,0.25)",
            }}
          >
            ✉️ info@hyperonevn.com
          </div>

          <div
            className="w-full py-2 rounded-lg text-white text-sm"
            style={{
              background: "rgba(0,180,255,0.08)",
              border: "1px solid rgba(0,180,255,0.25)",
            }}
          >
            📞 0352608068
          </div>

          <div
            className="w-full py-2 rounded-lg text-white text-sm"
            style={{
              background: "rgba(0,180,255,0.08)",
              border: "1px solid rgba(0,180,255,0.25)",
            }}
          >
            📍 Ho Chi Minh City — Vietnam
          </div>

        </div>

        {/* FOOTER */}
        <div className="text-center mt-6 text-[11px] text-gray-400 leading-tight">
          <p>
            Powered by{" "}
            <span className="text-[#00d4ff] font-semibold">HYPER ONE</span>
          </p>
          <p>© 2025 HYPER ME — Digital Identity</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
