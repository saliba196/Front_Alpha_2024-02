import React from "react";
import { Card, Box, Typography, useTheme } from "@mui/material";
import type { SxProps, Theme } from "@mui/system";

interface RenewalCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const RenewalCard: React.FC<RenewalCardProps> = ({
  title,
  description,
  icon,
}) => {
  const theme = useTheme();

  const cardStyles: SxProps<Theme> = {
    padding: theme.spacing(1),
    boxShadow: theme.shadows[1],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#648A64", // Fundo do card ajustado
  };

  const iconStyles: SxProps<Theme> = {
    color: theme.palette.primary.contrastText, // Ajusta a cor do ícone para contrastar
    fontSize: 45, // Tamanho do ícone ajustado
    marginBottom: theme.spacing(1),
  };

  const titleStyles: SxProps<Theme> = {
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: theme.spacing(0.5),
    color: theme.palette.primary.contrastText, // Título com cor contrastante
  };

  const descriptionStyles: SxProps<Theme> = {
    fontSize: 20,
    color: theme.palette.primary.contrastText, // Descrição com cor contrastante
  };

  return (
    <Card sx={cardStyles}>
      <Box sx={iconStyles}>{icon}</Box>
      <Typography sx={titleStyles}>{title}</Typography>
      <Typography sx={descriptionStyles}>{description}</Typography>
    </Card>
  );
};

export default RenewalCard;
