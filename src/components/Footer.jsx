function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {year} Eddy Ramoni. Portfolio conçu et développé avec React.</p>
        <a href="#top">Retour en haut ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
