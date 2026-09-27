import { BRAND, FOOTER } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        {Object.entries(FOOTER).map(([title, links]) => (
          <div key={title}>
            <h4>{title}</h4>
            <ul>
              {links.map((l) => (
                <li key={l}><a href="#top">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container footer__bottom">
        <a href="#top" className="logo logo--light">
          <strong>{BRAND.name}</strong>{BRAND.suffix}
        </a>
        <p>© {new Date().getFullYear()} {BRAND.name} Interiors. All rights reserved.</p>
        <p className="footer__legal">
          <a href="#top">Terms</a> <a href="#top">Privacy policy</a>
        </p>
      </div>
    </footer>
  );
}
