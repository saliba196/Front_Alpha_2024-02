import axiosInstance from "./axiosInstance";

// Interface para o corpo da requisição
interface QuizRequest {
  transcricao: string;
  num_perguntas: number;
}

interface Alternativas {
  A: string;
  B: string;
  C: string;
  D: string;
}

interface Pergunta {
  pergunta: string;
  alternativas: Alternativas;
  resposta_correta: string;
}

interface QuizResponse {
  data: {
    perguntas: Pergunta[];
  };
  description: string;
  error: string | null;
  meta: any;
  response: number;
  timestamp: string;
}

// Função para enviar a requisição ao endpoint e tratar a resposta
export const generateQuiz = async (data: QuizRequest): Promise<QuizResponse> => {
  try {
    const response = await axiosInstance.post<QuizResponse>("/quiz/generate", data);
    
    if (response.data.response !== 200) {
      const responseCode = response.data.response;
      const errorMessage = response.data.description || "Erro desconhecido no processamento.";
      
      console.log(responseCode, errorMessage);

      throw new Error(errorMessage);
    }
    console.log();
    return response.data;
  } catch (error: any) {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          throw new Error("Requisição inválida.");
        case 401:
          throw new Error("Acesso não autorizado.");
        case 404:
          throw new Error("Recurso não encontrado.");
        case 500:
          throw new Error("Erro interno do servidor.");
        default:
          throw new Error(error.response.data.error || "Erro desconhecido do servidor.");
      }
    } else if (error.request) {
      // Erro de rede ou sem resposta
      throw new Error("Sem resposta do servidor. Verifique sua conexão.");
    } else {
      // Erro genérico
      throw new Error(`Erro desconhecido ao gerar quiz. ${error}`);
    }
  }
};
