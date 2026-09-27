import { useEffect, useRef } from "react";
import { createTimeline, stagger } from "animejs";
import "./Process.css";

const STEPS = [
  {
    number: "01",
    label: "DISCOVER",
    title: "Understand your needs",
    description:
      "We learn about your lifestyle, design preferences, budget and project timeline.",
  },
  {
    number: "02",
    label: "DESIGN",
    title: "Plan your space",
    description:
      "Our team develops a considered layout, material palette and detailed design.",
  },
  {
    number: "03",
    label: "BUILD",
    title: "Bring it to life",
    description:
      "We coordinate production and installation with care at every stage.",
  },
  {
    number: "04",
    label: "HANDOVER",
    title: "Enjoy your home",
    description:
      "After a final quality check, we walk you through your completed space.",
  },
];

export default function Process() {
  const sectionRef = useRef(null);

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

        // Section title
        timeline.add(title, {
          opacity: [0, 1],
          translateY: [45, 0],
          duration: 800,
        });

        // Gold line
        timeline.add(
          line,
          {
            scaleX: [0, 1],
            opacity: [0, 1],
            duration: 900,
          },
          250
        );

        // Steps one-by-one
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

  return (
    <section
      id="process"
      ref={sectionRef}
      className="process-section"
    >
      <div className="container">

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

        <div className="process-steps">

          {STEPS.map((step) => (
            <article
              className="process-step"
              key={step.number}
            >
              <div className="process-step-top">
                <span className="process-number">
                  {step.number}
                </span>

                <span className="process-label">
                  {step.label}
                </span>
              </div>

              <div className="process-step-content">
                <h3>{step.title}</h3>

                <p>
                  {step.description}
                </p>
              </div>

              <div className="process-arrow">
                ↗
              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}