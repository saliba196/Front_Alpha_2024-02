import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Lesson {
  title: string;
  description: string;
  youtubeLink: string;
}

const SecaoCriaAulas: React.FC = () => {
  const [numberOfLessons, setNumberOfLessons] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [lessons, setLessons] = useState<Lesson[]>(
    Array.from({ length: numberOfLessons }, () => ({
      title: "",
      description: "",
      youtubeLink: "",
    }))
  );

  const handleLessonChange = (
    index: number,
    field: keyof Lesson,
    value: string
  ) => {
    const updatedLessons = [...lessons];
    updatedLessons[index][field] = value;
    setLessons(updatedLessons);
  };

  const handleNumberOfLessonsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(e.target.value);
    if (value > 0) {
      setNumberOfLessons(value);
      setLessons(
        Array.from(
          { length: value },
          (_, i) =>
            lessons[i] || {
              title: "",
              description: "",
              youtubeLink: "",
            }
        )
      );
      setCurrentPage(1); // Reinicia na página 1
    }
  };

  const handleNext = () => {
    if (currentPage < numberOfLessons) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const currentLesson = lessons[currentPage - 1];

  return (
    <Box
      sx={{
        padding: "24px",
        maxWidth: "800px",
        borderRadius: "16px",
        color: "white",
        "& .MuiOutlinedInput-input": {
          color: "black",
        },
      }}
    >
      <Stack spacing={3}>
        {/* Campo para definir número de aulas */}
        <Box>
          <Typography
            sx={{
              fontWeight: "bold",
              marginBottom: "8px",
              "& .MuiOutlinedInput-input": {
                color: "black",
              },
            }}
          >
            Número de aulas do curso:
          </Typography>
          <TextField
            type="number"
            fullWidth
            value={numberOfLessons}
            onChange={handleNumberOfLessonsChange}
            sx={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              "& .MuiOutlinedInput-input": {
                color: "black",
              },
            }}
          />
        </Box>

        {/* Conteúdo da aula atual */}
        <Box
          sx={{
            backgroundColor: "#E1E3AC",
            padding: "16px",
            borderRadius: "8px",
            "& .MuiOutlinedInput-input": {
              color: "black",
            },
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", marginBottom: "16px", color: "#213435" }}
          >
            Aula {currentPage} de {numberOfLessons}
          </Typography>

          {/* Título da Aula */}
          <Box>
            <Typography
              sx={{
                marginBottom: "8px",
                fontWeight: "bold",
                "& .MuiOutlinedInput-input": {
                  color: "black",
                },
                color: "#213435",
              }}
            >
              Título da aula:
            </Typography>
            <TextField
              fullWidth
              value={currentLesson.title}
              onChange={(e) =>
                handleLessonChange(currentPage - 1, "title", e.target.value)
              }
              sx={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                "& .MuiOutlinedInput-input": {
                  color: "black",
                },
              }}
            />
          </Box>

          {/* Descrição da Aula */}
          <Box>
            <Typography
              sx={{ marginBottom: "8px", fontWeight: "bold", color: "#213435" }}
            >
              Descrição da aula:
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              value={currentLesson.description}
              onChange={(e) =>
                handleLessonChange(
                  currentPage - 1,
                  "description",
                  e.target.value
                )
              }
              sx={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                "& .MuiOutlinedInput-input": {
                  color: "black",
                },
              }}
            />
          </Box>

          {/* Link do YouTube */}
          <Box>
            <Typography
              sx={{ marginBottom: "8px", fontWeight: "bold", color: "#213435" }}
            >
              Link do Youtube para aula:
            </Typography>
            <TextField
              fullWidth
              value={currentLesson.youtubeLink}
              onChange={(e) =>
                handleLessonChange(
                  currentPage - 1,
                  "youtubeLink",
                  e.target.value
                )
              }
              sx={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                "& .MuiOutlinedInput-input": {
                  color: "black",
                },
              }}
            />
          </Box>
        </Box>

        {/* Navegação entre as aulas */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            onClick={handlePrevious}
            disabled={currentPage === 1}
            sx={{ color: "white" }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <Typography sx={{ fontWeight: "bold" }}>
            Aula {currentPage} de {numberOfLessons}
          </Typography>
          <IconButton
            onClick={handleNext}
            disabled={currentPage === numberOfLessons}
            sx={{ color: "white" }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default SecaoCriaAulas;
