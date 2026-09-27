import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import "./SpacePlanner.css";

const STEPS = [
  { id: 1, label: "Space" },
  { id: 2, label: "Size" },
  { id: 3, label: "Style" },
  { id: 4, label: "Budget" },
  { id: 5, label: "Details" },
];

const SPACE_OPTIONS = [
  {
    id: "full-home",
    number: "01",
    title: "Full Home",
    description:
      "A complete interior experience, thoughtfully planned from room to room.",
    tag: "Complete interiors",
  },
  {
    id: "kitchen",
    number: "02",
    title: "Kitchen",
    description:
      "Functional kitchens designed around cooking, storage and everyday movement.",
    tag: "Modular & custom",
  },
  {
    id: "wardrobe",
    number: "03",
    title: "Wardrobe",
    description:
      "Storage solutions designed around your space, wardrobe and daily routine.",
    tag: "Smart storage",
  },
];

const SIZE_OPTIONS = [
  {
    id: "1-bhk",
    title: "1 BHK",
    description: "Compact & considered",
  },
  {
    id: "2-bhk",
    title: "2 BHK",
    description: "Balanced everyday living",
  },
  {
    id: "3-bhk",
    title: "3 BHK",
    description: "Space for growing families",
  },
  {
    id: "4-bhk",
    title: "4 BHK+",
    description: "Large homes & villas",
  },
];

const STYLE_OPTIONS = [
  {
    id: "modern",
    title: "Modern",
    description: "Clean lines · refined details",
  },
  {
    id: "warm-minimal",
    title: "Warm Minimal",
    description: "Calm · natural · intentional",
  },
  {
    id: "luxury",
    title: "Luxury",
    description: "Layered · elevated · expressive",
  },
  {
    id: "contemporary",
    title: "Contemporary",
    description: "Current · balanced · timeless",
  },
];

const BUDGET_OPTIONS = [
  {
    id: "5-10",
    title: "₹5L – ₹10L",
    description: "Essential interiors",
  },
  {
    id: "10-20",
    title: "₹10L – ₹20L",
    description: "Complete design & execution",
  },
  {
    id: "20-35",
    title: "₹20L – ₹35L",
    description: "Premium interiors",
  },
  {
    id: "35-plus",
    title: "₹35L+",
    description: "Bespoke luxury interiors",
  },
];

