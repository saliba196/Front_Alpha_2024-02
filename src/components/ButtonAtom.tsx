import React from "react";
import { IconButton, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

// Define os tipos das propriedades do componente
interface ButtonAtomProps {
  icon: React.ReactNode; // Ícone exibido no botão
  label: string; // Texto do botão
  backgroundColor: string; // Cor de fundo do botão
  hoverColor?: string; // Cor ao passar o mouse (opcional)
  isExpanded: boolean; // Se o menu está expandido
  onClick?: () => void; // Função chamada ao clicar no botão (opcional)
}

// Estiliza o botão com MUI e styled-components
const StyledIconButton = styled(IconButton)<{
  bgcolor: string;
  hoverColor?: string;
}>`
  width: 65px;
  height: 65px;
  background-color: ${(props) => props.bgcolor};
  color: white;
  &:hover {
    background-color: ${(props) => props.hoverColor || props.bgcolor};
  }
`;

export const ButtonAtom: React.FC<ButtonAtomProps> = ({
  icon,
  label,
  backgroundColor,
  hoverColor,
  isExpanded,
  onClick, // Adiciona a propriedade onClick
}) => (
  <Box display="flex" alignItems="center" gap="8px">
    {/* Botão com ícone */}
    <StyledIconButton bgcolor={backgroundColor} hoverColor={hoverColor} onClick={onClick}>
      {icon}
    </StyledIconButton>
    {/* Texto exibido apenas se o menu está expandido */}
    {isExpanded && (
      <Typography
        variant="body1"
        color="white"
        sx={{ fontFamily: "Nunito", fontWeight: "bold", fontSize: "20px" }}
      >
        {label}
      </Typography>
    )}
  </Box>
);
