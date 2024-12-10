import React from "react";
import { Button, Box, Typography } from "@mui/material";

interface CircularButtonWithTextProps {
  label: string; // Texto descritivo do botão
  Icon: React.ElementType; // Ícone do botão, como componente MUI
}

const CircularButtonWithText: React.FC<CircularButtonWithTextProps> = ({
  label,
  Icon,
}) => {
  return (
    <Box textAlign="center">
      <Button
        sx={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          backgroundColor: "#648A64",
          "&:hover": {
            backgroundColor: "#527752",
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <Icon sx={{ fontSize: 32 }} />
      </Button>
      <Typography
        sx={{
          color: "white",
          fontFamily: "Nunito, sans-serif",
          fontWeight: 700,
          fontSize: "24px",
          marginTop: 1,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default CircularButtonWithText;
