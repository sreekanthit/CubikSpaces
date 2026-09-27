const STEPS = [
  {
    number: "01",
    label: "DISCOVER",
    title: "Understand your needs",
    description: "We learn about your lifestyle, design preferences, budget and project timeline.",
  },
  {
    number: "02",
    label: "DESIGN",
    title: "Plan your space",
    description: "Our team develops a considered layout, material palette and detailed design.",
  },
  {
    number: "03",
    label: "BUILD",
    title: "Bring it to life",
    description: "We coordinate production and installation with care at every stage.",
  },
  {
    number: "04",
    label: "HANDOVER",
    title: "Enjoy your home",
    description: "After a final quality check, we walk you through your completed space.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <h2 className="section__title">A clear path from idea to home.</h2>
        <div className="steps">
          {STEPS.map((step) => (
            <article className="step" key={step.number}>
              <span className="step__num">{step.number}</span>
              <p className="step__label">{step.label}</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <a className="link" href="/process">Learn about our process</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
