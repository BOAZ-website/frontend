import { HTTP_STATUS } from '@/shared/constant/http-status';
import { isAxiosError } from '@/shared/utils/is-axios-error';

const RETRY_BLACKLIST = new Set<number>([
  HTTP_STATUS.BAD_REQUEST,
  HTTP_STATUS.FORBIDDEN,
  HTTP_STATUS.NOT_FOUND,
  HTTP_STATUS.CONFLICT,
]);

const MAX_RETRY_COUNT = 1;

export const shouldRetry = (failureCount: number, error: unknown): boolean => {
  if (failureCount > MAX_RETRY_COUNT) {
    return false;
  }

  if (isAxiosError(error) && error.response) {
    const { status } = error.response;

    if (RETRY_BLACKLIST.has(status)) {
      return false;
    }
  }

  return true;
};
