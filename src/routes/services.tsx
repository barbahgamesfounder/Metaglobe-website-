import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Bot, Cog, Cpu, Globe, Layers, MessageSquare, Shield, Sparkles, Zap } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Metaglobe Technologies" },
      { name: "description", content: "Metaglobe Technologies offers AI digital employees, agentic automation, Metatwin deployment, and enterprise systems for the agentic economy." },
      { property: "og:title", content: "Services — Metaglobe Technologies" },
      { property: "og:description", content: "Metaglobe Technologies offers AI digital employees, agentic automation, Metatwin deployment, and enterprise systems for the agentic economy." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const services = [
  {
    icon: Bot,
    title: "AI Digital Employees",
    description: "Full-time digital workers that handle intake, triage, scheduling, data entry, and first-line support inside your existing tools.",
    features: ["Custom agents per role", "Tool integration", "24/7 operation", "Audit logs"],
  },
  {
    icon: Zap,
    title: "Agentic Automation",
    description: "End-to-end workflow orchestration across departments. Agents route work, make decisions, and escalate exceptions automatically.",
    features: ["Multi-agent orchestration", "Decision trees", "Exception handling", "Continuous improvement"],
  },
  {
    icon: Sparkles,
    title: "Metatwin Deployment",
    description: "Every digital employee is paired with a verified human operator from the BARBAH GAMES talent network for oversight and training.",
    features: ["Verified operators", "Human escalation", "Feedback loops", "Quality assurance"],
  },
  {
    icon: Cog,
    title: "Enterprise Integration",
    description: "Secure connectors and APIs that plug Metaglobe Technologies into your CRM, ERP, helpdesk, knowledge base, and messaging platforms.",
    features: ["API-first architecture", "SSO & SCIM", "SOC 2 aligned", "On-prem options"],
  },
  {
    icon: Shield,
    title: "Governance & Safety",
    description: "Role-based access, policy enforcement, and guardrails that keep agentic systems compliant with enterprise standards.",
    features: ["RBAC", "Policy engines", "Activity tracing", "Compliance reporting"],
  },
  {
    icon: Cpu,
    title: "AI Infrastructure",
    description: "The compute, observability, and model management layer that runs agents at scale with high availability and low latency.",
    features: ["Model routing", "Observability", "Cost controls", "Scalable compute"],
  },
];

const useCases = [
  { icon: MessageSquare, label: "Customer Operations" },
  { icon: Layers, label: "Back-office Finance" },
  { icon: Globe, label: "Supply Chain" },
  { icon: Shield, label: "Compliance & Risk" },
];

function ServicesPage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Services</p>
          <h1 className="mb-8 text-4xl font-black leading-[0.95] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Deploy intelligence <br />
            <span className="text-gradient">at enterprise scale.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Metaglobe Technologies builds and operates AI digital employees, agentic automation, and the human-backed 
            Metatwin layer for companies ready for the next phase of productivity.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col border border-border bg-background p-8 transition-all duration-300 hover:border-primary/50 hover:bg-surface"
            >
              <service.icon className="mb-6 h-6 w-6 text-secondary transition-colors group-hover:text-primary" />
              <h3 className="mb-3 text-xl font-bold text-foreground">{service.title}</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/20 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Use cases</p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Where Metaglobe Technologies works.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase) => (
              <div
                key={useCase.label}
                className="flex flex-col items-center gap-4 border border-border bg-background p-8 text-center transition-all duration-300 hover:border-secondary/50 hover:bg-surface"
              >
                <useCase.icon className="h-6 w-6 text-secondary" />
                <span className="text-sm font-bold text-foreground">{useCase.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="border border-border bg-background p-8 md:p-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Engagement</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Built for outcomes, not just outputs.
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground">
              <p>
                We work with enterprises as a strategic partner, not a vendor. Every engagement begins with a 
                workflow audit, a pilot scope, and a clear success metric.
              </p>
              <p>
                Whether you need one digital employee or a full agentic workforce, we align incentives, 
                deliver fast pilots, and scale what works.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
