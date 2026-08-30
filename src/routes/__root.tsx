import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { ThemeProvider } from "@/lib/theme";
import appCss from "../styles.css?url";

const APP_NAME = "Md Mizanur Rahman";
const THEME_BOOT = `(function(){try{var t=localStorage.getItem("mizan-theme");if(!t){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme="dark";}})();`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${APP_NAME} — IT Specialist` },
      {
        name: "description",
        content:
          "Md Mizanur Rahman — IT Specialist based in Doha, Qatar. Portfolio covering IT support, web development, design, and a decade of multidisciplinary experience.",
      },
      { name: "theme-color", content: "#0a0a0b" },
      { property: "og:title", content: APP_NAME },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <Outlet />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}
