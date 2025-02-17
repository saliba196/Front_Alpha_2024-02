import axiosInstance from "./axiosInstance";

//interface para o corpo da requisição
interface QuizRequest {
    titulo: string;
    numero_aulas: number;
    descricao_curso: string;
    imagem_curso: string;
    aulas: Aula[];
    questoes: Questao[];
}

interface Aula {
    titulo: string;
    descricao: string;
    video_url: string;
    transcrição: string;
}


interface Questao {
    enunciado: string;
    alternativa_a: string;
    alternativa_b: string;
    alternativa_c: string;
    alternativa_d: string;
    alternativa_e: string;
    resposta_correta: string;
}

interface QuizResponse {
    description: string;
    error: string | null;
    meta: any;
    response: number;
    timestamp: string;
}

// Função para enviar a requisição ao endpoint e tratar a resposta
export const createCourse = async (data: QuizRequest): Promise<QuizResponse> => {
    try {
        const response = await axiosInstance.post<QuizResponse>("/criar_curso", data);

        if (response.data.response !== 200) {
            const responseCode = response.data.response;
            const errorMessage = response.data.description;

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
        } else {
            throw new Error(error.message);
        }
    }
};