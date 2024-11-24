import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Capa do curso"
        height="140"
        image="C:\Users\luiza\Documents\Eng_de_software\IMG_3729_VSCO.jpg"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontFamily="nunito"
        >
          Nome do curso
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
          fontFamily="nunito"
        >
          Resuminho do curso
        </Typography>
      </CardContent>
      <Stack direction="row" justifyContent="center" spacing={2}>
        <CardActions>
          {/*<Button size="small">Share</Button>*{" "}
          <Fab color="primary" aria-label="play">
            * <PlayArrowIcon />*{" "}
          </Fab>
          */}
          <Fab color="success" aria-label="play" variant="extended">
            <PlayArrowIcon sx={{ mr: 1 }} />{" "}
            <Typography fontFamily="nunito"> Assistir </Typography>
          </Fab>
        </CardActions>
      </Stack>
    </Card>
  );
}
