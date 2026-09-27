import { useEffect, useState } from "react";
import { BRAND, NAV, PILLS } from "../data.js";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header__bar">
        <a href="#top" className="logo" aria-label={`${BRAND.name} home`}>
          <strong>{BRAND.name}</strong>
          {BRAND.suffix}
        </a>

        <nav className="header__links" aria-label="Primary">
          
          <a href="#services">Services</a>
          <a href="#process">How it works</a>
          <a href="#portfolio">Portfolio</a>
        </nav>

        <div className="header__actions">
          <a href="#contact" className="btn btn--small">Get a quote</a>
          <button
            className="menu-btn"
            aria-expanded={open}
            aria-controls="menu-panel"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* <div className="pills">
        <div className="container pills__row">
          {PILLS.map((p) => (
            <a key={p} href="#portfolio" className="pill">{p}</a>
          ))}
        </div>
      </div> */}

      {open && (
        <div id="menu-panel" className="menu" role="dialog" aria-label="Site menu">
          <div className="container menu__grid">
            <div>
              <h3>Residential</h3>
              <ul>{NAV.spaces.map((l) => <li key={l.label}><a href={l.href} onClick={close}>{l.label}</a></li>)}</ul>
            </div>
            <div>
              <h3>Commercial</h3>
              <ul>{NAV.commercial.map((l) => <li key={l.label}><a href={l.href} onClick={close}>{l.label}</a></li>)}</ul>
            </div>
            <div>
              <h3>Learn more</h3>
              <ul>{NAV.learn.map((l) => <li key={l.label}><a href={l.href} onClick={close}>{l.label}</a></li>)}</ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
