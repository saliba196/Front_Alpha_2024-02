import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Página Home
//import Settings from "./pages/Settings"; // Outra página de exemplo (opcional)
import "./App.css";
//import { MuiButtons } from "./components/MuiButtons";
import { Login } from "./pages/login";
import { Cadastro } from "./pages/cadastro";
import { PaginaPerfil } from "./pages/PaginaPerfil";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<Login />} />
        <Route path="/perfil" element={<PaginaPerfil />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        {/* Rota para a página de configurações (exemplo) 
                <Route path="/settings" element={<Settings />} />
                */}
      </Routes>
    </Router>
  );
};

export default App;
