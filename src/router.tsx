import { createRouter } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  return createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    // Scroll to top on navigation and restore the previous position on back/
    // forward (the browser's own restoration is disabled while this is on).
    scrollRestoration: true,
    // Anchor links (#work, #contact, …) are scrolled to by the router's own
    // onRendered handler — no per-page scroll effect needed.
    defaultHashScrollIntoView: { behavior: "smooth", block: "start" },
  });
}
