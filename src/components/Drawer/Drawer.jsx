import "./Drawer.css";

import {
  FaTimes
} from "react-icons/fa";

function Drawer({
  aberto,
  fecharDrawer,
  children,
}) {

  return (
    <>
      <div
        className={
          aberto
            ? "drawer-overlay active"
            : "drawer-overlay"
        }
        onClick={fecharDrawer}
      />
      <aside
        className={
          aberto
            ? "drawer active"
            : "drawer"
        }
      >

        <div className="drawer-header">

          <h2>
            Filtros
          </h2>

          <button
            onClick={fecharDrawer}
          >
            <FaTimes />
          </button>

        </div>

        <div className="drawer-content">

          {children}

        </div>

      </aside>

    </>
  );
}

export default Drawer;