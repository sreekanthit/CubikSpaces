import { useEffect, useRef } from "react";
import { createTimeline } from "animejs";
import "./Stats.css";

const stats = [
  { value: 150, suffix: "+", label: "Happy Clients" },
  { value: 220, suffix: "+", label: "Projects Completed" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 4.9, suffix: "", label: "Average Rating", decimal: true },
];

const Stats = () => {
  const sectionRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;

        startedRef.current = true;

        const counters = section.querySelectorAll(".stat-number");

        const timeline = createTimeline({
          defaults: {
            duration: 1400,
            ease: "outExpo",
          },
        });

        counters.forEach((counter, index) => {
          const target = Number(counter.dataset.value);
          const decimal = counter.dataset.decimal === "true";
          const suffix = counter.dataset.suffix || "";

          const state = { value: 0 };

          timeline.add(
            state,
            {
              value: target,
              duration: 1600,
              ease: "outExpo",

              onUpdate: () => {
                counter.textContent = decimal
                  ? `${state.value.toFixed(1)}${suffix}`
                  : `${Math.floor(state.value)}${suffix}`;
              },
            },
            index * 130
          );
        });

        observer.unobserve(section);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-intro">
        <span className="stats-eyebrow">THE CUBIK SPACES</span>

        <h2>
          Interiors planned around
          <br />
          <em>how you actually live.</em>
        </h2>

        <p>
          Thoughtful spaces shaped around your routines, comfort,
          personality and the way you experience home every day.
        </p>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <div
              className="stat-number"
              data-value={stat.value}
              data-suffix={stat.suffix}
              data-decimal={stat.decimal || false}
            >
              0{stat.suffix}
            </div>

            <div className="stat-line" />

            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;