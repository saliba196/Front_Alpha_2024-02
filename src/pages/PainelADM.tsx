import React from "react";
import { Box, Grid } from "@mui/material";
import ADMMenu_lat from "../components/ADMMenuLateral"; // Componente de menu lateral
import { TituloPagina } from "../components/TituloPagina"; // Componente de título
import { CustomButton } from "../components/ADMBotaoPainel"; // Botão customizável
import SchoolIcon from "@mui/icons-material/School"; // Ícones
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const AdminPanel: React.FC = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Menu Lateral */}
      <ADMMenu_lat />

      {/* Conteúdo Principal */}
      <Box
        sx={{
          flex: 1,
          padding: "24px",
          background: "linear-gradient(to bottom right, #213435 30%, #46685B)",
        }}
      >
        {/* Título da Página */}
        <TituloPagina titulo="Painel de administrador" />

        {/* Botões do Painel */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ marginTop: "32px" }}
        >
          <Grid item>
            <CustomButton
              icon={<SchoolIcon fontSize="inherit" />}
              text="Criar curso"
              route="/ADMCriaCurso"
            />
          </Grid>
          <Grid item>
            <CustomButton
              icon={<VideoLibraryIcon fontSize="inherit" />}
              text="Criar aula"
              route="/ADMCriaAula"
            />
          </Grid>
          <Grid item>
            <CustomButton
              icon={<FitnessCenterIcon fontSize="inherit" />}
              text="Criar questionário"
              route="/ADMQuizCreationPage"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AdminPanel;
