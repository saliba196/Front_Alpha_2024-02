import React from "react";
import { Box, Typography, Divider, Stack } from "@mui/material";
import SideMenu from "../components/menu_lat"; // Componente do menu lateral
import { TituloPagina } from "../components/TituloPagina"; // Título da página
//import CursosCertificados from "../components/CursosCertificados";
//Organizar o stack com os certificados gerados dinâmicamente

const VerVideo: React.FC = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", overflowX: "hidden" }}>
      {/* Menu Lateral */}
      <SideMenu />

      {/* Conteúdo Principal */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          padding: "24px",
          background: "linear-gradient(to bottom right, #213435 30%, #46685B)",
          overflowX: "hidden",
        }}
      >
        <Stack direction="column" spacing={1} alignItems="left">
          {/* Título da Página */}
          <TituloPagina titulo="Certificados" />
          <Typography fontSize={24}> Descrição da página </Typography>
        </Stack>
        //Aqui vai o conteúdo da página
      </Box>
    </Box>
  );
};

export default VerVideo;
