import React, { useState } from "react";
import {
  Container,
  Stack,
  Typography,
  TextField,
  Paper,
  Button,
  Grid2,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Importa o axios para fazer requisições

// Estilos reutilizáveis
const boxStyle = {
  background: "linear-gradient(to bottom right, #213435 30%, #46685B)",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
  padding: 0,
  width: "100%",
};

const paperStyle = {
  padding: "40px",
  textAlign: "center",
  borderRadius: "30px",
  backgroundColor: "#E1E3AC",
  width: "100%",
  maxWidth: "500px",
};

const textFieldStyle = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#46685B",
      borderRadius: "20px",
      borderWidth: "4px",
      backgroundColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#46685B",
    },
    "& input": {
      color: "#000",
      backgroundColor: "#D9D9D9",
      borderRadius: "20px",
    },
  },
};

const buttonStyle = {
  backgroundColor: "#648A64",
  borderRadius: "13px",
  padding: "10px 20px",
  fontSize: "1rem",
};

export const Cadastro = () => {
  const navigate = useNavigate();

  // Estados para armazenar os valores dos campos
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [cliente, setCliente] = useState(false);
  const [loading, setLoading] = useState(false); // Estado para controle de loading

  // Função ao clicar no botão "Cadastre-se"
  const handleSubmit = async () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    // Dados a serem enviados para a API
    const data = {
      nome,
      email,
      nascimento,
      cpf,
      senha,
      cliente,
    };

    setLoading(true); // Ativa o loading ao enviar a requisição

    try {
      const response = await axios.post("URL_DA_API/cadastro", data); // Substitua "URL_DA_API/cadastro" pela URL da sua API

      if (response.data.status === "success") {
        console.log("Cadastro bem-sucedido", response.data);
        navigate("/home");
      } else {
        alert(response.data.message || "Erro no cadastro.");
      }
    } catch (error) {
      console.error("Erro ao fazer cadastro:", error);
      alert("Erro ao tentar se conectar ao servidor.");
    } finally {
      setLoading(false); // Desativa o loading após a requisição
    }
  };

  return (
    <Box sx={boxStyle}>
      <Stack
        spacing={2}
        alignItems="center"
        sx={{ width: "100%", maxWidth: "500px" }}
      >
        <Paper sx={paperStyle}>
          <Typography variant="h3" sx={{ color: "#213435", marginBottom: "30px" }}>
            Cadastro
          </Typography>

          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Nome Completo"
                variant="outlined"
                sx={textFieldStyle}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="E-mail"
                variant="outlined"
                sx={textFieldStyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Data de Nascimento"
                variant="outlined"
                type="date"
                sx={textFieldStyle}
                InputLabelProps={{
                  shrink: true,
                }}
                value={nascimento}
                onChange={(e) => setNascimento(e.target.value)}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="CPF"
                variant="outlined"
                sx={textFieldStyle}
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Senha"
                variant="outlined"
                type="password"
                sx={textFieldStyle}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Confirmar Senha"
                variant="outlined"
                type="password"
                sx={textFieldStyle}
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />
            </Grid2>
          </Grid2>

          <FormControlLabel
            control={
              <Checkbox
                checked={cliente}
                onChange={(e) => setCliente(e.target.checked)}
              />
            }
            label="Já sou cliente Tina"
            sx={{
              justifyContent: "flex-begin",
              display: "flex",
              margin: "20px 0",
              color: "#46685B",
            }}
          />

          <Button
            variant="contained"
            onClick={handleSubmit}
            fullWidth
            sx={buttonStyle}
            disabled={loading} // Desativa o botão enquanto está carregando
          >
            {loading ? "Cadastrando..." : "Cadastre-se"}
          </Button>
        </Paper>

        {/* Texto abaixo do Paper */}
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{ marginTop: "20px" }}
        >
          <Typography variant="body2" sx={{ color: "#D9D9D9" }}>
            Já possui uma conta?
          </Typography>
          <Button
            variant="text"
            sx={{
              textTransform: "none",
              fontSize: "0.9rem",
              color: "#D9D9D9",
              "&:hover": {
                color: "#213435",
              },
            }}
            onClick={() => navigate("/")}
          >
            Faça login
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Cadastro;
