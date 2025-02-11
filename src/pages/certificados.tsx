import React, { useState, useEffect } from "react";
import { Box, Typography, Divider, Stack } from "@mui/material";
import SideMenu from "../components/menu_lat"; // Componente do menu lateral
import { TituloPagina } from "../components/TituloPagina"; // Título da página
import { CardCertificado } from "../components/CardCertificado";
import { fetchCertificates } from "../api/certificateService";
//Organizar o stack com os certificados gerados dinâmicamente

interface Certificate {
  curso: string;
  url: string;
}

const VerCertificados: React.FC = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCertificates = async () => {
      try {
        const response = await fetchCertificates();
        if (response.data && response.data.download_url) {
          setCertificates(response.data.download_url);
        } else {
          setError("Nenhum certificado encontrado.");
        }
      } catch (error) {
        setError("Erro ao carregar certificados.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadCertificates();
  }, []);


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
        <Stack direction="column" spacing={2} alignItems="left">
          {/* Título da Página */}
          <TituloPagina titulo="Certificados" />
          <Typography fontSize={24}> Acesse aqui os seus certificados! </Typography>
        </Stack>
        {/* Exibição dos Certificados */}
        {loading ? (
          <Typography>Carregando certificados...</Typography>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <Stack direction="column" spacing={1} alignItems="left">
            {certificates.map((cert, index) => (
              <CardCertificado
                key={index}
                imageUrl="link" // Substitua por uma imagem real, se necessário
                altText={`Certificado do curso ${cert.curso}`}
                titulo={cert.curso}
                descricao={`Certificado de conclusão do curso ${cert.curso}.`}
                downloadUrl={cert.url} // Adicione uma prop para o link de download
              />
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default VerCertificados;
