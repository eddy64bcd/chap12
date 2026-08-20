import { useMemo, useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const categories = useMemo(
    () => ["Tous", ...new Set(projects.map((p) => p.category))],
    []
  );
  const [active, setActive] = useState("Tous");

  const filtered =
    active === "Tous" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="eyebrow">Projets</p>
        <h2>Les 12 projets de ma formation</h2>
        <p className="section__lead">
          Réalisés dans le cadre du parcours Intégrateur Web d'OpenClassrooms,
          du premier "Hello World" jusqu'aux applications React avec API.
        </p>

        <div className="projects__filters" role="tablist" aria-label="Filtrer les projets">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active === cat}
              className={`chip ${active === cat ? "chip--active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
