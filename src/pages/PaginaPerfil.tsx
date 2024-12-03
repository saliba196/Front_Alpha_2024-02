import React from "react";
import { Box } from "@mui/material";
import { TituloPagina } from "../components/TituloPagina";
import { PerfilUsuario } from "../components/PerfilUsuario";
import { CursosCertificados } from "../components/CursosCertificados";

export const PaginaPerfil: React.FC = () => (
  <Box
    sx={{
      backgroundColor: "#2D3B3A",
      minHeight: "100vh",
      padding: "32px",
      display: "flex",
      flexDirection: "column",
      gap: "48px",
    }}
  >
    <TituloPagina titulo="Meu perfil" />
    <PerfilUsuario
      nome="Luiza Saliba"
      assinatura="Assinante Premium"
      email="luiza.saliba@tinapp.com.br"
      fotoUrl="https://via.placeholder.com/150" // Substituir pela URL real da imagem
    />
    <CursosCertificados cursosAcessados={18} certificadosDisponiveis={8} />
  </Box>
);
