import axiosInstance from "./axiosInstance";

export const fetchCertificates = async () => {
  try {
    const response = await axiosInstance.post("/courses/certificate", {}, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true, // Para enviar cookies (se necessário)
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar certificados:", error);
    throw error;
  }
};