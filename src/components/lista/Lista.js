import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Contexto } from "../../services/Memoria";
import Meta from "./Meta";

function Lista() {
  const [estado] = useContext(Contexto);
  // con los ... se pasan todas las propiedades del objecto
  return (
    <>
      {estado.orden.map((id) => (
        <Meta key={id} {...estado.objetos[id]} />
      ))}
      <Outlet />
    </>
  );
}

export default Lista;
