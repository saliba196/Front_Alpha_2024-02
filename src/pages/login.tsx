import React, { useState } from "react";
import { Container, Stack, Typography, TextField, Paper, Button, Box, Checkbox, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { boxStyle, paperStyle, textFieldStyle, buttonStyle } from "../components/Login.styles";
import { loginUser } from "../api/loginService";
import { fetchUserRequisition } from "../api/user_requisition";

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

      // Fetch user info to check if the user is an admin
      const userRequisition = await fetchUserRequisition();
      if (userRequisition.response === 200 && userRequisition.data) {
        if (userRequisition.data.is_adm === true) {
          navigate("/HomeADM"); // Redirect to admin home page
        } else {
          navigate("/home"); // Redirect to user home page
        }
      } else {
        throw new Error(userRequisition.description);
      }
    } catch (error: any) {
      console.error("Erro ao fazer login:", error);
      alert(`Erro ao fazer login. Verifique suas credenciais.\nDetalhes: ${error.message}`);
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

              {/* Botão Recuperar Conta */}
              <Button
                variant="text"
                sx={{
                  textTransform: "none", // Remove letras maiúsculas automáticas
                  fontSize: "0.9rem", // Ajusta o tamanho da fonte
                  color: "#8B0000", // Define a cor do texto
                  "&:hover": { color: "#213435" }, // Muda a cor ao passar o mouse
                  alignSelf: "flex-start", // Alinha o botão à esquerda
                }}
                onClick={() => navigate("/recuperacao")}
              >
                Esqueceu a senha?
              </Button>

              {/* Checkbox "Manter-me conectado" */}
              <FormControlLabel
                control={
                  <Checkbox
                    name="keep_logged_in"
                    checked={formData.keep_logged_in}
                    onChange={handleInputChange}
                  />
                }
                label={
                  <Typography sx={{ color: "#555" }}>
                    Manter-me conectado
                  </Typography>
                }
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
