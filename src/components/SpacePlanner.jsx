import { useEffect, useMemo, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import "./SpacePlanner.css";

/* =========================================================
   DATA
========================================================= */

const SPACE_OPTIONS = [
  {
    id: "full-home",
    number: "01",
    title: "Full Home",
    tag: "Complete interiors",
    description:
      "A complete interior experience, thoughtfully planned from room to room.",
  },
  {
    id: "kitchen",
    number: "02",
    title: "Kitchen",
    tag: "Modular & custom",
    description:
      "A functional kitchen planned around cooking, storage and movement.",
  },
  {
    id: "wardrobe",
    number: "03",
    title: "Wardrobe",
    tag: "Smart storage",
    description:
      "Storage designed around your room, wardrobe and everyday routine.",
  },
];

const BHK_OPTIONS = [
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
    description: "Designed for growing families",
  },
  {
    id: "4-bhk",
    title: "4 BHK+",
    description: "Large homes & villas",
  },
];

const KITCHEN_OPTIONS = [
  {
    id: "l-shaped",
    title: "L-Shaped",
    description:
      "An efficient corner layout with an open and flexible workflow.",
    diagram: "l-shaped",
  },
  {
    id: "straight",
    title: "Straight",
    description:
      "A clean single-wall kitchen designed for compact spaces.",
    diagram: "straight",
  },
  {
    id: "u-shaped",
    title: "U-Shaped",
    description:
      "Generous worktop and storage arranged across three sides.",
    diagram: "u-shaped",
  },
  {
    id: "parallel",
    title: "Parallel",
    description:
      "Two working counters create an efficient galley-style kitchen.",
    diagram: "parallel",
  },
];

const WARDROBE_OPTIONS = [
  {
    id: "window-seating",
    title: "Window Seating",
    description:
      "Wardrobe storage composed around a comfortable window seat.",
    diagram: "window-seating",
  },
  {
    id: "study-table",
    title: "Study Table",
    description:
      "A seamless combination of wardrobe storage and workspace.",
    diagram: "study-table",
  },
  {
    id: "dressing",
    title: "With Dressing",
    description:
      "Wardrobe, mirror and dressing space designed as one composition.",
    diagram: "dressing",
  },
  {
    id: "wardrobe-only",
    title: "Wardrobe Only",
    description:
      "A dedicated wardrobe focused on clean, efficient storage.",
    diagram: "wardrobe-only",
  },
];

