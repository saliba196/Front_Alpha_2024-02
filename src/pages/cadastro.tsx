import React, { useState, useEffect } from "react";
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

interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  birthDate: string;
  cpf: string;
  clienteTina: boolean;
  keepLoggedIn: boolean;
}

const Cadastro: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    birthDate: "",
    cpf: "",
    clienteTina: false,
    keepLoggedIn: false,
  });
  const [csrfToken, setCsrfToken] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    // Pega o CSRF token da meta tag
    const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute("content");
    if (token) {
      setCsrfToken(token);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const response = await fetch("/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          csrf_token: csrfToken,
          email: formData.email,
          password: formData.password,
          password_check: formData.confirmPassword,
          full_name: formData.fullName,
          birth_date: formData.birthDate,
          cpf: formData.cpf,
          cliente_tina: formData.clienteTina.toString(),
          keep_logged_in: formData.keepLoggedIn.toString(),
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
        navigate("/home");
      } else {
        alert(data.error || "Erro ao cadastrar");
      }
    } catch (error) {
      alert("Erro na comunicação com o servidor.");
    }
  };

  return (
    <Box sx={boxStyle}>
      <Stack spacing={2} alignItems="center" sx={{ width: "100%", maxWidth: "500px" }}>
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
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                sx={textFieldStyle}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="E-mail"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                sx={textFieldStyle}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Data de Nascimento"
                variant="outlined"
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
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
                name="cpf"
                value={formData.cpf}
                onChange={handleInputChange}
                sx={textFieldStyle}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Senha"
                variant="outlined"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                sx={textFieldStyle}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Confirmar Senha"
                variant="outlined"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                sx={textFieldStyle}
              />
            </Grid2>
          </Grid2>

          <FormControlLabel
            control={<Checkbox name="clienteTina" checked={formData.clienteTina} onChange={handleInputChange} />}
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
    </Box>
  );
};

export default Cadastro;
