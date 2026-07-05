import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 surface-glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-1">
          <span className="flex flex-col leading-none">
            <span className="text-2xl font-black tracking-tighter text-foreground">
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

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-foreground" }}
              className="nav-link text-xs font-bold uppercase tracking-widest text-muted-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-sm bg-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-background transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-flex"
        >
          Deploy Intelligence
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                activeProps={{ className: "text-foreground" }}
                className="nav-link py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-sm bg-primary px-5 py-3 text-center text-xs font-bold uppercase tracking-widest text-primary-foreground"
            >
              Deploy Intelligence
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

