import { instance } from '@/shared/api/client';
import { END_POINT } from '@/shared/api/end-point';

export const logoutApi = async (): Promise<void> => {
  await instance.post(END_POINT.AUTH.LOGOUT);
};
