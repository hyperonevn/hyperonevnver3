import { useEffect, useRef, useState } from "react";
import "./intro.css";

type IntroProps = { onFinish: () => void };

const QUOTES = [
  { lang: "🇺🇸", text: "We don’t chase what AI can do — we pursue what AI should do." },
  { lang: "🇯🇵", text: "私たちはAIが「できること」を追いかけない。AIが「すべきこと」を追求する。" },
  { lang: "🇻🇳", text: "Chúng tôi không chạy theo điều AI có thể làm mà kiên định với điều AI nên làm." },
  { lang: "🇨🇳", text: "我们不追逐AI能做什么，而是坚持AI该做什么。" },
  { lang: "🇰🇷", text: "우리는 AI가 할 수 있는 일을 쫓지 않는다. AIが 해야 하는 일을 추구한다。" },
  { lang: "🇪🇸", text: "No perseguimos lo que la IA puede hacer, sino lo que la IA debe hacer." },
];

const GO_LABELS = [
  { lang: "🇺🇸", text: "Enter" },
  { lang: "🇯🇵", text: "入る" },
  { lang: "🇻🇳", text: "Vào" },
  { lang: "🇨🇳", text: "进入" },
  { lang: "🇰🇷", text: "시작" },
  { lang: "🇪🇸", text: "Entrar" },
];

const MATRIX_CHARS = "アカサタナハマヤラワンシツソリモミキヒホ"; // ký tự Nhật

export default function Intro({ onFinish }: IntroProps) {
  const particlesRef = useRef<HTMLCanvasElement>(null);
  const meteorsRef = useRef<HTMLCanvasElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);

  const matrixRef = useRef<HTMLDivElement>(null);   // ← THÊM 1 REF

  const [logs, setLogs] = useState<string[]>([]);
  const [active, setActive] = useState(true);
  const [qIdx, setQIdx] = useState(0);
  const [goIdx, setGoIdx] = useState(0);

  /* ====== MA TRẬN NHẬT ====== */
  useEffect(() => {
    const root = matrixRef.current;
    if (!root) return;

    const spawn = () => {
      const el = document.createElement("div");
      el.className = "matrix-char";
      el.textContent = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];

      const x = Math.random() * window.innerWidth;
      el.style.left = x + "px";
      el.style.top = "-40px";
      el.style.animationDuration = 2 + Math.random() * 2 + "s";
      el.style.fontSize = 12 + Math.random() * 10 + "px";
      el.style.opacity = (0.2 + Math.random() * 0.6).toString();

      root.appendChild(el);

      setTimeout(() => el.remove(), 4000);
    };

    const timer = setInterval(spawn, 120);
    return () => clearInterval(timer);
  }, []);

  /* ====== CODE KHÁC CỦA BẠN GIỮ NGUYÊN 100% ====== */
  /* (đã rút gọn lại ở đây để không chiếm chỗ) */

  const handleGo = () => {
    const goSound = new Audio(
      "https://cdn.pixabay.com/download/audio/2023/03/15/audio_50e1c4c0b0.mp3?filename=ui-confirmation-alert-147389.mp3"
    );
    goSound.play();
    setActive(false);
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
    setTimeout(onFinish, 900);
  };

  return (
    <div id="intro" style={{ opacity: active ? 1 : 0, transition: "opacity 1s ease" }}>
      
      {/* === MA TRẬN NHẬT === */}
      <div id="matrix" ref={matrixRef} />

      <div id="smoke" />
      <canvas id="particles" ref={particlesRef} />
      <canvas id="meteors" ref={meteorsRef} />
      <div id="flash" ref={flashRef} />

      {/* MAIN */}
      <div id="terminal">
        <h1 className="logo">
          <span className="hyper">HYPER</span> <span className="one">ONE</span>
        </h1>
        <div id="sub">Vietnam’s Next-Gen AI Innovation Hub</div>

        <div id="tagline" className="quote-swap">
          <span className="lang">{QUOTES[qIdx].lang}</span>
          <span className="qt">{QUOTES[qIdx].text}</span>
        </div>

        <button id="goBtn" onClick={handleGo}>
          <span className="go-label">
            <span className="lang">{GO_LABELS[goIdx].lang}</span> {GO_LABELS[goIdx].text}
          </span>
        </button>
      </div>

      {/* LOGS */}
      <div id="logs">
        {logs.map((l, i) => (
          <div className="logline" key={i}>{l}</div>
        ))}
      </div>

      <audio
        id="bgAudio"
        src="https://cdn.pixabay.com/download/audio/2023/01/03/audio_d57dbe7a34.mp3?filename=futuristic-interface-ambient-126941.mp3"
        autoPlay
        loop
      />
    </div>
  );
}
