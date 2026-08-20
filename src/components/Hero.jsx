function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <p className="eyebrow">Développeur Front-End · Reconversion professionnelle</p>
        <h1>
          Bonjour, je suis <span className="text-accent">Eddy Ramoni</span>.
        </h1>
        <p className="hero__lead">
          Après une carrière dans le commerce et le management, j'ai choisi de me
          reconvertir dans le développement web. Formé chez OpenClassrooms
          (parcours Intégrateur Web), je construis aujourd'hui des interfaces
          modernes avec HTML, CSS, JavaScript et React.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            Voir mes projets
          </a>
          <a href="#contact" className="btn btn--ghost">
            Discutons
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
