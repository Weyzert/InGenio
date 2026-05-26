import { useMemo, useState } from "react";

import "./Professionals.css";

import { FaSearch, FaBars} from "react-icons/fa";

import Drawer from "../../components/Drawer/Drawer";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import BackToTop from "../../components/BackToTop/BackToTop";
import SearchFilters from "../../components/SearchFilters/SearchFilters";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

import { usuarios, perfis, talentos, talentoUsuario, ufs, cidades, paises } from "../../stub/stub";

function Professionals() {
  const [busca, setBusca] = useState("");
  const [talentoSelecionado, setTalentoSelecionado] =
    useState("");
  const [paisSelecionado, setPaisSelecionado] =
  useState("");
  const [ufSelecionada, setUfSelecionada] =
    useState("");
  const [cidadeSelecionada, setCidadeSelecionada] =
    useState("");

  const [drawerAberto, setDrawerAberto] =
    useState(false);

  function limparFiltros() {

    setBusca("");

    setTalentoSelecionado("");

    setPaisSelecionado("");

    setUfSelecionada("");

    setCidadeSelecionada("");
  }

  const perfisCompletos = useMemo(() => {
    return perfis.map((perfil) => {
      const usuario = usuarios.find(
        (u) => u.id === perfil.fk_usuario
      );

      const talentosDoUsuario = talentoUsuario
        .filter((tu) => tu.fk_usuario === usuario.id)
        .map((tu) => {
            const talento = talentos.find(
            (t) => t.id === tu.fk_talento
            );

            if (!talento) return null;

            return {
            ...talento,
            especialista: tu.especialista,
            };
        })
        .filter(Boolean);

      const cidade = cidades.find(
        (c) => c.id === perfil.fk_cidade
      );

      const uf = ufs.find(
        (u) => u.id === cidade?.fk_uf
      );

      const pais = paises.find(
        (p) => p.id === uf?.fk_pais
      );

      return {
        ...perfil,

        usuario,

        cidade,

        uf,

        pais,

        talentos: talentosDoUsuario,
      };
    }
  );
  }, []);

  const perfisFiltrados = useMemo(() => {
    return perfisCompletos.filter((perfil) => {
      const texto = busca.toLowerCase();

      const matchBusca =
        perfil.usuario.nome
          .toLowerCase()
          .includes(texto) ||
        perfil.descricao
          .toLowerCase()
          .includes(texto);

      const matchTalento =
        !talentoSelecionado ||
        perfil.talentos.some(
          (t) => t.nome === talentoSelecionado
        );

      const matchPais =
        !paisSelecionado ||
        perfil.pais.nome === paisSelecionado;

      const matchUf =
        !ufSelecionada ||
        perfil.uf.sigla === ufSelecionada;

      const matchCidade =
        !cidadeSelecionada ||
        perfil.cidade.nome === cidadeSelecionada;

      return (
        matchBusca &&
        matchTalento &&
        matchPais &&
        matchUf &&
        matchCidade
      );
    });
  }, [
    busca,
    talentoSelecionado,
    cidadeSelecionada,
    ufSelecionada,
    paisSelecionado,
    perfisCompletos,
  ]);

  const mensagemFiltro = () => {

      if (busca) {
        return `a busca "${busca}"`;
      }

      if (talentoSelecionado) {
        return `o talento "${talentoSelecionado}"`;
      }

      if (cidadeSelecionada) {
        return `a cidade "${cidadeSelecionada}"`;
      }

      if (ufSelecionada) {
        return `o estado "${ufSelecionada}"`;
      }

      if (paisSelecionado) {
        return `o país "${paisSelecionado}"`;
      }

      return "os filtros selecionados";
  };

  return (
    <>
      <div className="professionals">

        <NavBar />

        <Drawer
          aberto={drawerAberto}
          fecharDrawer={() =>
            setDrawerAberto(false)
          }
        >

          <SearchFilters
            busca={busca}
            setBusca={setBusca}

            talentoSelecionado={
              talentoSelecionado
            }
            setTalentoSelecionado={
              setTalentoSelecionado
            }

            paisSelecionado={paisSelecionado}
            setPaisSelecionado={
              setPaisSelecionado
            }

            ufSelecionada={ufSelecionada}
            setUfSelecionada={
              setUfSelecionada
            }

            cidadeSelecionada={
              cidadeSelecionada
            }
            setCidadeSelecionada={
              setCidadeSelecionada
            }

            talentos={talentos}
            paises={paises}
            ufs={ufs}
            cidades={cidades}

            limparFiltros={limparFiltros}
          />

        </Drawer>

        <div className="content-container">

          <button
            className="open-drawer-btn"
            onClick={() =>
              setDrawerAberto(true)
            }
          >
            <FaBars />
            Filtros
          </button>

          <div className="talents-legend">

            <div className="legend-item">
              <span className="talent-tag">
                Talento
              </span>

              <p>
                Talento disponível
              </p>
            </div>

            <div className="legend-item">
              <span className="talent-tag especialista">
                Especialista
              </span>

              <p>
                Profissional especialista
              </p>
            </div>

          </div>

          <div className="profiles-list">

            {perfisFiltrados.length > 0 ? (

              perfisFiltrados.map((perfil) => (
                <ProfileCard
                  key={perfil.id}
                  perfil={perfil}
                />
              ))

            ) : (

              <div className="empty-state">

                <FaSearch className="empty-icon" />

                <h2>
                  Nenhum profissional encontrado
                </h2>

                <p>
                  Não foram encontrados profissionais
                  para {mensagemFiltro()}.
                </p>

              </div>

            )}

          </div>

        </div>

      </div>

      <BackToTop />

      <Footer />
      
    </>
  );
}

export default Professionals;