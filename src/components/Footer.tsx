import { Link } from "@tanstack/react-router";

type FooterLink = {
  label: string;
  to: string;
};

type ExternalFooterLink = {
  label: string;
  href: string;
};

const footerGroups: Array<{
  title: string;
  links: Array<FooterLink | ExternalFooterLink>;
}> = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/team", label: "Team" },
      { to: "/blog", label: "Blog" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { to: "/services", label: "AI Digital Employees" },
      { to: "/services", label: "Agentic Automation" },
      { to: "/services", label: "Metatwin Layer" },
      { to: "/services", label: "Human-in-the-Loop" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "BARBAH GAMES", href: "https://www.barbahgames.gg" },
      { label: "Skills Intelligence", href: "https://www.barbahgames.gg" },
    ],
  },
];

function isExternalLink(link: FooterLink | ExternalFooterLink): link is ExternalFooterLink {
  return "href" in link;
}


export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="inline-block text-foreground">
              <span className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-tighter">
                  <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                    META
                  </span>
                  GLOBE
                </span>
                <span className="text-[10px] font-bold tracking-[0.25em] text-muted-foreground">
                  TECHNOLOGIES
                </span>
              </span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Building the digital employee layer for the agentic economy. The
              parent company of BARBAH GAMES.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {isExternalLink(link) ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Metaglobe Technologies. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Intelligence <span className="text-secondary">•</span> Autonomy{" "}
            <span className="text-primary">•</span> Infrastructure
          </p>
        </div>
      </div>
    </footer>
  );
}
