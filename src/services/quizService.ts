// src/services/quizService.ts
import axios from "axios";

// Definindo a interface para o retorno da API
interface CsrfResponse {
  csrfToken: string;
}

export const getCsrfToken = async (): Promise<string> => {
  try {
    const response = await axios.get<CsrfResponse>("/csrf-token"); // Definindo o tipo aqui
    return response.data.csrfToken;
  } catch (error) {
    console.error("Erro ao obter o CSRF token:", error);
    throw new Error("Falha ao obter o CSRF token");
  }
};

export const createQuiz = async (quizData: object): Promise<void> => {
  const csrfToken = await getCsrfToken();

  await axios.post("/quiz/create", quizData, {
    headers: {
      "Content-Type": "application/json",
      csrf_token: csrfToken,
    },
  });
};
