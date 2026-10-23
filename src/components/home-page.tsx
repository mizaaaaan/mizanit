import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Briefcase,
  Check,
  Globe,
  GraduationCap,
  HeartPulse,
  Mail,
  MapPin,
  Megaphone,
  Monitor,
  Palette,
  Phone,
  Pill,
  Stethoscope,
  Wrench,
} from "lucide-react";
import { profile, TRACKS, type Track } from "@/lib/profile";
import { Button } from "@/components/ui/button";
import { HireForm } from "@/components/hire-form";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const serviceIcons = [Wrench, Monitor, Palette, Megaphone, Pill, HeartPulse, Stethoscope];

function SectionHead({
  eyebrow,
  title,
  em,
  sub,
  action,
}: {
  eyebrow: string;
  title: string;
  em?: string;
  sub?: string;
  action?: React.ReactNode;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal mb-10 flex items-end justify-between gap-6">
      <div>
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-8 bg-border" />
          <span className="text-xs tracking-[0.28em] text-muted uppercase">{eyebrow}</span>
        </div>
        <h2 className="font-medium text-section text-fg">
          {title}{" "}
          {em ? <em className="font-display font-normal italic">{em}</em> : null}
        </h2>
        {sub ? <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{sub}</p> : null}
      </div>
      {action}
    </div>
  );
}

function Hero({ onHire }: { onHire: () => void }) {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setRoleIdx((i) => (i + 1) % profile.roles.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-dvh scroll-mt-24 flex-col items-center overflow-hidden px-5 pt-28 pb-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--color-accent)_18%,transparent),transparent_62%)]" />
      <div className="grain" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center text-center">
        <img
          src={profile.portrait}
          alt={profile.name}
          width={160}
          height={160}
          className="mb-8 size-28 rounded-full object-cover outline outline-2 outline-offset-4 outline-accent/50 sm:size-32"
        />
        <p className="mb-5 text-xs tracking-[0.32em] text-muted uppercase">{profile.eyebrow}</p>
        <h1 className="font-display text-display leading-[0.92] tracking-tight text-fg italic">
          {profile.name}
        </h1>
        <p className="mt-6 text-base text-muted sm:text-lg">
          {/^[aeiou]/i.test(profile.roles[roleIdx] ?? "") ? "An" : "A"}{" "}
          <span key={roleIdx} className="role-in font-display text-fg italic">
            {profile.roles[roleIdx]}
          </span>{" "}
          based in {profile.location}.
        </p>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">{profile.tagline}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <a href="#work">See work</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/resume">View resume</Link>
          </Button>
          <Button variant="ghost" size="lg" onClick={onHire}>
            Reach out
          </Button>
        </div>
      </div>

      <div className="relative z-10 mt-10 flex shrink-0 flex-col items-center gap-2">
        <span className="text-xs tracking-[0.22em] text-muted uppercase">Scroll</span>
        <span className="relative h-12 w-0.5 overflow-hidden rounded-full bg-border">
          <span className="scroll-drop absolute inset-x-0 h-1/3 bg-linear-to-b from-transparent to-accent" />
        </span>
      </div>
    </section>
  );
}

