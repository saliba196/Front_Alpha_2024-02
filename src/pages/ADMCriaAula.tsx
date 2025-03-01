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
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { alignProperty } from "@mui/material/styles/cssUtils";
import ClassCreationForm from "../components/ClassCreationForm.tsx";
import ADMMenu_lat from "../components/ADMMenuLateral";
import { TituloPagina } from "../components/TituloPagina";

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

export const ADMCriaAula = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <ADMMenu_lat />
      <Box sx={{ flex: 1, p: 4 }}>
        {" "}
        {/* Título da Página */}
        <TituloPagina titulo="Criação de Aula" backRoute="/AdminPanel" />
        {/* Conteúdo principal */}
        <ClassCreationForm />
      </Box>
    </Box>
  );
};

export default ADMCriaAula;
