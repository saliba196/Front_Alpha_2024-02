import React from "react";
import { Box, Typography, Divider, Stack } from "@mui/material";
import SideMenu from "../components/menu_lat"; // Componente do menu lateral
import { PerfilUsuario } from "../components/PerfilUsuario"; // Componente do perfil do usuário
import SubscriptionCard from "../components/SubscriptionCard"; // Card de assinatura
import RenewalCard from "../components/RenewalCard"; // Card de renovação
import AcessoCertificados from "../components/AcessoCertificados";
import { TituloPagina } from "../components/TituloPagina"; // Título da página
import AutorenewIcon from "@mui/icons-material/Autorenew";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import GroupsIcon from "@mui/icons-material/Groups";

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
          <TituloPagina titulo="Nome do vídeo rs" />
          <Typography fontSize={24}> Descrição da aula </Typography>
        </Stack>
        <Stack direction="column" spacing={3} alignItems="left"></Stack>
        <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
          Aqui vai o vídeo
        </Box>
      </Box>
    </Box>
  );
};

export default VerVideo;
