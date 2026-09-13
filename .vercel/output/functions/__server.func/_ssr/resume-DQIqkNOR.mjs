import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as Globe, l as Phone, m as Mail, p as MapPin, s as Printer, v as Download, x as ArrowUpRight, y as Check } from "../_libs/lucide-react.mjs";
import { i as cn, n as SiteNav, o as profile, r as TRACKS, t as Button } from "./site-nav-_Dr8REh3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resume-DQIqkNOR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function matches(track, filter) {
	if (filter === "all") return true;
	if (filter === "it") return track === "it" || track === "web";
	return track === filter;
}
function ResumeStudio() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const experience = (0, import_react.useMemo)(() => profile.experience.filter((x) => matches(x.track, filter)), [filter]);
	const certs = (0, import_react.useMemo)(() => profile.certifications.filter((c) => matches(c.track, filter)), [filter]);
	const skills = (0, import_react.useMemo)(() => profile.skills.filter((s) => matches(s.track, filter)), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-4 pt-24 pb-16 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-print mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.28em] text-muted uppercase",
						children: "Interactive resume"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-section italic",
						children: "The living CV"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-md text-sm text-muted",
						children: "Filter by career track. Print or download the original PDF. Everything here is from the latest resume."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => window.print(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), " Print"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "primary",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: profile.resumePdf,
							download: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " PDF"]
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-print mb-6 flex flex-wrap gap-1.5",
				children: TRACKS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setFilter(t.id),
					className: cn("h-10 rounded-full border px-4 text-sm transition-colors", filter === t.id ? "border-accent bg-accent/15 text-fg" : "border-border text-muted hover:text-fg"),
					"aria-pressed": filter === t.id,
					"data-filter": t.id,
					children: t.label
				}, t.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "resume-sheet overflow-hidden rounded-2xl md:grid md:grid-cols-[17rem_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "resume-sidebar flex flex-col gap-8 px-7 py-9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: profile.portrait,
									alt: profile.name,
									width: 160,
									height: 160,
									className: "size-36 rounded-full object-cover outline outline-2 outline-offset-4 outline-navy-fg/40"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 text-xl font-semibold tracking-tight",
									children: profile.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm tracking-[0.18em] text-navy-fg/80 uppercase",
									children: profile.title
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-3 text-xs font-semibold tracking-[0.22em] uppercase",
							children: "About me"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-navy-fg/85",
							children: profile.about
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-3 text-xs font-semibold tracking-[0.22em] uppercase",
							children: "Contact me"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "flex flex-col gap-2.5 text-sm text-navy-fg/90",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5 shrink-0 opacity-80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${profile.phone}`,
										children: profile.phoneDisplay
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5 shrink-0 opacity-80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${profile.email}`,
										children: profile.email
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-3.5 shrink-0 opacity-80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: profile.website,
										target: "_blank",
										rel: "noopener noreferrer",
										children: profile.websiteLabel
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 shrink-0 opacity-80" }), profile.location]
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-3 text-xs font-semibold tracking-[0.22em] uppercase",
							children: "Languages"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-col gap-3",
							children: profile.languages.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-1 text-sm",
								children: l.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1.5 overflow-hidden rounded-full bg-navy-fg/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full bg-navy-fg",
									style: { width: `${l.level}%` }
								})
							})] }, l.name))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-3 text-xs font-semibold tracking-[0.22em] uppercase",
							children: "Skills"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-col gap-1.5 text-sm text-navy-fg/90",
							children: skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-navy-fg/80" }), s.name]
							}, s.name))
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-6 py-9 sm:px-9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "mb-5 flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-navy uppercase",
								children: ["Experiences", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-navy/20" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "flex flex-col gap-5",
								children: experience.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "grid grid-cols-[5.5rem_1fr] gap-4 sm:grid-cols-[7rem_1fr]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pt-0.5 text-xs font-medium text-navy",
										children: x.period
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-semibold text-navy",
										children: [
											x.title,
											" at ",
											x.org
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm leading-relaxed text-sheet-muted",
										children: x.desc
									})] })]
								}, `${x.title}-${x.period}`))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "mb-5 flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-navy uppercase",
								children: ["Education", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-navy/20" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "flex flex-col gap-5",
								children: profile.education.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "grid grid-cols-[5.5rem_1fr] gap-4 sm:grid-cols-[7rem_1fr]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pt-0.5 text-xs font-medium text-navy",
										children: e.period
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-navy",
											children: e.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm text-navy/80",
											children: e.org
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm leading-relaxed text-sheet-muted",
											children: e.desc
										})
									] })]
								}, e.title))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "mb-5 flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-navy uppercase",
								children: ["Certifications and licenses", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-navy/20" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "grid gap-2 sm:grid-cols-2",
								children: certs.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2 text-sm text-sheet-fg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "size-3.5 text-navy",
										strokeWidth: 2.5
									}), c.name]
								}, c.name))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "mb-3 flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-navy uppercase",
							children: ["References", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-navy/20" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-sheet-fg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: profile.reference.name
								}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sheet-muted",
									children: [
										"(",
										profile.reference.role,
										")"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${profile.reference.phone}`,
									className: "text-navy",
									children: profile.reference.phoneDisplay
								})
							]
						})] })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "no-print mt-6 text-center text-xs text-muted",
				children: [
					"Prefer the original file?",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: profile.resumePdf,
						className: "inline-flex items-center gap-0.5 text-fg underline-offset-2 hover:underline",
						children: ["Download resume.pdf ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3" })]
					})
				]
			})
		]
	});
}
function ResumePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeStudio, {}) })] });
}
//#endregion
export { ResumePage as component };
