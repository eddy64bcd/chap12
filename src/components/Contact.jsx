const EMAIL = "eddy64bcd@gmail.com";
const GITHUB = "https://github.com/eddy64bcd";

function Contact() {
  return (
    <section id="contact" className="section section--muted">
      <div className="container contact">
        <p className="eyebrow">Contact</p>
        <h2>Discutons de votre projet</h2>
        <p className="section__lead">
          En reconversion et à la recherche d'opportunités (alternance, stage
          ou premier poste) en développement front-end. N'hésitez pas à me
          contacter !
        </p>

        <div className="contact__links">
          <a className="btn btn--primary" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <a
            className="btn btn--ghost"
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
          >
            GitHub — @eddy64bcd
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
