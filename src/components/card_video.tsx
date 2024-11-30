import React from "react";
import { Box, Typography, IconButton, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

interface CardComponentProps {
  title: string; // Título do card
  onButtonClick?: () => void; // Função opcional para o botão
  imageSrc?: string; // Caminho para a imagem (opcional)
}

const StyledIconButton = styled(IconButton)`
  background-color: #46685b;
  width: 30px;
  height: 30px;
  &:hover {
    background-color: #38534b; /* Cor ao passar o mouse */
  }
`;

export const CardComponent: React.FC<CardComponentProps> = ({
  title,
  onButtonClick,
  imageSrc,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "210px",
        backgroundColor: "#648A64",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Placeholder da imagem */}
      <Avatar
        src={imageSrc}
        alt={title}
        variant="square"
        sx={{
          width: "100%",
          height: "100px",
          backgroundColor: "#d3d3d3", // Cor de fundo do placeholder
          marginBottom: "12px",
          borderRadius: "4px",
        }}
      />

      {/* Título */}
      <Typography
        sx={{
          fontFamily: "Nunito",
          fontSize: "16px",
          fontWeight: 400,
          color: "white",
          textAlign: "center",
          marginBottom: "12px",
        }}
      >
        {title}
      </Typography>

      {/* Botão com ícone e texto */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <StyledIconButton onClick={onButtonClick}>
          <PlayArrowIcon sx={{ color: "white", fontSize: "18px" }} />
        </StyledIconButton>
        <Typography
          sx={{
            fontFamily: "Nunito",
            fontSize: "16px",
            fontWeight: 700,
            color: "white",
          }}
        >
          Assistir
        </Typography>
      </Box>
    </Box>
  );
};
