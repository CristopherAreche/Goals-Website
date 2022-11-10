import estilos from "./Principal.module.css";
import Vinculo from "./Vinculo";
import { AiOutlineBars, AiOutlinePlusCircle } from "react-icons/ai";
function Principal({ children }) {
  return (
    <div className={estilos.principal}>
      <aside className={estilos.aside}>
        <Vinculo to="/lista" texto="Lista de Metas" Icono={AiOutlineBars} />
        <Vinculo to="/nueva" texto="Nueva Meta" Icono={AiOutlinePlusCircle} />
      </aside>
      <main className={estilos.main}>{children}</main>
    </div>
  );
}

export default Principal;
