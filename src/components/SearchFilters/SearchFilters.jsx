import "./SearchFilters.css";

import {
  FaSearch,
  FaFilter,
  FaGlobeAmericas,
  FaMap,
  FaCity,
  FaTimes
} from "react-icons/fa";

function SearchFilters({
  busca,
  setBusca,

  talentoSelecionado,
  setTalentoSelecionado,

  paisSelecionado,
  setPaisSelecionado,

  ufSelecionada,
  setUfSelecionada,

  cidadeSelecionada,
  setCidadeSelecionada,

  talentos,
  paises,
  ufs,
  cidades,

  limparFiltros,
}) {

  const ufsFiltradas = !paisSelecionado
    ? ufs
    : ufs.filter((uf) => {
        return paises.find(
          (p) =>
            p.id === uf.fk_pais &&
            p.nome === paisSelecionado
        );
      });

  const cidadesFiltradas = !ufSelecionada
    ? cidades
    : cidades.filter((cidade) => {
        const ufDaCidade = ufs.find(
          (u) => u.id === cidade.fk_uf
        );

        return ufDaCidade?.sigla === ufSelecionada;
      });

  return (
    <div className="search-filters">

      <div className="input-container">

        <FaSearch className="input-icon" />

        <input
          type="text"
          placeholder="Buscar por nome ou descrição..."
          value={busca}
          onChange={(e) =>
            setBusca(e.target.value)
          }
        />

      </div>

      <div className="select-container">

        <FaFilter className="input-icon" />

        <select
          value={talentoSelecionado}
          onChange={(e) =>
            setTalentoSelecionado(
              e.target.value
            )
          }
        >
          <option value="">
            Todos os Talentos
          </option>

          {talentos.map((talento) => (
            <option
              key={talento.id}
              value={talento.nome}
            >
              {talento.nome}
            </option>
          ))}
        </select>

      </div>

      <div className="select-container">

        <FaGlobeAmericas className="input-icon" />

        <select
          value={paisSelecionado}
          onChange={(e) => {
            setPaisSelecionado(
              e.target.value
            );
            setUfSelecionada("");
            setCidadeSelecionada("");
          }}
        >
          <option value="">
            Todos os Países
          </option>

          {paises.map((pais) => (
            <option
              key={pais.id}
              value={pais.nome}
            >
              {pais.nome}
            </option>
          ))}

        </select>

      </div>

      <div className="select-container">

        <FaMap className="input-icon" />

        <select
          className={
            !paisSelecionado
              ? "disabled-select"
              : ""
          }

          value={ufSelecionada}

          onChange={(e) => {
            setUfSelecionada(
              e.target.value
            );
            setCidadeSelecionada("");
          }}
        >

          <option value="">
            {!paisSelecionado
              ? "Selecione um país primeiro"
              : "Todos os Estados"}
          </option>

          {paisSelecionado &&
            ufsFiltradas.map((uf) => (
              <option
                key={uf.id}
                value={uf.sigla}
              >
                {uf.nome}
              </option>
            ))}

        </select>

      </div>

      <div className="select-container">

        <FaCity className="input-icon" />

        <select
          className={
            !ufSelecionada
              ? "disabled-select"
              : ""
          }

          value={cidadeSelecionada}

          onChange={(e) =>
            setCidadeSelecionada(
              e.target.value
            )
          }
        >

          <option value="">
            {!ufSelecionada
              ? "Selecione um estado primeiro"
              : "Todas as Cidades"}
          </option>

          {ufSelecionada &&
            cidadesFiltradas.map((cidade) => (
              <option
                key={cidade.id}
                value={cidade.nome}
              >
                {cidade.nome}
              </option>
            ))}

        </select>

      </div>

      <button
        className="clear-filters-btn"
        onClick={limparFiltros}
      >

        <FaTimes />

        Limpar Filtros

      </button>

    </div>
  );
}

export default SearchFilters;