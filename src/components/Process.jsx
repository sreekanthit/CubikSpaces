import { useEffect, useRef, useState } from "react";
import { animate, createTimeline, stagger } from "animejs";
import "./Process.css";

const STEPS = [
  {
    number: "01",
    label: "DISCOVER",
    title: "Understand your needs",
    description:
      "We learn about your lifestyle, design preferences, budget and project timeline.",
    details:
      "We begin with a focused discovery session to understand how you live, what you need from each space, your visual preferences, budget priorities and project schedule. This helps us align the design direction before any detailed planning begins.",
  },
  {
    number: "02",
    label: "DESIGN",
    title: "Plan your space",
    description:
      "Our team develops a considered layout, material palette and detailed design.",
    details:
      "We translate the brief into layouts, mood direction, material selections, colour palettes and detailed design decisions. Every element is reviewed for function, flow, proportion and visual consistency before execution.",
  },
  {
    number: "03",
    label: "BUILD",
    title: "Bring it to life",
    description:
      "We coordinate production and installation with care at every stage.",
    details:
      "Once the design is approved, we coordinate production, materials, vendors, site work and installation. Our team tracks progress closely, resolves on-site details and maintains quality throughout the execution process.",
  },
  {
    number: "04",
    label: "HANDOVER",
    title: "Enjoy your home",
    description:
      "After a final quality check, we walk you through your completed space.",
    details:
      "We complete final finishing, styling and quality checks before handover. You receive a walkthrough of the finished space, along with relevant care guidance and post-completion support for a smooth transition into your new interior.",
  },
];

export default function Process() {
  const sectionRef = useRef(null);

  const [activeStep, setActiveStep] = useState(null);

  /* ==================================================
     SECTION INTRO ANIMATION
  ================================================== */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const title = section.querySelector(".process-title");
    const line = section.querySelector(".process-line");
    const steps = section.querySelectorAll(".process-step");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const timeline = createTimeline({
          defaults: {
            ease: "outExpo",
          },
        });

        timeline.add(title, {
          opacity: [0, 1],
          translateY: [45, 0],
          duration: 800,
        });

        timeline.add(
          line,
          {
            scaleX: [0, 1],
            opacity: [0, 1],
            duration: 900,
          },
          250
        );

        timeline.add(
          steps,
          {
            opacity: [0, 1],

            translateY: {
              from: 55,
              to: 0,
              duration: 900,
            },

            scale: {
              from: 0.97,
              to: 1,
              duration: 900,
            },

            delay: stagger(130),

            duration: 900,
          },
          400
        );

        observer.unobserve(section);
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  /* ==================================================
     DETAILS REVEAL ANIMATION
  ================================================== */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || activeStep === null) return;

    const activeCard = section.querySelector(
      `.process-step[data-step="${activeStep}"]`
    );

    if (!activeCard) return;

    const detailsInner = activeCard.querySelector(
      ".process-details-inner"
    );

    const detailsText = activeCard.querySelector(
      ".process-details-text"
    );

    animate(detailsInner, {
      opacity: [0, 1],
      translateY: [16, 0],

      duration: 520,

      ease: "outExpo",
    });

    animate(detailsText, {
      opacity: [0, 1],
      translateY: [10, 0],

      delay: 80,

      duration: 520,

      ease: "outExpo",
    });
  }, [activeStep]);

  /* ==================================================
     OPEN / CLOSE CARD
  ================================================== */

  const toggleStep = (index) => {
    setActiveStep((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="process"
      ref={sectionRef}
      className="process-section"
    >
      <div className="container">

        {/* ================= HEADING ================= */}

        <div className="process-heading">

          <span className="process-eyebrow">
            OUR PROCESS
          </span>

          <h2 className="process-title">
            A clear path from
            <span> idea to home.</span>
          </h2>

          <span className="process-line" />

        </div>

        {/* ================= PROCESS CARDS ================= */}

        <div className="process-steps">

          {STEPS.map((step, index) => {

            const isOpen = activeStep === index;

            return (
              <article
                className={`process-step ${
                  isOpen ? "is-open" : ""
                }`}
                key={step.number}
                data-step={index}
              >

                {/* CARD TOP */}

                <div className="process-step-top">

                  <span className="process-number">
                    {step.number}
                  </span>

                  <span className="process-label">
                    {step.label}
                  </span>

                </div>

                {/* MAIN CONTENT */}

                <div className="process-step-content">

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>

                </div>

                {/* EXPANDED INFORMATION */}

                <div
                  className="process-details"
                  aria-hidden={!isOpen}
                >
                  <div className="process-details-inner">

                    <span className="process-details-label">
                      {step.label} / DETAILS
                    </span>

                    <p className="process-details-text">
                      {step.details}
                    </p>

                  </div>
                </div>

                {/* ARROW BUTTON */}

                <button
                  type="button"
                  className="process-arrow"
                  onClick={() => toggleStep(index)}
                  aria-expanded={isOpen}
                  aria-label={`${
                    isOpen ? "Close" : "Open"
                  } ${step.label} details`}
                >
                  <span aria-hidden="true">
                    ↗
                  </span>
                </button>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}