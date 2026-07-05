import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Metaglobe Technologies" },
      { name: "description", content: "Get in touch with Metaglobe Technologies to discuss AI digital employees, agentic automation, and Metatwin deployment for your enterprise." },
      { property: "og:title", content: "Contact — Metaglobe Technologies" },
      { property: "og:description", content: "Get in touch with Metaglobe Technologies to discuss AI digital employees, agentic automation, and Metatwin deployment for your enterprise." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Contact</p>
          <h1 className="mb-8 text-4xl font-black leading-[0.95] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Start the <span className="text-gradient">conversation.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Tell us what you are building. We will help you design the agentic workforce, automation layer, 
            and Metatwin deployment that fits your enterprise.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="border border-border bg-background p-8 md:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Name
                  </Label>
                  <Input id="name" placeholder="Your name" className="border-border bg-surface" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Email
                  </Label>
                  <Input id="email" type="email" placeholder="you@company.com" className="border-border bg-surface" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Company
                </Label>
                <Input id="company" placeholder="Company name" className="border-border bg-surface" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your use case, timeline, and goals."
                  rows={6}
                  className="border-border bg-surface"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-foreground hover:text-background"
              >
                Send message
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                Direct channels.
              </h2>
              <p className="text-muted-foreground">
                For enterprise inquiries, partnerships, press, or investor relations, reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              <ContactChannel icon={Mail} label="Email" value="hello@metaglobe.gg" href="mailto:hello@metaglobe.gg" />
              <ContactChannel icon={Phone} label="Phone" value="+254 700 000 000" href="tel:+254700000000" />
              <ContactChannel icon={MapPin} label="Office" value="Nairobi, Kenya" href="#" />
            </div>

            <div className="border border-border bg-surface p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Response time</p>
              <p className="mt-2 text-sm text-foreground">
                Enterprise inquiries receive a response within one business day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactChannel({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a href={href} className="group flex items-start gap-4">
      <div className="flex h-12 w-12 items-center justify-center border border-border bg-surface text-secondary transition-colors group-hover:border-primary/50 group-hover:text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">{value}</p>
      </div>
    </a>
  );
}
