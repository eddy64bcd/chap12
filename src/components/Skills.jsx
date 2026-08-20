import skills from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="section section--muted">
      <div className="container">
        <p className="eyebrow">Compétences</p>
        <h2>Ma boîte à outils</h2>
        <p className="section__lead">
          Un niveau qui progresse chaque semaine, projet après projet.
        </p>

        <ul className="skills" role="list">
          {skills.map((skill) => (
            <li key={skill.name} className="skills__item">
              <div className="skills__row">
                <span className="skills__name">{skill.name}</span>
                <span className="skills__value">{skill.level}%</span>
              </div>
              <div
                className="skills__track"
                role="progressbar"
                aria-label={skill.name}
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="skills__fill"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
