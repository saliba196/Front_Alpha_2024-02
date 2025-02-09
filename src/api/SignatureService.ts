import axiosInstance from "./axiosInstance";

interface PaymentCheckoutData {
    user_id: string;
    plan_id: string;
}

interface PaymentResponse {
    status: string;
    message?: string;
}

// Obter informações do checkout de pagamento
export const getPaymentCheckout = async (): Promise<{ data: PaymentResponse; response: any }> => {
    try {
        const response = await axiosInstance.get("/payment_checkout");
        return { data: response.data, response };
    } catch (error: any) {
        throw new Error(error.response?.data?.error || "Erro ao obter checkout de pagamento.");
    }
};

// Realizar checkout de pagamento
export const postPaymentCheckout = async (paymentData: PaymentCheckoutData): Promise<{ data: PaymentResponse; response: any }> => {
    try {
        const response = await axiosInstance.post("/payment_checkout", paymentData);
        return { data: response.data, response };
    } catch (error: any) {
        throw new Error(error.response?.data?.error || "Erro ao processar checkout de pagamento.");
    }
};

// Verificar pagamento negado
export const getPaymentDenied = async (): Promise<{ data: PaymentResponse; response: any }> => {
    try {
        const response = await axiosInstance.get("/payment_denied");
        return { data: response.data, response };
    } catch (error: any) {
        throw new Error(error.response?.data?.error || "Erro ao verificar pagamento negado.");
    }
};

// Validar pagamento concluído
export const getPaymentDone = async (): Promise<{ data: PaymentResponse; response: any }> => {
    try {
        const response = await axiosInstance.get("/payment_done");
        return { data: response.data, response };
    } catch (error: any) {
        throw new Error(error.response?.data?.error || "Erro ao validar pagamento.");
    }
};
