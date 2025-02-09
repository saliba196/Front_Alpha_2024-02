import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import SideMenu from "../components/menu_lat"; // Menu lateral
import { CardComponent } from "../components/card_video"; // Card de vídeo simples
import { CardVideoProgresso } from "../components/CardVideoProgresso"; // Card com progresso
import { BannerInicial } from "../components/BannerInicial"; // Componente Banner Inicial
import { checkUserLoggedIn } from "../api/auth"; // Import checkUserLoggedIn

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyLogin = async () => {
      const isLoggedIn = await checkUserLoggedIn();
      if (!isLoggedIn) {
        navigate("/"); // Redirect to login page if not logged in
      } else {
        setIsLoading(false); // Set loading to false if logged in
      }
    };

    verifyLogin();
  }, [navigate]);

  if (isLoading) {
    return null; // Render nothing while checking login status
  }

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
        {/* Banner Inicial */}
        <BannerInicial
          title="Agatha All Along"
          subtitle="Aprenda tudo sobre a dieta das bruxas"
          onAssistirClick={() => alert("Assistir")}
          onSaibaMaisClick={() => alert("Saiba Mais")}
          imageSrc="/path/to/banner-image.jpg" // Substituir pela imagem correta
        />

        {/* Em Progresso */}
        <Box>
          <Typography
            variant="h6"
            sx={{ color: "white", fontWeight: "bold", marginBottom: "16px" }}
          >
            Em progresso
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "24px",
              overflowX: "auto",
              paddingBottom: "8px",
            }}
          >
            {[...Array(5)].map((_, index) => (
              <CardVideoProgresso
                key={index}
                title="Como fazer marketing de restaurante"
                progress={60}
                onButtonClick={() => alert("Continuando o vídeo...")}
              />
            ))}
          </Box>
        </Box>

        {/* Lançamentos */}
        <Box>
          <Typography
            variant="h6"
            sx={{ color: "white", fontWeight: "bold", marginBottom: "16px" }}
          >
            Lançamentos
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "24px",
              overflowX: "auto",
              paddingBottom: "8px",
            }}
          >
            {[...Array(8)].map((_, index) => (
              <CardComponent
                key={index}
                title="Finanças para restaurante"
                onButtonClick={() => alert("Iniciando vídeo...")}
                imageSrc={undefined} // Substituir por uma URL de imagem real
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
