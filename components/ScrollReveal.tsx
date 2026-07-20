"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Fades in every element marked data-reveal as it enters the viewport.
 * Mounted once in the root layout, which persists across client-side route
 * changes — re-runs on pathname change so pages navigated to via next/link
 * (no remount) still get their sections observed.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
