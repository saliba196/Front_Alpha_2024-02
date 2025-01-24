import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface Course {
  id: string;
  name: string;
}

const CriaAulaCurso: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    number: "",
    courseId: "",
    description: "",
    youtubeLink: "",
  });

  useEffect(() => {
    // Simulação da chamada à API
    const fetchCourses = async () => {
      const response = await fetch("/api/courses"); // Endpoint backend
      const data: Course[] = await response.json();
      setCourses(data);
    };

    fetchCourses();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setFormData((prev) => ({ ...prev, courseId: event.target.value }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  return (
    <Box
      sx={{
        padding: "2rem",
        maxWidth: "600px",
        borderRadius: "8px",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: "'Nunito', sans-serif",
          fontWeight: "bold",
          fontSize: "64px",
          color: "white",
          marginBottom: "1.5rem",
          textAlign: "center",
        }}
      >
        Criação de Aula
      </Typography>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* Título */}
        <Box sx={{ marginBottom: "1rem" }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: "bold",
              fontSize: "18px",
              color: "white",
              marginBottom: "0.5rem",
            }}
          >
            Título da aula:
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            sx={{
              backgroundColor: "#e0e0e0",
              borderRadius: "4px",
              "& .MuiOutlinedInput-input": {
                color: "black",
              },
            }}
          />
        </Box>

        {/* Número */}
        <Box sx={{ marginBottom: "1rem" }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: "bold",
              fontSize: "18px",
              color: "white",
              marginBottom: "0.5rem",
            }}
          >
            Número da aula:
          </Typography>
          <TextField
            variant="outlined"
            type="number"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
            sx={{
              backgroundColor: "#e0e0e0",
              borderRadius: "4px",
              "& .MuiOutlinedInput-input": {
                color: "black",
              },
            }}
          />
        </Box>

        {/* Curso */}
        <Box sx={{ marginBottom: "1rem" }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: "bold",
              fontSize: "18px",
              color: "white",
              marginBottom: "0.5rem",
            }}
          >
            Curso relacionado à aula:
          </Typography>
          <Select
            value={formData.courseId}
            onChange={handleSelectChange}
            fullWidth
            displayEmpty
            sx={{
              backgroundColor: "#e0e0e0",
              borderRadius: "4px",
              "& .MuiOutlinedInput-input": {
                color: "black",
              },
            }}
          >
            <MenuItem value="" disabled sx={{ color: "black" }}>
              Selecione um curso
            </MenuItem>
            {courses.map((course) => (
              <MenuItem key={course.id} value={course.id}>
                {course.name}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {/* Descrição */}
        <Box sx={{ marginBottom: "1rem" }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: "bold",
              fontSize: "18px",
              color: "white",
              marginBottom: "0.5rem",
            }}
          >
            Descrição da aula:
          </Typography>
          <TextField
            variant="outlined"
            multiline
            rows={4}
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            sx={{
              backgroundColor: "#e0e0e0",
              borderRadius: "4px",
              "& .MuiOutlinedInput-input": {
                color: "black",
              },
            }}
          />
        </Box>

        {/* Link do YouTube */}
        <Box sx={{ marginBottom: "1rem" }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: "bold",
              fontSize: "18px",
              color: "white",
              marginBottom: "0.5rem",
            }}
          >
            Link do Youtube para aula:
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            name="youtubeLink"
            value={formData.youtubeLink}
            onChange={handleInputChange}
            sx={{
              backgroundColor: "#e0e0e0",
              borderRadius: "4px",
              "& .MuiOutlinedInput-input": {
                color: "black",
              },
            }}
          />
        </Box>

        {/* Botão de confirmação */}
        <Button
          variant="contained"
          color="success"
          onClick={handleSubmit}
          sx={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: "bold",
            fontSize: "18px",
            marginTop: "1rem",
          }}
        >
          Confirmar
        </Button>
      </form>
    </Box>
  );
};

export default CriaAulaCurso;
