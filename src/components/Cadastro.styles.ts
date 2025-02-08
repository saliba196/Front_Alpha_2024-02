// Cadastro.styles.ts
export const boxStyle = {
  background: "linear-gradient(to bottom right, #213435 30%, #46685B)",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
  padding: 0,
  width: "100%",
};

export const paperStyle = {
  padding: "40px",
  textAlign: "center",
  borderRadius: "30px",
  backgroundColor: "#E1E3AC",
  width: "100%",
  maxWidth: "500px",
};

export const textFieldStyle = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#46685B",
      borderRadius: "20px",
      borderWidth: "4px",
      backgroundColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#46685B",
    },
    "& input": {
      color: "#000",
      backgroundColor: "#D9D9D9",
      borderRadius: "20px",
    },
  },
};

export const buttonStyle = {
  backgroundColor: "#648A64",
  borderRadius: "13px",
  padding: "10px 20px",
  fontSize: "1rem",
};

export const loginLinkStyle = {
  textTransform: "none",
  fontSize: "0.9rem",
  color: "#D9D9D9",
  "&:hover": {
    color: "#213435",
  },
};
