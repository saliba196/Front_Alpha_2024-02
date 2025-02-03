// src/pages/ADMCriaAula.tsx
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ADMMenu_lat from "../components/ADMMenuLateral";
import { TituloPagina } from "../components/TituloPagina";
import ClassCreationForm from "../components/ClassCreationForm";
import { createClass } from "../services/classService";

const ADMCriaAula: React.FC = () => {
  const navigate = useNavigate();
  const [classData, setClassData] = useState<object>({});

  const handleFormChange = (data: object) => {
    setClassData(data);
  };

  const handleSaveClass = async () => {
    try {
      await createClass(classData);
      console.log("Aula criada com sucesso!");
      navigate("/aulas"); // Redirecionar após o sucesso, se necessário
    } catch (error) {
      console.error("Erro ao criar a aula:", error);
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <ADMMenu_lat />
      <Box sx={{ flex: 1, p: 4 }}>
        <TituloPagina titulo="Criação de Aula" />
        <ClassCreationForm onChange={handleFormChange} />
        <Box sx={{ marginTop: 2 }}>
          <Button
            variant="contained"
            color="success"
            onClick={handleSaveClass}
            sx={{
              backgroundColor: "#648A64",
              borderRadius: "13px",
              padding: "10px 20px",
            }}
          >
            Salvar Aula
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ADMCriaAula;
