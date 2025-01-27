import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://grupoalpha.pythonanywhere.com', //URL do back-end 
});