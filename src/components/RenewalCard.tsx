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
    padding: theme.spacing(2),
    boxShadow: theme.shadows[1],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: theme.shape.borderRadius,
  };

  const iconStyles: SxProps<Theme> = {
    color: theme.palette.primary.main,
    fontSize: 48,
    marginBottom: theme.spacing(1),
  };

  const titleStyles: SxProps<Theme> = {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: theme.spacing(0.5),
  };

  const descriptionStyles: SxProps<Theme> = {
    fontSize: 14,
    color: theme.palette.text.secondary,
  };

  return (
    <Card sx={cardStyles}>
      <Box sx={iconStyles}>{icon}</Box>
      <Typography sx={titleStyles} variant="h6">
        {title}
      </Typography>
      <Typography sx={descriptionStyles} variant="body2">
        {description}
      </Typography>
    </Card>
  );
};

export default RenewalCard;
