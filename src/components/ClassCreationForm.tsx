// src/components/ClassCreationForm.tsx
import React, { useState } from "react";
import { TextField, Stack } from "@mui/material";

interface ClassCreationFormProps {
  onChange: (data: object) => void;
}

const ClassCreationForm: React.FC<ClassCreationFormProps> = ({ onChange }) => {
  const [formData, setFormData] = useState({ title: "", description: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = { ...formData, [e.target.name]: e.target.value };
    setFormData(updatedData);
    onChange(updatedData); // Envia as atualizações para o componente pai
  };

  return (
    <Stack spacing={2}>
      <TextField
        label="Título da Aula"
        name="title"
        value={formData.title}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Descrição"
        name="description"
        value={formData.description}
        onChange={handleChange}
        fullWidth
        multiline
        rows={4}
      />
    </Stack>
  );
};

export default ClassCreationForm;
