import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Mail, Send, X } from "lucide-react";
import { hireInterests, profile, type HireInterest } from "@/lib/profile";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DRAFT_KEY = "mizan-hire-draft";

type Draft = {
  name: string;
  email: string;
  interest: HireInterest;
  message: string;
};

const empty: Draft = {
  name: "",
  email: "",
  interest: "IT Support",
  message: "",
};

function composeBody(d: Draft) {
  const lines = [
    `Hello ${profile.shortName},`,
    "",
    d.message.trim() || "I'd like to talk about working together.",
    "",
    `Interest: ${d.interest}`,
  ];
  // Optional lines only — the blank separators above must survive, so we
  // can't filter the whole array for truthiness.
  if (d.name) lines.push(`From: ${d.name}`);
  if (d.email) lines.push(`Email: ${d.email}`);
  return lines.join("\n");
}

// +974 5070 5260 → 97450705260 for wa.me
const whatsappNumber = profile.phone.replace(/[^0-9]/g, "");

function loadDraft(): Draft {
  try {
    if (typeof localStorage === "undefined") return empty;
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return empty;
    const parsed = JSON.parse(raw) as Partial<Draft>;
    return {
      name: typeof parsed.name === "string" ? parsed.name : empty.name,
      email: typeof parsed.email === "string" ? parsed.email : empty.email,
      message: typeof parsed.message === "string" ? parsed.message : empty.message,
      interest:
        parsed.interest !== undefined && hireInterests.includes(parsed.interest)
          ? parsed.interest
          : empty.interest,
    };
  } catch {
    return empty;
  }
}

export function HireForm({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  // The saved draft is read once, lazily, as the initial state (guarded for
  // SSR) and persisted on every change. The initial state *is* the stored
  // draft, so nothing can clobber it before it has been read.
  const [draft, setDraft] = useState<Draft>(loadDraft);

  useEffect(() => {
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    } catch {
      /* ignore */
    }
  }, [draft]);

  const body = composeBody(draft);
  const subject = `${draft.interest} — message for ${profile.shortName}`;
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const wa = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(body)}`;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-modal bg-bg/70 backdrop-blur-sm" />
        <Dialog.Content
          className="hire-dialog fixed top-1/2 left-1/2 z-modal -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-surface p-6 focus:outline-none"
          aria-describedby={undefined}
        >
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="font-display text-2xl italic text-fg">
                Let's work together
              </Dialog.Title>
              <p className="mt-1 text-sm text-muted">
                Draft a note — it stays on this device until you send it.
              </p>
            </div>
            <Dialog.Close
              className="flex size-10 items-center justify-center rounded-full text-muted hover:bg-elevated hover:text-fg"
              aria-label="Close"
            >
              <X className="size-4" />
            </Dialog.Close>
          </div>

          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailto;
            }}
          >
            <label className="block text-xs font-medium tracking-wide text-muted uppercase">
              Name
              <input
                required
                value={draft.name}
                onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                className="mt-1.5 h-11 w-full rounded-xl border border-border bg-bg px-3 text-sm text-fg outline-none placeholder:text-subtle focus:ring-2 focus:ring-accent/50"
                placeholder="Your name"
              />
            </label>
            <label className="block text-xs font-medium tracking-wide text-muted uppercase">
              Email
              <input
                required
                type="email"
                value={draft.email}
                onChange={(e) => setDraft({ ...draft, email: e.target.value })}
                className="mt-1.5 h-11 w-full rounded-xl border border-border bg-bg px-3 text-sm text-fg outline-none placeholder:text-subtle focus:ring-2 focus:ring-accent/50"
                placeholder="you@example.com"
              />
            </label>
            <fieldset>
              <legend className="text-xs font-medium tracking-wide text-muted uppercase">
                Interest
              </legend>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {hireInterests.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setDraft({ ...draft, interest: item })}
                    className={cn(
                      "h-9 rounded-full border px-3 text-xs transition-colors",
                      draft.interest === item
                        ? "border-accent bg-accent/15 text-fg"
                        : "border-border bg-bg text-muted hover:text-fg",
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </fieldset>
            <label className="block text-xs font-medium tracking-wide text-muted uppercase">
              Message
              <textarea
                required
                rows={4}
                value={draft.message}
                onChange={(e) => setDraft({ ...draft, message: e.target.value })}
                className="mt-1.5 w-full resize-none rounded-xl border border-border bg-bg px-3 py-2.5 text-sm text-fg outline-none placeholder:text-subtle focus:ring-2 focus:ring-accent/50"
                placeholder="What are you looking for?"
              />
            </label>

            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
              <Button type="submit" className="flex-1" size="lg">
                <Mail className="size-4" />
                Send email
              </Button>
              <Button asChild variant="outline" size="lg" className="flex-1">
                <a href={wa} target="_blank" rel="noopener noreferrer">
                  <Send className="size-4" />
                  WhatsApp
                  <ArrowUpRight className="size-3.5" />
                </a>
              </Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
