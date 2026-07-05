import { User, Bot, Shield, Zap } from "lucide-react";

/**
 * Animated diagram: human operator (BARBAH gamer) collaborating with a
 * Metatwin. Bidirectional data packets flow along the connection line,
 * verification pulses ring both nodes, and orbiting satellites suggest
 * active agentic tasks.
 */
export function MetatwinCollab() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Ambient rings */}
      <div className="pointer-events-none absolute inset-8 rounded-full border border-border/50" />
      <div className="pointer-events-none absolute inset-16 rounded-full border border-border/30" />
      <div
        className="pointer-events-none absolute inset-4 rounded-full border border-dashed border-secondary/20"
        style={{ animation: "collab-orbit 40s linear infinite" }}
      />
      <div
        className="pointer-events-none absolute inset-12 rounded-full border border-dashed border-primary/20"
        style={{ animation: "collab-orbit-reverse 60s linear infinite" }}
      />

      {/* Central diagram */}
      <div className="relative flex w-full max-w-sm items-center justify-between px-6">
        {/* Human node */}
        <div className="relative flex flex-col items-center gap-3">
          <div className="agent-pulse relative flex h-20 w-20 items-center justify-center rounded-full border border-secondary/60 bg-surface shadow-[0_0_32px_color-mix(in_oklab,var(--color-purple)_35%,transparent)]">
            <User className="h-8 w-8 text-secondary" />
          </div>
          <div className="text-center">
            <div className="text-[10px] font-bold uppercase tracking-widest text-secondary">
              Human
            </div>
            <div className="text-[9px] uppercase tracking-widest text-muted-foreground">
              Operator
            </div>
          </div>
        </div>

        {/* Connection channel */}
        <div className="relative mx-3 h-16 flex-1">
          {/* Static rail */}
          <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-gradient-to-r from-secondary/40 via-accent/40 to-primary/40" />
          {/* Data packet: human -> AI */}
          <div
            className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-secondary shadow-[0_0_10px_color-mix(in_oklab,var(--color-purple)_80%,transparent)]"
            style={{ animation: "collab-packet-right 2.6s ease-in-out infinite" }}
          />
          <div
            className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_8px_color-mix(in_oklab,var(--color-cyan)_80%,transparent)]"
            style={{
              animation: "collab-packet-right 2.6s ease-in-out infinite",
              animationDelay: "0.8s",
            }}
          />
          {/* Data packet: AI -> human */}
          <div
            className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_10px_color-mix(in_oklab,var(--color-orange)_80%,transparent)]"
            style={{ animation: "collab-packet-left 2.6s ease-in-out infinite" }}
          />
          <div
            className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_8px_color-mix(in_oklab,var(--color-cyan)_80%,transparent)]"
            style={{
              animation: "collab-packet-left 2.6s ease-in-out infinite",
              animationDelay: "1.4s",
            }}
          />
          {/* Center badge */}
          <div className="absolute top-1/2 left-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/60 bg-background">
            <Shield
              className="h-3.5 w-3.5 text-accent"
              style={{ animation: "collab-verify 3s ease-in-out infinite" }}
            />
          </div>
        </div>

        {/* Metatwin node */}
        <div className="relative flex flex-col items-center gap-3">
          <div className="agent-pulse relative flex h-20 w-20 items-center justify-center rounded-full border border-primary/60 bg-surface shadow-[0_0_32px_color-mix(in_oklab,var(--color-orange)_35%,transparent)]">
            <Bot className="h-8 w-8 text-primary" />
            {/* Orbiting satellite */}
            <div
              className="pointer-events-none absolute inset-[-10px]"
              style={{ animation: "collab-orbit 6s linear infinite" }}
            >
              <div className="absolute top-0 left-1/2 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-accent shadow-[0_0_8px_color-mix(in_oklab,var(--color-cyan)_80%,transparent)]">
                <Zap className="h-2 w-2 text-background" />
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-[10px] font-bold uppercase tracking-widest text-primary">
              Metatwin
            </div>
            <div className="text-[9px] uppercase tracking-widest text-muted-foreground">
              Digital Employee
            </div>
          </div>
        </div>
      </div>

      {/* Corner telemetry */}
      <div className="absolute top-4 left-4 font-mono text-[9px] leading-tight tracking-wider text-muted-foreground/70">
        <div>NODE_01 :: ONLINE</div>
        <div className="text-accent/80">LATENCY 12ms</div>
      </div>
      <div className="absolute right-4 bottom-4 text-right font-mono text-[9px] leading-tight tracking-wider text-muted-foreground/70">
        <div>LOOP_STATE</div>
        <div className="text-accent/80">VERIFIED ✓</div>
      </div>

      <style>{`
        @keyframes collab-packet-right {
          0%   { left: 0%;   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes collab-packet-left {
          0%   { left: 100%; opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { left: 0%;   opacity: 0; }
        }
        @keyframes collab-verify {
          0%, 100% { transform: scale(1);   opacity: 0.7; }
          50%      { transform: scale(1.2); opacity: 1;   }
        }
        @keyframes collab-orbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes collab-orbit-reverse {
          from { transform: rotate(360deg); }
          to   { transform: rotate(0deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          div[style*="collab-"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
