import axiosInstance from "./axiosInstance";

interface Course {
    id: number;
    name: string;
    description: string;
    url: string;
}

interface Aula {
    id: number;
    title: string;
    description: string;
    url: string;
}

interface CourseResponse {
    response: number;
    description: string;
    data: Course[];
}

interface AulaResponse {
    response: number;
    description: string;
    data: Aula[];
}

export const fetchCourses = async (): Promise<Course[]> => {
    try {
        const response = await axiosInstance.get<CourseResponse>("/courses");
        if (response.data.response === 200) {
            console.log(response.data.data);
            return response.data.data;
        } else {
            throw new Error(response.data.description);
        }
    } catch (error: any) {
        console.error("Erro ao buscar cursos:", error);
        throw error;
    }
};

export const fetchAulas = async (courseId: number): Promise<Aula[]> => {
    try {
        const response = await axiosInstance.get<AulaResponse>(`/classes/${courseId}`);
        if (response.data.response === 200) {
            return response.data.data;
        } else {
            throw new Error(response.data.description);
        }
    } catch (error: any) {
        console.error("Erro ao buscar aulas:", error);
        throw error;
    }
};