function About() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="about" ref={ref} className="reveal mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <SectionHead eyebrow="About" title="About" em="me" />
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <p className="max-w-md text-base leading-8 text-muted">{profile.about}</p>
        <div>
          <h3 className="mb-4 text-xs font-medium tracking-[0.2em] text-fg uppercase">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((s) => (
              <span
                key={s.name}
                className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-fg"
              >
                {s.name}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-medium tracking-[0.2em] text-fg uppercase">Languages</h3>
          <ul className="flex flex-col gap-3">
            {profile.languages.map((l) => (
              <li key={l.name}>
                <div className="mb-1.5 flex justify-between text-xs text-fg">
                  <span>{l.name}</span>
                  <span className="text-muted tabular-nums">{l.level}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-fg/15">
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{ width: `${l.level}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <SectionHead
        eyebrow="Selected work"
        title="What I"
        em="offer"
        sub="A mix of IT, design, marketing, and the operational discipline of clinics and pharmacies."
        action={
          <Button asChild variant="ghost" className="hidden md:inline-flex">
            <Link to="/resume">
              Full resume <ArrowUpRight className="size-3.5" />
            </Link>
          </Button>
        }
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {profile.services.map((s, i) => {
          const Icon = serviceIcons[i] ?? Briefcase;
          return (
            <article
              key={s.title}
              className="rounded-2xl border border-border bg-surface p-5 transition-[border-color] duration-200 hover:border-accent/50"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-elevated text-accent-soft">
                <Icon className="size-4" />
              </div>
              <h3 className="text-base font-medium text-fg">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Experience() {
  const [track, setTrack] = useState<Track | "all">("all");
  const items = profile.experience.filter((x) => track === "all" || x.track === track);

  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <SectionHead
        eyebrow="Career"
        title="Where I've"
        em="been"
        sub="A path across IT, web development, healthcare, and pharmacy — filter by track."
      />
      <div className="mb-8 flex flex-wrap gap-1.5">
        {TRACKS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTrack(t.id)}
            className={cn(
              "h-10 rounded-full border px-4 text-sm transition-colors",
              track === t.id
                ? "border-accent bg-accent/15 text-fg"
                : "border-border bg-transparent text-muted hover:text-fg",
            )}
            aria-pressed={track === t.id}
            data-filter={t.id}
          >
            {t.label}
          </button>
        ))}
      </div>
      <ol className="flex flex-col gap-8">
        {items.map((x) => (
          <li key={`${x.title}-${x.period}`} className="timeline-item grid grid-cols-[5.5rem_1.5rem_1fr] gap-4 sm:grid-cols-[7rem_1.5rem_1fr]">
            <span className="pt-0.5 font-display text-sm text-muted italic">{x.period}</span>
            <span className="relative flex justify-center self-stretch">
              <span className="absolute top-3 bottom-[-2rem] w-px bg-border last-line" />
              <span className="relative z-10 mt-1.5 size-2.5 shrink-0 rounded-full bg-linear-to-r from-accent-soft to-accent" />
            </span>
            <div>
              <div className="font-medium text-fg">{x.title}</div>
              <div className="mt-0.5 text-sm text-accent-soft">{x.org}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{x.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <SectionHead eyebrow="Education" title="Academic" em="background" />
      <div className="grid gap-4 md:grid-cols-2">
        {profile.education.map((e) => (
          <article key={e.title} className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-3 flex items-center gap-2 text-accent-soft">
              <GraduationCap className="size-4" />
              <span className="font-display text-sm italic">{e.period}</span>
            </div>
            <h3 className="text-lg font-medium text-fg">{e.title}</h3>
            <p className="mt-1 text-sm text-accent-soft">{e.org}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{e.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <SectionHead eyebrow="Credentials" title="Certifications" em="& licenses" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {profile.certifications.map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-4"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-accent-soft to-accent text-fg">
              <Check className="size-3.5" strokeWidth={2.5} />
            </span>
            <span className="text-sm font-medium text-fg">{c.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Websites() {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      id="explorations"
      ref={ref}
      className="reveal mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8"
    >
      <SectionHead
        eyebrow="Website I built"
        title="Visual"
        em="playground"
        sub="Live sites I designed and shipped — marketing sites, tools, and storefronts."
        action={
          <a
            href="https://github.com/mizaaaan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center gap-1 rounded-full border border-border px-4 text-sm text-fg hover:border-accent md:inline-flex"
          >
            All repositories <ArrowUpRight className="size-3.5" />
          </a>
        }
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {profile.websites.map((w) => (
          <a
            key={w.url}
            href={w.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-200 hover:border-accent/50"
          >
            <div className="flex flex-col gap-2 bg-elevated px-4 pt-3 pb-3">
              <div className="flex items-center gap-2">
                <span className="flex gap-1.5">
                  <span className="size-2 rounded-full bg-fg/15" />
                  <span className="size-2 rounded-full bg-fg/15" />
                  <span className="size-2 rounded-full bg-fg/15" />
                </span>
                <span className="flex-1 truncate rounded-md bg-surface px-2.5 py-1 text-[11px] text-muted">
                  {w.host}
                </span>
                <ArrowUpRight className="size-3.5 text-muted transition-colors group-hover:text-accent-soft" />
              </div>
              <div className="overflow-hidden rounded-lg border border-border">
                <img
                  src={w.image}
                  alt={`${w.title} website`}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2.5 p-4">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-medium text-fg">{w.title}</h3>
                  <span className="hidden shrink-0 rounded-full border border-border px-2 py-0.5 text-[10px] tracking-[0.12em] text-muted uppercase sm:block">
                    {w.tag}
                  </span>
                </div>
                <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">{w.desc}</p>
              </div>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                {w.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-elevated px-2.5 py-1 text-[11px] text-accent-soft"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="reveal mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        {profile.stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-stat leading-none text-fg italic">{s.value}</div>
            <div className="mt-2 text-xs tracking-[0.16em] text-muted uppercase">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact({ onHire }: { onHire: () => void }) {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden pt-10 pb-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,color-mix(in_oklab,var(--color-accent)_14%,transparent),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="overflow-hidden border-y border-border py-4">
          <div className="marquee-track">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="pr-8 font-display text-3xl text-fg/10 italic sm:text-4xl"
              >
                BUILDING THE FUTURE ·
              </span>
            ))}
          </div>
        </div>

        <div className="py-16 text-center">
          <h2 className="font-display text-section italic">
            Let's build something <em>great</em>
          </h2>
          <p className="mt-3 text-sm text-muted">Open for freelance work and full-time opportunities.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" onClick={onHire}>
              Start a conversation
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={profile.resumePdf} target="_blank" rel="noopener noreferrer">
                Download PDF <ArrowUpRight className="size-3.5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <a
            href={`tel:${profile.phone}`}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-4 text-sm text-fg hover:border-accent"
          >
            <Phone className="size-3.5 text-muted" /> {profile.phoneDisplay}
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-4 text-sm text-fg hover:border-accent"
          >
            <Mail className="size-3.5 text-muted" /> {profile.email}
          </a>
          <a
            href={profile.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-4 text-sm text-fg hover:border-accent"
          >
            <Globe className="size-3.5 text-muted" /> {profile.websiteLabel}
          </a>
          <span className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-4 text-sm text-fg">
            <MapPin className="size-3.5 text-muted" /> {profile.location}
          </span>
        </div>

        <p className="mb-10 text-center text-xs leading-relaxed text-muted">
          Reference — <span className="font-medium text-fg">{profile.reference.name}</span>{" "}
          {profile.reference.role}{" "}
          <a href={`tel:${profile.reference.phone}`} className="hover:text-fg">
            {profile.reference.phoneDisplay}
          </a>
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <div className="flex flex-wrap gap-4">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-fg"
              >
                {s.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-muted">
            <span className="size-2 rounded-full bg-success shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-success)_25%,transparent)]" />
            Available for projects
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  const [hireOpen, setHireOpen] = useState(false);
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace(/^#/, "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <>
      <Hero onHire={() => setHireOpen(true)} />
      <About />
      <Services />
      <Experience />
      <Education />
      <Certifications />
      <Websites />
      <Stats />
      <Contact onHire={() => setHireOpen(true)} />
      <HireForm open={hireOpen} onOpenChange={setHireOpen} />
    </>
  );
}
