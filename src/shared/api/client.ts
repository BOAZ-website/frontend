import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const get = async <T>(...args: Parameters<typeof instance.get>): Promise<T> => {
  const response = await instance.get<{ data: T }>(...args);
  return response.data.data;
};

export const post = async <T>(...args: Parameters<typeof instance.post>): Promise<T> => {
  const response = await instance.post<{ data: T }>(...args);
  return response.data.data;
};

export const put = async <T>(...args: Parameters<typeof instance.put>): Promise<T> => {
  const response = await instance.put<{ data: T }>(...args);
  return response.data.data;
};

export const patch = async <T>(...args: Parameters<typeof instance.patch>): Promise<T> => {
  const response = await instance.patch<{ data: T }>(...args);
  return response.data.data;
};

export const del = async <T>(...args: Parameters<typeof instance.delete>): Promise<T> => {
  const response = await instance.delete<{ data: T }>(...args);
  return response.data.data;
};
