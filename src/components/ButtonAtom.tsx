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
}

// Estiliza o botão com MUI e styled-components
const StyledIconButton = styled(IconButton)<{
  bgcolor: string;
  hoverColor?: string;
}>`
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
}) => (
  <Box display="flex" alignItems="center" gap="8px">
    {/* Botão com ícone */}
    <StyledIconButton bgcolor={backgroundColor} hoverColor={hoverColor}>
      {icon}
    </StyledIconButton>
    {/* Texto exibido apenas se o menu está expandido */}
    {isExpanded && (
      <Typography variant="body2" color="white">
        {label}
      </Typography>
    )}
  </Box>
);
