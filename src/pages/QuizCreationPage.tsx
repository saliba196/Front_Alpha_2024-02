import React, { useState } from "react";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";
import ADMMenu_lat from "../components/ADMMenuLateral";
import { TituloPagina } from "../components/TituloPagina";
import QuestionSection from "../components/QuestionSection";

const QuizCreationPage: React.FC = () => {
  const [numQuestions, setNumQuestions] = useState<number>(1);
  const [courseName, setCourseName] = useState("");
  const [associatedCourse, setAssociatedCourse] = useState("");

  const handleNumQuestionsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value, 10);
    setNumQuestions(value > 0 ? value : 1); // Garante que seja >= 1
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", overflowX: "hidden" }}>
      {/* Menu Lateral */}
      <ADMMenu_lat />

      {/* Conteúdo principal */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          padding: "24px",
          background: "linear-gradient(to bottom right, #213435 30%, #46685B)",
          overflowX: "hidden",
        }}
      >
        {/* Título da Página */}
        <TituloPagina titulo="Criação de Questionário" />

        {/* Formulário Inicial */}
        <Stack spacing={2} sx={{ maxWidth: "600px" }}>
          <Box>
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontWeight: "bold",
                fontSize: "18px",
                color: "white",
                marginBottom: "8px",
              }}
            >
              Curso associado:
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="title"
              value={associatedCourse}
              onChange={(e) => setAssociatedCourse(e.target.value)}
              sx={{
                backgroundColor: "#e0e0e0",
                borderRadius: "4px",
                "& .MuiOutlinedInput-input": {
                  color: "black",
                },
              }}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontWeight: "bold",
                fontSize: "18px",
                color: "white",
                marginBottom: "8px",
              }}
            >
              Número de Perguntas:
            </Typography>
            <TextField
              variant="outlined"
              type="number"
              fullWidth
              name="title"
              value={numQuestions}
              onChange={handleNumQuestionsChange}
              sx={{
                backgroundColor: "#e0e0e0",
                borderRadius: "4px",
                "& .MuiOutlinedInput-input": {
                  color: "black",
                },
              }}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontWeight: "bold",
                fontSize: "18px",
                color: "white",
                marginBottom: "8px",
              }}
            >
              Curso relacionado ao questionário:
            </Typography>
            <TextField
              variant="outlined"
              type="number"
              fullWidth
              name="title"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              sx={{
                backgroundColor: "#e0e0e0",
                borderRadius: "4px",
                "& .MuiOutlinedInput-input": {
                  color: "black",
                },
              }}
            />
          </Box>
        </Stack>

        {/* Seção Dinâmica de Perguntas */}
        <QuestionSection numQuestions={numQuestions} />

        {/* Botão Confirmar */}
        <Box sx={{ textAlign: "center", marginTop: "24px" }}>
          <Button
            variant="contained"
            color="success"
            sx={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: "bold",
              fontSize: "18px",
              marginTop: "1rem",
            }}
          >
            Confirmar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default QuizCreationPage;
