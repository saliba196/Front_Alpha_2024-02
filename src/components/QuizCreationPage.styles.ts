import { SxProps } from "@mui/system";

export const boxStyle: SxProps = {
  display: "flex",
  minHeight: "100vh",
  overflowX: "hidden",
};

export const contentStyle: SxProps = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  padding: "24px",
  background: "linear-gradient(to bottom right, #213435 30%, #46685B)",
  overflowX: "hidden",
};

export const stackStyle: SxProps = {
  maxWidth: "600px",
};

export const textFieldStyle: SxProps = {
  backgroundColor: "#e0e0e0",
  borderRadius: "4px",
  "& .MuiOutlinedInput-input": {
    color: "black",
  },
};

export const typographyStyle: SxProps = {
  fontFamily: "Nunito",
  fontWeight: "bold",
  fontSize: "18px",
  color: "white",
  marginBottom: "8px",
};

export const buttonStyle: SxProps = {
  fontFamily: "'Nunito', sans-serif",
  fontWeight: "bold",
  fontSize: "18px",
  marginTop: "1rem",
};