import React from "react";
import { Stack, Typography } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CircularButtonWithText from "./CircularButtonWithText";
import DownloadIcon from "@mui/icons-material/Download";

const CertificadosCursos: React.FC = () => {
  return (
    <Stack direction="row" spacing={3} alignItems="center">
      <Stack direction="column" spacing={1} alignItems="left">
        <Stack direction="row" spacing={1} alignItems="center">
          <MenuBookIcon />
          <Typography variant="body1">18 Cursos acessados</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <WorkspacePremiumIcon />
          <Typography variant="body1"> 8 Certificados disponíveis</Typography>
        </Stack>
      </Stack>
      <CircularButtonWithText label="Donwload" Icon={DownloadIcon} />
    </Stack>
  );
};

export default CertificadosCursos;
