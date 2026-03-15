import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const instance = axios.create({
  baseURL: BASE_URL,
<<<<<<< HEAD
=======
  withCredentials: true,
>>>>>>> origin/main
});

export const get = async <T>(...args: Parameters<typeof instance.get>) => {
  const response = await instance.get<T>(...args);
  return response.data;
};

export const post = async <T>(...args: Parameters<typeof instance.post>) => {
  const response = await instance.post<T>(...args);
  return response.data;
};
