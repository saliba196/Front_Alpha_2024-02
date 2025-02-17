import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";

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

interface QuestionSectionProps {
  numQuestions: number;
  questions: Pergunta[];
  setQuestions: (questions: Pergunta[]) => void;
}

const QuestionSection: React.FC<QuestionSectionProps> = ({
  numQuestions,
  questions,
  setQuestions,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setQuestions(questions);
  }, [questions, setQuestions]);

  const handleChangeQuestion = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "pergunta" | "A" | "B" | "C" | "D"
  ) => {
    setQuestions((prev) => {
      const updated = [...prev];
      if (!updated[currentPage - 1]) return prev;
      if (field === "pergunta") {
        updated[currentPage - 1].pergunta = e.target.value;
      } else {
        updated[currentPage - 1].alternativas[field] = e.target.value;
      }
      return updated;
    });
  };

  const handleNext = () => {
    if (currentPage < numQuestions) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#E1E3AC",
        padding: "24px",
        borderRadius: "16px",
        marginTop: "16px",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Nunito",
          fontWeight: "bold",
          fontSize: "18px",
          color: "#213435",
          marginBottom: "16px",
        }}
      >
        Pergunta:
      </Typography>
      <TextField
        fullWidth
        placeholder="Insira sua pergunta aqui"
        value={questions[currentPage - 1]?.pergunta || ""}
        onChange={(e) => handleChangeQuestion(e, "pergunta")}
        sx={{
          backgroundColor: "#e0e0e0",
          borderRadius: "4px",
          "& .MuiOutlinedInput-input": {
            color: "black",
          },
        }}
      />
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: "Nunito",
          fontWeight: "bold",
          marginBottom: "8px",
          color: "#213435",
        }}
      >
        Insira abaixo as opções de resposta e selecione indique a resposta
        correta ao lado
      </Typography>

      <RadioGroup>
        {["A", "B", "C", "D"].map((option) => (
          <Box
            key={option}
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
              color: "#213435",
            }}
          >
            <Typography sx={{ marginRight: "8px", fontWeight: "bold" }}>
              {option}
            </Typography>
            <TextField
              fullWidth
              placeholder={`Resposta ${option}`}
              value={questions[currentPage - 1]?.alternativas?.[option] || ""}
              onChange={(e) => handleChangeQuestion(e, option as "A" | "B" | "C" | "D")}
              sx={{
                backgroundColor: "#e0e0e0",
                borderRadius: "4px",
                "& .MuiOutlinedInput-input": {
                  color: "black",
                },
              }}
            />
            <FormControlLabel
              value={option}
              control={<Radio />}
              label=""
              sx={{ marginLeft: "8px" }}
            />
          </Box>
        ))}
      </RadioGroup>
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: "Nunito",
          fontWeight: "bold",
          marginTop: "16px",
          color: "#213435",
        }}
      >
        Resposta correta: {questions[currentPage - 1]?.resposta_correta || ""}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "16px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          disabled={currentPage === 1}
          onClick={handlePrevious}
        >
          Anterior
        </Button>
        <Typography color="#213435" sx={{ alignSelf: "center" }}>
          Pergunta {currentPage} de {numQuestions}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          disabled={currentPage === numQuestions}
          onClick={handleNext}
        >
          Próxima
        </Button>
      </Box>
    </Box>
  );
};

export default QuestionSection;
