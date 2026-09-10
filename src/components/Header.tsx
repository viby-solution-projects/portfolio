import { useState } from "react";
import Logo from "./Logo";
import { cn } from "../utils/cn";
import type { RoutePath } from "../utils/useRoute";

const NAV_LINKS: { label: string; href: string; path: RoutePath }[] = [
  { label: "Home", href: "#/", path: "/" },
  { label: "Our Work", href: "#/work", path: "/work" },
  { label: "Solution", href: "#/solution", path: "/solution" },
  { label: "Academy", href: "#/academy", path: "/academy" },
  { label: "Ventures", href: "#/ventures", path: "/ventures" },
  { label: "About", href: "#/about", path: "/about" },
];

export default function Header({ currentRoute = "/" }: { currentRoute?: RoutePath }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Logo />

      <nav
        className={cn("site-nav", open && "open")}
        aria-label="Primary navigation"
      >
        <div className="site-nav-links">
          {NAV_LINKS.map((link) => {
            const isActive = currentRoute === link.path;
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(isActive && "active")}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <a
          className="button button-blue nav-cta"
          href="#/contact"
          onClick={() => setOpen(false)}
        >
          Let&rsquo;s talk <span>↗</span>
        </a>
      </nav>

      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <i />
        <i />
      </button>
    </header>
  );
}
