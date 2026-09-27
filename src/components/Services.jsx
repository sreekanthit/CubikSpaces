import { IMAGES, SERVICES } from "../data.js";
import Img from "./Img.jsx";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="banner">
          <Img src={IMAGES.banner} alt="Designed bedroom with layered textures" />
          <div className="banner__text">
            <h2>Design your space with The Cubik Spaces</h2>
            <a href="#portfolio" className="btn btn--light">Explore all projects</a>
          </div>
        </div>

        <div className="cards">
          {SERVICES.map((s) => (
            <article key={s.title} className="card">
              <div className="card__body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a href="#contact" className="link">Learn more</a>
              </div>
              <Img src={s.image} alt={s.title} className="card__img" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