export default function SpacePlanner() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    space: "",
    size: "",
    style: "",
    budget: "",
    name: "",
    phone: "",
    email: "",
  });

  /* ==============================================
     SECTION ENTRANCE
  ============================================== */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const eyebrow = section.querySelector(".planner-eyebrow");
    const heading = section.querySelector(".planner-heading");
    const intro = section.querySelector(".planner-intro");
    const shell = section.querySelector(".planner-shell");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        animate(eyebrow, {
          opacity: [0, 1],
          translateY: [18, 0],
          duration: 600,
          ease: "outExpo",
        });

        animate(heading, {
          opacity: [0, 1],
          translateY: [40, 0],
          duration: 900,
          delay: 100,
          ease: "outExpo",
        });

        animate(intro, {
          opacity: [0, 1],
          translateY: [25, 0],
          duration: 750,
          delay: 220,
          ease: "outExpo",
        });

        animate(shell, {
          opacity: [0, 1],
          translateY: [50, 0],
          duration: 1000,
          delay: 320,
          ease: "outExpo",
        });

        observer.unobserve(section);
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /* ==============================================
     STEP ENTRANCE
  ============================================== */

  useEffect(() => {
    const content = contentRef.current;

    if (!content) return;

    const children = content.querySelectorAll(
      ".planner-animate"
    );

    animate(children, {
      opacity: [0, 1],
      translateY: [24, 0],
      delay: stagger(70),
      duration: 650,
      ease: "outExpo",
    });
  }, [step]);

  const updateForm = (key, value) => {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const goNext = () => {
    if (step < 5) {
      setStep((current) => current + 1);
    }
  };

  const goBack = () => {
    if (step > 1) {
      setStep((current) => current - 1);
    }
  };

  const chooseAndContinue = (key, value) => {
    updateForm(key, value);

    setTimeout(() => {
      goNext();
    }, 180);
  };

  const progress = (step / STEPS.length) * 100;

  return (
    <section
      ref={sectionRef}
      className="planner-section"
      id="space-planner"
    >
      <div className="container">

        {/* HEADER */}

        <div className="planner-header">

          <div>
            <span className="planner-eyebrow">
              YOUR SPACE, YOUR WAY
            </span>

            <h2 className="planner-heading">
              Start with your space.
              <span> We’ll shape the rest.</span>
            </h2>
          </div>

          <p className="planner-intro">
            Tell us a little about your home and
            what you’re looking for. We’ll use it
            to understand the right design direction
            for your project.
          </p>

        </div>

        {/* MAIN SHELL */}

        <div className="planner-shell">

          {/* TOP BAR */}

          <div className="planner-topbar">

            <div className="planner-brand">
              <span>THE CUBIK SPACES</span>
              <small>INTERIOR PLANNER</small>
            </div>

            <div className="planner-step-count">
              STEP {String(step).padStart(2, "0")}
              <span>
                {" "}
                / {String(STEPS.length).padStart(2, "0")}
              </span>
            </div>

          </div>

          {/* PROGRESS */}

          <div className="planner-progress">
            <span
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          {/* STEP NAV */}

          <div className="planner-step-nav">

            {STEPS.map((item) => (
              <div
                key={item.id}
                className={`planner-step-indicator ${
                  step === item.id
                    ? "is-current"
                    : ""
                } ${
                  step > item.id
                    ? "is-complete"
                    : ""
                }`}
              >
                <span>
                  {String(item.id).padStart(2, "0")}
                </span>

                <small>
                  {item.label}
                </small>
              </div>
            ))}

          </div>

          {/* CONTENT */}

          <div
            ref={contentRef}
            className="planner-content"
          >

            {/* STEP 1 */}

            {step === 1 && (
              <div className="planner-step">

                <div className="planner-question planner-animate">
                  <span>01 / SPACE</span>

                  <h3>
                    What are we
                    <em> designing?</em>
                  </h3>

                  <p>
                    Choose the space you’d like us
                    to help you transform.
                  </p>
                </div>

                <div className="planner-space-grid">

                  {SPACE_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      className={`planner-space-card planner-animate ${
                        form.space === option.id
                          ? "is-selected"
                          : ""
                      }`}
                      onClick={() =>
                        chooseAndContinue(
                          "space",
                          option.id
                        )
                      }
                    >
                      <div className="planner-card-top">
                        <span>
                          {option.number}
                        </span>

                        <small>
                          {option.tag}
                        </small>
                      </div>

                      <div>
                        <h4>
                          {option.title}
                        </h4>

                        <p>
                          {option.description}
                        </p>
                      </div>

                      <span className="planner-card-arrow">
                        ↗
                      </span>
                    </button>
                  ))}

                </div>

              </div>
            )}

            {/* STEP 2 */}

            {step === 2 && (
              <div className="planner-step">

                <div className="planner-question planner-animate">
                  <span>02 / HOME SIZE</span>

                  <h3>
                    Tell us about
                    <em> your home.</em>
                  </h3>

                  <p>
                    Select the size that best
                    represents your space.
                  </p>
                </div>

                <div className="planner-option-grid">

                  {SIZE_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      className={`planner-option planner-animate ${
                        form.size === option.id
                          ? "is-selected"
                          : ""
                      }`}
                      onClick={() =>
                        chooseAndContinue(
                          "size",
                          option.id
                        )
                      }
                    >
                      <span className="planner-option-circle" />

                      <h4>
                        {option.title}
                      </h4>

                      <p>
                        {option.description}
                      </p>
                    </button>
                  ))}

                </div>

              </div>
            )}

            {/* STEP 3 */}

            {step === 3 && (
              <div className="planner-step">

                <div className="planner-question planner-animate">
                  <span>03 / STYLE</span>

                  <h3>
                    What feels like
                    <em> home?</em>
                  </h3>

                  <p>
                    Pick the direction that feels
                    closest to your taste.
                  </p>
                </div>

                <div className="planner-option-grid">

                  {STYLE_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      className={`planner-option planner-animate ${
                        form.style === option.id
                          ? "is-selected"
                          : ""
                      }`}
                      onClick={() =>
                        chooseAndContinue(
                          "style",
                          option.id
                        )
                      }
                    >
                      <span className="planner-option-circle" />

                      <h4>
                        {option.title}
                      </h4>

                      <p>
                        {option.description}
                      </p>
                    </button>
                  ))}

                </div>

              </div>
            )}

            {/* STEP 4 */}

            {step === 4 && (
              <div className="planner-step">

                <div className="planner-question planner-animate">
                  <span>04 / BUDGET</span>

                  <h3>
                    Let’s understand
                    <em> the investment.</em>
                  </h3>

                  <p>
                    A starting range helps us
                    recommend the right materials
                    and design approach.
                  </p>
                </div>

                <div className="planner-option-grid">

                  {BUDGET_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      className={`planner-option planner-animate ${
                        form.budget === option.id
                          ? "is-selected"
                          : ""
                      }`}
                      onClick={() =>
                        chooseAndContinue(
                          "budget",
                          option.id
                        )
                      }
                    >
                      <span className="planner-option-circle" />

                      <h4>
                        {option.title}
                      </h4>

                      <p>
                        {option.description}
                      </p>
                    </button>
                  ))}

                </div>

              </div>
            )}

            {/* STEP 5 */}

            {step === 5 && (
              <div className="planner-step planner-final">

                <div className="planner-question planner-animate">

                  <span>
                    05 / LET’S CONNECT
                  </span>

                  <h3>
                    Your home starts
                    <em> here.</em>
                  </h3>

                  <p>
                    Leave your details and our
                    design team can continue the
                    conversation with you.
                  </p>

                </div>

                <div className="planner-form planner-animate">

                  <label>
                    <span>Your name</span>

                    <input
                      type="text"
                      value={form.name}
                      onChange={(event) =>
                        updateForm(
                          "name",
                          event.target.value
                        )
                      }
                      placeholder="Enter your name"
                    />
                  </label>

                  <label>
                    <span>Phone number</span>

                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(event) =>
                        updateForm(
                          "phone",
                          event.target.value
                        )
                      }
                      placeholder="+91"
                    />
                  </label>

                  <label>
                    <span>Email address</span>

                    <input
                      type="email"
                      value={form.email}
                      onChange={(event) =>
                        updateForm(
                          "email",
                          event.target.value
                        )
                      }
                      placeholder="you@email.com"
                    />
                  </label>

                  <button
                    type="button"
                    className="planner-submit"
                  >
                    <span>
                      Request a consultation
                    </span>

                    <span>
                      ↗
                    </span>
                  </button>

                  <small className="planner-privacy">
                    No spam. Just a conversation
                    about your space.
                  </small>

                </div>

              </div>
            )}

          </div>

          {/* BOTTOM */}

          <div className="planner-footer">

            <button
              type="button"
              className="planner-back"
              onClick={goBack}
              disabled={step === 1}
            >
              ← Back
            </button>

            <div className="planner-selection">

              {form.space && (
                <span>
                  {form.space
                    .replace("-", " ")
                    .toUpperCase()}
                </span>
              )}

              {form.size && (
                <span>
                  {form.size
                    .replace("-", " ")
                    .toUpperCase()}
                </span>
              )}

              {form.style && (
                <span>
                  {form.style
                    .replace("-", " ")
                    .toUpperCase()}
                </span>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}