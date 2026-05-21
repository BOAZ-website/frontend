import axios from 'axios';

import { tokenStorage } from '@/shared/auth/token-storage';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const token = tokenStorage.get();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

let isRefreshing = false;
let pendingQueue: Array<{
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}> = [];

const flushQueue = (token: string | null, error: unknown = null) => {
  pendingQueue.forEach(({ resolve, reject }) => {
    if (token) {
      resolve(token);
    } else {
      reject(error);
    }
  });
  pendingQueue = [];
};

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const isAuthEndpoint =
      originalRequest.url?.includes('/auth/user/refresh') ||
      originalRequest.url?.includes('/auth/user/logout');

    if (error.response?.status === 401 && !originalRequest._retry && !isAuthEndpoint) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          pendingQueue.push({ resolve, reject });
        }).then((token) => {
          originalRequest.headers['Authorization'] = `Bearer ${token}`;
          return instance(originalRequest);
        });
      }

      isRefreshing = true;

      try {
        const response = await instance.post<{ data: { access_token: string } }>(
          '/api/v1/auth/user/refresh'
        );
        const newToken = response.data.data.access_token;
        tokenStorage.set(newToken);
        flushQueue(newToken);
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        return instance(originalRequest);
      } catch (refreshError) {
        flushQueue(null, refreshError);
        tokenStorage.remove();
        window.location.href = '/login';
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

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
