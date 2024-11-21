import React from "react";
import { Container, Stack, Typography, TextField, Paper, Button } from "@mui/material";

// Estilos reutilizáveis
const containerStyle = {
  background: "linear-gradient(to bottom right, #213435 30%, #46685B)",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
  padding: 0,
};

const paperStyle = {
  padding: "50px 30px",
  textAlign: "center",
  borderRadius: "30px",
  backgroundColor: "#E1E3AC",
  width: "400px",
};

const textFieldStyle = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#46685B",
      borderRadius: "20px",
      borderWidth: "4px",
      backgroundColor: "#D9D9D9",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#46685B",
    },
  },
};

const buttonStyle = {
  backgroundColor: "#648A64",
  borderRadius: "13px",
  padding: "10px 20px", // Aumenta o espaçamento interno
  fontSize: "1rem",   // Aumenta o tamanho da fonte
};

export const Login = () => {
  return (
    <Container sx={containerStyle}>
      <Paper sx={paperStyle}>
        <Stack spacing={3}>
          {/* Título */}
          <Typography variant="h3">Entrar</Typography>

          {/* Subtítulo */}
          <Typography variant="body1" color="#555">
            Para entrar, digite o seu e-mail e senha.
          </Typography>

          {/* Campo de E-mail */}
          <TextField
            label="Digite o seu e-mail:"
            variant="outlined"
            sx={textFieldStyle}
            fullWidth
          />

          {/* Campo de Senha */}
          <TextField
            label="Digite a sua senha:"
            variant="outlined"
            sx={textFieldStyle}
            fullWidth
          />

          {/* Link "Esqueci a minha senha" */}
          <Button
            variant="text"
            sx={{
                textTransform: "none", // Remove letras maiúsculas automáticas
                fontSize: "0.9rem",    // Ajusta o tamanho da fonte
                color: "#8A6464",      // Define a cor do texto
                alignSelf: "flex-start", // Alinha o texto à esquerda
                textDecoration: "underline", // Sublinha o texto
                "&:hover": {
                color: "#213435",    // Muda a cor ao passar o mouse
                
                
                },
            }}
            onClick={() => alert("Redirecionando para recuperação de senha...")}
            >
            Esqueci minha senha
        </Button>


          {/* Botão Entrar */}
          <Button
            variant="contained"
            sx={{
              ...buttonStyle,
              alignSelf: "flex-end", // Alinha o botão à direita
            }}
          >
            Entrar
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Login;
