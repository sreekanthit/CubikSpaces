import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
// import { IMAGES } from "../data.js";
const PROCESS_STEPS = [
  {
    number: "01",
    label: "DISCOVER",
    title: "Free Consultation",
    description:
      "Every project starts with understanding you. We discuss your lifestyle, requirements, preferred design style, budget and timeline before planning your space.",
    points: [
      "Understand your lifestyle and requirements",
      "Discuss design preferences",
      "Understand your budget",
      "Discuss project timeline",
      "Site visit and measurements",
    ],
  },
  {
    number: "02",
    label: "PLAN",
    title: "Design & Space Planning",
    description:
      "Our design team transforms your ideas into a practical interior concept. We carefully plan every area to make the best use of your available space.",
    points: [
      "Space planning",
      "Furniture layout",
      "Storage planning",
      "Lighting planning",
      "Colour and finish selection",
    ],
  },
  {
    number: "03",
    label: "VISUALISE",
    title: "3D Design & Visualisation",
    description:
      "Before execution begins, we help you visualise your future space through detailed 3D designs so you can understand the look, feel and functionality.",
    points: [
      "3D interior views",
      "Furniture designs",
      "Wall and ceiling concepts",
      "Material and colour visualisation",
      "Design revisions",
    ],
  },
  {
    number: "04",
    label: "FINALISE",
    title: "Material Selection & Quote",
    description:
      "Once the design direction is approved, we finalise materials, finishes, hardware and the scope of work. You receive a clear quotation based on the selected requirements.",
    points: [
      "Material selection",
      "Laminate and finish selection",
      "Hardware selection",
      "Detailed scope of work",
      "Project quotation",
    ],
  },
  {
    number: "05",
    label: "APPROVE",
    title: "Design Approval",
    description:
      "We review the final design with you and confirm the important details before moving into production and execution.",
    points: [
      "Final design review",
      "3D design confirmation",
      "Material confirmation",
      "Layout approval",
      "Execution confirmation",
    ],
  },
  {
    number: "06",
    label: "BUILD",
    title: "Manufacturing & Production",
    description:
      "After approval, the manufacturing process begins. Each component is prepared according to the approved design and specifications.",
    points: [
      "Material procurement",
      "Precision cutting",
      "Furniture manufacturing",
      "Edge finishing",
      "Quality inspection",
    ],
  },
  {
    number: "07",
    label: "INSTALL",
    title: "Professional Installation",
    description:
      "Our installation team carefully brings the approved design to life at your site while coordinating different stages of interior execution.",
    points: [
      "Site preparation",
      "Modular furniture installation",
      "Wardrobe and kitchen installation",
      "Hardware installation",
      "On-site coordination",
    ],
  },
  {
    number: "08",
    label: "CHECK",
    title: "Quality Inspection",
    description:
      "Before handover, we conduct a detailed quality inspection to check finishing, alignment, functionality and overall execution.",
    points: [
      "Alignment checks",
      "Finish quality inspection",
      "Drawer and shutter operation",
      "Hardware checks",
      "Final cleaning",
    ],
  },
  {
    number: "09",
    label: "HANDOVER",
    title: "Final Handover",
    description:
      "Once the project is complete, we walk you through the finished space, complete any final corrections and hand over your interior.",
    points: [
      "Final walkthrough",
      "Snag identification",
      "Snag rectification",
      "Project handover",
      "Warranty information",
    ],
  },
  {
    number: "10",
    label: "SUPPORT",
    title: "After-Sales Support",
    description:
      "Our relationship doesn't end at handover. We remain available to support you with the agreed warranty and after-sales requirements.",
    points: [
      "Warranty support",
      "After-sales assistance",
      "Issue coordination",
      "Service support",
      "Project follow-up",
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      <Header />

      <main className="process-page">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="process-hero">
          <div className="container">

            <p className="process-eyebrow">
              THE CUBIK SPACES
            </p>

            <h1>
              Our Process
              <br />
              From Idea to Reality
            </h1>

            <p className="process-hero__text">
              A structured interior journey designed to make your
              project clear, comfortable and well coordinated —
              from the first consultation to final handover.
            </p>

            <div className="process-hero__actions">
              <a
                href="/#contact"
                className="process-button process-button--light"
              >
                Start Your Project →
              </a>

              <a
                href="#process-steps"
                className="process-button process-button--outline"
              >
                Explore Our Process ↓
              </a>
            </div>

          </div>
        </section>


        {/* =====================================================
            INTRODUCTION
        ====================================================== */}

        <section className="section process-intro">
          <div className="container">

            <div className="process-intro__grid">

              <div>
                <p className="process-eyebrow">
                  HOW WE WORK
                </p>

                <h2>
                  Thoughtful design.
                  <br />
                  Detailed execution.
                </h2>
              </div>

              <div className="process-intro__content">

                <p>
                  At The Cubik Spaces, we believe a successful
                  interior project needs more than beautiful
                  designs. It requires clear communication,
                  careful planning, quality execution and
                  attention to detail.
                </p>

                <p>
                  That's why we follow a structured process that
                  keeps you informed at every important stage of
                  your project.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            PROCESS STEPS
        ====================================================== */}

        <section
          id="process-steps"
          className="section section--tint process-details"
        >
          <div className="container">

            <div className="process-details__heading">

              <p className="process-eyebrow">
                OUR 10-STEP JOURNEY
              </p>

              <h2 className="section__title">
                From the first conversation
                <br />
                to your finished space.
              </h2>

              <p>
                Every stage is planned to keep your interior
                project organised and transparent.
              </p>

            </div>


            <div className="process-timeline">

              {PROCESS_STEPS.map((step) => (

                <article
                  className="process-item"
                  key={step.number}
                >

                  <div className="process-item__number">
                    {step.number}
                  </div>


                  <div className="process-item__content">

                    <span className="process-item__label">
                      {step.label}
                    </span>

                    <h3>
                      {step.title}
                    </h3>

                    <p className="process-item__description">
                      {step.description}
                    </p>


                    <div className="process-item__divider" />


                    <ul>
                      {step.points.map((point) => (

                        <li key={point}>
                          <span className="process-check">
                            ✓
                          </span>

                          {point}
                        </li>

                      ))}
                    </ul>

                  </div>

                </article>

              ))}

            </div>

          </div>
        </section>


        {/* =====================================================
            WHAT YOU CAN EXPECT
        ====================================================== */}

        <section className="section process-expect">
          <div className="container">

            <div className="process-expect__heading">

              <p className="process-eyebrow">
                THE CUBIK SPACES EXPERIENCE
              </p>

              <h2 className="section__title">
                What you can expect
                <br />
                throughout the journey.
              </h2>

            </div>


            <div className="process-expect__grid">

              <div className="process-expect__card">
                <div className="process-expect__icon">
                  01
                </div>

                <h3>
                  Clear Communication
                </h3>

                <p>
                  We keep the project communication clear so
                  you understand what is happening at each
                  important stage.
                </p>
              </div>


              <div className="process-expect__card">
                <div className="process-expect__icon">
                  02
                </div>

                <h3>
                  Detailed Planning
                </h3>

                <p>
                  Design, materials, execution and installation
                  are planned before moving into the next stage.
                </p>
              </div>


              <div className="process-expect__card">
                <div className="process-expect__icon">
                  03
                </div>

                <h3>
                  Quality Checks
                </h3>

                <p>
                  We review the work during production and
                  installation to maintain the expected finish
                  and functionality.
                </p>
              </div>


              <div className="process-expect__card">
                <div className="process-expect__icon">
                  04
                </div>

                <h3>
                  Complete Coordination
                </h3>

                <p>
                  Our team coordinates the different stages of
                  your interior project through installation and
                  final handover.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="section process-cta">

          <div className="container">

            <div className="process-cta__box">

              <div className="process-cta__content">

                <p className="process-eyebrow">
                  LET'S CREATE YOUR SPACE
                </p>

                <h2>
                  Ready to start
                  <br />
                  your interior journey?
                </h2>

                <p>
                  Tell us about your space, requirements and
                  ideas. Our team will help you take the next
                  step.
                </p>

              </div>


              <div className="process-cta__actions">

                <a
                  href="/#contact"
                  className="process-button process-button--light"
                >
                  Book a Free Consultation →
                </a>

                <a
                  href="tel:+918074553374"
                  className="process-button process-button--outline-light"
                >
                  Call Us
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
