import "./App.css";
import Encabezamineto from "./components/compartidos/Emcabezamiento";
import Principal from "./components/compartidos/Principal";
import Pie from "./components/compartidos/Pie";
function App() {
  return (
    <div className="App">
      <Encabezamineto></Encabezamineto>
      <Principal></Principal>
      <Pie></Pie>
    </div>
  );
}

export default App;
