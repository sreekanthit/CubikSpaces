import { useRef } from "react";
import { IMAGES, SERVICES } from "../data.js";
import Img from "./Img.jsx";
import useAnimeReveal from "../hooks/useAnimeReveal.js";

export default function Services() {
  const bannerRef = useRef(null);
  const cardsRef = useRef(null);

  useAnimeReveal(bannerRef, {
    translateY: 45,
    duration: 1000,
  });

  useAnimeReveal(cardsRef, {
    selector: ".card",
    translateY: 55,
    delay: 130,
    duration: 900,
  });

  return (
    <section id="services" className="section">
      <div className="container">

        <div ref={bannerRef} className="banner anime-hidden">
          <Img
            src={IMAGES.banner}
            alt="Designed bedroom with layered textures"
          />

          <div className="banner__text">
            <h2>Design your space with The Cubik Spaces</h2>

            <a href="#portfolio" className="btn btn--light">
              Explore all projects
            </a>
          </div>
        </div>

        <div ref={cardsRef} className="cards">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="card anime-hidden"
            >
              <div className="card__body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>

                <a href="#contact" className="link">
                  Learn more
                </a>
              </div>

              <Img
                src={s.image}
                alt={s.title}
                className="card__img"
              />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}