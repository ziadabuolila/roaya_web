"use client";

import { useEffect } from "react";

/** Progressive enhancement: reveal content as it enters the viewport and show reading progress. */
export default function MotionEnhancer() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const targets = document.querySelectorAll<HTMLElement>(
      "main > section, main .service-card, main .value-card, main .developer-card, main .team-role, main .partner-principles article, main .faq-item, main .audience-grid article",
    );

    if (!reduceMotion && "IntersectionObserver" in window) {
      targets.forEach((element, index) => {
        element.classList.add("motion-ready");
        element.style.setProperty(
          "--reveal-delay",
          `${Math.min(index % 4, 3) * 70}ms`,
        );
      });
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
      );
      targets.forEach((element) => observer.observe(element));
      return () => observer.disconnect();
    }
    targets.forEach((element) => element.classList.add("is-visible"));
  }, []);

  return (
    <div className="reading-progress" aria-hidden="true">
      <span />
    </div>
  );
}
