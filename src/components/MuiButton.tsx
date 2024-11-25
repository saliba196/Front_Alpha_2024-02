import {
  Button,
  Typography,
  Stack,
  IconButton,
  ButtonGroup,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import DeleteIcon from "@mui/icons-material/Delete";

export const MuiTypography = () => {
  return (
    
    <Stack spacing={4}>
      {/* Text Button, Conthttps://www.youtube.com/watch?v=BHEPVdfBAqE&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=1ained Button and Outlined Button */}
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://classroom.google.com/u/0/">
          Classrom?
        </Button>
        <Button variant="contained">Contido porque ninguém é de ferro</Button>
        <Button variant="outlined">Outlined porque é outlier!!</Button>
        <Button variant="contained">
          <Typography variant="h4" fontFamily="Nunito">
            Botao teste
          </Typography>
        </Button>
      </Stack>

      {/* Colored Buttons */}
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primaria
        </Button>
        <Button variant="contained" color="secondary">
          segunda
        </Button>
        <Button variant="contained" color="warning">
          Avisei né..
        </Button>
        <Button variant="contained" color="error">
          erro?
        </Button>
        <Button variant="contained" color="success">
          Sucesso né pae
        </Button>
        <Button variant="contained" color="info">
          Saber mais né
        </Button>
      </Stack>

      {/* Button Sizes */}
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          medio
        </Button>
        <Button variant="contained" color="warning" size="large">
          Já sabe o que né pae
        </Button>
      </Stack>

      {/* Button with Icons */}
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<AdsClickIcon />}>
          Clicate
        </Button>
        <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
          Comprar
        </Button>
        <IconButton
          aria-label="Send"
          color="error"
          size="large"
          onClick={() => alert("PORQUE CLICOU NO BOLSONARO???")}
        >
          <DeleteIcon />
        </IconButton>
      </Stack>

      {/* Button Group */}
      <Stack direction="row">
        <ButtonGroup
          variant="outlined"
          orientation="vertical"
          size="medium"
          color="secondary"
        >
          <Button>Luiza</Button>
          <Button>Araujo</Button>
          <Button>de</Button>
          <Button>Oliveira</Button>
          <Button>Caram</Button>
          <Button>Saliba</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};