const DOOR_OPTIONS = [
  {
    id: "sliding",
    title: "Sliding Door",
    description:
      "Space-saving sliding panels with a clean contemporary appearance.",
    diagram: "sliding",
  },
  {
    id: "openable",
    title: "Openable Door",
    description:
      "Classic hinged shutters with complete access to your wardrobe.",
    diagram: "openable",
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

/* =========================================================
   ARCHITECTURAL DIAGRAMS
========================================================= */

function OptionDiagram({ type }) {
  switch (type) {
    case "l-shaped":
      return (
        <svg viewBox="0 0 180 110" aria-hidden="true">
          <path d="M30 20 V82 H145" />
          <path d="M45 20 V67 H145" />
          <path d="M30 49 H45" />
          <path d="M78 67 V82" />
          <path d="M112 67 V82" />
        </svg>
      );

    case "straight":
      return (
        <svg viewBox="0 0 180 110" aria-hidden="true">
          <path d="M25 43 H155" />
          <path d="M25 67 H155" />
          <path d="M58 43 V67" />
          <path d="M90 43 V67" />
          <path d="M122 43 V67" />
        </svg>
      );

    case "u-shaped":
      return (
        <svg viewBox="0 0 180 110" aria-hidden="true">
          <path d="M30 20 V85 H150 V20" />
          <path d="M47 20 V68 H133 V20" />
          <path d="M47 47 H30" />
          <path d="M133 47 H150" />
          <path d="M75 68 V85" />
          <path d="M105 68 V85" />
        </svg>
      );

    case "parallel":
      return (
        <svg viewBox="0 0 180 110" aria-hidden="true">
          <path d="M25 25 H155" />
          <path d="M25 45 H155" />
          <path d="M25 66 H155" />
          <path d="M25 86 H155" />
          <path d="M62 25 V45" />
          <path d="M118 25 V45" />
          <path d="M62 66 V86" />
          <path d="M118 66 V86" />
        </svg>
      );

    case "window-seating":
      return (
        <svg viewBox="0 0 180 110" aria-hidden="true">
          <rect x="18" y="18" width="43" height="72" />
          <rect x="119" y="18" width="43" height="72" />
          <rect x="70" y="20" width="40" height="37" />
          <path d="M90 20 V57" />
          <path d="M70 38 H110" />
          <path d="M67 68 H113 V89 H67 Z" />
          <path d="M29 18 V90" />
          <path d="M50 18 V90" />
          <path d="M130 18 V90" />
          <path d="M151 18 V90" />
        </svg>
      );

    case "study-table":
      return (
        <svg viewBox="0 0 180 110" aria-hidden="true">
          <rect x="20" y="15" width="53" height="78" />
          <path d="M46 15 V93" />
          <path d="M83 55 H157" />
          <path d="M91 55 V91" />
          <path d="M149 55 V91" />
          <path d="M90 24 H150" />
          <path d="M90 36 H150" />
          <circle cx="38" cy="55" r="2" />
          <circle cx="56" cy="55" r="2" />
        </svg>
      );

    case "dressing":
      return (
        <svg viewBox="0 0 180 110" aria-hidden="true">
          <rect x="17" y="15" width="57" height="78" />
          <path d="M45 15 V93" />
          <rect
            x="102"
            y="18"
            width="38"
            height="45"
            rx="19"
          />
          <path d="M88 72 H154" />
          <path d="M96 72 V92" />
          <path d="M146 72 V92" />
          <circle cx="39" cy="54" r="2" />
          <circle cx="53" cy="54" r="2" />
        </svg>
      );

    case "wardrobe-only":
      return (
        <svg viewBox="0 0 180 110" aria-hidden="true">
          <rect x="32" y="14" width="116" height="80" />
          <path d="M61 14 V94" />
          <path d="M90 14 V94" />
          <path d="M119 14 V94" />
          <circle cx="57" cy="55" r="2" />
          <circle cx="86" cy="55" r="2" />
          <circle cx="115" cy="55" r="2" />
          <circle cx="144" cy="55" r="2" />
        </svg>
      );

    case "sliding":
      return (
        <svg viewBox="0 0 180 110" aria-hidden="true">
          <rect x="29" y="13" width="122" height="83" />
          <path d="M90 13 V96" />
          <path d="M101 13 V96" />
          <path d="M45 83 H80" />
          <path d="M75 78 L80 83 L75 88" />
          <path d="M136 25 H109" />
          <path d="M114 20 L109 25 L114 30" />
          <path d="M35 19 H145" />
        </svg>
      );

    case "openable":
      return (
        <svg viewBox="0 0 180 110" aria-hidden="true">
          <rect x="39" y="13" width="102" height="84" />
          <path d="M90 13 V97" />
          <path d="M86 17 L51 29 V82 L86 93" />
          <path d="M94 17 L129 29 V82 L94 93" />
          <circle cx="78" cy="56" r="2" />
          <circle cx="102" cy="56" r="2" />
        </svg>
      );

    default:
      return null;
  }
}

/* =========================================================
   COMPONENT
========================================================= */

export default function SpacePlanner() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const [stepIndex, setStepIndex] = useState(0);

  const [form, setForm] = useState({
    space: "",
    bhk: "",

    kitchenLayout: "",

    wardrobeIntegration: "",
    wardrobeDoor: "",

    wardrobeWidthFt: "",
    wardrobeWidthIn: "",

    wardrobeHeightFt: "",
    wardrobeHeightIn: "",

    wardrobeDepthFt: "",
    wardrobeDepthIn: "",

    wardrobeNote: "",

    style: "",
    budget: "",

    name: "",
    phone: "",
    email: "",
  });

  /* =========================================================
     DYNAMIC FLOW
  ========================================================= */

  const flow = useMemo(() => {
    if (form.space === "kitchen") {
      return [
        "space",
        "kitchenLayout",
        "style",
        "budget",
        "details",
      ];
    }

    if (form.space === "wardrobe") {
      return [
        "space",
        "wardrobeIntegration",
        "wardrobeDoor",
        "wardrobeMeasurements",
        "style",
        "budget",
        "details",
      ];
    }

    return [
      "space",
      "bhk",
      "style",
      "budget",
      "details",
    ];
  }, [form.space]);

  const currentStep = flow[stepIndex] || "space";

  /* =========================================================
     INITIAL ANIMATION
  ========================================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const eyebrow =
      section.querySelector(".planner-eyebrow");

    const heading =
      section.querySelector(".planner-heading");

    const intro =
      section.querySelector(".planner-intro");

    const shell =
      section.querySelector(".planner-shell");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        animate(eyebrow, {
          opacity: [0, 1],
          translateY: [18, 0],
          duration: 650,
          ease: "outExpo",
        });

        animate(heading, {
          opacity: [0, 1],
          translateY: [42, 0],
          duration: 900,
          delay: 80,
          ease: "outExpo",
        });

        animate(intro, {
          opacity: [0, 1],
          translateY: [24, 0],
          duration: 750,
          delay: 180,
          ease: "outExpo",
        });

        animate(shell, {
          opacity: [0, 1],
          translateY: [45, 0],
          duration: 1000,
          delay: 260,
          ease: "outExpo",
        });

        observer.unobserve(section);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /* =========================================================
     STEP ANIMATION
  ========================================================= */

  useEffect(() => {
    const content = contentRef.current;

    if (!content) return;

    const items =
      content.querySelectorAll(".planner-animate");

    animate(items, {
      opacity: [0, 1],
      translateY: [26, 0],
      delay: stagger(70),
      duration: 650,
      ease: "outExpo",
    });

    const diagrams =
      content.querySelectorAll(
        ".planner-diagram path, .planner-diagram rect, .planner-diagram circle"
      );

    if (diagrams.length) {
      animate(diagrams, {
        opacity: [0, 1],
        delay: stagger(30, {
          start: 180,
        }),
        duration: 550,
        ease: "outExpo",
      });
    }
  }, [stepIndex, currentStep]);

  /* =========================================================
     HELPERS
  ========================================================= */

  const updateForm = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const goBack = () => {
    setStepIndex((current) =>
      Math.max(current - 1, 0)
    );
  };

  const goForward = () => {
    setStepIndex((current) =>
      Math.min(
        current + 1,
        flow.length - 1
      )
    );
  };

  const selectOption = (field, value) => {
    updateForm(field, value);

    window.setTimeout(() => {
      setStepIndex((current) =>
        Math.min(
          current + 1,
          flow.length - 1
        )
      );
    }, 250);
  };

  const selectSpace = (space) => {
    setForm((current) => ({
      ...current,

      space,

      bhk: "",

      kitchenLayout: "",

      wardrobeIntegration: "",
      wardrobeDoor: "",

      wardrobeWidthFt: "",
      wardrobeWidthIn: "",

      wardrobeHeightFt: "",
      wardrobeHeightIn: "",

      wardrobeDepthFt: "",
      wardrobeDepthIn: "",

      wardrobeNote: "",

      style: "",
      budget: "",
    }));

    window.setTimeout(() => {
      setStepIndex(1);
    }, 250);
  };

  const stepLabel = (step) => {
    const labels = {
      space: "Space",
      bhk: "Home Size",
      kitchenLayout: "Layout",
      wardrobeIntegration: "Type",
      wardrobeDoor: "Door",
      wardrobeMeasurements: "Size",
      style: "Style",
      budget: "Budget",
      details: "Details",
    };

    return labels[step] || step;
  };

  const formatSelection = (value) =>
    value
      .replaceAll("-", " ")
      .toUpperCase();

  const progress =
    ((stepIndex + 1) / flow.length) * 100;

  const measurementEntered =
    form.wardrobeWidthFt ||
    form.wardrobeWidthIn ||
    form.wardrobeHeightFt ||
    form.wardrobeHeightIn ||
    form.wardrobeDepthFt ||
    form.wardrobeDepthIn;

  /* =========================================================
     SIMPLE OPTIONS
  ========================================================= */

  const renderSimpleOptions = (
    options,
    field
  ) => (
    <div className="planner-option-grid">
      {options.map((option, index) => (
        <button
          key={option.id}
          type="button"
          className={`planner-option planner-animate ${
            form[field] === option.id
              ? "is-selected"
              : ""
          }`}
          onClick={() =>
            selectOption(
              field,
              option.id
            )
          }
        >
          <div className="planner-option-top">
            <span className="planner-option-circle" />

            <span className="planner-option-number">
              {String(
                index + 1
              ).padStart(2, "0")}
            </span>
          </div>

          <div>
            <h4>{option.title}</h4>

            <p>
              {option.description}
            </p>
          </div>

          <span className="planner-option-arrow">
            ↗
          </span>
        </button>
      ))}
    </div>
  );

  /* =========================================================
     VISUAL OPTIONS
  ========================================================= */

  const renderVisualOptions = (
    options,
    field
  ) => (
    <div className="planner-visual-grid">
      {options.map((option, index) => (
        <button
          key={option.id}
          type="button"
          className={`planner-visual-option planner-animate ${
            form[field] === option.id
              ? "is-selected"
              : ""
          }`}
          onClick={() =>
            selectOption(
              field,
              option.id
            )
          }
        >
          <div className="planner-visual-top">
            <span className="planner-selection-dot" />

            <span className="planner-visual-number">
              {String(
                index + 1
              ).padStart(2, "0")}
            </span>
          </div>

          <div className="planner-diagram">
            <OptionDiagram
              type={option.diagram}
            />
          </div>

          <div className="planner-visual-copy">
            <h4>
              {option.title}
            </h4>

            <p>
              {option.description}
            </p>
          </div>

          <span className="planner-visual-arrow">
            ↗
          </span>
        </button>
      ))}
    </div>
  );

  /* =========================================================
     MEASUREMENT FIELD
  ========================================================= */

  const MeasurementField = ({
    label,
    feetField,
    inchesField,
    feetPlaceholder,
  }) => (
    <div className="measurement-group">
      <div className="measurement-label">
        <span>{label}</span>
        <small>FEET + INCHES</small>
      </div>

      <div className="measurement-values">
        <label className="measurement-input">
          <input
            type="number"
            min="0"
            inputMode="numeric"
            value={form[feetField]}
            onChange={(event) =>
              updateForm(
                feetField,
                event.target.value
              )
            }
            placeholder={feetPlaceholder}
          />

          <span>FT</span>
        </label>

        <div className="measurement-divider">
          ×
        </div>

        <label className="measurement-input">
          <input
            type="number"
            min="0"
            max="11"
            inputMode="numeric"
            value={form[inchesField]}
            onChange={(event) => {
              let value =
                event.target.value;

              if (
                value !== "" &&
                Number(value) > 11
              ) {
                value = "11";
              }

              updateForm(
                inchesField,
                value
              );
            }}
            placeholder="0"
          />

          <span>IN</span>
        </label>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="space-planner"
      className="planner-section"
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
              <span>
                {" "}
                We’ll shape the rest.
              </span>
            </h2>
          </div>

          <p className="planner-intro">
            Tell us a little about your
            space. Your choices help us
            understand the right layout,
            style and design direction for
            your project.
          </p>
        </div>

        {/* PLANNER */}

        <div className="planner-shell">
          {/* TOP BAR */}

          <div className="planner-topbar">
            <div className="planner-brand">
              <span>
                THE CUBIK SPACES
              </span>

              <small>
                INTERIOR PLANNER
              </small>
            </div>

            <div className="planner-step-count">
              STEP{" "}
              {String(
                stepIndex + 1
              ).padStart(2, "0")}

              <span>
                {" "}
                /{" "}
                {String(
                  flow.length
                ).padStart(2, "0")}
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

          {/* NAV */}

          <div
            className="planner-step-nav"
            style={{
              gridTemplateColumns:
                `repeat(${flow.length}, 1fr)`,
            }}
          >
            {flow.map(
              (item, index) => (
                <div
                  key={`${item}-${index}`}
                  className={`planner-step-indicator ${
                    stepIndex === index
                      ? "is-current"
                      : ""
                  } ${
                    stepIndex > index
                      ? "is-complete"
                      : ""
                  }`}
                >
                  <span>
                    {String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <small>
                    {stepLabel(item)}
                  </small>
                </div>
              )
            )}
          </div>

          {/* CONTENT */}

          <div
            ref={contentRef}
            className="planner-content"
          >
            {/* SPACE */}

            {currentStep === "space" && (
              <div className="planner-step">
                <div className="planner-question planner-animate">
                  <span>
                    01 / SPACE
                  </span>

                  <h3>
                    What are we
                    <em>
                      {" "}
                      designing?
                    </em>
                  </h3>

                  <p>
                    Choose where you would
                    like to begin. We’ll
                    tailor the next steps
                    around your selection.
                  </p>
                </div>

                <div className="planner-space-grid">
                  {SPACE_OPTIONS.map(
                    (option) => (
                      <button
                        key={option.id}
                        type="button"
                        className={`planner-space-card planner-animate ${
                          form.space ===
                          option.id
                            ? "is-selected"
                            : ""
                        }`}
                        onClick={() =>
                          selectSpace(
                            option.id
                          )
                        }
                      >
                        <div className="planner-card-top">
                          <span>
                            {
                              option.number
                            }
                          </span>

                          <small>
                            {option.tag}
                          </small>
                        </div>

                        <div className="planner-space-copy">
                          <h4>
                            {option.title}
                          </h4>

                          <p>
                            {
                              option.description
                            }
                          </p>
                        </div>

                        <span className="planner-card-arrow">
                          ↗
                        </span>
                      </button>
                    )
                  )}
                </div>
              </div>
            )}

            {/* FULL HOME */}

            {currentStep === "bhk" && (
              <div className="planner-step">
                <div className="planner-question planner-animate">
                  <span>
                    02 / HOME SIZE
                  </span>

                  <h3>
                    Tell us about
                    <em>
                      {" "}
                      your home.
                    </em>
                  </h3>

                  <p>
                    Select the size that
                    best represents the home
                    you want us to design.
                  </p>
                </div>

                {renderSimpleOptions(
                  BHK_OPTIONS,
                  "bhk"
                )}
              </div>
            )}

            {/* KITCHEN */}

            {currentStep ===
              "kitchenLayout" && (
              <div className="planner-step">
                <div className="planner-question planner-animate">
                  <span>
                    02 / KITCHEN LAYOUT
                  </span>

                  <h3>
                    How is your
                    <em>
                      {" "}
                      kitchen shaped?
                    </em>
                  </h3>

                  <p>
                    Select the layout
                    closest to your kitchen.
                    Exact measurements can
                    be refined later.
                  </p>
                </div>

                {renderVisualOptions(
                  KITCHEN_OPTIONS,
                  "kitchenLayout"
                )}
              </div>
            )}

            {/* WARDROBE TYPE */}

            {currentStep ===
              "wardrobeIntegration" && (
              <div className="planner-step">
                <div className="planner-question planner-animate">
                  <span>
                    02 / WARDROBE TYPE
                  </span>

                  <h3>
                    Storage that does
                    <em>
                      {" "}
                      more.
                    </em>
                  </h3>

                  <p>
                    Choose how you would
                    like your wardrobe to
                    work with the rest of
                    your room.
                  </p>
                </div>

                {renderVisualOptions(
                  WARDROBE_OPTIONS,
                  "wardrobeIntegration"
                )}
              </div>
            )}

            {/* DOOR TYPE */}

            {currentStep ===
              "wardrobeDoor" && (
              <div className="planner-step">
                <div className="planner-question planner-animate">
                  <span>
                    03 / DOOR TYPE
                  </span>

                  <h3>
                    How should it
                    <em>
                      {" "}
                      open?
                    </em>
                  </h3>

                  <p>
                    Select the opening
                    style that works best
                    with your room and
                    everyday routine.
                  </p>
                </div>

                {renderVisualOptions(
                  DOOR_OPTIONS,
                  "wardrobeDoor"
                )}
              </div>
            )}

            {/* WARDROBE MEASUREMENTS */}

            {currentStep ===
              "wardrobeMeasurements" && (
              <div className="planner-step planner-measurement-step">
                <div className="planner-question planner-animate">
                  <span>
                    04 / MEASUREMENTS
                  </span>

                  <h3>
                    Tell us the
                    <em>
                      {" "}
                      available space.
                    </em>
                  </h3>

                  <p>
                    Enter the approximate
                    wardrobe dimensions.
                    Don’t worry if they’re
                    not exact — our team can
                    verify them later.
                  </p>

                  <div className="measurement-tip">
                    <span>
                      HOW TO MEASURE
                    </span>

                    <p>
                      Measure the available
                      wall width, floor to
                      ceiling height and the
                      usable depth from the
                      wall.
                    </p>
                  </div>
                </div>

                <div className="measurement-panel planner-animate">
                  <div className="measurement-panel-header">
                    <div>
                      <span>
                        WARDROBE DIMENSIONS
                      </span>

                      <h4>
                        Enter your
                        measurements
                      </h4>
                    </div>

                    <div className="measurement-icon">
                      ↔
                    </div>
                  </div>

                  <MeasurementField
                    label="Width"
                    feetField="wardrobeWidthFt"
                    inchesField="wardrobeWidthIn"
                    feetPlaceholder="6"
                  />

                  <MeasurementField
                    label="Height"
                    feetField="wardrobeHeightFt"
                    inchesField="wardrobeHeightIn"
                    feetPlaceholder="7"
                  />

                  <MeasurementField
                    label="Depth"
                    feetField="wardrobeDepthFt"
                    inchesField="wardrobeDepthIn"
                    feetPlaceholder="2"
                  />

                  <label className="measurement-notes">
                    <div>
                      <span>
                        NOTES
                      </span>

                      <small>
                        OPTIONAL
                      </small>
                    </div>

                    <textarea
                      value={
                        form.wardrobeNote
                      }
                      onChange={(
                        event
                      ) =>
                        updateForm(
                          "wardrobeNote",
                          event.target
                            .value
                        )
                      }
                      placeholder="Example: window on the right, beam above the wardrobe, electrical socket nearby..."
                    />
                  </label>

                  <div className="measurement-actions">
                    <p>
                      Approximate
                      measurements are
                      completely fine.
                    </p>

                    <button
                      type="button"
                      className="measurement-continue"
                      onClick={
                        goForward
                      }
                    >
                      <span>
                        Continue
                      </span>

                      <span>
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STYLE */}

            {currentStep === "style" && (
              <div className="planner-step">
                <div className="planner-question planner-animate">
                  <span>
                    STYLE DIRECTION
                  </span>

                  <h3>
                    What feels like
                    <em>
                      {" "}
                      home?
                    </em>
                  </h3>

                  <p>
                    Pick the design
                    direction that feels
                    closest to your
                    personality and taste.
                  </p>
                </div>

                {renderSimpleOptions(
                  STYLE_OPTIONS,
                  "style"
                )}
              </div>
            )}

            {/* BUDGET */}

            {currentStep === "budget" && (
              <div className="planner-step">
                <div className="planner-question planner-animate">
                  <span>
                    PROJECT BUDGET
                  </span>

                  <h3>
                    Let’s understand
                    <em>
                      {" "}
                      the investment.
                    </em>
                  </h3>

                  <p>
                    Your starting range
                    helps us recommend the
                    right materials,
                    finishes and design
                    approach.
                  </p>
                </div>

                {renderSimpleOptions(
                  BUDGET_OPTIONS,
                  "budget"
                )}
              </div>
            )}

            {/* DETAILS */}

            {currentStep === "details" && (
              <div className="planner-step planner-final">
                <div className="planner-question planner-animate">
                  <span>
                    LET’S CONNECT
                  </span>

                  <h3>
                    Your space starts
                    <em>
                      {" "}
                      here.
                    </em>
                  </h3>

                  <p>
                    Share your details and
                    our design team can
                    continue the
                    conversation with you.
                  </p>

                  <div className="planner-summary">
                    <span>
                      YOUR SELECTION
                    </span>

                    <div className="planner-summary-tags">
                      {form.space && (
                        <small>
                          {formatSelection(
                            form.space
                          )}
                        </small>
                      )}

                      {form.bhk && (
                        <small>
                          {formatSelection(
                            form.bhk
                          )}
                        </small>
                      )}

                      {form.kitchenLayout && (
                        <small>
                          {formatSelection(
                            form.kitchenLayout
                          )}
                        </small>
                      )}

                      {form.wardrobeIntegration && (
                        <small>
                          {formatSelection(
                            form.wardrobeIntegration
                          )}
                        </small>
                      )}

                      {form.wardrobeDoor && (
                        <small>
                          {formatSelection(
                            form.wardrobeDoor
                          )}
                        </small>
                      )}

                      {measurementEntered && (
                        <small>
                          SIZE:{" "}
                          {form.wardrobeWidthFt ||
                            "0"}
                          '
                          {form.wardrobeWidthIn ||
                            "0"}
                          " W ×{" "}
                          {form.wardrobeHeightFt ||
                            "0"}
                          '
                          {form.wardrobeHeightIn ||
                            "0"}
                          " H ×{" "}
                          {form.wardrobeDepthFt ||
                            "0"}
                          '
                          {form.wardrobeDepthIn ||
                            "0"}
                          " D
                        </small>
                      )}

                      {form.style && (
                        <small>
                          {formatSelection(
                            form.style
                          )}
                        </small>
                      )}

                      {form.budget && (
                        <small>
                          {BUDGET_OPTIONS.find(
                            (item) =>
                              item.id ===
                              form.budget
                          )?.title ||
                            form.budget}
                        </small>
                      )}
                    </div>
                  </div>
                </div>

                <div className="planner-form planner-animate">
                  <label>
                    <span>
                      Your name
                    </span>

                    <input
                      type="text"
                      value={form.name}
                      onChange={(
                        event
                      ) =>
                        updateForm(
                          "name",
                          event.target
                            .value
                        )
                      }
                      placeholder="Enter your name"
                    />
                  </label>

                  <label>
                    <span>
                      Phone number
                    </span>

                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(
                        event
                      ) =>
                        updateForm(
                          "phone",
                          event.target
                            .value
                        )
                      }
                      placeholder="+91"
                    />
                  </label>

                  <label>
                    <span>
                      Email address
                    </span>

                    <input
                      type="email"
                      value={form.email}
                      onChange={(
                        event
                      ) =>
                        updateForm(
                          "email",
                          event.target
                            .value
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
                      Request a
                      consultation
                    </span>

                    <span>
                      ↗
                    </span>
                  </button>

                  <small className="planner-privacy">
                    No spam. Just a
                    conversation about your
                    space.
                  </small>
                </div>
              </div>
            )}
          </div>

          {/* FOOTER */}

          <div className="planner-footer">
            <button
              type="button"
              className="planner-back"
              onClick={goBack}
              disabled={
                stepIndex === 0
              }
            >
              ← Back
            </button>

            <div className="planner-selection">
              {form.space && (
                <span>
                  {formatSelection(
                    form.space
                  )}
                </span>
              )}

              {form.kitchenLayout && (
                <span>
                  {formatSelection(
                    form.kitchenLayout
                  )}
                </span>
              )}

              {form.wardrobeIntegration && (
                <span>
                  {formatSelection(
                    form.wardrobeIntegration
                  )}
                </span>
              )}

              {form.wardrobeDoor && (
                <span>
                  {formatSelection(
                    form.wardrobeDoor
                  )}
                </span>
              )}

              {measurementEntered && (
                <span>
                  {form.wardrobeWidthFt ||
                    "0"}
                  '
                  {form.wardrobeWidthIn ||
                    "0"}
                  " ×{" "}
                  {form.wardrobeHeightFt ||
                    "0"}
                  '
                  {form.wardrobeHeightIn ||
                    "0"}
                  "
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}