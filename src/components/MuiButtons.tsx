import {
    Button,
    Stack
  } from "@mui/material";

export const MuiButtons = () => {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained" color="primary">
                Primary
            </Button>
            <Button variant="contained" color="secondary">
                Secondary
            </Button>
            <Button variant="contained" color="warning">
                Warning
            </Button>
            <Button variant="contained" color="error">
                Error
            </Button>
            <Button variant="contained" color="success">
                Success
            </Button>
            <Button variant="contained" color="info">
                Info
            </Button>
        </Stack>
    );
}