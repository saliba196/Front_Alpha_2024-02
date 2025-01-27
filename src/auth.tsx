import axios from 'axios';

export const api = axios.create({
  baseURL: 'localhost:3000', //URL do back-end 
});