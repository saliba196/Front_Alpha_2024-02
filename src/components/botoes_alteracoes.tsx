import { Box, Button} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear"
import SaveIcon from "@mui/icons-material/Save"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"

export const SalvarAlteracoes = () => {
    return (
        <Box>
            <Button
            variant="contained"
            sx={{ backgroundColor: "#4CAF50", color: "white" }}
            startIcon={<SaveIcon/>}
          >
            Salvar Alterações
          </Button>
        </Box>
    );
};

export const CancelarAlteracoes = () => {
    return (
        <Box>
            <Button
            variant="contained"
            sx={{ backgroundColor: "#4CAF50", color: "white" }}
            startIcon={<ClearIcon/>}
          >
            Cancelar Alterações
          </Button>
        </Box>
    );
};

export const Apagar = () => {
    return (
        <Box>
            <Button
            variant="contained"
            sx={{ backgroundColor: "#a11912", color: "white" }}
            startIcon={<DeleteForeverIcon/>}
          >
            Apagar
          </Button>
        </Box>
    );
};