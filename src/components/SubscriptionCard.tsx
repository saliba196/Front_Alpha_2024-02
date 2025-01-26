import React, { useState } from "react";
import { Card, Typography, Box, Button, Divider, Select, MenuItem } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SettingsIcon from '@mui/icons-material/Settings';
import { SelectChangeEvent } from "@mui/material/Select";

const styles = {
  card: {
    width: "100%",
    maxWidth: "1169px",
    height: "auto",
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
  selectPlan: {
    marginTop: "16px",
    color: "#FFFFFF",
  },
  buttonProceed: {
    marginTop: "16px",
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
  buttonProceed2: {
    marginTop: "16px",
    backgroundColor: "#d61515",
    color: "#000000",
    textTransform: "none",
    padding: "8px 16px",
    fontWeight: 500,
    borderRadius: "4px",
    ":hover": {
      backgroundColor: "#db4040",
    },
  },
  payment: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginTop: "16px",
  },
  alterarPlano: {
    backgroundColor: "#CEDDA6",
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
  additionalBox: {
    backgroundColor: "#507350",
    color: "#FFFFFF",
    padding: "16px",
    borderRadius: "8px",
    textAlign: "center",
    marginTop: "16px",
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

const SubscriptionCard: React.FC = () => {
  const [choosenPref, setChoosenPref] = useState("");

  const handlePlanChange = (event: SelectChangeEvent<string>) => {
    setChoosenPref(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Plano escolhido:", choosenPref);
    
    // integrar com o backend para enviar a informação tag choosenPref
    // ou prosseguir para a próxima etapa de pagamento.

  };

  return (
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
    <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.3)"}}/>
    <Box sx={styles.payment}>
      <SettingsIcon sx={{ color: "#E0E0E0" }} />
      <Typography sx={styles.paymentText}>
        Gerenciamento de Assinatura
      </Typography>
    </Box>
    <Typography variant="body2" color="#E0E0E0">
        Selecione o plano para ser Contratado ou Alterado
      </Typography>
      <Select
        value={choosenPref}
        onChange={handlePlanChange}
        sx={styles.selectPlan}
        displayEmpty
      >
        <MenuItem sx={styles.alterarPlano} value="" disabled>
          Selecione o plano
        </MenuItem>
        <MenuItem sx={styles.alterarPlano} value="mensal">Acesso por um mês</MenuItem>
        <MenuItem sx={styles.alterarPlano} value="trimestral">Acesso por três meses</MenuItem>
        <MenuItem sx={styles.alterarPlano} value="semestral">Acesso por seis meses</MenuItem>
        <MenuItem sx={styles.alterarPlano} value="anual">Acesso por um ano</MenuItem>
      </Select>
      <Button sx={styles.buttonProceed} onClick={handleSubmit}>
        Continuar para o Pagamento
      </Button>
      <Button sx={styles.buttonProceed2} onClick={handleSubmit}>
        Cancelar Assinatura
      </Button>
  </Card>
  );
};

export default SubscriptionCard;
