import "./style.scss";
import {skillCategories} from "../../portfolio";
import {Fade} from "react-awesome-reveal";

const icons: Record<string, JSX.Element> = {
  frontend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  ),
  backend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="2" y="4" width="20" height="6" rx="1.5" />
      <rect x="2" y="14" width="20" height="6" rx="1.5" />
      <circle cx="6" cy="7" r=".5" fill="currentColor" />
      <circle cx="6" cy="17" r=".5" fill="currentColor" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.3-1.5A4 4 0 0 0 5.5 16" />
    </svg>
  ),
  languages: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M8 4l-6 8 6 8M16 4l6 8-6 8" />
    </svg>
  )
};

const Proficiency = () => {
  if (!skillCategories.display) {
    return null;
  }
  return (
    <Fade duration={1000} className="opacity">
      <div className="proficiency section" id="proficiency">
        <div className="wrap">
          <div className="section-head">
            <span className="section-label pink">Proficiency</span>
            <h2>The layers of what I build</h2>
            <p>
              Technologies organized by where they operate in the product — from
              the interface to the server that keeps it running.
            </p>
          </div>

          <div className="card-grid">
            {skillCategories.categories.map((category) => (
              <div className={`card skill-card ${category.accent}`} key={category.key}>
                <div className="icon-badge">{icons[category.key]}</div>
                <h3>{category.title}</h3>
                <div className="desc">{category.desc}</div>
                <div className="tag-row">
                  {category.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Proficiency;
