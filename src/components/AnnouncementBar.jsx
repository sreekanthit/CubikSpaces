import { BENEFITS } from "../data.js";

export default function AnnouncementBar() {
  return (
    <div className="announce">
      <ul className="container announce__list">
        {BENEFITS.map((b) => (
          <li key={b}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
