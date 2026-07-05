import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Blog — Metaglobe Technologies" },
      { name: "description", content: "Thoughts on AI digital employees, agentic systems, the future of work, and the Metatwin layer from Metaglobe Technologies." },
      { property: "og:title", content: "Blog — Metaglobe Technologies" },
      { property: "og:description", content: "Thoughts on AI digital employees, agentic systems, the future of work, and the Metatwin layer from Metaglobe Technologies." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
});

const posts = [
  {
    title: "The Agentic Economy Needs a Human Layer",
    excerpt: "Why autonomous AI is not enough — and how verified human operators make enterprise agents trustworthy, trainable, and scalable.",
    date: "June 2026",
    category: "Thesis",
    slug: "agentic-economy-human-layer",
  },
  {
    title: "From Skills Card to Metatwin",
    excerpt: "How BARBAH GAMES turns gameplay into structured skill profiles, and how Metaglobe Technologies converts those profiles into deployable digital labor.",
    date: "June 2026",
    category: "Product",
    slug: "skills-card-to-metatwin",
  },
  {
    title: "Designing AI Employees for Regulated Work",
    excerpt: "Guardrails, audit trails, and human-in-the-loop patterns that make digital employees viable in finance, healthcare, and legal workflows.",
    date: "May 2026",
    category: "Engineering",
    slug: "ai-employees-regulated-work",
  },
  {
    title: "Why Gamers Are the Perfect Operators",
    excerpt: "The cognitive traits that make elite gamers ideal human-in-the-loop operators for complex, real-time agentic systems.",
    date: "May 2026",
    category: "Talent",
    slug: "gamers-as-operators",
  },
  {
    title: "Building the Metatwin Stack",
    excerpt: "A technical overview of the infrastructure that connects LLMs, enterprise tools, and human operators into a single digital employee.",
    date: "April 2026",
    category: "Engineering",
    slug: "metatwin-stack",
  },
  {
    title: "Enterprise Pilots: From Zero to First Agent",
    excerpt: "How we run fast, outcome-oriented pilots with enterprise clients and scale what works.",
    date: "April 2026",
    category: "Strategy",
    slug: "enterprise-pilots",
  },
];

function BlogPage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Blog</p>
          <h1 className="mb-8 text-4xl font-black leading-[0.95] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Notes on the <span className="text-gradient">agentic future.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Thoughts on AI digital employees, agentic systems, the future of work, and the human layer that makes it all real.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col border border-border bg-background p-8 transition-all duration-300 hover:border-secondary/50 hover:bg-surface"
            >
              <div className="mb-6 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="font-bold uppercase tracking-widest text-primary">{post.category}</span>
                <span className="h-px w-4 bg-border" />
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                {post.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
              <a
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground transition-colors group-hover:text-primary"
              >
                Read more
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/20 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
            Want to stay ahead of the agentic economy?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Subscribe for updates on product launches, thesis essays, and behind-the-scenes builds from the Metaglobe Technologies team.
          </p>
          <form className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primary px-6 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
