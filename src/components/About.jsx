import { softSkills } from "../data/skills";

function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about__text">
          <p className="eyebrow">À propos</p>
          <h2>Une reconversion motivée par la passion du web</h2>
          <p>
            J'ai passé plusieurs années dans le commerce et le management, où
            j'ai appris à comprendre les besoins des clients, gérer des
            équipes et mener des projets jusqu'au bout. En 2025, j'ai décidé de
            donner un nouveau cap à ma carrière et de me former au
            développement web, un domaine qui me passionne depuis longtemps.
          </p>
          <p>
            Je me suis formé avec OpenClassrooms sur le parcours{" "}
            <strong>Intégrateur Web</strong>, à travers 12 projets concrets qui
            m'ont permis d'apprendre HTML, CSS, JavaScript, React et Redux en
            partant de zéro. Je continue aujourd'hui à approfondir ces
            compétences en construisant des projets personnels.
          </p>

          <ul className="about__softskills">
            {softSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="about__card">
          <div className="about__avatar" aria-hidden="true">
            ER
          </div>
          <dl className="about__facts">
            <div>
              <dt>Formation</dt>
              <dd>OpenClassrooms — Intégrateur Web</dd>
            </div>
            <div>
              <dt>Parcours précédent</dt>
              <dd>Commerce &amp; Management</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>HTML · CSS · JavaScript · React · Redux</dd>
            </div>
            <div>
              <dt>Basé en</dt>
              <dd>France</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default About;
