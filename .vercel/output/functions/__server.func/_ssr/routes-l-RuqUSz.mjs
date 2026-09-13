import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as Globe, a as Stethoscope, b as Briefcase, c as Pill, f as Monitor, g as GraduationCap, h as HeartPulse, l as Phone, m as Mail, n as Wrench, o as Send, p as MapPin, t as X, u as Palette, x as ArrowUpRight, y as Check } from "../_libs/lucide-react.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as hireInterests, i as cn, n as SiteNav, o as profile, r as TRACKS, t as Button } from "./site-nav-_Dr8REh3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-l-RuqUSz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DRAFT_KEY = "mizan-hire-draft";
var empty = {
	name: "",
	email: "",
	interest: "IT Support",
	message: ""
};
function composeBody(d) {
	return [
		`Hello ${profile.shortName},`,
		"",
		d.message.trim() || "I'd like to talk about working together.",
		"",
		`Interest: ${d.interest}`,
		d.name ? `From: ${d.name}` : "",
		d.email ? `Email: ${d.email}` : ""
	].filter(Boolean).join("\n");
}
function HireForm({ open, onOpenChange }) {
	const [draft, setDraft] = (0, import_react.useState)(empty);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		try {
			const raw = localStorage.getItem(DRAFT_KEY);
			if (raw) setDraft({
				...empty,
				...JSON.parse(raw)
			});
		} catch {}
	}, [open]);
	(0, import_react.useEffect)(() => {
		try {
			localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
		} catch {}
	}, [draft]);
	const body = composeBody(draft);
	const subject = `${draft.interest} — message for ${profile.shortName}`;
	const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	const wa = `https://wa.me/97471945693?text=${encodeURIComponent(body)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-modal bg-bg/70 backdrop-blur-sm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "hire-dialog fixed top-1/2 left-1/2 z-modal -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-surface p-6 focus:outline-none",
			"aria-describedby": void 0,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "font-display text-2xl italic text-fg",
					children: "Let's work together"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Draft a note — it stays on this device until you send it."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
					className: "flex size-10 items-center justify-center rounded-full text-muted hover:bg-elevated hover:text-fg",
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex flex-col gap-3",
				onSubmit: (e) => {
					e.preventDefault();
					window.location.href = mailto;
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-xs font-medium tracking-wide text-muted uppercase",
						children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							value: draft.name,
							onChange: (e) => setDraft({
								...draft,
								name: e.target.value
							}),
							className: "mt-1.5 h-11 w-full rounded-xl border border-border bg-bg px-3 text-sm text-fg outline-none placeholder:text-subtle focus:ring-2 focus:ring-accent/50",
							placeholder: "Your name"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-xs font-medium tracking-wide text-muted uppercase",
						children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "email",
							value: draft.email,
							onChange: (e) => setDraft({
								...draft,
								email: e.target.value
							}),
							className: "mt-1.5 h-11 w-full rounded-xl border border-border bg-bg px-3 text-sm text-fg outline-none placeholder:text-subtle focus:ring-2 focus:ring-accent/50",
							placeholder: "you@example.com"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "text-xs font-medium tracking-wide text-muted uppercase",
						children: "Interest"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex flex-wrap gap-1.5",
						children: hireInterests.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setDraft({
								...draft,
								interest: item
							}),
							className: cn("h-9 rounded-full border px-3 text-xs transition-colors", draft.interest === item ? "border-accent bg-accent/15 text-fg" : "border-border bg-bg text-muted hover:text-fg"),
							children: item
						}, item))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-xs font-medium tracking-wide text-muted uppercase",
						children: ["Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							rows: 4,
							value: draft.message,
							onChange: (e) => setDraft({
								...draft,
								message: e.target.value
							}),
							className: "mt-1.5 w-full resize-none rounded-xl border border-border bg-bg px-3 py-2.5 text-sm text-fg outline-none placeholder:text-subtle focus:ring-2 focus:ring-accent/50",
							placeholder: "What are you looking for?"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-col gap-2 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							className: "flex-1",
							size: "lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), "Send email"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							className: "flex-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: wa,
								target: "_blank",
								rel: "noopener noreferrer",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" }),
									"WhatsApp",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })
								]
							})
						})]
					})
				]
			})]
		})] })
	});
}
function Lightbox({ src, alt, onClose }) {
	(0, import_react.useEffect)(() => {
		if (!src) return;
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKey);
		};
	}, [src, onClose]);
	if (!src) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-modal flex items-center justify-center bg-bg/90 p-4 backdrop-blur-sm",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Image viewer",
		onClick: onClose,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onClose,
			className: "absolute top-4 right-4 flex size-11 items-center justify-center rounded-full text-muted hover:bg-elevated hover:text-fg",
			"aria-label": "Close",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt: alt ?? "",
			className: "max-h-[85vh] max-w-[90vw] rounded-xl object-contain outline outline-1 -outline-offset-1 outline-fg/10",
			onClick: (e) => e.stopPropagation()
		})]
	});
}
function useReveal(once = true) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			el.classList.add("is-visible");
			return;
		}
		const obs = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				el.classList.add("is-visible");
				if (once) obs.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -48px"
		});
		obs.observe(el);
		return () => obs.disconnect();
	}, [once]);
	return ref;
}
var serviceIcons = [
	Wrench,
	Monitor,
	Palette,
	Pill,
	HeartPulse,
	Stethoscope
];
function SectionHead({ eyebrow, title, em, sub, action }) {
	const ref = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "reveal mb-10 flex items-end justify-between gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-border" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs tracking-[0.28em] text-muted uppercase",
					children: eyebrow
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "font-medium text-section text-fg",
				children: [
					title,
					" ",
					em ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "font-display font-normal italic",
						children: em
					}) : null
				]
			}),
			sub ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-md text-sm leading-relaxed text-muted",
				children: sub
			}) : null
		] }), action]
	});
}
function Hero({ onHire }) {
	const [roleIdx, setRoleIdx] = (0, import_react.useState)(0);
	const [tick, setTick] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => {
			setRoleIdx((i) => (i + 1) % profile.roles.length);
			setTick((t) => t + 1);
		}, 2200);
		return () => clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "hero",
		className: "relative flex min-h-dvh scroll-mt-24 flex-col items-center overflow-hidden px-5 pt-28 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--color-accent)_18%,transparent),transparent_62%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grain" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: profile.portrait,
						alt: profile.name,
						width: 160,
						height: 160,
						className: "mb-8 size-28 rounded-full object-cover outline outline-2 outline-offset-4 outline-accent/50 sm:size-32"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-5 text-xs tracking-[0.32em] text-muted uppercase",
						children: profile.eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-display leading-[0.92] tracking-tight text-fg italic",
						children: profile.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-base text-muted sm:text-lg",
						children: [
							/^[aeiou]/i.test(profile.roles[roleIdx] ?? "") ? "An" : "A",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "role-in font-display text-fg italic",
								children: profile.roles[roleIdx]
							}, tick),
							" ",
							"based in ",
							profile.location,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-lg text-sm leading-relaxed text-muted",
						children: profile.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap items-center justify-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#work",
									children: "See work"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/resume",
									children: "View resume"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "lg",
								onClick: onHire,
								children: "Reach out"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mt-10 flex shrink-0 flex-col items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs tracking-[0.22em] text-muted uppercase",
					children: "Scroll"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "relative h-12 w-0.5 overflow-hidden rounded-full bg-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "scroll-drop absolute inset-x-0 h-1/3 bg-linear-to-b from-transparent to-accent" })
				})]
			})
		]
	});
}
function About() {
	const ref = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		ref,
		className: "reveal mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			eyebrow: "About",
			title: "About",
			em: "me"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-base leading-8 text-muted",
					children: profile.about
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-4 text-xs font-medium tracking-[0.2em] text-fg uppercase",
					children: "Skills"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: profile.skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-fg",
						children: s.name
					}, s.name))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-4 text-xs font-medium tracking-[0.2em] text-fg uppercase",
					children: "Languages"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-3",
					children: profile.languages.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1.5 flex justify-between text-xs text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted tabular-nums",
							children: [l.level, "%"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-1.5 overflow-hidden rounded-full bg-fg/15",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-accent",
							style: { width: `${l.level}%` }
						})
					})] }, l.name))
				})] })
			]
		})]
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "work",
		className: "mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			eyebrow: "Selected work",
			title: "What I",
			em: "offer",
			sub: "A mix of IT, design, and the operational discipline of clinics and pharmacies.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "ghost",
				className: "hidden md:inline-flex",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/resume",
					children: ["Full resume ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
			children: profile.services.map((s, i) => {
				const Icon = serviceIcons[i] ?? Briefcase;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-border bg-surface p-5 transition-[border-color] duration-200 hover:border-accent/50",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 flex size-10 items-center justify-center rounded-xl bg-elevated text-accent-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-medium text-fg",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: s.desc
						})
					]
				}, s.title);
			})
		})]
	});
}
function Experience() {
	const [track, setTrack] = (0, import_react.useState)("all");
	const items = profile.experience.filter((x) => track === "all" || x.track === track);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "experience",
		className: "mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Career",
				title: "Where I've",
				em: "been",
				sub: "A path across IT, web development, healthcare, and pharmacy — filter by track."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-8 flex flex-wrap gap-1.5",
				children: TRACKS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTrack(t.id),
					className: cn("h-10 rounded-full border px-4 text-sm transition-colors", track === t.id ? "border-accent bg-accent/15 text-fg" : "border-border bg-transparent text-muted hover:text-fg"),
					"aria-pressed": track === t.id,
					"data-filter": t.id,
					children: t.label
				}, t.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex flex-col gap-8",
				children: items.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "timeline-item grid grid-cols-[5.5rem_1.5rem_1fr] gap-4 sm:grid-cols-[7rem_1.5rem_1fr]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "pt-0.5 font-display text-sm text-muted italic",
							children: x.period
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex justify-center self-stretch",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-3 bottom-[-2rem] w-px bg-border last-line" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative z-10 mt-1.5 size-2.5 shrink-0 rounded-full bg-linear-to-r from-accent-soft to-accent" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-medium text-fg",
								children: x.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-0.5 text-sm text-accent-soft",
								children: x.org
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: x.desc
							})
						] })
					]
				}, `${x.title}-${x.period}`))
			})
		]
	});
}
function Education() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "education",
		className: "mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			eyebrow: "Education",
			title: "Academic",
			em: "background"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: profile.education.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-2xl border border-border bg-surface p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center gap-2 text-accent-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm italic",
							children: e.period
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-medium text-fg",
						children: e.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-accent-soft",
						children: e.org
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: e.desc
					})
				]
			}, e.title))
		})]
	});
}
function Certifications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "certifications",
		className: "mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			eyebrow: "Credentials",
			title: "Certifications",
			em: "& licenses"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
			children: profile.certifications.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-8 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-accent-soft to-accent text-fg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						className: "size-3.5",
						strokeWidth: 2.5
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium text-fg",
					children: c.name
				})]
			}, c.name))
		})]
	});
}
function Gallery({ onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "explorations",
		className: "mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			eyebrow: "Explorations",
			title: "Visual",
			em: "playground",
			sub: "Side projects, frames, and visual notes.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "https://www.linkedin.com/in/mizaaaan/",
				target: "_blank",
				rel: "noopener noreferrer",
				className: "hidden h-10 items-center gap-1 rounded-full border border-border px-4 text-sm text-fg hover:border-accent md:inline-flex",
				children: ["LinkedIn ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-3 md:grid-cols-4",
			children: profile.gallery.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onOpen(g.src, g.alt),
				className: cn("group overflow-hidden rounded-2xl border border-border bg-surface", i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : ""),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: g.src,
					alt: g.alt,
					loading: "lazy",
					className: "aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
				})
			}, g.src))
		})]
	});
}
function Stats() {
	const ref = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "reveal mx-auto max-w-6xl px-5 py-16 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-8 text-center md:grid-cols-4",
			children: profile.stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-stat leading-none text-fg italic",
				children: s.value
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 text-xs tracking-[0.16em] text-muted uppercase",
				children: s.label
			})] }, s.label))
		})
	});
}
function Contact({ onHire }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative scroll-mt-24 overflow-hidden pt-10 pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,color-mix(in_oklab,var(--color-accent)_14%,transparent),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden border-y border-border py-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "marquee-track",
						children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "pr-8 font-display text-3xl text-fg/10 italic sm:text-4xl",
							children: "BUILDING THE FUTURE ·"
						}, i))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-16 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-section italic",
							children: ["Let's build something ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "great" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: "Open for freelance work and full-time opportunities."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								onClick: onHire,
								children: "Start a conversation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: profile.resumePdf,
									target: "_blank",
									rel: "noopener noreferrer",
									children: ["Download PDF ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
								})
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex flex-wrap justify-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${profile.phone}`,
							className: "inline-flex h-11 items-center gap-2 rounded-full border border-border px-4 text-sm text-fg hover:border-accent",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5 text-muted" }),
								" ",
								profile.phoneDisplay
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${profile.email}`,
							className: "inline-flex h-11 items-center gap-2 rounded-full border border-border px-4 text-sm text-fg hover:border-accent",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5 text-muted" }),
								" ",
								profile.email
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: profile.website,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex h-11 items-center gap-2 rounded-full border border-border px-4 text-sm text-fg hover:border-accent",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-3.5 text-muted" }),
								" ",
								profile.websiteLabel
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex h-11 items-center gap-2 rounded-full border border-border px-4 text-sm text-fg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 text-muted" }),
								" ",
								profile.location
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-10 text-center text-xs leading-relaxed text-muted",
					children: [
						"Reference — ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-fg",
							children: profile.reference.name
						}),
						" ",
						profile.reference.role,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${profile.reference.phone}`,
							className: "hover:text-fg",
							children: profile.reference.phoneDisplay
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-4",
						children: profile.socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-sm text-muted hover:text-fg",
							children: s.label
						}, s.label))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-success shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-success)_25%,transparent)]" }), "Available for projects"]
					})]
				})
			]
		})]
	});
}
function HomePage() {
	const [hireOpen, setHireOpen] = (0, import_react.useState)(false);
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	const hash = useRouterState({ select: (s) => s.location.hash });
	(0, import_react.useEffect)(() => {
		if (!hash) return;
		const id = hash.replace(/^#/, "");
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}, [hash]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { onHire: () => setHireOpen(true) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Education, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Certifications, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, { onOpen: (src, alt) => setLightbox({
			src,
			alt
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, { onHire: () => setHireOpen(true) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HireForm, {
			open: hireOpen,
			onOpenChange: setHireOpen
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
			src: lightbox?.src ?? null,
			alt: lightbox?.alt,
			onClose: () => setLightbox(null)
		})
	] });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, {}) })] });
}
//#endregion
export { Home as component };
