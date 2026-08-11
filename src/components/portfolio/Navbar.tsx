import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "./data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = navItems
      .map((i) => document.querySelector(i.href))
      .filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/90 backdrop-blur-sm">
      <nav className="section-shell flex h-16 items-center justify-between gap-6">
        <a href="#home" className="text-[0.95rem] font-semibold tracking-tight text-heading">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "relative py-1 text-sm transition-colors hover:text-heading",
                  active === item.href ? "text-heading" : "text-muted-foreground",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-px w-full origin-left bg-sage transition-transform duration-300",
                    active === item.href ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-md border border-sage-light px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-accent sm:inline-flex"
          >
            Let&apos;s Connect
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-heading lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-card lg:hidden">
          <ul className="section-shell flex flex-col py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-sm text-foreground last:border-0"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
