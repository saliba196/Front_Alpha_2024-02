import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";

interface VarsCardCertificado {
  imageUrl: string; // URL da imagem
  altText?: string; // Texto alternativo opcional
  titulo: string; // Título dinâmico do certificado
  descricao: string; // Descrição dinâmica do certificado
}

export const CardCertificado: React.FC<VarsCardCertificado> = ({
  imageUrl,
  altText = "Imagem do Curso",
  titulo,
  descricao,
}) => {
  return (
    <Stack direction="column" spacing={1} alignItems="left">
      <Stack direction="row" spacing={1} alignItems="left">
        <Box
          component="img"
          src={imageUrl}
          alt={altText}
          sx={{
            width: "190px",
            height: "40px",
            objectFit: "contain",
          }}
        />
        <Stack direction="column" spacing={1} alignItems="left">
          <Typography>{titulo}</Typography>
          <Typography>{descricao}</Typography>
        </Stack>
      </Stack>
      <Divider />
    </Stack>
  );
};
