import React from "react";
import { Container, Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const containerStyle = {
    background: "linear-gradient(to bottom right, #213435 30%, #46685B)",
    width: "1920px",
    height: "1080px",
};

const containerStyle2 = {
  background: "#46685B",
  width: "192px",
  height: "1080px",
  position: "absolute",
  left: "0",
};

const containerStyle3 = {
  background: "#46685B",
  width: "1728px",
  height: "480px",
  position: "absolute",
  right: "0",
  top: "0px",
};

const buttonStyle1 = {
    backgroundColor: "#648A64",
    borderRadius: "13px",
    display: "flex",
    padding: "10px 20px", // Aumenta o espaçamento interno
    fontSize: "1rem",   // Aumenta o tamanho da fonte
    position: "absolute",
    left: "350px",
    top: "320px",
  };

const buttonStyle2 = {
    backgroundColor: "#648A64",
    borderRadius: "13px",
    display: "flex",
    padding: "10px 20px", // Aumenta o espaçamento interno
    fontSize: "1rem",   // Aumenta o tamanho da fonte
    right: "350px",
    top: "880px",
};

const buttonStyle3 = {
  backgroundColor: "#648A64",
  borderRadius: "13px",
  display: "flex",
  padding: "10px 20px", // Aumenta o espaçamento interno
  fontSize: "1rem",   // Aumenta o tamanho da fonte
  position: "absolute",
  right: "550px",
  top: "880px",
};

export const Infos = () => {
    const navigate = useNavigate();
    return(
      <Container maxWidth={false}sx={containerStyle}>
        <Stack spacing={1}>
            <Stack spacing={3}>
            <Container maxWidth={false} sx={containerStyle2}> </Container>
            <Container maxWidth={false} sx={containerStyle3}> </Container>
              {/* Título1 */}
              <Typography variant="h4" color="#fffcfc" position="absolute" left="350px" top="520px">Assistir</Typography>

              {/* Titulo2 */}
              <Typography variant="h4" color="#fffcfc" position="absolute" right="320px" top="520px">Materiais Complementares</Typography>
  
              {/* Botão Assistir */}
              <Button
                variant="contained"
                onClick={() => navigate("/home")}
                sx={{
                  ...buttonStyle1,
                  alignSelf: "flex-end", // Alinha o botão à direita
                }}
              >
                Assistir
              </Button>

              {/* Botao Certificado */}
              <Button
                variant="contained"
                onClick={() => navigate("/home")}
                sx={{
                  ...buttonStyle2,
                  alignSelf: "flex-end", // Alinha o botão à direita
                }}
              >
                Certificado
              </Button>

              {/* Botao Exercicios */}
              <Button
                variant="contained"
                onClick={() => navigate("/home")}
                sx={{
                  ...buttonStyle3,
                  alignSelf: "flex-end", // Alinha o botão à direita
                }}
              >
                Exercicios
              </Button>

            </Stack>
        </Stack>
      </Container>
    );
};