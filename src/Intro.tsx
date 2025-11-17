import { useEffect, useRef, useState } from "react";
import "./intro.css";
import { AiCloud } from "./components/AiCloud";

type IntroProps = { onFinish: () => void };

const QUOTES = [
  { lang: "🇺🇸", text: "We don’t chase what AI can do — we pursue what AI should do." },
  { lang: "🇯🇵", text: "私たちはAIが「できること」を追いかけない。AIが「すべきこと」を追求する。" },
  { lang: "🇻🇳", text: "Chúng tôi không chạy theo điều AI có thể làm mà kiên định với điều AI nên làm." },
  { lang: "🇨🇳", text: "我们不追逐AI能做什么，而是坚持AI该做什么。" },
  { lang: "🇰🇷", text: "우리는 AI가 할 수 있는 일을 쫓지 않는다. AI가 해야 하는 일을 추구한다。" },
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

export default function Intro({ onFinish }: IntroProps) {
  const particlesRef = useRef<HTMLCanvasElement>(null);
  const meteorsRef = useRef<HTMLCanvasElement>(null);
  const matrixCanvasRef = useRef<HTMLCanvasElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(true);
  const [qIdx, setQIdx] = useState(0);
  const [goIdx, setGoIdx] = useState(0);

  /* ================================
        HYPER MATRIX HACKER EFFECT 
     ================================ */
  useEffect(() => {
    const canvas = matrixCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const katakana = "アカサタナハマヤラワンシツソリモミキヒホ0123456789";
    const characters = katakana.split("");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const fontSize = 18;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#00eaff";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const char = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      requestAnimationFrame(draw);
    };

    draw();

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* ===== QUOTES ===== */
  useEffect(() => {
    const t = setInterval(() => {
      setQIdx((i) => (i + 1) % QUOTES.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  /* ===== GO LABEL ===== */
  useEffect(() => {
    const t = setInterval(() => {
      setGoIdx((i) => (i + 1) % GO_LABELS.length);
    }, 1200);
    return () => clearInterval(t);
  }, []);

  const handleGo = () => {
    const sound = new Audio(
      "https://cdn.pixabay.com/download/audio/2023/03/15/audio_50e1c4c0b0.mp3?filename=ui-confirmation-alert-147389.mp3"
    );
    sound.play();
    setActive(false);
    document.body.style.overflow = "auto";
    setTimeout(onFinish, 1000);
  };

  return (
    <div id="intro" style={{ opacity: active ? 1 : 0 }}>

      {/* AI CLOUD FOLLOWER */}
      <AiCloud />

      {/* MATRIX EFFECT */}
      <canvas id="hyper-matrix" ref={matrixCanvasRef} />

      {/* BACKGROUND EFFECTS */}
      <div id="smoke" />
      <canvas id="particles" ref={particlesRef} />
      <canvas id="meteors" ref={meteorsRef} />
      <div id="flash" ref={flashRef} />

      {/* MAIN CONTENT */}
      <div id="terminal">
        <h1 className="logo">
          <span className="hyper">HYPER</span> <span className="one">ONE</span>
        </h1>

        <div id="sub">Vietnam’s Next-Gen AI Innovation Hub</div>

        <div id="tagline">
          <span className="lang">{QUOTES[qIdx].lang}</span>{" "}
          <span>{QUOTES[qIdx].text}</span>
        </div>

        <button id="goBtn" onClick={handleGo}>
          <span className="go-label">
            <span className="lang">{GO_LABELS[goIdx].lang}</span>{" "}
            {GO_LABELS[goIdx].text}
          </span>
        </button>
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
