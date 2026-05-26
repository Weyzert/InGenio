import "./BreadCrumb.css";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  FaChevronRight,
  FaArrowLeft
} from "react-icons/fa";

function BreadCrumb({
  nome
}) {

  const navigate = useNavigate();

  return (
    <div className="breadcrumb-wrapper">

      <button
        className="back-button"
        onClick={() => {

          navigate(-1);

          setTimeout(() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }, 50);

        }}
      >
        <FaArrowLeft />
        Voltar
      </button>

      <div className="breadcrumb">

        <Link to="/">
          Home
        </Link>

        <FaChevronRight />

        <Link to="/profissionais">
          Profissionais
        </Link>

        <FaChevronRight />

        <span>
          {nome}
        </span>

      </div>

    </div>
  );
}

export default BreadCrumb;