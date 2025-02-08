import axiosInstance from "./axiosInstance";

export const logout_api = async (): Promise<void> => {
  try {
    const response = await axiosInstance.post("/logout");

    if (response.data.response && response.data.response !== 200) {
      const responseCode = response.data.response;
      const errorMessage = response.data.description || "Erro desconhecido no processamento.";

      switch (responseCode) {
        case 400:
          throw new Error("Dados inválidos ou faltando.");
        case 401:
          throw new Error("Acesso não autorizado.");
        case 500:
          throw new Error("Erro interno do servidor.");
        default:
          throw new Error(errorMessage);
      }
    }

    return;
  } catch (error: any) {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          throw new Error("Usuário não logado.");
        default:
          throw new Error(error.response.data.error || "Erro desconhecido do servidor.");
      }
    } else if (error.request) {
      throw new Error("Sem resposta do servidor. Verifique sua conexão.");
    } else {
      throw new Error(error.message || "Erro desconhecido ao deslogar.");
    }
  }
}

