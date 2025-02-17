import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import SideMenu from "../components/menu_lat";
import { TituloPagina } from "../components/TituloPagina";

const VerVideo: React.FC = () => {
  const [searchParams] = useSearchParams();
  const videoUrl = searchParams.get("videoUrl") || "";
  const videoTitle = searchParams.get("videoTitle") || "Título do vídeo";
  const description = searchParams.get("description") || "Descrição da aula";

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
        <Stack direction="column" spacing={1} alignItems="flex-start">
          <TituloPagina titulo={videoTitle} backRoute="/home" />
          <Typography fontSize={24}>{description}</Typography>
        </Stack>
        <Box component="section" sx={{ p: 2, display: "flex", justifyContent: "center" }}>
          {videoUrl ? (
            <Box
              component="iframe"
              src={videoUrl}
              title={videoTitle}
              width="60%"
              height="700px"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <Typography color="white">Nenhuma URL de vídeo foi fornecida.</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default VerVideo;
