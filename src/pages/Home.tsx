import React from "react";
import SideMenu from "../components/menu_lat"; // Menu lateral
import { Box, Typography } from "@mui/material";
import { CardComponent } from "../components/card_video"; // Card de vídeo simples
import { CardVideoProgresso } from "../components/CardVideoProgresso"; // Novo card com progresso

const containerStyle = {
  background: "linear-gradient(to bottom right, #213435 30%, #46685B)",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
  padding: 0,
};

const Home: React.FC = () => {
  return (
    <Box sx={{ display: "flex", width: "100%", height: "100vh" }}>
      {/* Menu Lateral */}
      <SideMenu />

      {/* Conteúdo Principal */}
      <Box
        sx={{
          ...containerStyle,
          flex: 1, // Preenche o espaço restante ao lado do menu
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px", // Espaço entre os elementos
          }}
        >
          {/* Título Principal */}
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Nunito",
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
            }}
          >
            Bem-vindo à Home!
          </Typography>

          {/* Card Simples */}
          <CardComponent
            title="Finanças para restaurante"
            onButtonClick={() => alert("Iniciando vídeo...")}
            imageSrc={undefined} // Substitua por uma URL de imagem real
          />

          {/* Card com Progresso */}
          <CardVideoProgresso
            title="Como fazer marketing de restaurante"
            progress={60}
            onButtonClick={() => alert("Continuando o vídeo...")}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
