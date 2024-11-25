import React from "react";
import { Avatar, Typography, Box } from "@mui/material";

interface ImageWithBadgeProps {
  src: string;
  alt: string;
  isExpanded: boolean;
}

export const ImageWithBadge: React.FC<ImageWithBadgeProps> = ({
  src,
  alt,
  isExpanded,
}) => (
  <Box display="flex" flexDirection="column" alignItems="center">
    {/* Imagem de perfil */}
    <Avatar alt={alt} src={src} sx={{ width: 80, height: 80 }} />
    {isExpanded && (
      <Typography
        variant="h4"
        color="white"
        sx={{
          fontFamily: "Nunito",
          fontWeight: "bold",
          fontSize: "20px",
          marginTop: "8px",
          textAlign: "center",
        }}
      >
        {alt}
      </Typography>
    )}
  </Box>
);
