import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ButtonAtom } from "./ButtonAtom";
import { ImageWithBadge } from "./ImageWithBadge";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import SearchIcon from "@mui/icons-material/Search";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import PaidIcon from "@mui/icons-material/Paid";
import Groups2SharpIcon from "@mui/icons-material/Groups2Sharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import { logout_api } from "../api/logout";
import { fetchUserRequisition } from "../api/user_requisition";

export const SideMenu: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userRequisition = await fetchUserRequisition();
        if (userRequisition.response === 200 && userRequisition.data) {
          setUserName(userRequisition.data.name);
        } else {
          console.error("Erro ao buscar informações do usuário:", userRequisition.error);
          throw new Error(userRequisition.description);
        }
      } catch (error: any) {
        console.error("Erro ao buscar informações do usuário:", error);
        alert(`Erro ao buscar informações do usuário: ${error.message}\nDetalhes: ${JSON.stringify(error.response?.data, null, 2)}`);
      }
    };

    fetchUserInfo();
  }, []);

  const handleHover = (hovering: boolean) => setIsExpanded(hovering);

  const handleLogout = async () => {
    try {
      await logout_api();
      navigate("/"); // Redireciona para a página de login após o logout
    } catch (error) {
      console.error("Erro ao deslogar:", error);
      // Você pode adicionar um tratamento de erro aqui, como exibir uma mensagem para o usuário
    }
  };

  return (
    <Box
      sx={{
        width: isExpanded ? 280 : 140,
        flexShrink: 0,
        backgroundColor: "#253A3B",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        transition: "width 0.3s",
        overflow: "hidden",
      }}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      {/* Foto do perfil com redirecionamento */}
      <Link to="/perfil" style={{ textDecoration: "none" }}>
        <ImageWithBadge
          src=""
          alt={userName}
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
        width="100%"
        sx={{
          paddingLeft: isExpanded ? "28px" : "0px",
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
          onClick={handleLogout}
        />
      </Box>
    </Box>
  );
};

export default SideMenu;
