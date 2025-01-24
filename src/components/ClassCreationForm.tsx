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
import "./ClassCreationForm.scss";

interface Course {
  id: string;
  name: string;
}

const ClassCreationForm: React.FC = () => {
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
    <Box className="class-creation-form">
      <Typography variant="h1" className="form-title">
        Criação de Aula
      </Typography>

      <form onSubmit={(e) => e.preventDefault()}>
        <Box className="form-field">
          <Typography variant="body1">Título da aula:</Typography>
          <TextField
            variant="outlined"
            fullWidth
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </Box>

        <Box className="form-field">
          <Typography variant="body1">Número da aula:</Typography>
          <TextField
            variant="outlined"
            type="number"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
          />
        </Box>

        <Box className="form-field">
          <Typography variant="body1">Curso relacionado à aula:</Typography>
          <Select
            value={formData.courseId}
            onChange={handleSelectChange}
            fullWidth
            displayEmpty
          >
            <MenuItem value="" disabled>
              Selecione um curso
            </MenuItem>
            {courses.map((course) => (
              <MenuItem key={course.id} value={course.id}>
                {course.name}
              </MenuItem>
            ))}
          </Select>
        </Box>

        <Box className="form-field">
          <Typography variant="body1">Descrição da aula:</Typography>
          <TextField
            variant="outlined"
            multiline
            rows={4}
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </Box>

        <Box className="form-field">
          <Typography variant="body1">Link do Youtube para aula:</Typography>
          <TextField
            variant="outlined"
            fullWidth
            name="youtubeLink"
            value={formData.youtubeLink}
            onChange={handleInputChange}
          />
        </Box>

        <Button variant="contained" color="success" onClick={handleSubmit}>
          Confirmar
        </Button>
      </form>
    </Box>
  );
};

export default ClassCreationForm;
