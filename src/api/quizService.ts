import axiosInstance from './axiosInstance';

interface RequestData {
  transcricao: string;
  num_perguntas: number;
}

interface QuizResponse {
  perguntas: string[];
}

export const gerarPerguntas = async (data: RequestData): Promise<QuizResponse> => {
  const response = await axiosInstance.post<QuizResponse>('/quiz/generate', data);
  console.log('Perguntas geradas:', response.data);
  return response.data;
};
