import React from "react";
import { Box, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom"; // Importa o useNavigate

interface TituloPaginaProps {
  titulo: string;
}

export const TituloPagina: React.FC<TituloPaginaProps> = ({ titulo }) => {
  const navigate = useNavigate(); // Inicializa o hook de navegação

  const handleBackClick = () => {
    navigate("/home"); // Redireciona para a tela inicial (ou qualquer rota desejada)
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <ChevronLeftIcon
        sx={{ color: "white", fontSize: "64px", cursor: "pointer" }} // Cursor de "mão" para indicar que é clicável
        onClick={handleBackClick} // Adiciona o evento de clique
      />
      <Typography
        sx={{
          fontFamily: "Nunito",
          fontWeight: "bold",
          fontSize: "64px",
          color: "white",
        }}
      >
        {titulo}
      </Typography>
    </Box>
  );
};
