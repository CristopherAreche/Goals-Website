import { Link } from "react-router-dom";
import estilos from "./Vinculo.module.css";
function Vinculo({ Icono, texto, to }) {
  return (
    <Link to={to} className={estilos.vinculo}>
      <Icono className={estilos.icono} />
      {/* Las llaves con el && sirven para crear un condicional. Si hay texto, renderiza el resto del codigo y si no pues no agregues nada */}
      {texto && <span className={estilos.texto}>{texto}</span>}
    </Link>
  );
}

export default Vinculo;
