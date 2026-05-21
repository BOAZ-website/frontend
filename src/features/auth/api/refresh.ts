import { instance } from '@/shared/api/client';
import { END_POINT } from '@/shared/api/end-point';

export const refreshToken = async (): Promise<string> => {
  const response = await instance.post<{ data: { access_token: string } }>(END_POINT.AUTH.REFRESH);
  return response.data.data.access_token;
};
