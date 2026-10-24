"use client";

import { animate, inView, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Show reading progress and reveal page sections as they enter the viewport. */
export default function MotionEnhancer() {
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    if (reduceMotion) return;

    const sections = document.querySelectorAll<HTMLElement>(
      "main section:not(.hero), main > .section, main > .capability-strip",
    );
    const cleanups: Array<() => void> = [];

    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(18px)";
      cleanups.push(
        inView(
          section,
          (element) => {
            animate(
              element,
              { opacity: 1, y: 0 },
              { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            );
          },
          { amount: 0.12 },
        ),
      );
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [pathname, reduceMotion]);

  return (
    <div className="reading-progress" aria-hidden="true">
      <span />
    </div>
  );
}
