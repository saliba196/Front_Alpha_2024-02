import React from "react";
import { Container, Stack, Typography, TextField, Paper, Button, Grid2, FormControlLabel, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { alignProperty } from "@mui/material/styles/cssUtils";

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
  padding: "50px 100px",
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

export const Cadastro = () => {
  const navigate = useNavigate();

  return (
    <Container sx={containerStyle}>
      <Stack spacing={3} sx={{ width: '100%', maxWidth: '450px' }}>
        <Paper sx={paperStyle}>
          <Typography variant="h4" sx={{ marginBottom: '40px' }}>Cadastro</Typography>

          {/* Grid com campos lado a lado */}
          <Grid2 container spacing={2}>
            {/* Nome Completo e Sobrenome */}
            <Grid2 size ={{xs: 12, sm: 6}}>
              <TextField
                fullWidth
                label="Nome Completo"
                variant="outlined"
                sx={textFieldStyle}
              />
            </Grid2>

            {/* E-mail e Data de Nascimento */}
            <Grid2 size ={{xs: 12, sm: 6}}>
              <TextField
                fullWidth
                label="E-mail"
                variant="outlined"
                sx={textFieldStyle}
              />
            </Grid2>
            <Grid2 size ={{xs: 12, sm: 6}}>
              <TextField
                fullWidth
                label="Data de Nascimento"
                variant="outlined"
                type="date"
                sx={textFieldStyle}
                InputLabelProps={{
                  shrink: true,  // Necessário para o formato de data
                }}
              />
            </Grid2>

            {/* CPF */}
            <Grid2 size ={{xs: 12, sm: 6}}>
              <TextField
                fullWidth
                label="CPF"
                variant="outlined"
                sx={textFieldStyle}
              />
            </Grid2>

            {/* Senha e Confirmar Senha */}
            <Grid2 size ={{xs: 12, sm: 6}}>
              <TextField
                fullWidth
                label="Senha"
                variant="outlined"
                type="password"
                sx={textFieldStyle}
              />
            </Grid2>
            <Grid2 size ={{xs: 12, sm: 6}}>
              <TextField
                fullWidth
                label="Confirmar Senha"
                variant="outlined"
                type="password"
                sx={textFieldStyle}
              />
            </Grid2>
          </Grid2>

          {/* Já é cliente */}
          <FormControlLabel
            control={<Checkbox />}
            label="Já é cliente?"
            sx={{ marginBottom: '20px' }}
          />

          {/* Botão de cadastro */}
          <Button
            variant="contained"
            sx={{
                buttonStyle,
                alignSelf: "flex-end" // Alinha o botão à direita
            }
                
            }
            
            onClick={() => navigate("/login")}
          >
            Cadastre-se
          </Button>
        </Paper>
      </Stack>
    </Container>
  );
};

export default Cadastro;
