import { useState } from "react";
import { PORTFOLIO } from "../data.js";
import Img from "./Img.jsx";

export default function Portfolio() {
  const [active, setActive] = useState(PORTFOLIO[0].key);
  const item = PORTFOLIO.find((p) => p.key === active);

  return (
    <section id="portfolio" className="section section--tint">
      <div className="container">
        <div className="portfolio__head">
          <h2 className="section__title">Live well, together.</h2>
          <div className="tabs" role="tablist" aria-label="Project types">
            {PORTFOLIO.map((p) => (
              <button
                key={p.key}
                role="tab"
                aria-selected={active === p.key}
                className={`tab ${active === p.key ? "is-active" : ""}`}
                onClick={() => setActive(p.key)}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <figure className="showcase" role="tabpanel">
          <Img key={item.key} src={item.image} alt={item.title} className="showcase__img" />
          <figcaption className="showcase__cap">
            <h3>{item.title}</h3>
            <div className="showcase__btns">
              <a href="#contact" className="btn btn--light">Book a visit</a>
              <a href="#services" className="btn btn--ghost">Explore all features</a>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
