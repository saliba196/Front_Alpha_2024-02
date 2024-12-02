import React, { useState } from "react";
import { Box, Typography, Button, Grid2, Stack, LinearProgress } from "@mui/material";

// Estilos reutilizáveis
const boxStyle = {
  background: "linear-gradient(to bottom right, #213435 30%, #46685B)",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "20px",
};

const answerButtonStyle = {
  backgroundColor: "#46685B",
  color: "#FFF",
  borderRadius: "10px",
  width: "100%", // Garante que o botão ocupe toda a largura da coluna
  height: "120px", // Define a altura do botão
  fontSize: "1.2rem", // Aumenta o tamanho da fonte
  fontWeight: "bold", // Torna o texto mais destacado
  "&:hover": {
    backgroundColor: "#A6B985",
  },
};

// Estilo para o botão correto
const correctAnswerStyle = {
  ...answerButtonStyle,
  backgroundColor: "#A6B985", // Verde claro para resposta correta
};

// Estilo para o botão "Continuar"
const continueButtonStyle = {
  backgroundColor: "#648A64",
  color: "#FFF",
  padding: "10px 20px",
  fontSize: "1rem",
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: "#46685B",
  },
};

export const Exercicios = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // Função para selecionar uma resposta
  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
  };

  return (
    <Box sx={boxStyle}>
      <Stack spacing={2} sx={{ width: "100%", maxWidth: "80vw" }}>
        {/* Barra de progresso e contagem de perguntas */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: "100%" }}>
          <Button sx={{ color: "#FFF", fontSize: "1.5rem" }}>✖</Button>
          <Box sx={{ flexGrow: 1, mx: 2 }}>
            <LinearProgress
              variant="determinate"
              value={90}
              sx={{
                height: "20px", // Espessura da barra
                borderRadius: "10px", // Bordas arredondadas
                backgroundColor: "#648A64", // Cor de fundo da barra
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#E1E3AC", // Cor da barra preenchida
                  clipPath: "inset(0 0 0 0 round 10px)",
                  height: "100%",
                },
              }}
            />
          </Box>
          <Typography sx={{ color: "#FFF", fontSize: "1rem" }}>5/10</Typography>
        </Stack>

        {/* Pergunta */}
        <Typography variant="h5" sx={{ color: "#FFF", textAlign: "center", marginTop: "20px" }}>
          Qual alimento é rico em carboidratos?
        </Typography>
      </Stack>

      {/* Botões de resposta em grid */}
      <Grid2 container spacing={2} justifyContent="center" sx={{ width: "100%", maxWidth: "400px" }}>
        {["Banana", "Banana", "Banana", "Banana"].map((answer, index) => (
          <Grid2 key={index} size={{ xs: 6, sm: 6 }}>
            <Button
              fullWidth
              variant="contained"
              sx={selectedAnswer === answer && showFeedback ? correctAnswerStyle : answerButtonStyle}
              onClick={() => handleAnswerClick(answer)}
            >
              {answer}
            </Button>
          </Grid2>
        ))}
      </Grid2>

      {/* Feedback e botão de continuar */}
      {showFeedback && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#253A3B",
            padding: "10px 20px",
            borderRadius: "10px",
            width: "100%",
            marginTop: "40px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Sombra para destacar
          }}
        >
          <Typography variant="body1" sx={{ color: "#FFFFFF", fontWeight: "bold" }}>
            Certo! Parabéns, você acertou! Prossiga para a próxima pergunta.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#648A64",
              color: "#FFF",
              padding: "5px 15px",
              borderRadius: "5px",
              fontSize: "0.9rem",
              "&:hover": { backgroundColor: "#46685B" },
            }}
            onClick={() => alert("Próxima pergunta")}
          >
            Continuar
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Exercicios;
