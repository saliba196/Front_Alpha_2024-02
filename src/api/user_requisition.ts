import axiosInstance from "./axiosInstance";

interface UserRequisition {
    response: number;
    description: string;
    data?: {
        birth_date: string;
        cpf: string;
        email: string;
        is_adm: boolean;
        name: string;
        signature: boolean;
    };
    error?: {
        type?: string;
        details?: any;
    };
    meta?: any;
    timestamp: string;
}

export const fetchUserRequisition = async (): Promise<UserRequisition> => {
    try {
        const response = await axiosInstance.get<UserRequisition>("/account/call");
        return response.data;
    } catch (error: any) {
        console.error("Erro ao buscar informações do usuário:", error);
        throw error;
    }
};
