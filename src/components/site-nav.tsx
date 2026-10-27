import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import { profile } from "@/lib/profile";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", hash: "hero", label: "Home" },
  { to: "/", hash: "work", label: "Work" },
  { to: "/resume", hash: undefined, label: "Resume" },
  { to: "/", hash: "contact", label: "Hire" },
] as const;

export function SiteNav() {
  const { theme, toggle } = useTheme();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });

  return (
    <header className="no-print pointer-events-none fixed inset-x-0 top-0 z-nav flex justify-center p-3 sm:p-4">
      <nav
        className="pointer-events-auto inline-flex max-w-full items-center gap-0.5 rounded-full border border-border bg-surface/85 p-1.5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_4%,transparent)] backdrop-blur-md"
        aria-label="Primary"
      >
        <Link
          to="/"
          hash="hero"
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-accent-soft to-accent p-px"
          aria-label="Home"
        >
          <span className="flex size-full items-center justify-center rounded-full bg-bg font-display text-sm italic text-fg">
            {profile.initials}
          </span>
        </Link>

        <span className="mx-1 hidden h-4 w-px bg-border sm:block" />

        {links.map((l) => {
          const active =
            l.to === "/resume"
              ? pathname === "/resume"
              : pathname === "/" &&
                (l.hash === "hero"
                  ? !hash || hash === "hero"
                  : hash === l.hash);
          return (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              className={cn(
                "inline-flex h-9 items-center rounded-full px-2 text-sm text-muted transition-colors duration-150 hover:text-fg sm:px-3",
                l.label === "Hire" && "hidden sm:inline-flex",
                active && "bg-elevated text-fg",
              )}
            >
              {l.label}
            </Link>
          );
        })}

        <span className="mx-1 hidden h-4 w-px bg-border sm:block" />

        <button
          type="button"
          onClick={toggle}
          className="flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:text-fg"
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </button>

        <a
          href={profile.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center gap-1 rounded-full bg-fg px-3.5 text-sm font-medium text-bg transition-transform duration-150 hover:bg-accent hover:text-fg active:scale-[0.96]"
        >
          Say hi
          <ArrowUpRight className="size-3.5" />
        </a>
      </nav>
    </header>
  );
}
