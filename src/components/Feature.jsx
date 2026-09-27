import { FEATURE_POINTS, IMAGES } from "../data.js";
import Img from "./Img.jsx";

export default function Feature() {
  return (
    <section className="section section--tint">
      <div className="container feature">
        <Img src={IMAGES.feature} alt="Sunlit dining area with a wooden table" className="feature__img" />
        <div className="feature__text">
          <h2>Interiors planned around how you actually live.</h2>
          <p>Support for every room, from first sketch to final handover.</p>
          <ul className="ticks">
            {FEATURE_POINTS.map((p) => (
              <li key={p}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill="currentColor" opacity=".12" />
                  <path d="M7 12.5l3.5 3.5L17 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {p}
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn">Get started</a>
        </div>
      </div>
    </section>
  );
}
