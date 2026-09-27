import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import { PORTFOLIO } from "../data.js";
import Img from "./Img.jsx";

export default function Portfolio() {
  const [active, setActive] = useState(PORTFOLIO[0].key);

  const sectionRef = useRef(null);
  const imageWrapRef = useRef(null);

  const item = PORTFOLIO.find(
    (p) => p.key === active
  );

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        animate(section.querySelector(".portfolio__head"), {
          opacity: [0, 1],
          translateY: [35, 0],
          duration: 900,
          ease: "outExpo",
        });

        animate(section.querySelector(".showcase"), {
          opacity: [0, 1],
          translateY: [50, 0],
          scale: [0.98, 1],
          duration: 1100,
          ease: "outExpo",
        });

        observer.unobserve(section);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const showcase = imageWrapRef.current;

    if (!showcase) return;

    const image = showcase.querySelector("img");

    if (!image) return;

    animate(image, {
      opacity: [0, 1],
      scale: [1.06, 1],
      duration: 850,
      ease: "outExpo",
    });
  }, [active]);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="section section--tint"
    >
      <div className="container">

        <div className="portfolio__head anime-hidden">

          <h2 className="section__title">
            Live well, together.
          </h2>

          <div
            className="tabs"
            role="tablist"
            aria-label="Project types"
          >
            {PORTFOLIO.map((p) => (
              <button
                key={p.key}
                role="tab"
                aria-selected={active === p.key}
                className={`tab ${
                  active === p.key ? "is-active" : ""
                }`}
                onClick={() => setActive(p.key)}
              >
                {p.label}
              </button>
            ))}
          </div>

        </div>

        <figure
          ref={imageWrapRef}
          className="showcase anime-hidden"
          role="tabpanel"
        >
          <Img
            key={item.key}
            src={item.image}
            alt={item.title}
            className="showcase__img"
          />

          <figcaption className="showcase__cap">

            <h3>{item.title}</h3>

            <div className="showcase__btns">
              <a
                href="#contact"
                className="btn btn--light"
              >
                Book a visit
              </a>

              <a
                href="#services"
                className="btn btn--ghost"
              >
                Explore all features
              </a>
            </div>

          </figcaption>
        </figure>

      </div>
    </section>
  );
}