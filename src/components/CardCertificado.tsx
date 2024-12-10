import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { Download } from "./Download";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

interface VarsCardCertificado {
  imageUrl: string; // URL da imagem
  altText: string; // Texto alternativo opcional
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
      <Stack direction="row" justifyContent="space-between">
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
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontSize: "16px",
                fontWeight: 700,
                color: "white",
                textAlign: "left",
                marginBottom: "16px",
              }}
            >
              {titulo}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontSize: "12px",
                fontWeight: 400,
                color: "white",
                textAlign: "left",
                marginBottom: "16px",
              }}
            >
              {descricao}
            </Typography>
          </Stack>
        </Stack>
        <Download icon={<FileDownloadIcon />} text="Donwload"></Download>
      </Stack>
      <Divider color="white" />
    </Stack>
  );
};
