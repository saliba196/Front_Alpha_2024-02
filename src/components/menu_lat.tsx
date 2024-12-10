import React, { useState } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom"; // Importa o Link do React Router
import { ButtonAtom } from "./ButtonAtom";
import { ImageWithBadge } from "./ImageWithBadge";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import SearchIcon from "@mui/icons-material/Search";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import PaidIcon from "@mui/icons-material/Paid";
import Groups2SharpIcon from "@mui/icons-material/Groups2Sharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";

export const SideMenu: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleHover = (hovering: boolean) => setIsExpanded(hovering);

  return (
    <Box
      sx={{
        width: isExpanded ? 280 : 140, // Dynamically set width
        flexShrink: 0,
        backgroundColor: "#253A3B",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        transition: "width 0.3s", // Smooth width transition
        //position: "fixed",
        overflow: "hidden", // Prevent overflow when collapsed
      }}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      {/* Foto do perfil com redirecionamento */}
      <Link to="/perfil" style={{ textDecoration: "none" }}>
        <ImageWithBadge
          src="C:/Users/luiza/Documents/teste/react-mui-demo/src/Images/tina_img_teste.png"
          alt="Nome do Usuário"
          isExpanded={isExpanded}
        />
      </Link>

      {/* Botões */}
      <Box
        mt={4}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap="16px"
        width="100%" // Para alinhar os botões corretamente
        sx={{
          paddingLeft: isExpanded ? "28px" : "0px", // Alinhamento à esquerda
        }}
      >
        <ButtonAtom
          icon={<SearchIcon />}
          label="Busca"
          backgroundColor="#648A64"
          isExpanded={isExpanded}
        />
        <ButtonAtom
          icon={<SignalCellularAltIcon />}
          label="Jurídico e finanças"
          backgroundColor="#648A64"
          isExpanded={isExpanded}
        />
        <ButtonAtom
          icon={<EmojiPeopleIcon />}
          label="Atendimento e gestão"
          backgroundColor="#648A64"
          isExpanded={isExpanded}
        />
        <ButtonAtom
          icon={<RamenDiningIcon />}
          label="Receitas e Nutrição"
          backgroundColor="#648A64"
          isExpanded={isExpanded}
        />
        <ButtonAtom
          icon={<PaidIcon />}
          label="Vendas e Marketing"
          backgroundColor="#648A64"
          isExpanded={isExpanded}
        />
        <ButtonAtom
          icon={<Groups2SharpIcon />}
          label="Tina e Comunidade"
          backgroundColor="#648A64"
          isExpanded={isExpanded}
        />
        <ButtonAtom
          icon={<LogoutSharpIcon />}
          label="Sair"
          backgroundColor="#46685B"
          isExpanded={isExpanded}
        />
      </Box>
    </Box>
  );
};

export default SideMenu;
