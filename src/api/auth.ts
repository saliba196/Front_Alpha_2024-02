import axiosInstance from "./axiosInstance";
import { fetchUserRequisition } from "./user_requisition";

interface AuthResponse {
    response: number;
    description: string;
    data?: any;
    error?: {
        type?: string;
        details?: any;
    };
    meta?: any;
    timestamp: string;
}

export const checkUserLoggedIn = async (): Promise<boolean> => {
    try {
        const response = await axiosInstance.get<AuthResponse>("/utils/user_online_check");
        return response.data.response === 200;
    } catch (error: any) {
        console.error("Erro ao verificar login do usuário:", error);
        return false;
    }
};

export const checkUserIsAdmin = async (): Promise<boolean> => {
    try {
        const userRequisition = await fetchUserRequisition();
        return userRequisition.data?.is_adm === true;
    } catch (error: any) {
        console.error("Erro ao verificar se o usuário é admin:", error);
        return false;
    }
};
