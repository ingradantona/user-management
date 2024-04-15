import axios, { AxiosInstance } from 'axios';
import toast from 'react-hot-toast';

const APP_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api: AxiosInstance = axios.create({
  baseURL: APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

api.interceptors.request.use((config: any) => {
  try {
    const token = localStorage.getItem('acc_token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  } catch (error) {
    return Promise.reject(error);
  }
});

api.interceptors.response.use(
  (response: any) => response,
  (error: { response: { status: number }; config: any }) => {
    if (error.response?.status === 401) {
      toast.error('Sua sessão expirou');
      localStorage.clear();
      setTimeout(() => (window.location.href = '/'), 1000);
    } else {
      return Promise.reject(error);
    }
  },
);

export default api;
