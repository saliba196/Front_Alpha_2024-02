import axiosInstance from "./axiosInstance";

interface UserInfo {
    birth_date: string;
    cpf: string;
    email: string;
    is_adm: boolean;
    name: string;
    signature: boolean;
}

export const getUserInfo = async (): Promise<UserInfo> => {
    try {
        const response = await axiosInstance.get<{ data: UserInfo }>("/account/call");
        console.log("Informações do usuário:", response.data.data);

        // Adapt the response to match the UserInfo interface
        const userInfo: UserInfo = {
            birth_date: response.data.data.birth_date,
            cpf: response.data.data.cpf,
            email: response.data.data.email,
            is_adm: response.data.data.is_adm,
            name: response.data.data.name,
            signature: response.data.data.signature,
        };

        return userInfo;
    } catch (error: any) {
        console.error("Erro ao buscar informações do usuário:", error);
        throw error;
    }
};
