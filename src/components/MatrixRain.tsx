import { useEffect, useRef } from "react";

/**
 * Subtle matrix-rain background. Very low opacity so it reads as
 * ambient "code exhaust" behind content rather than a foreground effect.
 */
export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF{}[]<>/=+*";
    const fontSize = 14;
    let cols = 0;
    let drops: number[] = [];
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.floor(window.innerWidth / fontSize);
      drops = Array.from({ length: cols }, () =>
        Math.floor((Math.random() * window.innerHeight) / fontSize),
      );
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    let last = 0;
    const step = (t: number) => {
      // ~20fps for subtlety + perf
      if (t - last > 55) {
        last = t;
        // Fade previous frame — low alpha = long trails, higher = tighter
        ctx.fillStyle = "rgba(5, 5, 12, 0.08)";
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

        ctx.font = `${fontSize}px "Space Grotesk", monospace`;
        for (let i = 0; i < cols; i++) {
          const ch = chars.charAt(Math.floor(Math.random() * chars.length));
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          // Head glyph: brighter cyan; body: dim purple
          if (Math.random() < 0.06) {
            ctx.fillStyle = "rgba(180, 230, 255, 0.55)";
          } else {
            ctx.fillStyle = "rgba(140, 100, 220, 0.28)";
          }
          ctx.fillText(ch, x, y);

          if (y > window.innerHeight && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.18] mix-blend-screen"
      style={{
        maskImage:
          "radial-gradient(ellipse at center, black 30%, transparent 85%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at center, black 30%, transparent 85%)",
      }}
    />
  );
}
