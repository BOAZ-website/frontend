import axios from 'axios';

import { tokenStorage } from '@/shared/auth/token-storage';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// 개발 서버(pnpm dev)에서 VITE_API_BASE_URL이 없을 때만 임시 API(mock/)가 응답한다.
// pnpm build(mode production)에서는 두 조건이 모두 false라 이 분기와 mock/ 코드가 번들에서 빠진다.
// NODE_ENV=development로 빌드해도 MODE가 production이면 켜지지 않는다.
// TODO: 백엔드 개발 서버로 확인할 수 있게 되면 mock/ 폴더와 함께 삭제
if (import.meta.env.DEV && import.meta.env.MODE === 'development' && !BASE_URL) {
  instance.defaults.adapter = async (config) => {
    const { mockAdapter } = await import('./mock/mock-adapter');
    return mockAdapter(config);
  };
}

instance.interceptors.request.use((config) => {
  const isRefreshEndpoint = config.url?.includes('/auth/user/refresh');
  const token = tokenStorage.get();
  if (token && !isRefreshEndpoint) {
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

        if (!import.meta.env.DEV) {
          window.location.href = '/';
        }

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
