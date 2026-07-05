import { createFileRoute } from "@tanstack/react-router";
import { Bot, Users, Workflow, Shield, Globe, Target } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Metaglobe Technologies" },
      { name: "description", content: "Metaglobe Technologies is the AI parent company of BARBAH GAMES, building the digital employee layer for the agentic economy." },
      { property: "og:title", content: "About — Metaglobe Technologies" },
      { property: "og:description", content: "Metaglobe Technologies is the AI parent company of BARBAH GAMES, building the digital employee layer for the agentic economy." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const pillars = [
  {
    icon: Bot,
    title: "AI Digital Employees",
    description: "Autonomous agents that understand context, follow procedure, and execute work across enterprise tools.",
  },
  {
    icon: Workflow,
    title: "Agentic Automation",
    description: "Multi-step workflows that route decisions, trigger actions, and learn from feedback loops.",
  },
  {
    icon: Users,
    title: "Human-in-the-Loop",
    description: "Verified operators from the BARBAH GAMES talent network keep every digital employee accountable.",
  },
  {
    icon: Shield,
    title: "Enterprise Governance",
    description: "Role-based access, audit trails, and safety guardrails designed for regulated environments.",
  },
  {
    icon: Globe,
    title: "Global Talent Supply",
    description: "A distributed workforce of skilled gamers converted into certified digital labor operators.",
  },
  {
    icon: Target,
    title: "Outcome Pricing",
    description: "Models that align cost to value, whether per task, per outcome, or per deployed twin.",
  },
];

function AboutPage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">The Thesis</p>
          <h1 className="mb-8 text-4xl font-black leading-[0.95] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            We are building the digital layer of human capital for the{" "}
            <span className="text-gradient">agentic economy</span>.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Metaglobe Technologies exists because the next generation of enterprise productivity will not be built by replacing humans, 
            but by amplifying them with autonomous digital employees — each one backed by verified human operators.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              From gameplay to enterprise deployment.
            </h2>
            <p className="text-muted-foreground">
              BARBAH GAMES has proven that gameplay is a signal. Every match, ranked game, and team communication 
              produces structured data about decision-making, composure, coordination, and adaptability.
            </p>
            <p className="text-muted-foreground">
              Metaglobe Technologies takes that signal and turns it into a deployable labor layer. Gamers become certified operators. 
              Operators become the human backbone of Metatwins. Enterprises get digital employees that are safe, 
              auditable, and scalable.
            </p>
          </div>
          <div className="border border-border bg-surface p-8">
            <div className="mb-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">The Stack</div>
            <div className="space-y-4">
              <StackRow label="Talent layer" value="BARBAH GAMES skills intelligence" />
              <StackRow label="Operator layer" value="Verified human-in-the-loop" />
              <StackRow label="Digital layer" value="Metatwin AI employees" />
              <StackRow label="Client layer" value="Enterprise workflows & systems" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/20 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Pillars</p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              What we are building.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group border border-border bg-background p-8 transition-all duration-300 hover:border-secondary/50 hover:bg-surface"
              >
                <pillar.icon className="mb-6 h-6 w-6 text-secondary transition-colors group-hover:text-primary" />
                <h3 className="mb-3 text-lg font-bold text-foreground">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="border border-border bg-background p-8 md:p-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Why now</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                The agentic economy needs a new kind of infrastructure.
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Enterprises are racing to adopt AI agents. But autonomy without accountability is a liability. 
                The missing layer is not more models — it is the verified human loop that makes agents trustworthy, 
                trainable, and legally defensible.
              </p>
              <p>
                Metaglobe Technologies builds that layer. We combine BARBAH GAMES' talent engine with enterprise-grade agentic 
                infrastructure so that every digital employee has a human twin, every decision has a trail, and 
                every outcome has an owner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StackRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
      <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{label}</span>
      <span className="text-sm font-medium text-foreground">{value}</span>
    </div>
  );
}
