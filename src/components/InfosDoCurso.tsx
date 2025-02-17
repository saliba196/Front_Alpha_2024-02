import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

interface InfosDoCursoProps {
  formData: {
    courseTitle: string;
    numberOfLessons: string;
    courseDescription: string;
    instructorName: string;
    courseCoverUrl: string;
  };
  onFormDataChange: (formData: any) => void;
}

const InfosDoCurso: React.FC<InfosDoCursoProps> = ({ formData, onFormDataChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onFormDataChange({ ...formData, [name]: value });
  };


  return (
    <Box
      sx={{
        padding: "24px",
        maxWidth: "700px",
        borderRadius: "16px",
        color: "white",
      }}
    >
      <Stack spacing={3}>
        {/* Título do Curso */}
        <Box>
          <Typography sx={{ marginBottom: "8px", fontWeight: "bold" }}>
            Título do curso:
          </Typography>
          <TextField
            fullWidth
            name="courseTitle"
            value={formData.courseTitle}
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

        {/* Número de Aulas */}
        <Box>
          <Typography sx={{ marginBottom: "8px", fontWeight: "bold" }}>
            Número de aulas:
          </Typography>
          <TextField
            type="number"
            fullWidth
            name="numberOfLessons"
            value={formData.numberOfLessons}
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

        {/* Descrição do Curso */}
        <Box>
          <Typography sx={{ marginBottom: "8px", fontWeight: "bold" }}>
            Descrição do curso:
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            name="courseDescription"
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

        {/* URL da Imagem do Curso */}
        <Box>
          <Typography sx={{ marginBottom: "8px", fontWeight: "bold" }}>
            URL da imagem do curso:
          </Typography>
          <TextField
            fullWidth
            name="courseCoverUrl"
            value={formData.courseCoverUrl}
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
    </Box>
  );
};

export default InfosDoCurso;
