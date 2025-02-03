// src/services/classService.ts
import axios from "axios";

// Interface para o CSRF token
interface CsrfResponse {
  csrfToken: string;
}

export const getCsrfToken = async (): Promise<string> => {
  try {
    const response = await axios.get<CsrfResponse>("/csrf-token");
    return response.data.csrfToken;
  } catch (error) {
    console.error("Erro ao obter o CSRF token:", error);
    throw new Error("Falha ao obter o CSRF token");
  }
};

export const createClass = async (classData: object): Promise<void> => {
  const csrfToken = await getCsrfToken();

  await axios.post("/class/create", classData, {
    headers: {
      "Content-Type": "application/json",
      csrf_token: csrfToken,
    },
  });
};
