import React from "react";
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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
//import { alignProperty } from "@mui/material/styles/cssUtils";

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

  return (
    <Container sx={containerStyle}>
      <Stack
        spacing={2}
        alignItems="center"
        sx={{ width: "100%", maxWidth: "500px" }}
      >
        <Paper sx={paperStyle}>
          <Typography variant="h3" sx={{ marginBottom: "30px" }}>
            Cadastro
          </Typography>

          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Nome Completo"
                variant="outlined"
                sx={textFieldStyle}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="E-mail"
                variant="outlined"
                sx={textFieldStyle}
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
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="CPF"
                variant="outlined"
                sx={textFieldStyle}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Senha"
                variant="outlined"
                type="password"
                sx={textFieldStyle}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Confirmar Senha"
                variant="outlined"
                type="password"
                sx={textFieldStyle}
              />
            </Grid2>
          </Grid2>

          <FormControlLabel
            control={<Checkbox />}
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
            onClick={() => navigate("/home")}
            fullWidth
            sx={buttonStyle}
          >
            Cadastre-se
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
    </Container>
  );
};

export default Cadastro;
