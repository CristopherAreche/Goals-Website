import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/compartidos/Layout";
import Lista from "./components/lista/Lista";
import Detalles from "./components/nueva/Detalles";
import NoEncontrado from "./components/compartidos/NoEncontrado";
import Modal from "./components/compartidos/Modal";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Lista />} />
        <Route path="/lista" element={<Lista />}>
          <Route
            path="/lista/:id"
            element={
              <Modal>
                <Detalles />
              </Modal>
            }
          />
        </Route>
        <Route path="/nueva" element={<Detalles />} />
      </Route>
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
}

export default App;
