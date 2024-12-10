import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CustomButtonProps {
  icon: React.ReactNode; // Ícone dinâmico
  text: string; // Texto dinâmico
}

export const Download: React.FC<CustomButtonProps> = ({ icon, text }) => {
  const navigate = useNavigate(); // Hook para navegação

  const handleClick = () => {
    navigate("Download"); // Redireciona para o donwload
  };

  return (
    <Button
      onClick={handleClick}
      sx={{
        width: "187px",
        height: "66px",
        backgroundColor: "#648A64",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#567856",
        },
      }}
    >
      {" "}
      {icon}
      <Typography
        variant="button"
        sx={{ fontSize: "16px", fontWeight: "bold" }}
      >
        {text}
      </Typography>
    </Button>
  );
};
