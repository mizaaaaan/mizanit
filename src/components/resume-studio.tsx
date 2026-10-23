import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Download,
  Globe,
  Mail,
  MapPin,
  Phone,
  Printer,
} from "lucide-react";
import { profile, TRACKS, type Track } from "@/lib/profile";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function matches(track: Track, filter: Track | "all") {
  if (filter === "all") return true;
  if (filter === "it") return track === "it" || track === "web";
  return track === filter;
}

export function ResumeStudio() {
  const [filter, setFilter] = useState<Track | "all">("all");

  const experience = useMemo(
    () => profile.experience.filter((x) => matches(x.track, filter)),
    [filter],
  );
  const certs = useMemo(
    () => profile.certifications.filter((c) => matches(c.track, filter)),
    [filter],
  );
  const skills = useMemo(
    () => profile.skills.filter((s) => matches(s.track, filter)),
    [filter],
  );

  return (
    <div className="mx-auto max-w-5xl px-4 pt-24 pb-16 sm:px-6">
      <div className="no-print mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs tracking-[0.28em] text-muted uppercase">Interactive resume</p>
          <h1 className="mt-2 font-display text-section italic">The living CV</h1>
          <p className="mt-2 max-w-md text-sm text-muted">
            Filter by career track. Print or download the original PDF. Everything here is from
            the latest resume.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => window.print()}>
            <Printer className="size-4" /> Print
          </Button>
          <Button asChild variant="primary" size="sm">
            <a href={profile.resumePdf} download>
              <Download className="size-4" /> PDF
            </a>
          </Button>
        </div>
      </div>

      <div className="no-print mb-6 flex flex-wrap gap-1.5">
        {TRACKS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setFilter(t.id)}
            className={cn(
              "h-10 rounded-full border px-4 text-sm transition-colors",
              filter === t.id
                ? "border-accent bg-accent/15 text-fg"
                : "border-border text-muted hover:text-fg",
            )}
            aria-pressed={filter === t.id}
            data-filter={t.id}
          >
            {t.label}
          </button>
        ))}
      </div>

      <article className="resume-sheet overflow-hidden rounded-2xl md:grid md:grid-cols-[17rem_1fr]">
        <aside className="resume-sidebar flex flex-col gap-8 px-7 py-9">
          <div className="flex flex-col items-center text-center">
            <img
              src={profile.portrait}
              alt={profile.name}
              width={160}
              height={160}
              className="size-36 rounded-full object-cover outline outline-2 outline-offset-4 outline-navy-fg/40"
            />
            <h2 className="mt-5 text-xl font-semibold tracking-tight">{profile.name}</h2>
            <p className="mt-1 text-sm tracking-[0.18em] text-navy-fg/80 uppercase">
              {profile.title}
            </p>
          </div>

          <section>
            <h3 className="mb-3 text-xs font-semibold tracking-[0.22em] uppercase">
              About me
            </h3>
            <p className="text-sm leading-relaxed text-navy-fg/85">{profile.about}</p>
          </section>

          <section>
            <h3 className="mb-3 text-xs font-semibold tracking-[0.22em] uppercase">
              Contact me
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-navy-fg/90">
              <li className="flex items-center gap-2">
                <Phone className="size-3.5 shrink-0 opacity-80" />
                <a href={`tel:${profile.phone}`}>{profile.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-3.5 shrink-0 opacity-80" />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="size-3.5 shrink-0 opacity-80" />
                <a href={profile.website} target="_blank" rel="noopener noreferrer">
                  {profile.websiteLabel}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-3.5 shrink-0 opacity-80" />
                {profile.location}
              </li>
            </ul>
          </section>

          <section>
            <h3 className="mb-3 text-xs font-semibold tracking-[0.22em] uppercase">
              Languages
            </h3>
            <ul className="flex flex-col gap-3">
              {profile.languages.map((l) => (
                <li key={l.name}>
                  <div className="mb-1 text-sm">{l.name}</div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-navy-fg/20">
                    <div
                      className="h-full rounded-full bg-navy-fg"
                      style={{ width: `${l.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="mb-3 text-xs font-semibold tracking-[0.22em] uppercase">Skills</h3>
            <ul className="flex flex-col gap-1.5 text-sm text-navy-fg/90">
              {skills.map((s) => (
                <li key={s.name} className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-navy-fg/80" />
                  {s.name}
                </li>
              ))}
            </ul>
          </section>
        </aside>

        <div className="px-6 py-9 sm:px-9">
          <section className="mb-8">
            <h3 className="mb-5 flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-navy uppercase">
              Experiences
              <span className="h-px flex-1 bg-navy/20" />
            </h3>
            <ol className="flex flex-col gap-5">
              {experience.map((x) => (
                <li key={`${x.title}-${x.period}`} className="grid grid-cols-[5.5rem_1fr] gap-4 sm:grid-cols-[7rem_1fr]">
                  <span className="pt-0.5 text-xs font-medium text-navy">{x.period}</span>
                  <div>
                    <div className="font-semibold text-navy">
                      {x.title} at {x.org}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-sheet-muted">{x.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-8">
            <h3 className="mb-5 flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-navy uppercase">
              Education
              <span className="h-px flex-1 bg-navy/20" />
            </h3>
            <ol className="flex flex-col gap-5">
              {profile.education.map((e) => (
                <li key={e.title} className="grid grid-cols-[5.5rem_1fr] gap-4 sm:grid-cols-[7rem_1fr]">
                  <span className="pt-0.5 text-xs font-medium text-navy">{e.period}</span>
                  <div>
                    <div className="font-semibold text-navy">{e.title}</div>
                    <div className="text-sm text-navy/80">{e.org}</div>
                    <p className="mt-1 text-sm leading-relaxed text-sheet-muted">{e.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-8">
            <h3 className="mb-5 flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-navy uppercase">
              Certifications and licenses
              <span className="h-px flex-1 bg-navy/20" />
            </h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {certs.map((c) => (
                <li key={c.name} className="flex items-center gap-2 text-sm text-sheet-fg">
                  <Check className="size-3.5 text-navy" strokeWidth={2.5} />
                  {c.name}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="mb-3 flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-navy uppercase">
              References
              <span className="h-px flex-1 bg-navy/20" />
            </h3>
            <p className="text-sm text-sheet-fg">
              <span className="font-semibold">{profile.reference.name}</span>{" "}
              <span className="text-sheet-muted">({profile.reference.role})</span>
              <br />
              <a href={`tel:${profile.reference.phone}`} className="text-navy">
                {profile.reference.phoneDisplay}
              </a>
            </p>
          </section>
        </div>
      </article>

      <p className="no-print mt-6 text-center text-xs text-muted">
        Prefer the original file?{" "}
        <a
          href={profile.resumePdf}
          className="inline-flex items-center gap-0.5 text-fg underline-offset-2 hover:underline"
        >
          Download resume.pdf <ArrowUpRight className="size-3" />
        </a>
      </p>
    </div>
  );
}
