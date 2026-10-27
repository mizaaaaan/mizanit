import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    // Theme tokens, not `dark:` — the app themes via `data-theme` on <html>,
    // so Tailwind's prefers-color-scheme dark variant never matches and these
    // classes would render the wrong palette for the active theme.
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-bg px-6 text-center text-fg">
      <span className="text-red-500" aria-hidden="true">
        <TriangleAlert className="size-10" strokeWidth={2} />
      </span>
      <h1 className="text-lg font-semibold">Something went wrong</h1>
      <p className="max-w-md text-sm break-words text-muted">
        {error instanceof Error && error.message
          ? error.message
          : "An unexpected error occurred. Try reloading the page."}
      </p>
    </main>
  );
}
