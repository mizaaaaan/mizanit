import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";
import { SiteNav } from "@/components/site-nav";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <HomePage />
      </main>
    </>
  );
}
