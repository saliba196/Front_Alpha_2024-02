import React, { useState } from "react";
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

const InfosDoCurso: React.FC = () => {
  const [formData, setFormData] = useState({
    courseTitle: "",
    numberOfLessons: "",
    courseDescription: "",
    instructorName: "",
    instructorDescription: "",
    selectedCategories: [] as string[],
  });

  const [courseCover, setCourseCover] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (category: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedCategories: prev.selectedCategories.includes(category)
        ? prev.selectedCategories.filter((c) => c !== category)
        : [...prev.selectedCategories, category],
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCourseCover(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    console.log("Uploaded Cover:", courseCover);
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

        {/* Upload da Capa */}
        <Box>
          <Typography
            sx={{
              marginBottom: "8px",
              fontWeight: "bold",
              "& .MuiOutlinedInput-input": {
                color: "black",
              },
            }}
          >
            Capa do curso:
          </Typography>
          <Button
            component="label"
            variant="contained"
            sx={{
              backgroundColor: "#E1E3AC",
              color: "#213435",
              borderRadius: "8px",
              padding: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "150px",
            }}
          >
            {courseCover ? (
              courseCover.name
            ) : (
              <CloudUploadIcon fontSize="large" />
            )}
            <input
              hidden
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
            />
          </Button>
        </Box>

        {/* Categorias */}
        <Box>
          <Typography sx={{ marginBottom: "8px", fontWeight: "bold" }}>
            Selecione as categorias do curso:
          </Typography>
          {[
            "Jurídico e finanças",
            "Atendimento e gestão",
            "Receitas e nutrição",
            "Vendas e marketing",
            "Time e comunidade",
            "Outros",
          ].map((category) => (
            <FormControlLabel
              key={category}
              control={
                <Checkbox
                  checked={formData.selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  sx={{ color: "#E1E3AC" }}
                />
              }
              label={category}
              sx={{ color: "white" }}
            />
          ))}
        </Box>

        {/* Nome do Professor */}
        <Box>
          <Typography sx={{ marginBottom: "8px", fontWeight: "bold" }}>
            Nome do professor do curso:
          </Typography>
          <TextField
            fullWidth
            name="instructorName"
            value={formData.instructorName}
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

        {/* Descrição do Professor */}
        <Box>
          <Typography sx={{ marginBottom: "8px", fontWeight: "bold" }}>
            Descrição do professor do curso:
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={6}
            name="instructorDescription"
            value={formData.instructorDescription}
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
