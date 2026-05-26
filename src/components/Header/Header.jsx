import "./Header.css";

function Header() {
  return (
    <header className="header">

      <div className="header-overlay" />

      <div className="header-content">

        <span className="header-badge">
          Plataforma Profissional
        </span>

        <h1>
          <span className="header-in">
            In
          </span>

          <span className="header-genio">
            Genio
          </span>
        </h1>

        <h2>
          Conectando talento, criatividade e confiança
        </h2>

        <p>
          Descubra profissionais qualificados perto de você,
          encontre especialistas e divulgue seu trabalho
          para toda a região.
        </p>

      </div>

    </header>
  );
}

export default Header;