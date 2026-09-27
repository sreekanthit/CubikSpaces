import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import { IMAGES } from "../data.js";
import Img from "./Img.jsx";
import "./Feature.css";

const HOTSPOTS = [
  {
    id: "layout",
    number: "01",
    title: "SMART LAYOUT",
    text: "Every inch is planned around movement, comfort and everyday routines.",
    className: "feature-hotspot--layout",
  },
  {
    id: "storage",
    number: "02",
    title: "SMART STORAGE",
    text: "Beautiful storage solutions designed around what you actually use.",
    className: "feature-hotspot--storage",
  },
  {
    id: "materials",
    number: "03",
    title: "MATERIALS",
    text: "Thoughtful finishes selected for warmth, durability and timeless character.",
    className: "feature-hotspot--materials",
  },
  {
    id: "lighting",
    number: "04",
    title: "LIGHTING",
    text: "Layered lighting creates atmosphere while supporting the way each room works.",
    className: "feature-hotspot--lighting",
  },
];

export default function Feature() {
  const sectionRef = useRef(null);
  const [activeHotspot, setActiveHotspot] = useState("layout");

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const eyebrow =
      section.querySelector(".blueprint-eyebrow");

    const title =
      section.querySelector(".blueprint-title");

    const intro =
      section.querySelector(".blueprint-intro");

    const image =
      section.querySelector(".blueprint-image");

    const frame =
      section.querySelector(".blueprint-image-frame");

    const hotspots =
      section.querySelectorAll(".feature-hotspot");

    const details =
      section.querySelector(".blueprint-details");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        animate(eyebrow, {
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 650,
          ease: "outExpo",
        });

        animate(title, {
          opacity: [0, 1],
          translateY: [45, 0],
          duration: 900,
          delay: 100,
          ease: "outExpo",
        });

        animate(intro, {
          opacity: [0, 1],
          translateY: [25, 0],
          duration: 750,
          delay: 250,
          ease: "outExpo",
        });

        animate(frame, {
          opacity: [0, 1],
          clipPath: [
            "inset(0 100% 0 0)",
            "inset(0 0% 0 0)",
          ],
          duration: 1200,
          delay: 300,
          ease: "outExpo",
        });

        animate(image, {
          scale: [1.08, 1],
          duration: 1500,
          delay: 300,
          ease: "outExpo",
        });

        animate(hotspots, {
          opacity: [0, 1],
          scale: [0.6, 1],
          delay: stagger(140, {
            start: 900,
          }),
          duration: 650,
          ease: "outBack",
        });

        animate(details, {
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 800,
          delay: 1150,
          ease: "outExpo",
        });

        observer.unobserve(section);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  const active =
    HOTSPOTS.find(
      (item) => item.id === activeHotspot
    ) || HOTSPOTS[0];

  return (
    <section
      ref={sectionRef}
      className="blueprint-section"
    >
      <div className="container">

        {/* Heading */}

        <div className="blueprint-heading">

          <div>
            <span className="blueprint-eyebrow">
              DESIGNED FOR REAL LIFE
            </span>

            <h2 className="blueprint-title">
              Interiors planned around
              <span> how you actually live.</span>
            </h2>
          </div>

          <p className="blueprint-intro">
            We design beyond appearances —
            considering movement, storage,
            materials and light to create spaces
            that feel effortless every day.
          </p>

        </div>


        {/* Main interactive image */}

        <div className="blueprint-image-frame">

          <Img
            src={IMAGES.feature}
            alt="Interior designed around everyday living"
            className="blueprint-image"
          />


          {/* Architectural corner lines */}

          <span className="blueprint-corner blueprint-corner--tl" />
          <span className="blueprint-corner blueprint-corner--tr" />
          <span className="blueprint-corner blueprint-corner--bl" />
          <span className="blueprint-corner blueprint-corner--br" />


          {/* Image label */}

          <div className="blueprint-image-label">
            <span>THE CUBIK SPACES</span>
            <span>INTERIOR STUDY / 01</span>
          </div>


          {/* Hotspots */}

          {HOTSPOTS.map((hotspot) => (
            <button
              key={hotspot.id}
              type="button"
              className={`
                feature-hotspot
                ${hotspot.className}
                ${
                  activeHotspot === hotspot.id
                    ? "is-active"
                    : ""
                }
              `}
              onMouseEnter={() =>
                setActiveHotspot(hotspot.id)
              }
              onFocus={() =>
                setActiveHotspot(hotspot.id)
              }
              onClick={() =>
                setActiveHotspot(hotspot.id)
              }
              aria-label={hotspot.title}
            >
              <span className="hotspot-ring">
                <span className="hotspot-dot" />
              </span>

              <span className="hotspot-label">
                {hotspot.title}
              </span>
            </button>
          ))}


          {/* Active information */}

          <div className="blueprint-details">

            <span className="blueprint-details-number">
              {active.number}
            </span>

            <div>
              <span className="blueprint-details-label">
                {active.title}
              </span>

              <p>
                {active.text}
              </p>
            </div>

          </div>

        </div>


        {/* Bottom attributes */}

        <div className="blueprint-values">

          <div className="blueprint-value">
            <span>01</span>

            <div>
              <h3>Thoughtful layouts</h3>
              <p>
                Spaces planned around how
                you naturally move and live.
              </p>
            </div>
          </div>


          <div className="blueprint-value">
            <span>02</span>

            <div>
              <h3>Natural materials</h3>
              <p>
                Finishes selected for beauty,
                durability and warmth.
              </p>
            </div>
          </div>


          <div className="blueprint-value">
            <span>03</span>

            <div>
              <h3>Everyday comfort</h3>
              <p>
                Design decisions that make
                daily living feel effortless.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}