import { useEffect, useState } from "react";
import { IMAGES } from "../data.js";
import "./Hero.css";

const services = [
  { no: "01", title: "Home Interiors", text: "Complete spaces, designed as one story." },
  { no: "02", title: "Modular Kitchens", text: "Smart storage with refined detailing." },
  { no: "03", title: "Luxury Bedrooms", text: "Calm, warm and deeply personal." },
];

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setScrollY(Math.min(window.scrollY, 500));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const imageStyle = {
    transform: `scale(${1.02 + scrollY * 0.00012}) translate3d(0, ${scrollY * 0.045}px, 0)`,
  };

  return (
    <section className={`cubik-hero-v3 ${scrolled ? "is-scrolled" : ""}`}>
      <div className="cubik-hero-v3__media" aria-hidden="true">
        <img
          src={IMAGES.hero}
          alt=""
          style={imageStyle}
        />
      </div>

      <div className="cubik-hero-v3__veil" aria-hidden="true" />
      <div className="cubik-hero-v3__grain" aria-hidden="true" />
      <div className="cubik-hero-v3__grid" aria-hidden="true" />

      <nav className="cubik-hero-v3__nav">
        <a className="cubik-hero-v3__brand" href="/" onClick={() => setMenuOpen(false)}>
          <span>THE CUBIK</span>
          <em>SPACES</em>
        </a>

        <div className="cubik-hero-v3__links">
          <a href="#services">Services</a>
          <a href="#feature">About us</a>
          <a href="#portfolio">Projects</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="cubik-hero-v3__nav-cta" href="#contact">
          Get in touch <span>↗</span>
        </a>

        <button
          className={`cubik-hero-v3__menu-button ${menuOpen ? "open" : ""}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </nav>

      <div className={`cubik-hero-v3__mobile-menu ${menuOpen ? "show" : ""}`}>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#feature" onClick={() => setMenuOpen(false)}>About us</a>
        <a href="#portfolio" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <a className="mobile-cta" href="#contact" onClick={() => setMenuOpen(false)}>
          Book a consultation ↗
        </a>
      </div>

      <div className="cubik-hero-v3__body">
        <div className="cubik-hero-v3__left">
          <div className="cubik-hero-v3__eyebrow">
            <span className="dot" />
            INTERIOR DESIGN STUDIO · HYDERABAD
          </div>

          <h1>
            Interiors
            <span>for living.</span>
          </h1>

          <p className="cubik-hero-v3__intro">
            We create warm, modern interiors that feel considered,
            functional and unmistakably yours.
          </p>

          <div className="cubik-hero-v3__actions">
            <a className="primary" href="#contact">
              Start your project
              <span>↗</span>
            </a>
            <a className="secondary" href="#portfolio">
              Explore our work
              <span>→</span>
            </a>
          </div>

          <div className="cubik-hero-v3__trust">
            <span>DESIGN</span>
            <i />
            <span>EXECUTION</span>
            <i />
            <span>HANDOVER</span>
          </div>
        </div>

        <aside className="cubik-hero-v3__right">
          <div className="cubik-hero-v3__right-label">OUR SPACES</div>

          {services.map((service) => (
            <a
              className="cubik-hero-v3__service"
              href="#services"
              key={service.no}
            >
              <span className="number">{service.no}</span>
              <div className="service-copy">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
              <span className="arrow">↗</span>
            </a>
          ))}

          <div className="cubik-hero-v3__side-note">
            <span>THE CUBIK SPACES</span>
            <strong>Designing better<br />everyday living.</strong>
          </div>
        </aside>
      </div>

      <div className="cubik-hero-v3__bottom">
        <div className="cubik-hero-v3__stats">
          <div>
            <strong>250<span>+</span></strong>
            <small>Projects completed</small>
          </div>
          <div>
            <strong>100<span>+</span></strong>
            <small>Homes transformed</small>
          </div>
          <div>
            <strong>10<span>+</span></strong>
            <small>Years experience</small>
          </div>
        </div>

        <a className="cubik-hero-v3__scroll" href="#services">
          <span>SCROLL TO EXPLORE</span>
          <b>↓</b>
        </a>
      </div>
    </section>
  );
}
