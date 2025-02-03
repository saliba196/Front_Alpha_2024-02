// src/pages/QuizCreationPage.tsx
import React, { useState } from "react";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";
import ADMMenu_lat from "../components/ADMMenuLateral";
import { TituloPagina } from "../components/TituloPagina";
import QuestionSection from "../components/QuestionSection";
import { createQuiz } from "../services/quizService";

const QuizCreationPage: React.FC = () => {
  const [numQuestions, setNumQuestions] = useState<number>(1);
  const [courseName, setCourseName] = useState<string>("");
  const [associatedCourse, setAssociatedCourse] = useState<string>("");

  const handleNumQuestionsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value, 10);
    setNumQuestions(value > 0 ? value : 1);
  };

  const handleConfirm = async () => {
    const quizData = {
      courseName,
      associatedCourse,
      numQuestions,
    };

    try {
      await createQuiz(quizData);
      console.log("Questionário criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar o questionário:", error);
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", overflowX: "hidden" }}>
      <ADMMenu_lat />

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
        <TituloPagina titulo="Criação de Questionário" />

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
              fullWidth
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

        <QuestionSection numQuestions={numQuestions} />

        <Box sx={{ textAlign: "center", marginTop: "24px" }}>
          <Button
            variant="contained"
            color="success"
            onClick={handleConfirm}
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
