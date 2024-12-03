import React from "react";
import { Box, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

interface TituloPaginaProps {
  titulo: string;
}

export const TituloPagina: React.FC<TituloPaginaProps> = ({ titulo }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
    <ChevronLeftIcon sx={{ color: "white", fontSize: "64px" }} />
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
