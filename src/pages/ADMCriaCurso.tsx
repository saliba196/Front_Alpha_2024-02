import React, { useState } from "react";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";
import ADMMenu_lat from "../components/ADMMenuLateral";
import { TituloPagina } from "../components/TituloPagina";
import QuestionSection from "../components/QuestionSection";
import InfosDoCurso from "../components/InfosDoCurso.tsx";
import SecaoCriaAulas from "../components/SecaoCriaAulas";

const ADMCriaCurso: React.FC = () => {
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
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          padding: "24px",
          //overflowX: "hidden",
        }}
      >
        {/* Título da Página */}
        <TituloPagina titulo="Criação de Curso" />
        <InfosDoCurso />
        <Typography
          sx={{
            fontFamily: "Nunito",
            fontWeight: "bold",
            fontSize: "32px",
            color: "white",
            marginBottom: "8px",
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
            marginBottom: "8px",
          }}
        >
          Perguntas do questionário
        </Typography>

        {/* Formulário Inicial */}
        <Stack spacing={2} sx={{ maxWidth: "800px" }}>
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
                backgroundColor: "#fff",
                borderRadius: "8px",
                "& .MuiOutlinedInput-input": {
                  color: "black",
                },
              }}
            />
          </Box>
        </Stack>

        {/* Seção Dinâmica de Perguntas */}
        <QuestionSection numQuestions={numQuestions} />
        {/* Botão de Salvar */}
        <Box>
          <Button
            variant="contained"
            color="success"
            //onClick={() => console.log("Lessons Data:", lessons)}
            sx={{
              padding: "10px 20px",
              borderRadius: "8px",
            }}
          >
            Salvar Curso
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ADMCriaCurso;
