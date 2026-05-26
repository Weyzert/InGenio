import "./Home.css";

import {
  Link
} from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Home() {

  return (
    <>

      <NavBar />

      <Header/>

      <div className="home">

        <div className="home-hero">

          <h1>
            Encontre profissionais para qualquer talento
          </h1>

          <p>
            Descubra especialistas próximos de você.
          </p>

          <Link
            to="/profissionais"
            className="home-button"
          >
            Ver profissionais
          </Link>

        </div>

      </div>

      <Footer />

    </>
  );
}

export default Home;