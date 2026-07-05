import { useEffect, useRef } from "react";
import { MatrixRain } from "./MatrixRain";

/**
 * Ambient "agentic" background layer.
 *  - Cursor-tracking aurora glow (agent attention)
 *  - Slowly drifting neural grid (autonomous compute)
 *  - Scan sweep line (perception loop)
 *  - Floating data particles (message passing)
 */
export function AgenticBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      el.style.setProperty("--agent-x", `${e.clientX}px`);
      el.style.setProperty("--agent-y", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <>
      <MatrixRain />
      <div
        ref={ref}
        aria-hidden
        className="agentic-bg pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
      <div className="agentic-grid absolute inset-0" />
      <div className="agentic-aurora absolute inset-0" />
      <div className="agentic-scan absolute inset-x-0 top-0 h-px" />
      <div className="agentic-particles absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} style={{ ["--i" as string]: i }} />
        ))}
      </div>
      </div>
    </>
  );
}
