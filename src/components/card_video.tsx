import React from "react";
import { Box, Typography, IconButton, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

interface CardComponentProps {
  title: string; // Título do card
  onButtonClick?: () => void; // Função opcional para o clique
  imageSrc?: string; // Caminho para a imagem (opcional)
  linkTo?: string; // URL para redirecionamento ao clicar no card
}

const StyledIconButton = styled(IconButton)`
  background-color: #46685b;
  width: 30px;
  height: 30px;
  &:hover {
    background-color: #38534b; /* Cor ao passar o mouse */
  }
`;

const CardContent: React.FC<CardComponentProps> = ({ title, onButtonClick, imageSrc }) => {
  return (
    <Box
      onClick={onButtonClick}
      sx={{
        width: "100%",
        height: "210px",
        backgroundColor: "#648A64",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        cursor: onButtonClick ? "pointer" : "default",
      }}
    >
      <Avatar
        src={imageSrc}
        alt={title}
        variant="square"
        sx={{
          width: "100%",
          height: "150px",
          backgroundColor: "#d3d3d3",
          marginBottom: "12px",
          borderRadius: "4px",
        }}
      />
      <Typography
        sx={{
          fontFamily: "Nunito",
          fontSize: "16px",
          fontWeight: 500,
          color: "white",
          textAlign: "center",
          marginBottom: "12px",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export const CardComponent: React.FC<CardComponentProps> = (props) => {
  if (props.linkTo) {
    return (
      <Link to={props.linkTo} style={{ textDecoration: "none" }}>
        <CardContent {...props} />
      </Link>
    );
  }
  return <CardContent {...props} />;
};
