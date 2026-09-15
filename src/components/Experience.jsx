import experience from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="eyebrow">Parcours</p>
        <h2>Avant le développement web</h2>
        <p className="section__lead">
          37 ans dans le commerce, le service et le management, avant de me
          former au développement. Un parcours qui m'a donné des réflexes
          directement utiles aujourd'hui : organisation, sens du client,
          autonomie.
        </p>

        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.id} className="timeline__item">
              <div className="timeline__marker" aria-hidden="true" />
              <div className="timeline__content">
                <div className="timeline__head">
                  <h3>{job.company}</h3>
                  <span className="timeline__duration">{job.duration}</span>
                </div>
                <p className="timeline__role">{job.role}</p>
                <ul className="timeline__bullets">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <ul className="timeline__tags" aria-label="Compétences transférables">
                  {job.transferable.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
