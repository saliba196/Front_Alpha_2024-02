import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import BookIcon from "@mui/icons-material/MenuBook";
import CertificateIcon from "@mui/icons-material/EmojiEvents";
import DownloadIcon from "@mui/icons-material/Download";

interface CursosCertificadosProps {
  cursosAcessados: number;
  certificadosDisponiveis: number;
}

const StyledButton = styled(Button)`
  background-color: #648a64;
  color: white;
  text-transform: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  font-family: "Nunito";
  font-weight: bold;
  font-size: 24px;
  &:hover {
    background-color: #507750;
  }
`;

export const CursosCertificados: React.FC<CursosCertificadosProps> = ({
  cursosAcessados,
  certificadosDisponiveis,
}) => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
    <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <BookIcon sx={{ color: "white", fontSize: "45px" }} />
      <Typography
        sx={{
          fontFamily: "Nunito",
          fontWeight: "bold",
          fontSize: "32px",
          color: "white",
        }}
      >
        {cursosAcessados} Cursos acessados
      </Typography>
    </Box>
    <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <CertificateIcon sx={{ color: "white", fontSize: "45px" }} />
      <Typography
        sx={{
          fontFamily: "Nunito",
          fontWeight: "bold",
          fontSize: "32px",
          color: "white",
        }}
      >
        {certificadosDisponiveis} Certificados disponíveis
      </Typography>
      <StyledButton
        startIcon={<DownloadIcon sx={{ fontSize: "45px" }} />}
        onClick={() => (window.location.href = "/baixar_certificados")}
      >
        Baixar
      </StyledButton>
    </Box>
  </Box>
);
