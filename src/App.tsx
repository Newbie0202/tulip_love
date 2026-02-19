import React, { useEffect, useRef, useState } from "react";

/**
 * ✅ THAY NHẠC Ở ĐÂY
 * - Cách 1: Để file mp3 vào public/music.mp3 => MUSIC_URL = "/music.mp3"
 * - Cách 2: Dán link mp3 khác
 */
const MUSIC_URL = "/music.mp3";

function HeartRain({ count = 55 }: { count?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const hearts: HTMLDivElement[] = [];
    for (let i = 0; i < count; i++) {
      const d = document.createElement("div");
      d.className = "heart";
      d.textContent = "❤";

      const size = 10 + Math.random() * 26;
      d.style.left = `${Math.random() * 100}%`;
      d.style.fontSize = `${size}px`;
      d.style.opacity = `${0.14 + Math.random() * 0.35}`;
      d.style.animationDelay = `${Math.random() * 2.2}s`;
      d.style.animationDuration = `${3.8 + Math.random() * 3.2}s`;
      d.style.filter = `blur(${Math.random() * 0.8}px)`;

      el.appendChild(d);
      hearts.push(d);
    }

    return () => hearts.forEach((h) => h.remove());
  }, [count]);

  return <div ref={ref} className="heartsLayer" aria-hidden="true" />;
}

function TulipSVG() {
  return (
    <div className="flowerWrap" aria-hidden="true">
      <svg
        className="flower"
        viewBox="0 0 640 860"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="glow" cx="50%" cy="35%" r="58%">
            <stop offset="0%" stopColor="#FFD36A" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#FF77B7" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="petalGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFF9D8" />
            <stop offset="40%" stopColor="#FFE479" />
            <stop offset="100%" stopColor="#F4A600" />
          </linearGradient>

          <linearGradient id="stemGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#39E6A3" />
            <stop offset="55%" stopColor="#18B671" />
            <stop offset="100%" stopColor="#0A7B4B" />
          </linearGradient>

          <linearGradient id="stemHi" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          <filter id="softShadow" x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="12" result="blur" />
            <feOffset dy="12" result="off" />
            <feColorMatrix
              in="off"
              type="matrix"
              values="
                0 0 0 0 0
                0 0 0 0 0
                0 0 0 0 0
                0 0 0 0.35 0"
              result="shadow"
            />
            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="petalGlow" x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur stdDeviation="9" result="b" />
            <feColorMatrix
              in="b"
              type="matrix"
              values="
                1 0 0 0 0
                0 0.9 0 0 0
                0 0 0.2 0 0
                0 0 0 0.55 0"
              result="c"
            />
            <feMerge>
              <feMergeNode in="c" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx="320" cy="300" r="310" fill="url(#glow)" />

        <ellipse
          cx="320"
          cy="805"
          rx="210"
          ry="34"
          fill="#000"
          opacity="0.32"
          filter="url(#softShadow)"
        />

        <g filter="url(#softShadow)">
          <path
            d="
              M 320 810
              C 312 720, 312 635, 318 545
              C 324 455, 330 380, 324 300
              C 320 250, 318 225, 320 190
              C 322 225, 320 250, 316 300
              C 310 380, 316 455, 322 545
              C 328 635, 328 720, 320 810
              Z
            "
            fill="url(#stemGrad)"
          />
          <path
            d="
              M 334 800
              C 330 710, 330 630, 334 548
              C 338 465, 342 395, 338 315
              C 336 270, 334 245, 334 208
              C 338 245, 340 270, 338 315
              C 334 395, 338 465, 342 548
              C 346 630, 346 710, 340 800
              Z
            "
            fill="url(#stemHi)"
            opacity="0.9"
          />
        </g>

        <g filter="url(#softShadow)">
          <path
            d="
              M 340 520
              C 460 500, 520 590, 455 665
              C 405 720, 330 700, 310 645
              C 295 605, 305 565, 340 520
              Z
            "
            fill="#16B56D"
            opacity="0.96"
          />
          <path
            d="
              M 300 540
              C 175 520, 115 610, 190 690
              C 245 748, 325 720, 342 665
              C 355 625, 340 585, 300 540
              Z
            "
            fill="#12A864"
            opacity="0.96"
          />
        </g>

        <g filter="url(#petalGlow)">
          <path
            d="
              M 320 110
              C 250 130, 210 210, 245 320
              C 275 410, 310 455, 320 485
              C 330 455, 365 410, 395 320
              C 430 210, 390 130, 320 110
              Z
            "
            fill="url(#petalGrad)"
          />
          <path
            d="
              M 292 150
              C 235 180, 205 245, 228 335
              C 250 420, 295 475, 320 505
              C 305 445, 296 310, 300 215
              C 302 185, 300 162, 292 150
              Z
            "
            fill="url(#petalGrad)"
            opacity="0.98"
          />
          <path
            d="
              M 348 150
              C 405 180, 435 245, 412 335
              C 390 420, 345 475, 320 505
              C 335 445, 344 310, 340 215
              C 338 185, 340 162, 348 150
              Z
            "
            fill="url(#petalGrad)"
            opacity="0.98"
          />
          <path
            d="
              M 320 140
              C 300 168, 292 228, 305 300
              C 315 360, 318 410, 320 452
              C 322 410, 325 360, 335 300
              C 348 228, 340 168, 320 140
              Z
            "
            fill="#FFF9DF"
            opacity="0.42"
          />
        </g>

        <g opacity="0.8">
          {Array.from({ length: 22 }).map((_, i) => {
            const x = 120 + ((i * 23) % 400);
            const y = 120 + ((i * 41) % 320);
            const r = 1.4 + (i % 4) * 0.75;
            return (
              <circle key={i} cx={x} cy={y} r={r} fill="#FFFFFF" opacity="0.42" />
            );
          })}
        </g>
      </svg>
    </div>
  );
}

