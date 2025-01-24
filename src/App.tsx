import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/700.css";
import Home from "./pages/Home";
import { Login } from "./pages/login";
import VerCertificados from "./pages/certificados";
import { Cadastro } from "./pages/cadastro";
import PaginaPerfil from "./pages/PaginaPerfil";
import VerVideo from "./pages/VerVideo";
import ADMCriaAula from "./pages/ADMCriaAula";

// Criação do tema global
const theme = createTheme({
  palette: {
    text: {
      primary: "#FFFFFF", // Texto branco por padrão
    },
    background: {
      default: "linear-gradient(to bottom right, #213435 30%, #46685B)", // Fundo global
    },
  },
  typography: {
    fontFamily: "Nunito, sans-serif", // Fonte Nunito global
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          background: "linear-gradient(to bottom right, #213435 30%, #46685B)", // Fundo global
          overflowX: "hidden", // Remove rolagem horizontal
        },
      },
    },
  },
});
import { Recuperacao } from "./pages/recuperacao";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Aplica estilos globais */}
      <Router>
        <Routes>
          {/* Rotas */}
          <Route path="/" element={<Login />} />
          <Route path="/perfil" element={<PaginaPerfil />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/video" element={<VerVideo />} />
          <Route path="/certificados" element={<VerCertificados />} />
          <Route path="/recuperacao" element={<Recuperacao />} />
          <Route path="/ADMCriaAula" element={<ADMCriaAula />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
