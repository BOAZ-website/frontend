import { get } from '@/shared/api/client';
import { END_POINT } from '@/shared/api/end-point';

export interface UserMe {
  nickname: string;
  member_type: 'OUTSIDER' | 'MEMBER';
}

export const getUserMe = async (): Promise<UserMe> => get<UserMe>(END_POINT.USER.GET_ME);
