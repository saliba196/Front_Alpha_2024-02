import React, { useState, useEffect } from "react";
import { Box, Typography, Button, IconButton, Avatar } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DownloadIcon from "@mui/icons-material/Download";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SideMenu from "../components/menu_lat";
import { CardComponent } from "../components/card_video";
import ArticleIcon from '@mui/icons-material/Article';
import { useSearchParams, useNavigate } from "react-router-dom";
import { fetchAulas } from "../api/courses";

const containerStyle = {
  background: "linear-gradient(to bottom right, #213435 30%, #46685B)",
  display: "flex",
  position: "relative",
  flex: 1,
};

const Infos: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const pageId = searchParams.get("id") || "0";
  const pageTitle = searchParams.get("title") || "Agatha all along";
  const pageSubtitle = searchParams.get("subtitle") || "Aprenda tudo sobre a dieta das bruxas";

  const [aulas, setAulas] = useState<any[]>([]);

  useEffect(() => {
    const courseId = Number(pageId);
    fetchAulas(courseId)
      .then(data => setAulas(data))
      .catch(error => console.error("Erro ao buscar aulas:", error));
  }, [pageId]);

  const handleAssistirClick = () => {
    if (aulas.length > 0) {
      const firstAula = aulas[0];
      const videoUrl = `/video?videoUrl=${encodeURIComponent(firstAula.video_url)}&videoTitle=${encodeURIComponent(firstAula.title)}&description=${encodeURIComponent(firstAula.description)}`;
      navigate(videoUrl);
    }
  };

  return (
    <Box sx={containerStyle}>
      {/* Menu Lateral */}
      <SideMenu />
      
      {/* Conteúdo Principal */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Cabeçalho */}
        <Box
          position="relative"
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          px={4}
          py={2}
          sx={{
            backgroundImage: `url('https://via.placeholder.com/1200x300')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box color="white" maxWidth="600px">
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
              LANÇAMENTO
            </Typography>
            <Typography variant="h3" fontWeight="bold">
              {pageTitle}
            </Typography>
            <Typography variant="subtitle1" sx={{ my: 1 }}>
              {pageSubtitle}
            </Typography>

            <Button
              variant="contained"
              startIcon={<PlayArrowIcon />}
              sx={{ backgroundColor: "#4CAF50", color: "white" }}
              onClick={handleAssistirClick}
            >
              Assistir
            </Button>
          </Box>
        </Box>

        {/* Conteúdo Principal Dividido */}
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} p={4} gap={4}>
          {/* Coluna Esquerda: Vídeos */}
          <Box flex={1}>
            <Typography variant="h5" color="white" gutterBottom>
              Assistir
            </Typography>
            <Box display="flex" sx={{ flex: 1 }} flexDirection="column" gap={2}>
              {aulas.map((aula) => (
                <CardComponent
                  title={aula.title}
                  imageSrc={aula.image_url}
                  linkTo={`/video?videoUrl=${encodeURIComponent(aula.video_url)}&videoTitle=${encodeURIComponent(aula.title)}&description=${encodeURIComponent(aula.description)}`}
                />
              ))}
            </Box>
          </Box>

          {/* Coluna Direita: Materiais Complementares */}
          <Box flex={1} display="flex" flexDirection="column" gap={4} px={4}>
            <Box>
              <Typography variant="h5" color="white" gutterBottom>
                Materiais Complementares
              </Typography>
              <Box display="flex" flexDirection="column" gap={2}>
                {[...Array(2)].map((_, index) => (
                  <Box
                    key={index}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    bgcolor="#3C5C4B"
                    borderRadius={2}
                    p={2}
                  >
                    <Typography variant="body1" color="white">
                      Planilha de cálculo de porção
                    </Typography>
                    <IconButton>
                      <DownloadIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box>
              <Typography variant="h6" color="white" gutterBottom>
                Sobre o professor
              </Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <Avatar
                  alt="Professor"
                  src="luiza.png"
                  sx={{ width: 60, height: 60 }}
                />
                <Box>
                  <Typography variant="body1" color="white">
                    Luiza Saliba
                  </Typography>
                  <Typography variant="body2" color="gray">
                    CEO & Co-founder da Trina
                  </Typography>
                </Box>
              </Box>
              {/* Botões Finais */}
              <Box display="flex" justifyContent="center" gap={2} py={4}>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#4CAF50", color: "white" }}
                  onClick={() => navigate("/exercicios")}
                  startIcon={<ArticleIcon />}
                >
                  Exercícios
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#4CAF50", color: "white" }}
                  startIcon={<WorkspacePremiumIcon />}
                >
                  Certificado
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Infos;