import React from "react";
import SideMenu from "../components/menu_lat"; // Importar o menu lateral
import { Box, Typography } from "@mui/material";

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
      </Box>
    </Box>
  );
};

export default Home;
