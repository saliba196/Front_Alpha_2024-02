import "./App.css";
import { MuiTypography } from "./components/MuiTypograpy";
import { MuiButtons } from "./components/MuiButtons";
import { Login } from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cadastro } from "./pages/cadastro";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
};

export default App;
