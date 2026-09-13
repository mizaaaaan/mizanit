import { d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { d as Moon, i as Sun, x as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { n as useTheme } from "./router-Okhi6bK4.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { c as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-nav-_Dr8REh3.js
var import_jsx_runtime = require_jsx_runtime();
var TRACKS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "it",
		label: "IT & Support"
	},
	{
		id: "web",
		label: "Web & Design"
	},
	{
		id: "healthcare",
		label: "Healthcare"
	},
	{
		id: "pharmacy",
		label: "Pharmacy"
	}
];
var profile = {
	name: "Md Mizanur Rahman",
	shortName: "Mizan",
	initials: "MR",
	title: "IT Specialist",
	location: "Doha, Qatar",
	eyebrow: "Collection '26",
	tagline: "A decade of hands-on experience spanning IT support, web development, and design — carried from pharmacy operations and patient care into building systems that work.",
	about: "Versatile IT Specialist skilled in software, web development, design, and technology solutions. Based in Doha, Qatar, with hands-on experience spanning IT support, patient care, and pharmacy operations.",
	phone: "+97471945693",
	phoneDisplay: "+974 7194 5693",
	email: "mizan321@hotmail.com",
	website: "https://mizanht.netlify.app",
	websiteLabel: "mizanht.netlify.app",
	whatsapp: "https://wa.me/97471945693?text=Hello%20Mizan%2C%20I%20found%20your%20portfolio.",
	socials: [
		{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/mizaaaan/"
		},
		{
			label: "GitHub",
			href: "https://github.com/mizaaaan"
		},
		{
			label: "YouTube",
			href: "https://www.youtube.com/@Mizaaaan"
		},
		{
			label: "Facebook",
			href: "https://www.facebook.com/mizaaaan"
		}
	],
	roles: [
		"IT Specialist",
		"Web Developer",
		"Pharmacist",
		"Designer"
	],
	languages: [
		{
			name: "English",
			level: 95
		},
		{
			name: "Arabic",
			level: 82
		},
		{
			name: "Urdu / Hindi",
			level: 70
		}
	],
	skills: [
		{
			name: "IT Support & Troubleshooting",
			track: "it"
		},
		{
			name: "Web Development",
			track: "web"
		},
		{
			name: "Graphic Design & UI Design",
			track: "web"
		},
		{
			name: "Computer & Office Applications",
			track: "it"
		},
		{
			name: "First Aid & Emergency Care",
			track: "healthcare"
		},
		{
			name: "Medication Knowledge & Nursing",
			track: "pharmacy"
		}
	],
	stats: [
		{
			value: "10+",
			label: "Years experience"
		},
		{
			value: "7+",
			label: "Certifications"
		},
		{
			value: "98%",
			label: "Patient satisfaction"
		},
		{
			value: "3",
			label: "Languages"
		}
	],
	experience: [
		{
			period: "2016 – 2016",
			title: "IT Support Technician",
			org: "Noakhali Technical Training Center",
			desc: "Provided technical support, system maintenance, troubleshooting, software installation, and user assistance.",
			track: "it"
		},
		{
			period: "2017 – 2017",
			title: "Web Development",
			org: "Learning & Earning Development Project",
			desc: "Completed hands-on training in web design and development.",
			track: "web"
		},
		{
			period: "2018 – 2021",
			title: "Medical Assistant",
			org: "Al-Habib Hospital Pvt.",
			desc: "Administered precise injections, emergency treatment, and first aid for patient care.",
			track: "healthcare"
		},
		{
			period: "2021 – 2022",
			title: "Office Aide",
			org: "Life Line Hospital Pvt.",
			desc: "Assessed, diagnosed, and treated patients; provided care resulting in 98% satisfaction.",
			track: "healthcare"
		},
		{
			period: "2022 – 2025",
			title: "Owner & Pharmacist",
			org: "Dream Pharmacy",
			desc: "Managed prescriptions, patient consultations, and accurate medication dispensing.",
			track: "pharmacy"
		},
		{
			period: "2025 – 2026",
			title: "Pharmacy Manager",
			org: "Shah Ali Pharmacy",
			desc: "Handled medication dispensing, patient guidance, prescription processing, and pharmacy operations.",
			track: "pharmacy"
		}
	],
	education: [{
		period: "2016 – 2026",
		title: "Bachelor of Science in Chemistry",
		org: "National University of Bangladesh",
		desc: "Focused on chemical analysis and laboratory techniques."
	}, {
		period: "2016 – 2017",
		title: "Certificate in Health Technology and Services",
		org: "Noakhali Paramedical College",
		desc: "Enhanced healthcare delivery skills across clinical settings."
	}],
	certifications: [
		{
			name: "IT Support Technician",
			track: "it"
		},
		{
			name: "Web Development Course",
			track: "web"
		},
		{
			name: "Certificate in Pharma Technology",
			track: "pharmacy"
		},
		{
			name: "Pharmacy Trade License",
			track: "pharmacy"
		},
		{
			name: "Diploma in Nursing",
			track: "healthcare"
		},
		{
			name: "Professional Driving License",
			track: "it"
		},
		{
			name: "NSDA Driving, Level-3",
			track: "it"
		}
	],
	services: [
		{
			title: "IT Support",
			desc: "Troubleshooting, system maintenance, software setup, and day-to-day user assistance.",
			track: "it"
		},
		{
			title: "Web Development",
			desc: "From layout to launch — sites and interfaces that are clear, fast, and usable.",
			track: "web"
		},
		{
			title: "Graphic & UI Design",
			desc: "Visual systems, brand pieces, and interface design with restraint.",
			track: "web"
		},
		{
			title: "Pharmacy Operations",
			desc: "Prescription accuracy, patient consultation, and running a dispensary end to end.",
			track: "pharmacy"
		},
		{
			title: "Clinical Support",
			desc: "First aid, emergency care, and the calm of someone who has worked the floor.",
			track: "healthcare"
		},
		{
			title: "Office Systems",
			desc: "Computer and office applications that keep a clinic, shop, or team moving.",
			track: "it"
		}
	],
	gallery: [
		{
			src: "/images/IMG_2012.jpg",
			alt: "Landscape study"
		},
		{
			src: "/images/IMG_0485_Original.jpg",
			alt: "Visual exploration"
		},
		{
			src: "/images/IMG_1864_Original.jpg",
			alt: "Personal work"
		},
		{
			src: "/images/20220410_021706_Original.jpg",
			alt: "Portrait study"
		},
		{
			src: "/images/IMG_2473_Original.jpg",
			alt: "Candid frame"
		},
		{
			src: "/images/IMG_2489_Original.jpg",
			alt: "Street frame"
		},
		{
			src: "/images/IMG_0554_Original.jpg",
			alt: "Color study"
		},
		{
			src: "/images/IMG_1523_Original.jpg",
			alt: "Still life"
		}
	],
	reference: {
		name: "Nazmul Hossain Sujan",
		role: "Accountant at Qatar Sports Club",
		phone: "+97470047375",
		phoneDisplay: "+974 7004 7375"
	},
	portrait: "/images/portrait.png",
	resumePdf: "/resume.pdf"
};
var hireInterests = [
	"IT Support",
	"Web Development",
	"Graphic & UI Design",
	"Pharmacy / Clinic systems",
	"Something else"
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-[transform,background-color,color,border-color,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 active:scale-[0.96]", {
	variants: {
		variant: {
			primary: "rounded-full bg-fg text-bg hover:bg-accent hover:text-fg",
			outline: "rounded-full border border-border bg-transparent text-fg hover:border-accent",
			ghost: "rounded-full border border-border bg-surface text-fg hover:border-accent",
			navy: "rounded-full bg-navy text-fg hover:bg-navy-deep"
		},
		size: {
			sm: "h-10 px-4 text-sm",
			md: "h-11 px-5 text-sm",
			lg: "h-12 px-7 text-sm"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var links = [
	{
		to: "/",
		hash: "hero",
		label: "Home"
	},
	{
		to: "/",
		hash: "work",
		label: "Work"
	},
	{
		to: "/resume",
		hash: void 0,
		label: "Resume"
	},
	{
		to: "/",
		hash: "contact",
		label: "Hire"
	}
];
function SiteNav() {
	const { theme, toggle } = useTheme();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const hash = useRouterState({ select: (s) => s.location.hash });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "no-print pointer-events-none fixed inset-x-0 top-0 z-nav flex justify-center p-3 sm:p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "pointer-events-auto inline-flex max-w-full items-center gap-0.5 rounded-full border border-border bg-surface/85 p-1.5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_4%,transparent)] backdrop-blur-md",
			"aria-label": "Primary",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					hash: "hero",
					className: "flex size-9 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-accent-soft to-accent p-px",
					"aria-label": "Home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-full items-center justify-center rounded-full bg-bg font-display text-sm italic text-fg",
						children: profile.initials
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-1 hidden h-4 w-px bg-border sm:block" }),
				links.map((l) => {
					const active = l.to === "/resume" ? pathname === "/resume" : pathname === "/" && (l.hash === "hero" ? !hash || hash === "hero" : hash === l.hash);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						hash: l.hash,
						activeOptions: {
							exact: true,
							includeHash: true
						},
						className: cn("inline-flex h-9 items-center rounded-full px-2 text-sm text-muted transition-colors duration-150 hover:text-fg sm:px-3", l.label === "Hire" && "hidden sm:inline-flex", active && "bg-elevated text-fg"),
						children: l.label
					}, l.label);
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-1 hidden h-4 w-px bg-border sm:block" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: toggle,
					className: "flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:text-fg",
					"aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
					children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: profile.whatsapp,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "inline-flex h-9 items-center gap-1 rounded-full bg-fg px-3.5 text-sm font-medium text-bg transition-transform duration-150 hover:bg-accent hover:text-fg active:scale-[0.96]",
					children: ["Say hi", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
				})
			]
		})
	});
}
//#endregion
export { hireInterests as a, cn as i, SiteNav as n, profile as o, TRACKS as r, Button as t };
