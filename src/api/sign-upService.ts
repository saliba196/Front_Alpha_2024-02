import axiosInstance from "./axiosInstance";

interface SignUpData {
  email: string;
  password: string;
  password_check: string;
  full_name: string;
  birth_date: string;
  cpf: string;
  cliente_tina: boolean;
  keep_logged_in: boolean;
}

// Função para enviar o cadastro
export const signUpUser = async (userData: SignUpData) => {
  try {
    const response = await axiosInstance.post("/sign-up", userData);

    // Verificação de erro com base no campo 'response' no corpo da resposta
    if (response.data.response && response.data.response !== 200) {
      const responseCode = response.data.response;
      const errorMessage = response.data.description || "Erro desconhecido no processamento.";

      // Tratamento baseado no código de resposta interno
      switch (responseCode) {
        case 400:
          throw new Error("Dados inválidos ou faltando.");
        case 401:
          throw new Error("Acesso não autorizado.");
        case 409:
          throw new Error("Email já cadastrado.");
        case 500:
          throw new Error("Erro interno do servidor.");
        default:
          throw new Error(errorMessage);
      }
    }

    return response.data; // Retorna os dados caso não haja erro
  } catch (error: any) {
    if (error.response) {
      // Tratamento para erros de status HTTP diferentes de 200
      switch (error.response.status) {
        case 400:
          throw new Error("Dados inválidos ou faltando.");
        case 401:
          throw new Error("Acesso não autorizado.");
        case 409:
          throw new Error("Usuário já cadastrado.");
        case 500:
          throw new Error("Erro interno do servidor.");
        default:
          throw new Error(error.response.data.error || "Erro desconhecido do servidor.");
      }
    } else if (error.request) {
      // Erro de rede ou sem resposta
      throw new Error("Sem resposta do servidor. Verifique sua conexão.");
    } else {
      // Erro genérico (inclui os erros lançados na verificação do corpo)
      throw new Error(error.message || "Erro desconhecido ao cadastrar.");
    }
  }
};
