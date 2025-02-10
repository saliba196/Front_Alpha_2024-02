import React, { useState } from "react";
import { Box, Stack, TextField, Button, Typography, CircularProgress } from "@mui/material";
import ADMMenu_lat from "../components/ADMMenuLateral";
import { TituloPagina } from "../components/TituloPagina";
import QuestionSection from "../components/QuestionSection";
import { generateQuiz } from "../api/quizService";
import {
  boxStyle,
  contentStyle,
  stackStyle,
  textFieldStyle,
  typographyStyle,
  buttonStyle,
} from "../components/QuizCreationPage.styles";

interface QuizFormData {
  associatedCourse: string;
  numQuestions: number;
  courseName: string;
  classTranscription: string;
}

interface Pergunta {
  pergunta: string;
  alternativas: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  resposta_correta: string;
}

const QuizCreationPage: React.FC = () => {
  const [formData, setFormData] = useState<QuizFormData>({
    associatedCourse: "",
    numQuestions: 1,
    courseName: "",
    classTranscription: "",
  });
  const [aiQuestions, setAiQuestions] = useState<Pergunta[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? parseInt(value, 10) : value,
    }));
  };

  const generateAiQuestions = async () => {
    try {
      setError(null); // Clear previous errors
      setLoading(true); // Start loading animation
      const response = await generateQuiz({
        transcricao: formData.classTranscription,
        num_perguntas: formData.numQuestions,
      });
      setAiQuestions(response.data.perguntas);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false); // Stop loading animation
    }
  };

  return (
    <Box sx={boxStyle}>
      {/* Menu Lateral */}
      <ADMMenu_lat />

      {/* Conteúdo principal */}
      <Box sx={contentStyle}>
        {/* Título da Página */}
        <TituloPagina titulo="Criação de Questionário" backRoute="/AdminPanel" />

        {/* Formulário Inicial */}
        <Stack spacing={2} sx={stackStyle}>
          <Box>
            <Typography sx={typographyStyle}>Curso associado:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="associatedCourse"
              value={formData.associatedCourse}
              onChange={handleInputChange}
              sx={textFieldStyle}
            />
          </Box>
          <Box>
            <Typography sx={typographyStyle}>Número de Perguntas:</Typography>
            <TextField
              variant="outlined"
              type="number"
              fullWidth
              name="numQuestions"
              value={formData.numQuestions}
              onChange={handleInputChange}
              sx={textFieldStyle}
            />
          </Box>
          <Box>
            <Typography sx={typographyStyle}>
              Curso relacionado ao questionário:
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="courseName"
              value={formData.courseName}
              onChange={handleInputChange}
              sx={textFieldStyle}
            />
          </Box>
          <Box>
            <Typography sx={typographyStyle}>Transcrição da Aula:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              name="classTranscription"
              value={formData.classTranscription}
              onChange={handleInputChange}
              sx={textFieldStyle}
            />
          </Box>
        </Stack>

        {/* Botão para gerar perguntas por IA */}
        <Box sx={{ textAlign: "left", marginTop: "24px" }}>
          <Button
            variant="contained"
            color="primary"
            sx={buttonStyle}
            onClick={generateAiQuestions}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Gerar Perguntas por IA"}
          </Button>
        </Box>

        {/* Exibir mensagem de erro, se houver */}
        {error && (
          <Box sx={{ textAlign: "center", marginTop: "24px" }}>
            <Typography color="error">{error}</Typography>
          </Box>
        )}

        {/* Seção Dinâmica de Perguntas */}
        <QuestionSection
          numQuestions={aiQuestions.length > 0 ? aiQuestions.length : formData.numQuestions}
          questions={aiQuestions}
        />

        {/* Botão Confirmar */}
        <Box sx={{ textAlign: "center", marginTop: "24px" }}>
          <Button variant="contained" color="success" sx={buttonStyle}>
            Confirmar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default QuizCreationPage;
