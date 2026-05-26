import "./Profile.css";

import {
  useParams
} from "react-router-dom";

import { useEffect } from "react";

import {
  usuarios,
  contatos,
  talentos,
  talentoUsuario,
  perfis,
  etiquetas,
  avaliacoes,
  postagens,
  cidades,
  ufs,
  paises
} from "../../stub/stub";

import { formatNome } from "../../utils/formatNome";

import NavBar from "../../components/NavBar/NavBar";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Footer from "../../components/Footer/Footer";
import BackToTop from "../../components/BackToTop/BackToTop";

import {
  formatDate,
  formatDateTime
} from "../../utils/formatDate";

function Profile() {

  const { id } = useParams();

  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  }, [id]);

  const perfil = perfis.find(
    (p) => p.id === Number(id)
  );

  if (!perfil) {
    return (
      <h1>
        Perfil não encontrado
      </h1>
    );
  }

  const usuario = usuarios.find(
    (u) =>
      u.id === perfil.fk_usuario &&
      u.profissional
  );

  if (!usuario) {
    return (
      <h1>
        Profissional não encontrado
      </h1>
    );
  }

  const contato = contatos.find(
    (c) => c.fk_usuario === usuario.id
  );

  const talentosDoUsuario =
  talentoUsuario
    .filter(
      (tu) =>
        tu.fk_usuario === usuario.id
    )
    .map((tu) => {

      const talento = talentos.find(
        (t) =>
          t.id === tu.fk_talento
      );

      return {
        ...talento,
        especialista: tu.especialista,
      };
    })
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
    });

  const etiquetasDoPerfil =
    etiquetas.filter(
      (e) =>
        e.fk_perfil === perfil.id
    );

  const avaliacoesDoPerfil =
    avaliacoes.filter(
      (a) =>
        a.fk_perfil === perfil.id
    );

  const mediaAvaliacoes =
  avaliacoesDoPerfil.length > 0
    ? (
        avaliacoesDoPerfil.reduce(
          (total, avaliacao) =>
            total + avaliacao.estrelas,
          0
        ) / avaliacoesDoPerfil.length
      ).toFixed(1)
    : 0;

  const postagensDoPerfil =
    postagens.filter(
      (p) =>
        p.fk_perfil === perfil.id
    );

  const cidade = cidades.find(
    (c) => c.id === perfil.fk_cidade
  );

  const uf = ufs.find(
    (u) => u.id === cidade?.fk_uf
  );

  const pais = paises.find(
    (p) => p.id === uf?.fk_pais
  );

  return (
    <>

    <NavBar />

    <BreadCrumb
        nome={formatNome(usuario.nome)}
    />

    <div className="profile-page">

      <div
        className="profile-cover"
        style={{
          backgroundImage:
            `url(${perfil.fotoCapa})`
        }}
      />

      <div className="profile-header">

        <img
          src={perfil.fotoPerfil}
          alt={usuario.nome}
          className="profile-avatar"
        />

        <div>

            <h1>
              {formatNome(usuario.nome)}
            </h1>

            <p>
              {cidade?.nome}
              {" - "}
              {uf?.sigla}
              {" - "}
              {pais?.nome}
            </p>

            <div className="profile-infos">

              <div className="profile-rating">

                {
                  avaliacoesDoPerfil.length > 0 ? (
                    <>
                      <strong>
                        {mediaAvaliacoes} ⭐
                      </strong>

                      <span>
                        {avaliacoesDoPerfil.length}
                        {" "}
                        {
                          avaliacoesDoPerfil.length === 1
                            ? "avaliação"
                            : "avaliações"
                        }
                      </span>
                    </>
                  ) : (
                    <span>
                      Sem avaliações
                    </span>
                  )
                }

              </div>

              <div className="profile-posts-count">

                {
                  postagensDoPerfil.length > 0 ? (
                    <>
                      <strong>
                        {postagensDoPerfil.length}
                      </strong>

                      <span>
                        {
                          postagensDoPerfil.length === 1
                            ? "postagem"
                            : "postagens"
                        }
                      </span>
                    </>
                  ) : (
                    <span>
                      Sem postagens
                    </span>
                  )
                }

              </div>

            </div>
          </div>
        </div>

      <section className="profile-section">

        <h2>
          Sobre
        </h2>

        <p>
          {perfil.descricao}
        </p>

      </section>

      <section className="profile-section">

        <h2>
          Talentos
        </h2>
        
        <div className="talents-scroll">
          <div className="talents-grid">

            {talentosDoUsuario.map(
              (talento) => (
                <div
                  key={talento.id}
                  className="talent-card"
                >

                  <div className="talent-header">

                    <h3>
                      {talento.nome}
                    </h3>

                    {talento.especialista && (
                      <span className="especialista-badge">
                        Especialista
                      </span>
                    )}

                  </div>

                  <p>
                    {talento.descricao}
                  </p>

                </div>
              )
            )}

          </div>
        </div>
      </section>

      <section className="profile-section">

        <h2>
          Contatos
        </h2>

        <div className="contact-list">

          {contato?.telefone1 && (
            <p>
              <strong>Telefone 1:</strong>
              {" "}
              {contato.telefone1}
            </p>
          )}

          {contato?.telefone2 && (
            <p>
              <strong>Telefone 2:</strong>
              {" "}
              {contato.telefone2}
            </p>
          )}

          {contato?.celular1 && (
            <p>
              <strong>Celular 1:</strong>
              {" "}
              {contato.celular1}
            </p>
          )}

          {contato?.celular2 && (
            <p>
              <strong>Celular 2:</strong>
              {" "}
              {contato.celular2}
            </p>
          )}

          {contato?.email1 && (
            <p>
              <strong>Email 1:</strong>
              {" "}

              <a
                href={`mailto:${contato.email1}`}
                target="_blank"
                rel="noreferrer"
                className="contact-list-Email"
              >
                {contato.email1}
              </a>
            </p>
          )}

          {contato?.email2 && (
            <p>
              <strong>Email 2:</strong>
              {" "}

              <a
                href={`mailto:${contato.email2}`}
                target="_blank"
                rel="noreferrer"
                className="contact-list-Email"
              >
                {contato.email2}
              </a>
            </p>
          )}

          {contato?.linkWhats && (
            <a
              href={contato.linkWhats}
              target="_blank"
              rel="noreferrer"
              className="contact-list-WhatsApp"
            >
              WhatsApp
            </a>
          )}

          {contato?.linkTelegram && (
            <a
              href={contato.linkTelegram}
              target="_blank"
              rel="noreferrer"
              className="contact-list-Telegram"
            >
              Telegram
            </a>
          )}

        </div>

      </section>

      <section className="profile-section">

        <h2>
          Licenças
        </h2>
        
        <div className="licences-scroll">
          <div className="licences-list">

            {etiquetasDoPerfil.map(
              (etiqueta) => (
                <div
                  key={etiqueta.id}
                  className="licence-badge"
                >

                  <strong>
                    #{etiqueta.codigo}
                  </strong>

                  {
                    etiqueta.descricao?.trim() && (
                      <span
                        className="licence-description"
                        title={etiqueta.descricao}
                      >
                        {etiqueta.descricao}
                      </span>
                    )
                  }

                </div>
              )
            )}

          </div>
        </div>

      </section>

      <section className="profile-section">

        <h2>
          Avaliações
        </h2>

        <div className="reviews-scroll">

          {avaliacoesDoPerfil.map(
            (avaliacao) => (

              <div
                key={avaliacao.id}
                className="review-card"
              >

                <strong>
                  {avaliacao.estrelas} ⭐
                </strong>

                <p>
                  {avaliacao.descricao}
                </p>

                <div className="review-dates">

                  <span>
                    Serviço realizado em:
                    {" "}
                    {formatDate(
                      avaliacao.dataServico
                    )}
                  </span>

                  <span>
                    Avaliado em:
                    {" "}
                    {formatDateTime(
                      avaliacao.dataHora
                    )}
                  </span>

                </div>

              </div>
            )
          )}

        </div>
      </section>

      <section className="profile-section">

        <h2>
          Postagens
        </h2>
        
        <div className="posts-scroll">
          <div className="posts-grid">

            {postagensDoPerfil.map(
              (post) => (
                <div
                  key={post.id}
                  className="post-card"
                >

                  {post.foto && (
                    <img
                      src={post.foto}
                      alt={post.descricao}
                    />
                  )}

                  <div className="post-content">

                    <p>
                      {post.descricao}
                    </p>

                    <span className="post-date">
                      Publicado em{" "}
                      {formatDateTime(post.dataHora)}
                    </span>

                  </div>

                </div>
              )
            )}

          </div>
        </div>
      </section>

    </div>

    <BackToTop />

    <Footer/>
    </>
  );
}

export default Profile;