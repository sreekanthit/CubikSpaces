import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { FEATURE_POINTS, IMAGES } from "../data.js";
import Img from "./Img.jsx";

export default function Feature() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        animate(section.querySelector(".feature__img"), {
          opacity: [0, 1],
          translateX: [-55, 0],
          scale: [1.04, 1],
          duration: 1100,
          ease: "outExpo",
        });

        animate(
          section.querySelectorAll(".feature-reveal"),
          {
            opacity: [0, 1],
            translateY: [35, 0],
            delay: stagger(120),
            duration: 850,
            ease: "outExpo",
          }
        );

        observer.unobserve(section);
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section section--tint"
    >
      <div className="container feature">

        <Img
          src={IMAGES.feature}
          alt="Sunlit dining area with a wooden table"
          className="feature__img anime-hidden"
        />

        <div className="feature__text">

          <h2 className="feature-reveal anime-hidden">
            Interiors planned around how you actually live.
          </h2>

          <p className="feature-reveal anime-hidden">
            Support for every room, from first sketch to final handover.
          </p>

          <ul className="ticks">
            {FEATURE_POINTS.map((p) => (
              <li
                key={p}
                className="feature-reveal anime-hidden"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="11"
                    fill="currentColor"
                    opacity=".12"
                  />

                  <path
                    d="M7 12.5l3.5 3.5L17 9"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {p}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="btn feature-reveal anime-hidden"
          >
            Get started
          </a>

        </div>
      </div>
    </section>
  );
}