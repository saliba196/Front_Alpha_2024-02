// quizService.ts

import axios from "axios";
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
  perguntas: Pergunta[];
}

// Função para enviar a requisição ao endpoint e tratar a resposta
export const generateQuiz = async (data: QuizRequest): Promise<QuizResponse> => {
  try {
    const response = await axios.post<QuizResponse>(
      "http://127.0.0.1:5000/quiz/generate",
      data
    );
    // Aqui, você pode fazer validações adicionais caso a API retorne erros dentro do corpo
    // Exemplo: se a API sempre retornar 200 e indicar erros por meio de algum campo,
    // você pode fazer uma verificação adicional antes de retornar os dados.
    return response.data;
  } catch (error: any) {
    // Trate os erros (de rede, status HTTP diferentes, etc.)
    console.error("Erro ao gerar quiz:", error);
    throw error;
  }
};
