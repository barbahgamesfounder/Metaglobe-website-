import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Twitter } from "lucide-react";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Team — Metaglobe Technologies" },
      { name: "description", content: "Meet the team building the digital employee layer for the agentic economy at Metaglobe Technologies." },
      { property: "og:title", content: "Team — Metaglobe Technologies" },
      { property: "og:description", content: "Meet the team building the digital employee layer for the agentic economy at Metaglobe Technologies." },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
});

const team = [
  {
    name: "Vision Lead",
    role: "Founder & CEO",
    initials: "VL",
    bio: "Driving the thesis that human capital, verified through gameplay, becomes the foundation of the agentic economy.",
  },
  {
    name: "Strategy Lead",
    role: "Head of Operations",
    initials: "SL",
    bio: "Scaling the operator network and client delivery engine that brings Metatwins into production.",
  },
  {
    name: "Tech Lead",
    role: "Chief Technology Officer",
    initials: "TL",
    bio: "Architecting the agentic infrastructure, model routing, and enterprise integrations that power digital employees.",
  },
  {
    name: "Product Lead",
    role: "Head of Product",
    initials: "PL",
    bio: "Translating enterprise pain points into elegant digital employee experiences and human-in-the-loop workflows.",
  },
  {
    name: "Talent Lead",
    role: "Head of Talent",
    initials: "TL",
    bio: "Building the BARBAH GAMES-to-Metaglobe Technologies pipeline that turns elite gamers into certified enterprise operators.",
  },
  {
    name: "Growth Lead",
    role: "Head of Partnerships",
    initials: "GL",
    bio: "Forging enterprise relationships and ecosystem partnerships that expand the reach of the Metatwin layer.",
  },
];

function TeamPage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Team</p>
          <h1 className="mb-8 text-4xl font-black leading-[0.95] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Builders of the <br />
            <span className="text-gradient">agentic layer.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A team of operators, engineers, and strategists united by one belief: the agentic economy needs 
            a new kind of digital workforce — and a new kind of human behind it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group border border-border bg-background p-8 transition-all duration-300 hover:border-secondary/50 hover:bg-surface"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center border border-border bg-surface text-lg font-bold text-foreground transition-colors group-hover:border-primary/50">
                  {member.initials}
                </div>
                <div className="flex items-center gap-2">
                  <a href="#" className="text-muted-foreground hover:text-foreground" aria-label={`${member.name} Twitter`}>
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground" aria-label={`${member.name} LinkedIn`}>
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
              <p className="mb-4 text-sm text-primary">{member.role}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/20 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Join us</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                We are hiring operators, engineers, and agents.
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground">
              <p>
                If you are building at the intersection of AI, gaming, and enterprise systems, we want to talk.
                Our team is remote-first, outcome-driven, and obsessed with the future of work.
              </p>
              <a
                href="mailto:careers@metaglobe.gg"
                className="inline-flex items-center border border-border bg-background px-6 py-3 text-sm font-bold uppercase tracking-widest text-foreground transition-all hover:border-primary hover:text-foreground"
              >
                careers@metaglobe.gg
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
