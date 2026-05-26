import "./Footer.css";

function Footer() {

  const anoAtual = new Date().getFullYear();

  return (

    <footer className="footer">

      <div className="footer-content">

        <p className="footer-text">

          © {anoAtual}

          {" "}

          <span className="footer-brand">
            InGenio
          </span>

          {" "}• Desenvolvido por{" "}

          <a
            href="https://github.com/Weyzert"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            Pedro Marcelo Roso Manica / Weyzert
          </a>

        </p>

      </div>

    </footer>

  );
}

export default Footer;