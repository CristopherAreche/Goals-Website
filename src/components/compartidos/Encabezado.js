import { FiCheckCircle } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import estilos from "./Encabezado.module.css";
import Vinculo from "./Vinculo";
function Encabezado() {
  return (
    <header className={estilos.encabezado}>
      <div className={estilos.contenedor}>
        <FiCheckCircle size={25} />
        <a href="/" className={estilos.titulo}>
          Metas App
        </a>
      </div>
      <nav>
        <Vinculo to="/perfil" Icono={AiOutlineUser} />
      </nav>
    </header>
  );
}

export default Encabezado;
