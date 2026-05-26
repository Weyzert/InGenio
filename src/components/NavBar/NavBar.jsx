import "./NavBar.css";

import {
  Link
} from "react-router-dom";

import {
  useEffect,
  useState
} from "react";

function NavBar() {

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {

    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (
    <nav
      className={
        scrolled
          ? "navbar navbar-scrolled"
          : "navbar"
      }
    >

      <div className="navbar-content">

        <Link
          to="/"
          className="navbar-logo"
        >
          <span className="logo-in">
            In
          </span>

          <span className="logo-genio">
            Genio
          </span>
        </Link>

        <div className="navbar-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/profissionais">
            Profissionais
          </Link>

          <button>
            Entrar
          </button>

        </div>

      </div>

    </nav>
  );
}

export default NavBar;