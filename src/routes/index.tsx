import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Users, Workflow, Sparkles, Zap, Globe } from "lucide-react";
import { MetatwinCollab } from "../components/MetatwinCollab";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Metaglobe Technologies — The Agentic Economy" },
      { name: "description", content: "Metaglobe Technologies builds AI digital employees, automation, and agentic systems for enterprises. Parent company of BARBAH GAMES." },
      { property: "og:title", content: "Metaglobe Technologies — The Agentic Economy" },
      { property: "og:description", content: "Metaglobe Technologies builds AI digital employees, automation, and agentic systems for enterprises. Parent company of BARBAH GAMES." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function HomePage() {
  return (
    <>
      <HeroSection />
      <ThesisSection />
      <ServicesPreviewSection />
      <MetatwinSection />
      <TeamTeaserSection />
      <CTASection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden">
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute top-[-10%] left-[-10%] h-[50%] w-[50%] rounded-full bg-purple-900/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-orange-900/10 blur-[120px]" />

      {/* Subgrid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center px-6 text-center">
        {/* Tagline */}
        <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground md:text-xs">
          Intelligence <span className="text-secondary">•</span> Autonomy{" "}
          <span className="text-primary">•</span> Infrastructure
        </p>

        {/* Main heading */}
        <h1 className="mb-8 text-5xl font-black leading-[0.9] tracking-tight text-foreground md:text-7xl lg:text-8xl">
          Engineering the <br />
          <span className="text-holographic">
            Agentic Economy.
          </span>
        </h1>

        {/* Vision statement */}
        <p className="mb-12 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
          Metaglobe Technologies architects the future of enterprise productivity through{" "}
          <span className="font-medium text-foreground">AI digital employees</span>{" "}
          and{" "}
          <span className="font-medium text-foreground">autonomous agentic systems</span>. 
          We transform passive data into active execution.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            to="/services"
            className="bg-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest text-background transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground"
          >
            Deploy Intelligence
          </Link>
          <Link
            to="/about"
            className="border border-border px-8 py-4 text-sm font-bold uppercase tracking-widest text-muted-foreground transition-all duration-300 hover:border-primary hover:text-foreground"
          >
            Read the Thesis
          </Link>
        </div>

        {/* Status indicator */}
        <div className="mt-20 flex items-center gap-3 rounded-full border border-border bg-surface/50 px-4 py-2 backdrop-blur-sm">
          <div className="agent-pulse h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Parent Company of BARBAH GAMES
          </span>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="pointer-events-none absolute top-1/2 left-10 hidden h-64 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-secondary/20 to-transparent xl:block" />
      <div className="pointer-events-none absolute top-1/2 right-10 hidden h-64 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-primary/20 to-transparent xl:block" />
    </section>
  );
}

function ThesisSection() {
  return (
    <section className="border-y border-border bg-muted/20 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">The Thesis</p>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-foreground md:text-5xl">
            The future of work is not human versus machine. It is human{" "}
            <span className="text-gradient">with</span> machine.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <ThesisCard
            number="01"
            title="Human Capital at Scale"
            description="BARBAH GAMES turns gameplay into structured skill profiles. Metaglobe Technologies turns those profiles into deployable digital labor."
            icon={Users}
          />
          <ThesisCard
            number="02"
            title="Agentic Infrastructure"
            description="We build the systems that let AI employees perceive, decide, and act inside enterprise workflows — safely and audibly."
            icon={Workflow}
          />
          <ThesisCard
            number="03"
            title="The Metatwin Layer"
            description="Every digital employee is backed by a human operator. Gamers become the verified human-in-the-loop for the agentic economy."
            icon={Bot}
          />
        </div>
      </div>
    </section>
  );
}

function ThesisCard({
  number,
  title,
  description,
  icon: Icon,
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}) {
  return (
    <div className="card-agentic group border border-border bg-background p-8 transition-all duration-300 hover:border-secondary/50 hover:bg-surface">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{number}</span>
        <Icon className="h-5 w-5 text-secondary transition-colors group-hover:text-primary" />
      </div>
      <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

function ServicesPreviewSection() {
  const services = [
    {
      title: "AI Digital Employees",
      description: "Autonomous agents that handle repetitive, rules-based, and judgment-heavy work inside your enterprise.",
      icon: Bot,
    },
    {
      title: "Agentic Automation",
      description: "End-to-end workflow orchestration that connects systems, data, and decisions across departments.",
      icon: Zap,
    },
    {
      title: "Metatwin Deployment",
      description: "Human-in-the-loop digital twins that verify, refine, and escalate agentic output in real time.",
      icon: Sparkles,
    },
    {
      title: "Enterprise Systems",
      description: "Secure, scalable infrastructure for deploying AI labor across operations, finance, customer support, and more.",
      icon: Globe,
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Services</p>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight text-foreground md:text-5xl">
              Enterprise intelligence, deployed.
            </h2>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:text-primary"
          >
            View all services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
}) {
  return (
    <div className="card-agentic group border border-border bg-background p-8 transition-all duration-300 hover:border-primary/50 hover:bg-surface">
      <div className="mb-6 flex h-12 w-12 items-center justify-center border border-border bg-surface text-secondary transition-colors group-hover:border-primary/50 group-hover:text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

function MetatwinSection() {
  return (
    <section className="border-y border-border bg-muted/20 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Metatwin</p>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-foreground md:text-5xl">
              The human-in-the-loop layer for the agentic economy.
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                BARBAH GAMES gamers are not just players. They are high-volume decision-makers, 
                team communicators, and adaptive problem-solvers trained in complex, dynamic environments.
              </p>
              <p>
                Metaglobe Technologies translates those proven competencies into verified human operators who sit behind 
                every Metatwin — the digital employee layer that makes AI safe, accountable, and scalable inside enterprise workflows.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <div className="text-3xl font-bold text-foreground">47+</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Counties</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">10k+</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Gamers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">∞</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Agents</div>
              </div>
            </div>
          </div>

          <div className="relative aspect-square border border-border bg-background p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5" />
            <div className="relative z-10 h-full w-full">
              <MetatwinCollab />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamTeaserSection() {
  const leaders = [
    { name: "Vision Lead", role: "Founder & CEO", initials: "VL" },
    { name: "Strategy Lead", role: "Head of Operations", initials: "SL" },
    { name: "Tech Lead", role: "Chief Technology Officer", initials: "TL" },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Team</p>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight text-foreground md:text-5xl">
              Builders of the agentic layer.
            </h2>
          </div>
          <Link
            to="/team"
            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:text-primary"
          >
            Meet the team
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="border border-border bg-background p-8 transition-all duration-300 hover:border-secondary/50 hover:bg-surface"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center border border-border bg-surface text-lg font-bold text-foreground">
                {leader.initials}
              </div>
              <h3 className="text-xl font-bold text-foreground">{leader.name}</h3>
              <p className="text-sm text-muted-foreground">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-muted/20 py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-primary/5" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-6 text-3xl font-bold leading-tight text-foreground md:text-5xl">
          Ready to deploy your digital workforce?
        </h2>
        <p className="mb-10 text-lg text-muted-foreground">
          Talk to our team about how Metaglobe Technologies can build AI employees and agentic systems for your enterprise.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
        >
          Start the conversation
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
