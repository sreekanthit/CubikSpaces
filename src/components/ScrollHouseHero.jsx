import { useEffect, useState } from "react";
import { IMAGES } from "../data.js";

export default function ScrollHouseHero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const hero = document.querySelector(".scroll-house-hero");

          if (hero) {
            const rect = hero.getBoundingClientRect();
            const height = hero.offsetHeight - window.innerHeight;

            const progress = Math.min(
              Math.max(-rect.top / height, 0),
              1
            );

            setScrollProgress(progress);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const houseStyle = {
    transform: `
      translate3d(
        ${scrollProgress * -35}px,
        ${scrollProgress * 120}px,
        0
      )
      rotateY(${scrollProgress * 12}deg)
      rotateZ(${scrollProgress * -2}deg)
      scale(${1 - scrollProgress * 0.12})
    `,
  };

  return (
    <section className="scroll-house-hero">

      <div className="scroll-house-sticky">

        {/* Background */}
        <div className="scroll-house-bg" />

        {/* Navigation */}
        <header className="scroll-house-nav">

          <a href="/" className="scroll-house-logo">
            <span>THE</span>
            CUBIK <b>SPACES</b>
          </a>

          <nav>
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Our Work</a>
            <a href="/process">Process</a>
            <a href="#resources">Resources</a>
          </nav>

          <a
            href="#contact"
            className="scroll-house-consult"
          >
            Get Free Consultation
            <span>→</span>
          </a>

          <button className="scroll-house-menu">
            <span />
            <span />
          </button>

        </header>

        {/* Main Hero */}
        <div className="scroll-house-content">

          {/* LEFT */}
          <div className="scroll-house-copy">

            <p className="scroll-house-eyebrow">
              INTERIOR DESIGN STUDIO IN HYDERABAD
            </p>

            <h1>
              Your Space.
              <br />
              <span>Your Story.</span>
            </h1>

            <p className="scroll-house-description">
              Beautifully designed interiors that blend
              function, style and your lifestyle.
            </p>

            <div className="scroll-house-actions">

              <a
                href="#portfolio"
                className="scroll-house-primary"
              >
                Explore Our Work
                <span>→</span>
              </a>

              <a
                href="#story"
                className="scroll-house-video"
              >
                <span className="play">▶</span>
                <span>
                  Watch
                  <br />
                  Our Story
                </span>
              </a>

            </div>

          </div>


          {/* HOUSE */}
          <div className="scroll-house-visual">

            <div
              className="scroll-house-model"
              style={houseStyle}
            >

              <img
                src="/images/cubik-house.png.png"
                alt="The Cubik Spaces interior"
              />

              <div className="house-glow" />

            </div>

          </div>


          {/* RIGHT CALLOUTS */}
          <div className="scroll-house-services">

            <div className="house-service">
              <div className="service-icon">⌂</div>

              <div>
                <strong>Modular Kitchens</strong>
                <small>
                  Smart. Stylish. Functional.
                </small>
              </div>
            </div>


            <div className="house-service">
              <div className="service-icon">▣</div>

              <div>
                <strong>Wardrobes</strong>
                <small>
                  Organised Living.
                </small>
              </div>
            </div>


            <div className="house-service">
              <div className="service-icon">▱</div>

              <div>
                <strong>Living Spaces</strong>
                <small>
                  Designed for Real Life.
                </small>
              </div>
            </div>


            <div className="house-service">
              <div className="service-icon">⌂</div>

              <div>
                <strong>Complete Home Interiors</strong>
                <small>
                  From Concept to Handover.
                </small>
              </div>
            </div>

          </div>

        </div>


        {/* STATS */}
        <div className="scroll-house-stats">

          <div>
            <strong>250+</strong>
            <span>Projects Completed</span>
          </div>

          <div>
            <strong>100+</strong>
            <span>Happy Families</span>
          </div>

          <div>
            <strong>10+</strong>
            <span>Years Experience</span>
          </div>

          <div>
            <strong>1</strong>
            <span>Design-First Approach</span>
          </div>

        </div>


        {/* SCROLL INDICATOR */}
        <div className="scroll-house-indicator">

          <div className="scroll-mouse">
            <span />
          </div>

          <small>SCROLL TO EXPLORE</small>

        </div>

      </div>

    </section>
  );
}
