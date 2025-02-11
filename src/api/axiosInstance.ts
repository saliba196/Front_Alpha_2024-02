import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8080', // Defina a base URL da sua API
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Interceptores
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('Erro na API:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
