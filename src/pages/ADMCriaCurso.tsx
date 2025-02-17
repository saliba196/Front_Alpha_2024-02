import React, { useState } from "react";
import { Box, Stack, TextField, Button, Typography, CircularProgress } from "@mui/material";
import ADMMenu_lat from "../components/ADMMenuLateral";
import { TituloPagina } from "../components/TituloPagina";
import QuestionSection from "../components/QuestionSection";
import InfosDoCurso from "../components/InfosDoCurso";
import SecaoCriaAulas from "../components/SecaoCriaAulas";
import { generateQuiz } from "../api/quizService";
import { createCourse } from "../api/createCourse";

interface Lesson {
  title: string;
  description: string;
  youtubeLink: string;
  thumnail_url: string;
}

const ADMCriaCurso: React.FC = () => {
  const [numQuestions, setNumQuestions] = useState<number>(1);
  const [formData, setFormData] = useState({
    courseTitle: "",
    numberOfLessons: "",
    courseDescription: "",
    instructorName: "",
    instructorDescription: "",
    selectedCategories: [] as string[],
  });

  const [lessons, setLessons] = useState<Lesson[]>([
    {
      title: "",
      description: "",
      youtubeLink: "",
      thumnail_url: "",
    },
  ]);

  const [aiQuestions, setAiQuestions] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleNumQuestionsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setNumQuestions(value > 0 ? value : 1); // Garante que seja >= 1
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateAiQuestions = async () => {
    try {
      setError(null); // Clear previous errors
      setLoading(true); // Start loading animation
      const response = await generateQuiz({
        transcricao: formData.courseDescription,
        num_perguntas: numQuestions,
      });
      const perguntas = response.data.perguntas.map((pergunta: any, index: number) => ({
        id: index,
        pergunta: pergunta.pergunta,
        alternativas: pergunta.alternativas,
        resposta_correta: pergunta.resposta_correta,
      }));
      setAiQuestions(perguntas);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false); // Stop loading animation
    }
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
        <TituloPagina titulo="Criação de Curso" backRoute="/AdminPanel" />
        <InfosDoCurso formData={formData} onFormDataChange={setFormData} />
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
        <SecaoCriaAulas lessons={lessons} setLessons={setLessons} />
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
              name="numQuestions"
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
              Transcrição da Aula:
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              name="classTranscription"
              value={formData.courseDescription}
              onChange={handleInputChange}
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

        {/* Botão para gerar perguntas por IA */}
        <Box sx={{ textAlign: "left", marginTop: "24px" }}>
          <Button
            variant="contained"
            color="primary"
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
          numQuestions={aiQuestions.length > 0 ? aiQuestions.length : numQuestions}
          questions={aiQuestions}
        />

        {/* Botão de Salvar */}
        <Box>
          <Button
            variant="contained"
            color="success"
            onClick={() => console.log("Form Data:", formData, "Lessons:", lessons, "AI Questions:", aiQuestions)}
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
