import axiosInstance from "./axiosInstance";

interface CourseData {
    data: {
        course_id: number;
    }
    description: string;
    error: string | null;
    meta: any;
    response: number;
    timestamp: string;
}


export const trackCourse = async (data: CourseData): Promise<any> => {
    try {
        const response = await axiosInstance.get("/courses/get-current", data);
        if (response.data.response !== 200) {
            const responseCode = response.data.response;
            const errorMessage = response.data.description;
            
            console.log(responseCode, errorMessage);
            
            throw new Error(errorMessage);
        }
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
            throw new Error("Erro desconhecido.");
        }
    }
}