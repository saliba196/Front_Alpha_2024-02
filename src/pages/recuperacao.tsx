import React from "react";
import { Container, Stack, Typography, TextField, Paper, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
  padding: "50px 30px",
  textAlign: "center",
  borderRadius: "30px",
  backgroundColor: "#E1E3AC",
  width: "400px",
};

const textFieldStyle = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#46685B",  // Cor da borda
      borderRadius: "20px",
      borderWidth: "4px",
      // Remover fundo do fieldset para evitar interferência
      backgroundColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#46685B", // Cor da borda ao focar
    },
    "& input": {
      color: "#000",  // Cor do texto dentro do campo (garante visibilidade)
      backgroundColor: "#D9D9D9", // Cor de fundo do campo de entrada
      borderRadius: "20px",
    },
    "& .MuiInputLabel-root": {
      color: "#46685B",  // Cor do rótulo (label)
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#46685B",  // Cor do rótulo ao focar
    },
  },
};

const buttonStyle = {
  backgroundColor: "#648A64",
  borderRadius: "13px",
  padding: "10px 20px", // Aumenta o espaçamento interno
  fontSize: "1rem",   // Aumenta o tamanho da fonte
};

const enviar_email = () => {
  alert("Verifique a sua caixa de email para recuperar a senha");
};

export const Recuperacao = () => {
  const navigate = useNavigate();
  return (
    <Box sx={boxStyle}>
      <Stack spacing={1}>
        <Paper sx={paperStyle}>
            <Stack spacing={3}>
                <Typography variant="h4" sx={{ color: "#213435" }}>Recuperação de Senha</Typography>
                <TextField
                fullWidth
                label="E-mail"
                variant="outlined"
                sx={textFieldStyle}
                />
                <Button
                variant="contained"
                sx={buttonStyle}
                onClick={enviar_email}
                >
                Enviar
                </Button>

            </Stack>
        </Paper>
      </Stack>
    </Box>
  );
};

export default Recuperacao;
