import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import "./IntroLoader.css";

export default function IntroLoader({ onComplete }) {
  const loaderRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;

    if (!loader) return;

    const letters = loader.querySelectorAll(".intro-letter");
    const line = loader.querySelector(".intro-line");
    const subtitle = loader.querySelector(".intro-subtitle");

    // =====================================
    // MAIN PART — INDIVIDUAL PROPERTY PARAMS
    // =====================================

    animate(letters, {
      opacity: {
        from: 0,
        to: 1,
        duration: 500,
      },

      translateY: {
        from: 45,
        to: 0,
        duration: 900,
      },

      rotateX: {
        from: 70,
        to: 0,
        duration: 1000,
      },

      scale: {
        from: 0.85,
        to: 1,
        duration: 850,
      },

      delay: stagger(55),

      ease: "outExpo",
    });

    // Gold line animation
    animate(line, {
      scaleX: {
        from: 0,
        to: 1,
        duration: 900,
      },

      opacity: {
        from: 0,
        to: 1,
        duration: 400,
      },

      delay: 700,

      ease: "outExpo",
    });

    // Subtitle animation
    animate(subtitle, {
      opacity: {
        from: 0,
        to: 1,
        duration: 700,
      },

      translateY: {
        from: 15,
        to: 0,
        duration: 700,
      },

      delay: 950,

      ease: "outExpo",
    });

    // Loader exit
    const exitTimer = setTimeout(() => {
      animate(loader, {
        opacity: {
          from: 1,
          to: 0,
          duration: 650,
        },

        scale: {
          from: 1,
          to: 1.03,
          duration: 650,
        },

        ease: "inOutQuad",

        onComplete: () => {
          onComplete?.();
        },
      });
    }, 1900);

    return () => clearTimeout(exitTimer);

  }, [onComplete]);

  const title = "THE CUBIK SPACES";

  return (
    <div ref={loaderRef} className="intro-loader">

      <div className="intro-content">

        <div
          className="intro-title"
          aria-label={title}
        >
          {title.split("").map((letter, index) => (
            <span
              key={index}
              className={`intro-letter ${
                letter === " " ? "intro-space" : ""
              }`}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>

        <div className="intro-line" />

        <p className="intro-subtitle">
          INTERIORS · DESIGN · LIVING
        </p>

      </div>

    </div>
  );
}