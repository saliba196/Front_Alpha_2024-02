// src/pages/ADMCriaCurso.tsx
import React, { useState } from "react";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";
import ADMMenu_lat from "../components/ADMMenuLateral";
import { TituloPagina } from "../components/TituloPagina";
import QuestionSection from "../components/QuestionSection";
import InfosDoCurso from "../components/InfosDoCurso";
import SecaoCriaAulas from "../components/SecaoCriaAulas";
import { saveCourse } from "../services/courseService";

const ADMCriaCurso: React.FC = () => {
  const [numQuestions, setNumQuestions] = useState<number>(1);
  const [courseName, setCourseName] = useState<string>("");
  const [associatedCourse, setAssociatedCourse] = useState<string>("");

  const handleNumQuestionsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value, 10);
    setNumQuestions(value > 0 ? value : 1);
  };

  const handleSaveCourse = async () => {
    const courseData = {
      name: courseName,
      associatedCourse,
      numQuestions,
    };

    try {
      await saveCourse(courseData);
      console.log("Curso salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar o curso:", error);
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", overflowX: "hidden" }}>
      <ADMMenu_lat />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          padding: "24px",
        }}
      >
        <TituloPagina titulo="Criação de Curso" />
        <InfosDoCurso />

        <Typography
          sx={{
            fontFamily: "Nunito",
            fontWeight: "bold",
            fontSize: "32px",
            color: "white",
          }}
        >
          Aulas do curso
        </Typography>
        <SecaoCriaAulas />

        <Typography
          sx={{
            fontFamily: "Nunito",
            fontWeight: "bold",
            fontSize: "32px",
            color: "white",
          }}
        >
          Perguntas do questionário
        </Typography>

        <Stack spacing={2} sx={{ maxWidth: "800px" }}>
          <Box>
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontWeight: "bold",
                fontSize: "18px",
                color: "white",
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
                backgroundColor: "#fff",
                borderRadius: "8px",
                "& .MuiOutlinedInput-input": { color: "black" },
              }}
            />
          </Box>
        </Stack>

        <QuestionSection numQuestions={numQuestions} />

        <Box>
          <Button
            variant="contained"
            color="success"
            onClick={handleSaveCourse}
            sx={{ padding: "10px 20px", borderRadius: "8px" }}
          >
            Salvar Curso
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ADMCriaCurso;
