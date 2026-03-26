import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const get = async <T>(...args: Parameters<typeof instance.get>) => {
  const response = await instance.get<T>(...args);
  return response.data;
};

export const post = async <T>(...args: Parameters<typeof instance.post>) => {
  const response = await instance.post<T>(...args);
  return response.data;
};

export const put = async <T>(...args: Parameters<typeof instance.put>) => {
  const response = await instance.put<T>(...args);
  return response.data;
};

export const patch = async <T>(...args: Parameters<typeof instance.patch>) => {
  const response = await instance.patch<T>(...args);
  return response.data;
};

export const del = async <T>(...args: Parameters<typeof instance.delete>) => {
  const response = await instance.delete<T>(...args);
  return response.data;
};
