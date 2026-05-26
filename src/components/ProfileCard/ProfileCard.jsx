import "./ProfileCard.css";

import { useNavigate } from "react-router-dom";
import { FaCity } from "react-icons/fa";
import { formatNome } from "../../utils/formatNome";

function ProfileCard({ perfil }) {

  const navigate = useNavigate();

  return (
    
    <div
      className="profile-card"
      onClick={() =>
        navigate(`/perfil/${perfil.id}`)
      }
    >

      <img
        src={
          perfil.fotoPerfil ||
          "https://via.placeholder.com/120"
        }
        alt={perfil.usuario.nome}
        className="profile-image"
      />

      <div className="profile-content">

        <h2>
          {formatNome(perfil.usuario.nome)}
        </h2>

        <div className="profile-talents">

          {[...perfil.talentos]
            .sort((a, b) => {

              if (a.especialista && !b.especialista) {
                return -1;
              }

              if (!a.especialista && b.especialista) {
                return 1;
              }

              return a.nome.localeCompare(
                b.nome,
                "pt-BR",
                {
                  sensitivity: "base",
                }
              );
            })
            .map((talento) => (

              <span
                key={talento.id}
                className={
                  talento.especialista
                    ? "talent-tag especialista"
                    : "talent-tag"
                }
              >
                {talento.nome}
              </span>

            ))}

        </div>

        <p className="profile-description">
          {perfil.descricao}
        </p>

        <p className="profile-location">
          <FaCity />
          {perfil.cidade.nome} - {perfil.uf.sigla} - {perfil.pais.nome}
        </p>

      </div>

    </div>
  );
}

export default ProfileCard;