export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const busyRef = useRef(false);

  const [hint, setHint] = useState("Đang bật nhạc…");

  // ✅ Toggle dựa vào trạng thái thật của audio (a.paused) => không lệch
  const toggleAudio = async () => {
    const a = audioRef.current;
    if (!a) return;

    if (busyRef.current) return;
    busyRef.current = true;

    try {
      if (a.paused) {
        a.volume = 0.6;
        await a.play();
        setHint("Nhạc đang chạy ♫ (chạm/click để tắt/bật)");
      } else {
        a.pause();
        setHint("Nhạc đang tắt ⏸ (chạm/click để bật)");
      }
    } catch {
      setHint("Trình duyệt chặn autoplay — chạm/click để bật nhạc ♫");
    } finally {
      setTimeout(() => (busyRef.current = false), 120);
    }
  };

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    // ✅ thử autoplay
    (async () => {
      try {
        a.volume = 0.6;
        await a.play();
        setHint("Nhạc đang chạy ♫ (chạm/click để tắt/bật)");
      } catch {
        setHint("Trình duyệt chặn autoplay — chạm/click để bật nhạc ♫");
      }
    })();

    // ✅ click/tap/keydown => toggle được luôn (bật/tắt)
    const onGesture = () => toggleAudio();
    window.addEventListener("pointerdown", onGesture);
    window.addEventListener("keydown", onGesture);

    // ✅ đồng bộ hint nếu audio tự pause/play vì lý do khác
    const onPlay = () => setHint("Nhạc đang chạy ♫ (chạm/click để tắt/bật)");
    const onPause = () => setHint("Nhạc đang tắt ⏸ (chạm/click để bật)");
    a.addEventListener("play", onPlay);
    a.addEventListener("pause", onPause);

    return () => {
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("keydown", onGesture);
      a.removeEventListener("play", onPlay);
      a.removeEventListener("pause", onPause);
    };
    // ✅ chỉ chạy 1 lần
  }, []);

  return (
    <div className="page">
      <style>{`
        :root{ --bg1:#0b0416; --bg2:#07030d; }
        *{box-sizing:border-box}
        html,body,#root{height:100%}
        body{
          margin:0;
          background:
            radial-gradient(circle at 30% 20%, rgba(255,220,120,0.28), transparent 55%),
            radial-gradient(circle at 75% 25%, rgba(255,130,200,0.18), transparent 55%),
            radial-gradient(circle at 50% 85%, rgba(120,200,255,0.14), transparent 60%),
            linear-gradient(180deg, var(--bg1) 0%, var(--bg2) 70%, #05020a 100%);
          overflow:hidden;
        }
        .page{
          height:100%;
          position:relative;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          color: rgba(255,255,255,0.92);
        }
        .heartsLayer{
          position:fixed; inset:0;
          pointer-events:none; overflow:hidden;
          z-index:0;
        }
        .heart{
          position:absolute; bottom:-30px;
          color: rgba(255,110,160,0.95);
          text-shadow: 0 12px 28px rgba(255,110,160,0.22);
          animation: floatUp linear infinite;
          user-select:none;
          will-change: transform, opacity;
        }
        @keyframes floatUp{
          0%{ transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          10%{ opacity: 1; }
          100%{ transform: translateY(-115vh) translateX(18px) scale(1.15); opacity: 0; }
        }
        .center{
          position:fixed;
          inset:0;
          display:grid;
          place-items:center;
          z-index:1;
          padding: 18px;
        }
        .flowerWrap{
          width: min(520px, 92vw);
          height: min(780px, 92vh);
          display:flex;
          align-items:center;
          justify-content:center;
          animation: floatSoft 5s ease-in-out infinite;
          filter: drop-shadow(0 22px 70px rgba(0,0,0,0.55));
        }
        .flower{ width:100%; height:100%; display:block; }
        @keyframes floatSoft{
          0%,100%{ transform: translateY(10px); }
          50%{ transform: translateY(0px); }
        }
        .hint{
          position:fixed;
          left:14px; right:14px; bottom:14px;
          z-index:2;
          padding:10px 12px;
          border-radius:16px;
          background:rgba(0,0,0,.28);
          border:1px solid rgba(255,255,255,.12);
          font-size:13px;
          opacity:.9;
          text-align:center;
          backdrop-filter: blur(10px);
          user-select:none;
        }
      `}</style>

      <HeartRain />

      {/* ✅ muốn chỉ click vào hoa mới toggle thì thêm onPointerDown vào đây */}
      <div className="center" onPointerDown={toggleAudio}>
        <TulipSVG />
      </div>

      <div className="hint">{hint}</div>

      <audio ref={audioRef} loop preload="auto" src={MUSIC_URL} />
    </div>
  );
}
