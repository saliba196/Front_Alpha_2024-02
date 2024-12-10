import React from "react";
import { Box, Typography, LinearProgress, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Link } from "react-router-dom";

interface CardVideoProgressoProps {
  title: string; // Título do vídeo
  progress: number; // Progresso do vídeo em porcentagem (0 a 100)
  onButtonClick: () => void; // Função ao clicar no botão "Continuar"
  imageSrc?: string; // Fonte da imagem (opcional)
}

const ProgressBar = styled(LinearProgress)`
  height: 8px;
  border-radius: 4px;

  .MuiLinearProgress-bar {
    background-color: #e1e3ac; /* Cor do progresso concluído */
  }
  background-color: #46685b; /* Cor do progresso não concluído */
`;

export const CardVideoProgresso: React.FC<CardVideoProgressoProps> = ({
  title,
  progress,
  onButtonClick,
  imageSrc,
}) => {
  return (
    <Link to="/video" style={{ textDecoration: "none" }}>
      <Box
        sx={{
          width: 280,
          height: 180,
          backgroundColor: "#648A64",
          borderRadius: "8px",
          display: "flex",
          padding: "16px",
          alignItems: "center",
          gap: "16px", // Espaço entre a imagem e o conteúdo
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Imagem Lateral */}
        <Box
          sx={{
            width: 117, // Largura aumentada em 10%
            height: 169, // Altura aumentada em 10%
            backgroundColor: "#D3D3D3", // Placeholder cinza para imagem
            borderRadius: "4px",
            backgroundImage: imageSrc ? `url(${imageSrc})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Conteúdo ao lado da imagem */}
        <Box
          sx={{
            flex: 1, // Para ocupar o restante do espaço
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Título */}
          <Typography
            sx={{
              fontFamily: "Nunito",
              fontWeight: "bold",
              fontSize: "16px",
              color: "white",
              textAlign: "left",
            }}
          >
            {title}
          </Typography>

          {/* Barra de Progresso */}
          <Box>
            <ProgressBar variant="determinate" value={progress} />
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontSize: "12px",
                color: "white",
                textAlign: "left",
                mt: "4px",
              }}
            >
              {progress}% concluído
            </Typography>
          </Box>
          {/* Botão de Continuar */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <IconButton
              onClick={onButtonClick}
              sx={{
                width: 30,
                height: 30,
                backgroundColor: "#46685B",
                color: "white",
                "&:hover": {
                  backgroundColor: "#3a5b4b",
                },
              }}
            >
              <PlayArrowIcon />
            </IconButton>
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontWeight: "bold",
                fontSize: "16px",
                color: "white",
              }}
            >
              Continuar
            </Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};
