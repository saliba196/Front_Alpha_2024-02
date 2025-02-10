import axiosInstance from "./axiosInstance";

interface LoginData {
    id_method: string;
    password: string;
    keep_logged_in: boolean;
}

interface LoginResponse {
    user: string;
}

// Função para enviar o login
export const loginUser = async (userData: LoginData): Promise<{ data: LoginResponse; response: any }> => {
    try {
        const response = await axiosInstance.post("/login/authenticate", userData);
        
        if (response.data.response !== 200) {
            const responseCode = response.data.response;
            const errorMessage = response.data.description || "Erro desconhecido no processamento.";

            console.log(responseCode, errorMessage);
            switch (responseCode) {
                case 401:
                    throw new Error("Acesso não autorizado ou credenciais incorretas.");
                case 404:
                    throw new Error("Usuário não encontrado.");
                case 500:
                    throw new Error("Erro interno do servidor.");
                default:
                    throw new Error(errorMessage);
            }
        }
        return { data: response.data, response };
    } catch (error: any) {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    throw new Error("Acesso não autorizado ou credenciais incorretas.");
                case 404:
                    throw new Error("Usuário não encontrado.");
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
            throw new Error(`Erro desconhecido ao logar. ${error}`);
        }
    }
};
