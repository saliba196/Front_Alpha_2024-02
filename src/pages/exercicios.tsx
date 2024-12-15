import React, { useState } from "react";
import { Box, Typography, Button, Stack, LinearProgress, Grid2 } from "@mui/material";

// Estilos reutilizáveis
const styles = {
  box: {
    background: "linear-gradient(to bottom right, #213435 30%, #46685B)",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  answerButton: {
    backgroundColor: "#46685B",
    color: "#FFF",
    borderRadius: "20px",
    width: "100%",
    height: "120px",
    fontSize: "2rem",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#A6B985",
    },
  },
  correctAnswerButton: {
    backgroundColor: "#A6B985",
  },
  continueButton: {
    backgroundColor: "#648A64",
    color: "#FFF",
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#46685B",
    },
  },
  feedbackBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#213435",
    borderRadius: "15px",
    width: "100%",
    maxWidth: "80vw",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    color: "#FFFFFF",
  },
  feedbackIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  feedbackText: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
};

export const Exercicios = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const answers = [
    { text: "Banana", correct: true },
    { text: "Arroz", correct: false },
    { text: "Alface", correct: false },
    { text: "Peixe", correct: false },
  ];

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
  };

  return (
    <Box sx={styles.box}>
      {/* Header */}
      <Stack spacing={14} sx={{ width: "100%", maxWidth: "80vw" }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: "100%" }}>
          <Button sx={{ color: "#FFF", fontSize: "1.5rem" }}>✖</Button>
          <Box sx={{ flexGrow: 1, mx: 2 }}>
            <LinearProgress
              variant="determinate"
              value={90}
              sx={{
                height: "20px",
                borderRadius: "10px",
                backgroundColor: "#648A64",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#E1E3AC",
                  clipPath: "inset(0 0 0 0 round 10px)",
                  height: "100%",
                },
              }}
            />
          </Box>
          <Typography sx={{ color: "#FFF", fontSize: "1rem" }}>5/10</Typography>
        </Stack>

        {/* Pergunta */}
        <Typography variant="h3" sx={{ color: "#FFF", textAlign: "center", marginTop: "10px" }}>
          Qual alimento é rico em carboidratos?
        </Typography>

        {/* Respostas */}
        <Grid2 container rowSpacing={3} columnSpacing={{xs:1, sm:3, md: 3}}>
          {answers.map((answer) => (
            <Grid2 size={{ xs: 12, sm: 6 }} offset={{xs:1, sm:0}} key={answer.text}>
              <Button
                fullWidth
                variant="contained"
                sx={
                  selectedAnswer === answer && showFeedback
                    ? { ...styles.answerButton, ...(answer.correct && styles.correctAnswerButton) }
                    : styles.answerButton
                }
                onClick={() => handleAnswerClick(answer)}
              >
                {answer.text}
              </Button>
            </Grid2>
          ))}
        </Grid2>
      </Stack>

      {/* Feedback */}
      {showFeedback && (
        <Box sx={styles.feedbackBox}>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, gap: "10px" }}>
            <Typography
              sx={{
                ...styles.feedbackIcon,
                backgroundColor: selectedAnswer.correct ? "#A6B985" : "#D9534F",
              }}
            >
              {selectedAnswer.correct ? "✓" : "✖"}
            </Typography>
            <Typography variant="body1" sx={styles.feedbackText}>
              {selectedAnswer.correct
                ? "Certo! Parabéns, você acertou! Prossiga para a próxima pergunta."
                : "Errado! Tente novamente."}
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={styles.continueButton}
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
