import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";

interface BannerInicialProps {
  title: string; // Título principal do banner
  subtitle: string; // Subtítulo do banner
  onAssistirClick: () => void; // Função para o botão "Assistir"
  onSaibaMaisClick: () => void; // Função para o botão "Saiba mais"
  imageSrc?: string; // URL da imagem de fundo (opcional)
}

// Estilo para o botão "Assistir" e "Saiba Mais"
const StyledButton = styled(Button)<{ bgcolor: string }>`
  background-color: ${(props) => props.bgcolor};
  color: white;
  font-family: "Nunito";
  font-weight: bold;
  text-transform: none;
  border-radius: 4px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: ${(props) =>
      props.bgcolor === "#648A64" ? "#507750" : "#3A5B4B"};
  }
`;

export const BannerInicial: React.FC<BannerInicialProps> = ({
  title,
  subtitle,
  onAssistirClick,
  onSaibaMaisClick,
  imageSrc,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "567px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "32px",
        backgroundColor: "#D3D3D3",
        backgroundImage: imageSrc ? `url(${imageSrc})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Typography
          sx={{
            backgroundColor: "#46685B",
            color: "white",
            fontFamily: "Nunito",
            fontSize: "30px",
            fontWeight: "bold",
            borderRadius: "4px",
            padding: "4px 8px",
            display: "inline-block",
            textAlign: "center",
          }}
        >
          LANÇAMENTO
        </Typography>

        <Typography
          sx={{
            fontFamily: "Nunito",
            fontWeight: "bold",
            fontSize: "45px",
            color: "white",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Nunito",
            fontSize: "18px",
            color: "white",
          }}
        >
          {subtitle}
        </Typography>

        <Box sx={{ display: "flex", gap: "16px", mt: "16px" }}>
          <StyledButton
            bgcolor="#46685B"
            onClick={onSaibaMaisClick}
            startIcon={<InfoIcon />}
          >
            Saiba mais
          </StyledButton>
        </Box>
      </Box>
    </Box>
  );
};
