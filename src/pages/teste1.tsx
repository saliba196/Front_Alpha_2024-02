import React from "react";
import { Box, Typography, Button, IconButton, Grid, Avatar } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DownloadIcon from "@mui/icons-material/Download";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SideMenu from "../components/menu_lat";

const containerStyle = {
    background: "linear-gradient(to bottom right, #213435 30%, #46685B)",
    display: "flex",
    position: "relative",
    flex: 1
  };

  export const Ola = () => {
    return (
      <Box sx={containerStyle}>
        {/* Menu Lateral */}
        <SideMenu />
  
        {/* Conteúdo Principal */}
        <Box
          sx={{
            flex: 1, // O conteúdo principal ocupará o restante do espaço
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Cabeçalho */}
          <Box
            position="relative"
            flex={1} // Faz o cabeçalho ocupar toda a área restante
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
                Agatha all along
              </Typography>
              <Typography variant="subtitle1" sx={{ my: 1 }}>
                Aprenda tudo sobre a dieta das bruxas
              </Typography>
              <Button
                variant="contained"
                startIcon={<PlayArrowIcon />}
                sx={{ backgroundColor: "#4CAF50", color: "white" }}
              >
                Assistir
              </Button>
            </Box>
          </Box>
           {/* Conteúdo Principal Dividido */}
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} p={4} gap={4}>
          {/* Coluna Esquerda: Vídeos */}
          <Box flex={1} >
            <Typography variant="h5" color="white" gutterBottom>
              Assistir
            </Typography>
            <Box display="flex" flexDirection="column" gap={2}>
              {[...Array(3)].map((_, index) => (
                <Box
                  key={index}
                  display="flex"
                  flexDirection="column"
                  bgcolor="#3C5C4B"
                  borderRadius={2}
                  overflow="hidden"
                  width="80%"
                >
                  <Box
                    component="img"
                    src="https://via.placeholder.com/400x200"
                    alt="Aula"
                    sx={{ width: "100%", height: "150px", objectFit: "cover" }}
                  />
                  <Box p={2}>
                    <Typography variant="subtitle2" color="white" fontWeight="bold">
                      Aula 01
                    </Typography>
                    <Typography variant="body2" color="white" gutterBottom>
                      À importância de uma dieta balanceada
                    </Typography>
                    <Typography variant="body2" color="gray">
                      10 min
                    </Typography>
                  </Box>
                </Box>
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
                  src="https://via.placeholder.com/100"
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
            </Box>
            {/* Botões Finais */}
            <Box
          display="flex"
          justifyContent="center"
          gap={2}
          py={4}
          //sx={{ backgroundColor: "#2F4F39" }}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "#4CAF50", color: "white" }}
            onClick={() => window.open("https://google.com", "_blank")}
          >
            Exercícios
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#4CAF50", color: "white" }}
          >
            Certificado
          </Button>
        </Box>
        </Box>
        </Box>
        </Box>
      </Box>
    );
  };