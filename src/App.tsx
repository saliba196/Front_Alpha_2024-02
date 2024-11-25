import "./App.css";
import { MuiTypography } from "./components/MuiTypograpy";
import { MuiButtons } from "./components/MuiButtons";
import { Login } from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cadastro } from "./pages/cadastro";
import { Infos } from "./pages/infos";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Infos/>} />
      </Routes>
    </Router>
  );
};

export default App;
