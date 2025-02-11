import axiosInstance from "./axiosInstance";

interface PaymentCheckoutData {
    choosen_preference: number;
}

interface PaymentResponse {
    link_email?: string;
    link_demo?: string;
    link_email2?: string;
}

// Obter informações do checkout de pagamento
export const getPaymentCheckout = async (choosen_preference: number): Promise<{ data: PaymentResponse; response: any }> => {
    try {
        const response = await axiosInstance.get("/payment_checkout", { params: { choosen_preference } });
        return { data: response.data, response };
    } catch (error: any) {
        switch (error.response?.status) {
            case 401:
                throw new Error("Não foi possível obter a preferência escolhida.");
            case 500:
                throw new Error("Erro interno do servidor.");
            default:
                throw new Error("Erro ao obter checkout de pagamento.");
        }
    }
};

// Realizar checkout de pagamento
export const postPaymentCheckout = async (paymentData: PaymentCheckoutData): Promise<{ data: PaymentResponse; response: any }> => {
    try {
        const response = await axiosInstance.post("/payment_checkout", paymentData);
        return { data: response.data, response };
    } catch (error: any) {
        switch (error.response?.status) {
            case 401:
                throw new Error("Não foi possível obter a preferência escolhida.");
            case 500:
                throw new Error("Erro interno do servidor.");
            default:
                throw new Error("Erro ao processar checkout de pagamento.");
        }
    }
};

// Verificar pagamento negado
export const getPaymentDenied = async (): Promise<{ data: PaymentResponse; response: any }> => {
    try {
        const response = await axiosInstance.get("/payment_denied");
        return { data: response.data, response };
    } catch (error: any) {
        switch (error.response?.status) {
            case 401:
                throw new Error("Pagamento não aprovado.");
            case 500:
                throw new Error("Erro interno do servidor.");
            default:
                throw new Error("Erro ao verificar pagamento negado.");
        }
    }
};

// Validar pagamento concluído
export const getPaymentDone = async (choosen_preference: number): Promise<{ data: PaymentResponse; response: any }> => {
    try {
        const response = await axiosInstance.get("/payment_done", { params: { choosen_preference } });
        return { data: response.data, response };
    } catch (error: any) {
        switch (error.response?.status) {
            case 401:
                throw new Error("Não foi possível obter a preferência da sessão.");
            case 500:
                throw new Error("Erro interno do servidor.");
            default:
                throw new Error("Erro ao validar pagamento.");
        }
    }
};
