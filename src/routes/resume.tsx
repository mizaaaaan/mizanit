import { createFileRoute } from "@tanstack/react-router";
import { ResumeStudio } from "@/components/resume-studio";
import { SiteNav } from "@/components/site-nav";

export const Route = createFileRoute("/resume")({
  component: ResumePage,
  head: () => ({
    meta: [{ title: "Resume — Md Mizanur Rahman" }],
  }),
});

function ResumePage() {
  return (
    <>
      <SiteNav />
      <main>
        <ResumeStudio />
      </main>
    </>
  );
}
