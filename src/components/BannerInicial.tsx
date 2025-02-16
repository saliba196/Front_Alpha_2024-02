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
  imageSrc: string; // URL da imagem de fundo
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "24px",
        borderRadius: "16px",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "16px" }}>
        {title}
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: "24px" }}>
        {subtitle}
      </Typography>
      <Box sx={{ display: "flex", gap: "16px" }}>
        <Button variant="contained" color="primary" onClick={onAssistirClick}>
          Assistir
        </Button>
        <Button variant="outlined" color="primary" onClick={onSaibaMaisClick}>
          Saiba Mais
        </Button>
      </Box>
    </Box>
  );
};

export default BannerInicial;
