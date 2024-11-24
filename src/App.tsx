import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Página Home
//import Settings from "./pages/Settings"; // Outra página de exemplo (opcional)

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<Home />} />

        {/* Rota para a página de configurações (exemplo) 
                <Route path="/settings" element={<Settings />} />
                */}
      </Routes>
    </Router>
  );
};

export default App;
