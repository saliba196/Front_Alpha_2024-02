import React from "react";
import { Stack, Typography } from "@mui/material";
//import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CircularButtonWithText from "./CircularButtonWithText";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-router-dom";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
//Só pra ter algo novo!

const AcessoCertificados: React.FC = () => {
  return (
    <Stack direction="row" spacing={3} alignItems="center">
      <Stack direction="column" spacing={1} alignItems="left">
        <Stack direction="row" spacing={1} alignItems="center">
          <MenuBookIcon sx={{ fontSize: 45 }} />{" "}
          {/* Ajuste do tamanho do ícone */}
          <Typography fontSize="24px"> 18 Cursos acessados</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <MilitaryTechIcon sx={{ fontSize: 45 }} />{" "}
          {/* Ajuste do tamanho do ícone */}
          <Typography fontSize="24px"> 8 Certificados disponíveis</Typography>
        </Stack>
      </Stack>
      <Link to="/certificados">
        <CircularButtonWithText label="Download" Icon={DownloadIcon} />
      </Link>
    </Stack>
  );
};

export default AcessoCertificados;
