import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CustomButtonProps {
  icon: React.ReactNode;
  text: string;
  route: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  icon,
  text,
  route,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        width: "480px",
        height: "240px",
        backgroundColor: "#E1E3AC",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "16px",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#d8da9a",
        },
      }}
    >
      <Box sx={{ fontSize: "64px", color: "#46685B", marginBottom: "16px" }}>
        {icon}
      </Box>
      <Typography
        sx={{
          fontFamily: "Nunito",
          fontWeight: "bold",
          fontSize: "24px",
          color: "#46685B",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
