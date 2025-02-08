import React, { useState } from "react";
import { Container, Stack, Typography, TextField, Paper, Button, Box, Checkbox, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { boxStyle, paperStyle, textFieldStyle, buttonStyle } from "../components/Login.styles";
import { loginUser } from "../api/loginService";

interface SignUpFormData {
  id_method: string;
  password: string;
  keep_logged_in: boolean;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    id_method: "",
    password: "",
    keep_logged_in: false,
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await loginUser(formData);
      console.log("Login bem-sucedido:", response.data);
      navigate("/home");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <Box sx={boxStyle}>
      <Stack spacing={1}>
        <Paper sx={paperStyle}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              {/* Título */}
              <Typography variant="h3" sx={{ color: "#213435" }}>Entrar</Typography>

              {/* Subtítulo */}
              <Typography variant="body1" color="#555">
                Para entrar, digite o seu e-mail e senha.
              </Typography>

              {/* Campo de E-mail */}
              <TextField
                name="id_method"
                label="Digite o seu e-mail:"
                variant="outlined"
                sx={textFieldStyle}
                fullWidth
                value={formData.id_method}
                onChange={handleInputChange}
              />

              {/* Campo de Senha */}
              <TextField
                name="password"
                label="Digite a sua senha:"
                variant="outlined"
                sx={textFieldStyle}
                fullWidth
                type="password"
                value={formData.password}
                onChange={handleInputChange}
              />

              {/* Checkbox "Manter-me conectado" */}
              <FormControlLabel
                control={
                  <Checkbox
                    name="keep_logged_in"
                    checked={formData.keep_logged_in}
                    onChange={handleInputChange}
                  />
                }
                label="Manter-me conectado"
              />

              {/* Botão Entrar */}
              <Button
                type="submit"
                variant="contained"
                sx={{
                  ...buttonStyle,
                  alignSelf: "flex-end", // Alinha o botão à direita
                }}
              >
                Entrar
              </Button>
            </Stack>
          </form>
        </Paper>

        {/* Link "Não possui uma conta? Cadastre-se" */}
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
          <Typography variant="body2" sx={{ color: "#D9D9D9" }}>
            Não possui uma conta?
          </Typography>
          <Button
            variant="text"
            sx={{
              textTransform: "none", // Remove letras maiúsculas automáticas
              fontSize: "0.9rem", // Ajusta o tamanho da fonte
              color: "#D9D9D9", // Define a cor do texto
              "&:hover": { color: "#213435" }, // Muda a cor ao passar o mouse
            }}
            onClick={() => navigate("/cadastro")}
          >
            Cadastre-se
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Login;
