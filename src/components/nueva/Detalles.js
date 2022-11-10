import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Contexto } from "../../services/Memoria";
import estilos from "./Detalles.module.css";

// constantes para los eventos y los iconos
const frecuencias = ["dia", "semana", "mes", "año"];
const iconos = ["✈️", "🏃🏽‍♂️", "📚", "💵", "💻"];

function Detalles() {
  const { id } = useParams();
  //crear el estado de los componentes
  const [form, setForm] = useState({
    detalles: "",
    eventos: 1,
    periodo: "semana",
    icono: "🏃🏽‍♂️",
    meta: 52,
    plazo: "2022-01-01",
    completado: 0,
  });

  const [estado, enviar] = useContext(Contexto);

  //extraer cada uno de los elementos del estado
  const { detalles, eventos, periodo, icono, meta, plazo, completado } = form;

  //funcion onChange(esto es una funcion asincrona)
  const onChange = (event, prop) => {
    setForm((estado) => ({ ...estado, [prop]: event.target.value }));
    console.log(form);
  };
  const metaMemoria = estado.objetos[id];
  //esta function ayuda a ver el cambio de estado del elemento
  useEffect(() => {
    if (!id) return;
    if (!metaMemoria) {
      return navegar("/404");
    }
    setForm(metaMemoria);
  }, [id, metaMemoria, navegar]);

  const navegar = useNavigate();

  //esta funcion se a disparar cuando se presione el boton
  const crear = () => {
    enviar({ tipo: "crear", meta: form });
    navegar("/lista");
  };

  const actualizar = () => {
    enviar({ tipo: "actualizar", meta: form });
    navegar("/lista");
  };

  const borrar = () => {
    enviar({ tipo: "borrar", id });
    navegar("/lista");
  };

  const cancelar = () => {
    navegar("/lista");
  };
  return (
    <div className="tarjeta">
      <form className="p-4">
        <label className="label">
          Describe tu meta
          <input
            className="input"
            placeholder="ej. 54 caminatas"
            value={detalles}
            onChange={(e) => onChange(e, "detalles")}
          />
        </label>
        <label className="label">
          Con que frecuencia deseas cumplir tus metas?
          <span>(ej. 1 vez a la semana)</span>
          <div className="flex mb-6">
            <input
              className="input mr-6"
              type="number"
              value={eventos}
              onChange={(e) => onChange(e, "eventos")}
            />
            <select
              className="input"
              value={periodo}
              onChange={(e) => onChange(e, "periodo")}
            >
              {frecuencias.map((opcion) => (
                <option key={opcion} value={opcion}>
                  {opcion}
                </option>
              ))}
              <option value="semana">a la semaana</option>
              <option value="mes">al mes</option>
              <option value="año">al año</option>
            </select>
          </div>
        </label>
        <label className="label">
          Cuantas veces deseas completar esta meta?
          <input
            className="input"
            type="number"
            value={meta}
            onChange={(e) => onChange(e, "meta")}
          />
        </label>
        <label className="label">
          Tienes una fecha limite?
          <input
            className="input"
            type="date"
            value={plazo}
            onChange={(e) => onChange(e, "plazo")}
          />
        </label>
        <label className="label">
          Cuantas veces haz completado y a esta meta?
          <input
            className="input"
            type="number"
            value={completado}
            onChange={(e) => onChange(e, "completado")}
          />
        </label>
        <label className="label">
          Ecoge el icono para la meta
          <select
            className="input"
            value={icono}
            onChange={(e) => onChange(e, "icono")}
          >
            {iconos.map((opcion) => (
              <option key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </label>
      </form>
      <div className={estilos.botones}>
        {!id && (
          <button className="boton boton--negro" onClick={crear}>
            Crear
          </button>
        )}
        {id && (
          <button className="boton boton--negro" onClick={actualizar}>
            Actualizar
          </button>
        )}
        {id && (
          <button className="boton boton--rojo" onClick={borrar}>
            Borrar
          </button>
        )}
        <button className="boton boton--gris" onClick={cancelar}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default Detalles;
