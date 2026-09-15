function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__top">
        <span className="project-card__category">{project.category}</span>
        <span className="project-card__index">Projet {project.id}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="project-card__tech" aria-label="Technologies utilisées">
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      {project.siteUrl && (
        <a
          className="project-card__link"
          href={project.siteUrl}
          target="_blank"
          rel="noreferrer"
        >
          Voir le site en ligne →
        </a>
      )}
    </article>
  );
}

export default ProjectCard;
