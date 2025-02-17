import React, { useState } from "react";
import { Box, Typography, Button, TextField, Divider, Stack } from "@mui/material";
import SideMenu from "../components/menu_lat"; 
import { TituloPagina } from "../components/TituloPagina"; 

const PaginaPesquisa: React.FC = () => {
  const [query, setQuery] = useState('');
  interface Curso {
    id: number;
    nome: string;
    descricao: string;
    horas_estimado: number;
    texto_certificado: string;
  }
  
  const [results, setResults] = useState<Curso[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const response = await fetch(`/search?q=${query}`);
    const data = await response.json();
    setResults(data.results);
    setLoading(false);
  };

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
        <TituloPagina titulo="Pesquisa de Cursos" backRoute="/home" />
        
        <Stack direction="column" spacing={3} alignItems="left">
          {/* Campo de Pesquisa */}
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
              Buscar Cursos
            </Typography>
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontSize: "20px",
                color: "white",
                marginBottom: "16px",
              }}
            >
              Encontre o curso desejado por nome ou descrição.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: "16px" }}>
            <TextField
              label="Digite o nome ou descrição"
              variant="outlined"
              fullWidth
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              sx={{ input: { color: "white" }, label: { color: "white" } }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearch}
              sx={{ height: "100%" }}
            >
              Buscar
            </Button>
          </Box>

          {loading ? (
            <Typography sx={{ color: "white", marginTop: "20px" }}>Carregando...</Typography>
          ) : (
            <Box sx={{ marginTop: "20px" }}>
              {results.length > 0 ? (
                results.map((curso) => (
                  <Box
                    key={curso.id}
                    sx={{
                      backgroundColor: "#fff",
                      padding: "16px",
                      borderRadius: "8px",
                      marginBottom: "16px",
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                      {curso.nome}
                    </Typography>
                    <Typography sx={{ marginTop: "8px" }}>{curso.descricao}</Typography>
                    <Typography sx={{ marginTop: "8px" }}>
                      <strong>Horas Estimadas:</strong> {curso.horas_estimado}
                    </Typography>
                    <Typography sx={{ marginTop: "8px" }}>
                      <strong>Certificado:</strong> {curso.texto_certificado}
                    </Typography>
                  </Box>
                ))
              ) : (
                <Typography sx={{ color: "white" }}>Nenhum resultado encontrado.</Typography>
              )}
            </Box>
          )}
        </Stack>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.3)", margin: "24px 0" }} />
      </Box>
    </Box>
  );
};

export default PaginaPesquisa;
