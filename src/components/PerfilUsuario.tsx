import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import VerifiedIcon from "@mui/icons-material/Verified";

interface PerfilUsuarioProps {
  nome: string;
  assinatura: string;
  email: string;
  fotoUrl: string;
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

export const PerfilUsuario: React.FC<PerfilUsuarioProps> = ({
  nome,
  assinatura,
  email,
  fotoUrl,
}) => (
  <Box sx={{ display: "flex", gap: "32px", alignItems: "center" }}>
    <img
      src={fotoUrl}
      alt={`${nome}'s profile`}
      style={{ width: "150px", height: "150px", borderRadius: "50%" }}
    />
    <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Typography
        sx={{
          fontFamily: "Nunito",
          fontWeight: "bold",
          fontSize: "42px",
          color: "white",
        }}
      >
        {nome}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Typography
          sx={{
            fontFamily: "Nunito",
            fontSize: "24px",
            color: "white",
          }}
        >
          {assinatura}
        </Typography>
        <VerifiedIcon sx={{ color: "white", fontSize: "24px" }} />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Typography
          sx={{
            fontFamily: "Nunito",
            fontSize: "24px",
            color: "white",
          }}
        >
          {email}
        </Typography>
        <StyledButton startIcon={<EditIcon sx={{ fontSize: "45px" }} />}>
          Editar
        </StyledButton>
      </Box>
    </Box>
  </Box>
);
