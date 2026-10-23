export type Track = "it" | "web" | "healthcare" | "pharmacy";

export const TRACKS: { id: Track | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "it", label: "IT & Support" },
  { id: "web", label: "Web & Design" },
  { id: "healthcare", label: "Healthcare" },
  { id: "pharmacy", label: "Pharmacy" },
];

export const profile = {
  name: "Md Mizanur Rahman",
  shortName: "Mizan",
  initials: "MR",
  title: "IT Specialist",
  location: "Doha, Qatar",
  eyebrow: "Collection '26",
  tagline:
    "A decade of hands-on experience spanning IT support, web development, and design — carried from pharmacy operations and patient care into building systems that work.",
  about:
    "Versatile IT Specialist skilled in software, web development, design, and technology solutions. Based in Doha, Qatar, with hands-on experience spanning IT support, patient care, and pharmacy operations.",
  phone: "+97450705260",
  phoneDisplay: "+974 5070 5260",
  email: "mizan321@hotmail.com",
  website: "https://mizanht.netlify.app",
  websiteLabel: "mizanht.netlify.app",
  whatsapp:
    "https://wa.me/97450705260?text=Hello%20Mizan%2C%20I%20found%20your%20portfolio.",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mizaaaan/" },
    { label: "GitHub", href: "https://github.com/mizaaaan" },
    { label: "YouTube", href: "https://www.youtube.com/@Mizaaaan" },
    { label: "Facebook", href: "https://www.facebook.com/mizaaaan" },
  ],
  roles: ["IT Specialist", "Web Developer", "Pharmacist", "Digital Marketer", "Designer"],
  languages: [
    { name: "English", level: 95 },
    { name: "Arabic", level: 82 },
    { name: "Urdu / Hindi", level: 70 },
  ],
  skills: [
    { name: "IT Support & Troubleshooting", track: "it" as Track },
    { name: "Web Development", track: "web" as Track },
    { name: "Graphic Design & UI Design", track: "web" as Track },
    { name: "Computer & Office Applications", track: "it" as Track },
    { name: "First Aid & Emergency Care", track: "healthcare" as Track },
    { name: "Medication Knowledge & Nursing", track: "pharmacy" as Track },
  ],
  stats: [
    { value: "10+", label: "Years experience" },
    { value: "7+", label: "Certifications" },
    { value: "98%", label: "Patient satisfaction" },
    { value: "3", label: "Languages" },
  ],
  experience: [
    {
      period: "2016 – 2016",
      title: "IT Support Technician",
      org: "Noakhali Technical Training Center",
      desc: "Provided technical support, system maintenance, troubleshooting, software installation, and user assistance.",
      track: "it" as Track,
    },
    {
      period: "2017 – 2017",
      title: "Web Development",
      org: "Learning & Earning Development Project",
      desc: "Completed hands-on training in web design and development.",
      track: "web" as Track,
    },
    {
      period: "2018 – 2021",
      title: "Medical Assistant",
      org: "Al-Habib Hospital Pvt.",
      desc: "Administered precise injections, emergency treatment, and first aid for patient care.",
      track: "healthcare" as Track,
    },
    {
      period: "2021 – 2022",
      title: "Medical Record Assistant",
      org: "Life Line Hospital Pvt.",
      desc: "Assessed, diagnosed, and treated patients; provided care resulting in 98% satisfaction.",
      track: "healthcare" as Track,
    },
    {
      period: "2022 – 2023",
      title: "Owner & Pharmacist",
      org: "Dream Pharmacy",
      desc: "Managed prescriptions, patient consultations, and accurate medication dispensing.",
      track: "pharmacy" as Track,
    },
    {
      period: "2023 – 2025",
      title: "Web Design & Digital Marketing Specialist",
      org: "Cube Tech",
      desc: "Designed responsive websites and implemented digital marketing strategies to increase engagement.",
      track: "web" as Track,
    },
    {
      period: "2025 – 2026",
      title: "Pharmacy Manager",
      org: "Shah Ali Pharmacy",
      desc: "Handled medication dispensing, patient guidance, prescription processing, and pharmacy operations.",
      track: "pharmacy" as Track,
    },
  ],
  education: [
    {
      period: "2016 – 2026",
      title: "Bachelor of Science in Chemistry",
      org: "National University of Bangladesh",
      desc: "Focused on chemical analysis and laboratory techniques.",
    },
    {
      period: "2016 – 2017",
      title: "Certificate in Health Technology and Services",
      org: "Noakhali Paramedical College",
      desc: "Enhanced healthcare delivery skills across clinical settings.",
    },
  ],
  certifications: [
    { name: "IT Support Technician", track: "it" as Track },
    { name: "Web Development Course", track: "web" as Track },
    { name: "Certificate in Pharma Technology", track: "pharmacy" as Track },
    { name: "Pharmacy Trade License", track: "pharmacy" as Track },
    { name: "Diploma in Nursing", track: "healthcare" as Track },
    { name: "Professional Driving License", track: "it" as Track },
    { name: "NSDA Driving, Level-3", track: "it" as Track },
  ],
  services: [
    {
      title: "IT Support",
      desc: "Troubleshooting, system maintenance, software setup, and day-to-day user assistance.",
      track: "it" as Track,
    },
    {
      title: "Web Development",
      desc: "From layout to launch — sites and interfaces that are clear, fast, and usable.",
      track: "web" as Track,
    },
    {
      title: "Graphic & UI Design",
      desc: "Visual systems, brand pieces, and interface design with restraint.",
      track: "web" as Track,
    },
    {
      title: "Digital Marketing",
      desc: "Campaigns, content, and search strategy that build reach and bring in enquiries.",
      track: "web" as Track,
    },
    {
      title: "Pharmacy Operations",
      desc: "Prescription accuracy, patient consultation, and running a dispensary end to end.",
      track: "pharmacy" as Track,
    },
    {
      title: "Clinical Support",
      desc: "First aid, emergency care, and the calm of someone who has worked the floor.",
      track: "healthcare" as Track,
    },
    {
      title: "Office Systems",
      desc: "Computer and office applications that keep a clinic, shop, or team moving.",
      track: "it" as Track,
    },
  ],
  websites: [
    {
      title: "Next Millionaire",
      url: "https://nextmillionaireqr.com/",
      host: "nextmillionaireqr.com",
      tag: "Co-operative · Corporate site",
      desc: "Marketing site for a registered co-operative — programs, leadership, and a commercial fleet driver program with a member portal.",
      stack: ["Web design", "Development", "Branding"],
      image: "/images/next-millionaire-website.jpg",
    },
    {
      title: "Next Millionaire Finance",
      url: "https://finance.nextmillionaireqr.com/",
      host: "finance.nextmillionaireqr.com",
      tag: "Internal tool · Dashboard",
      desc: "Monthly balance accountability ledger — tracks rent income, contributions, car expenses, and per-member dividends in one place.",
      stack: ["Web app", "Data & reporting"],
      image: "/images/nm-finance.jpg",
    },
    {
      title: "Mizan HT",
      url: "https://mizanht.netlify.app/",
      host: "mizanht.netlify.app",
      tag: "Portfolio · Personal site",
      desc: "My health-technology portfolio — services, certifications, and clinical background presented as a clean one-pager.",
      stack: ["Web design", "Development"],
      image: "/images/mizanht.jpg",
    },
    {
      title: "IPABD — Salat Tracker",
      url: "https://mizaaaan.github.io/ipabd/apps/apps.html?id=1",
      host: "mizaaaan.github.io/ipabd",
      tag: "iOS app library · Store page",
      desc: "Store page for Salat Tracker — prayer dashboard, Qibla compass, and Quran hub — with .ipa downloads and wishlist, fully client-side.",
      stack: ["iOS store", "GitHub Pages", "Client-side"],
      image: "/images/ipabd-salat-tracker.jpg",
    },
    {
      title: "IPABD — Next Millionaire",
      url: "https://mizaaaan.github.io/ipabd/apps/apps.html?id=2",
      host: "mizaaaan.github.io/ipabd",
      tag: "iOS app library · Store page",
      desc: "Companion .ipa store page for the Next Millionaire co-operative app — screenshots, versioning, and one-tap downloads.",
      stack: ["iOS store", "GitHub Pages", "Client-side"],
      image: "/images/ipabd-next-millionaire.jpg",
    },
    {
      title: "Dream Pharmacy",
      url: "https://mizaaaan.github.io/dreampharmacy-whatsapp-ecom/",
      host: "mizaaaan.github.io/dreampharmacy-whatsapp-ecom",
      tag: "E-commerce · WhatsApp ordering",
      desc: "Online storefront for my pharmacy — browse products, build an order chit, and check out via WhatsApp, phone, or cash on delivery.",
      stack: ["E-commerce", "WhatsApp API", "Front-end"],
      image: "/images/dream-pharmacy.jpg",
    },
    {
      title: "Aljaloui Transport",
      url: "https://aljaloui.mizan962035.workers.dev/",
      host: "aljaloui.mizan962035.workers.dev",
      tag: "Logistics · Business site",
      desc: "Freight and last-mile delivery site with a live delivery-fare estimator and a book-a-call funnel for shipments across Doha.",
      stack: ["Web design", "Development", "Fare estimator"],
      image: "/images/aljaloui-website.jpg",
    },
  ],
  reference: {
    name: "Nazmul Hossain Sujan",
    role: "Accountant at Qatar Sports Club",
    phone: "+97470047375",
    phoneDisplay: "+974 7004 7375",
  },
  portrait: "/images/portrait.png",
  resumePdf: "/resume.pdf",
} as const;

export type HireInterest =
  | "IT Support"
  | "Web Development"
  | "Graphic & UI Design"
  | "Pharmacy / Clinic systems"
  | "Something else";

export const hireInterests: HireInterest[] = [
  "IT Support",
  "Web Development",
  "Graphic & UI Design",
  "Pharmacy / Clinic systems",
  "Something else",
];
