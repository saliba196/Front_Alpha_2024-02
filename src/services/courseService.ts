// src/services/courseService.ts
import axios from "axios";

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

export const saveCourse = async (courseData: object): Promise<void> => {
  const csrfToken = await getCsrfToken();

  await axios.post("/account/info", courseData, {
    headers: {
      "Content-Type": "application/json",
      csrf_token: csrfToken,
    },
  });
};
