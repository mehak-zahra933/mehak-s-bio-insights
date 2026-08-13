import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "./data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const items = navItems.filter((i) => i.href !== "#contact");

  return (
    <header className="sticky top-0 z-50 bg-background px-4 pt-4 sm:px-6">
      <nav className="mx-auto w-full max-w-[76rem] rounded-full bg-ink px-5 py-3 sm:px-7">
        <div className="flex items-center justify-between gap-6">
          <a
            href="#home"
            className="text-[0.68rem] font-semibold tracking-[0.22em] text-cream uppercase"
          >
            {profile.name}
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[0.62rem] font-medium tracking-[0.18em] text-cream/75 uppercase transition-colors hover:text-orange"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-orange px-5 py-2 text-[0.6rem] font-semibold tracking-[0.16em] text-ink uppercase transition-colors hover:bg-orange-dark sm:inline-block"
            >
              Contact Me
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-cream lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <ul className="mt-3 flex flex-col border-t border-cream/15 pt-2 lg:hidden">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-[0.65rem] tracking-[0.18em] text-cream/80 uppercase"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
