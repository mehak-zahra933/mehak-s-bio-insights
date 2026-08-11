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
    <header className="sticky top-0 z-50 bg-brand-green">
      <nav className="mx-auto flex h-16 w-full max-w-[92rem] items-center justify-between gap-6 px-6 sm:px-10">
        <a
          href="#home"
          className="font-display text-xl font-semibold tracking-tight text-primary-foreground"
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "font-display text-[0.7rem] font-medium tracking-[0.14em] uppercase transition-colors",
                  active === item.href
                    ? "text-primary-foreground underline underline-offset-[6px]"
                    : "text-primary-foreground/80 hover:text-primary-foreground",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-primary-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="bg-brand-green-dark lg:hidden">
          <ul className="mx-auto flex w-full max-w-[92rem] flex-col px-6 py-2 sm:px-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-[0.72rem] tracking-[0.14em] text-primary-foreground uppercase"
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
