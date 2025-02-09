import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Divider, Stack } from "@mui/material";
import SideMenu from "../components/menu_lat"; // Componente do menu lateral
import { PerfilUsuario } from "../components/PerfilUsuario"; // Componente do perfil do usuário
import SubscriptionCard from "../components/SubscriptionCard"; // Card de assinatura
import RenewalCard from "../components/RenewalCard"; // Card de renovação
import AcessoCertificados from "../components/AcessoCertificados";
import { TituloPagina } from "../components/TituloPagina"; // Título da página
import AutorenewIcon from "@mui/icons-material/Autorenew";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import GroupsIcon from "@mui/icons-material/Groups";
import { checkUserLoggedIn } from "../api/auth"; // Import checkUserLoggedIn
import { fetchUserRequisition } from "../api/user_requisition"; // Import fetchUserRequisition

const PaginaPerfil: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userSignature, setUserSignature] = useState("");

  useEffect(() => {
    const verifyLogin = async () => {
      const isLoggedIn = await checkUserLoggedIn();
      if (!isLoggedIn) {
        navigate("/"); // Redirect to login page if not logged in
      } else {
        const userRequisition = await fetchUserRequisition();
        if (userRequisition.response === 200 && userRequisition.data) {
          setUserName(userRequisition.data.name);
          setUserEmail(userRequisition.data.email);
          setUserSignature(userRequisition.data.signature ? "Assinante Premium" : "Assinante Básico");
          setIsLoading(false); // Set loading to false if logged in and user info fetched
        } else {
          console.error("Erro ao buscar informações do usuário:", userRequisition.error);
          throw new Error(userRequisition.description);
        }
      }
    };

    verifyLogin();
  }, [navigate]);

  if (isLoading) {
    return null; // Render nothing while checking login status
  }

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", overflowX: "hidden" }}>
      {/* Menu Lateral */}
      <SideMenu />

      {/* Conteúdo Principal */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          padding: "24px",
          background: "linear-gradient(to bottom right, #213435 30%, #46685B)",
          overflowX: "hidden",
        }}
      >
        {/* Título da Página */}
        <TituloPagina titulo="Meu Perfil" />
        <Stack direction="column" spacing={3} alignItems="left">
          {/* Seção de Perfil do Usuário */}
          <PerfilUsuario
            nome={userName}
            assinatura={userSignature}
            email={userEmail}
            fotoUrl="/path/to/profile-image.jpg" // Substituir pela URL da foto
          />
          <AcessoCertificados />
        </Stack>

        {/* Título para a Seção de Assinatura */}
        <Box>
          <Typography
            sx={{
              fontFamily: "Nunito",
              fontWeight: "bold",
              fontSize: "32px",
              color: "white",
              marginBottom: "8px",
            }}
          >
            Assinatura
          </Typography>
          <Typography
            sx={{
              fontFamily: "Nunito",
              fontSize: "20px",
              color: "white",
              marginBottom: "16px",
            }}
          >
            Informações sobre sua assinatura atual!
          </Typography>
        </Box>

        {/* Card de Renovação Automática */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          <RenewalCard
            title="Renovação Automática"
            description="Enquanto a sua assinatura estiver ativa, você fica protegido dos reajustes anuais que os novos alunos terão."
            icon={<AutorenewIcon />}
          />
          <RenewalCard
            title="Descontos na Tina"
            description="Com sua assinatura na PlaTina você tem acesso exclusivo a preços especiais na assinatura da plataforma da Tina Gestão de cantina!"
            icon={<LoyaltyIcon />}
          />
          <RenewalCard
            title="Comunidade"
            description="Garanta o acesso a uma comunidade engajada com gestores e funcionários do ramo alimentício. Lá você pode tirar dúvidas e fazer networking!"
            icon={<GroupsIcon />}
          />
        </Box>

        {/* Divisor */}
        <Divider
          sx={{ borderColor: "rgba(255, 255, 255, 0.3)", margin: "24px 0" }}
        />

        {/* Card de Assinatura */}
        <SubscriptionCard />
      </Box>
    </Box>
  );
};

export default PaginaPerfil;
