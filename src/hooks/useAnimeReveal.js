import { useEffect } from "react";
import { animate, stagger } from "animejs";

export default function useAnimeReveal(ref, options = {}) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const {
      selector,
      translateY = 40,
      translateX = 0,
      delay = 100,
      duration = 850,
    } = options;

    const targets = selector
      ? element.querySelectorAll(selector)
      : element;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        animate(targets, {
          opacity: [0, 1],
          translateY: [translateY, 0],
          translateX: [translateX, 0],
          delay:
            targets.length > 1
              ? stagger(delay)
              : 0,
          duration,
          ease: "outExpo",
        });

        observer.unobserve(element);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref]);
}