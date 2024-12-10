import React from "react";
import { Card, Typography, Box, Button, Divider } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const styles = {
  card: {
    width: "100%",
    maxWidth: "1169px",
    height: "300px",
    backgroundColor: "#648A64",
    borderRadius: "8px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "16px",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  premium: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#FFFFFF",
  },
  premiumIcon: {
    color: "#FFFFFF",
    fontSize: "20px",
  },
  expiration: {
    color: "#FFFFFF",
    fontSize: "32px",
    fontWeight: 600,
    marginTop: "8px",
  },
  payment: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginTop: "16px",
  },
  paymentText: {
    color: "#E0E0E0",
    fontSize: "14px",
  },
  buttons: {
    display: "flex",
    gap: "12px",
  },
  buttonInfo: {
    backgroundColor: "#E0E0E0",
    color: "#000000",
    textTransform: "none",
    padding: "8px 16px",
    fontWeight: 500,
    borderRadius: "4px",
    ":hover": {
      backgroundColor: "#d5d5d5",
    },
  },
  buttonAlter: {
    backgroundColor: "#CEDDA6",
    color: "#000000",
    textTransform: "none",
    padding: "8px 16px",
    fontWeight: 500,
    borderRadius: "4px",
    ":hover": {
      backgroundColor: "#b8c692",
    },
  },
};

const SubscriptionCard: React.FC = () => (
  <Card sx={styles.card}>
    {/* Cabeçalho */}
    <Box sx={styles.header}>
      <Typography variant="h6" color="#FFFFFF">
        Plano anual
      </Typography>
      <Box sx={styles.premium}>
        <CheckCircleIcon sx={styles.premiumIcon} />
        <Typography variant="body2" color="#FFFFFF">
          Premium
        </Typography>
      </Box>
    </Box>
    <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.3)" }} />
    {/* Corpo */}
    <Typography variant="body2" color="#E0E0E0">
      Sua assinatura atual expira em:
    </Typography>
    <Typography sx={styles.expiration}>25/10/2025</Typography>
    <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.3)" }} />
    {/* Rodapé */}
    <Box sx={styles.payment}>
      <CreditCardIcon sx={{ color: "#E0E0E0" }} />
      <Typography sx={styles.paymentText}>
        Acompanhe detalhes de cobrança na fatura do seu cartão de crédito.
      </Typography>
      <Box sx={styles.buttons}>
        <Button sx={styles.buttonInfo}>Infos cartão</Button>
        <Button sx={styles.buttonAlter}>Alterar</Button>
      </Box>
    </Box>
  </Card>
);

export default SubscriptionCard;
