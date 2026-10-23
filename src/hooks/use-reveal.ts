import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>(once = true) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.classList.add("is-visible");
          if (once) obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  return ref;
}
