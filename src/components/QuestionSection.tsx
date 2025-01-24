import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";

interface QuestionSectionProps {
  numQuestions: number;
}

const QuestionSection: React.FC<QuestionSectionProps> = ({ numQuestions }) => {
  const [currentPage, setCurrentPage] = useState(1);

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
