// Cadastro.tsx
import React, { useState } from "react";
import {
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
import { boxStyle, paperStyle, textFieldStyle, buttonStyle, loginLinkStyle } from "../components/Cadastro.styles";
import { signUpUser } from "../api/sign-upService";

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

    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    const userData = {
      email: formData.email,
      password: formData.password,
      password_check: formData.confirmPassword,
      full_name: formData.fullName,
      birth_date: formData.birthDate,
      cpf: formData.cpf,
      cliente_tina: formData.clienteTina,
      keep_logged_in: formData.keepLoggedIn,
    };

    try {
      await signUpUser(userData);
      alert("Cadastro realizado com sucesso!");
      navigate("/home");
    } catch (error: any) {
      alert(error.message || "Erro ao cadastrar.");
    }
  };

  return (
    <Box sx={boxStyle}>
      <Stack spacing={2} alignItems="center" sx={{ width: "100%", maxWidth: "500px" }}>
        <Paper sx={paperStyle}>
          <Typography variant="h3" sx={{ color: "#213435", marginBottom: "30px" }}>Cadastro</Typography>
          <form onSubmit={handleSubmit}>
            <Grid2 container spacing={2}>
              {[
                { label: "Nome Completo", name: "fullName", type: "text" },
                { label: "E-mail", name: "email", type: "email" },
                { label: "Data de Nascimento", name: "birthDate", type: "date", shrink: true },
                { label: "CPF", name: "cpf", type: "text" },
                { label: "Senha", name: "password", type: "password" },
                { label: "Confirmar Senha", name: "confirmPassword", type: "password" },
              ].map(({ label, name, type, shrink }) => (
                <Grid2 size={{ xs: 12, sm: 6 }} key={name}>
                  <TextField
                    fullWidth
                    label={label}
                    variant="outlined"
                    name={name}
                    type={type}
                    value={formData[name as keyof SignUpFormData] as string}
                    onChange={handleInputChange}
                    sx={textFieldStyle}
                    InputLabelProps={shrink ? { shrink: true } : undefined}
                  />
                </Grid2>
              ))}
            </Grid2>

            <FormControlLabel
              control={<Checkbox name="clienteTina" checked={formData.clienteTina} onChange={handleInputChange} />}
              label="Já sou cliente Tina"
              sx={{ justifyContent: "flex-start", display: "flex", margin: "20px 0", color: "#46685B" }}
            />

            <Button variant="contained" type="submit" fullWidth sx={buttonStyle}>Cadastre-se</Button>
          </form>
        </Paper>

        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" sx={{ marginTop: "20px" }}>
          <Typography variant="body2" sx={{ color: "#D9D9D9" }}>Já possui uma conta?</Typography>
          <Button variant="text" sx={loginLinkStyle} onClick={() => navigate("/")}>Faça login</Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Cadastro;
