import { queryOptions } from '@tanstack/react-query';

import type { ActivitiesParams, BlogsParams, ProjectsParams } from '@/shared/api/archive';
import { getActivities, getBlogs, getProjects } from '@/shared/api/archive';
import type { ArchivePageResponse } from '@/shared/api/types';

import { ARCHIVE_QUERY_KEY } from './query-key';

export const ARCHIVE_QUERY_OPTIONS = {
  PROJECTS: (params?: ProjectsParams) =>
    queryOptions<ArchivePageResponse>({
      queryKey: ARCHIVE_QUERY_KEY.PROJECTS(params),
      queryFn: () => getProjects(params),
    }),
  BLOGS: (params?: BlogsParams) =>
    queryOptions<ArchivePageResponse>({
      queryKey: ARCHIVE_QUERY_KEY.BLOGS(params),
      queryFn: () => getBlogs(params),
    }),
  ACTIVITIES: (params?: ActivitiesParams) =>
    queryOptions<ArchivePageResponse>({
      queryKey: ARCHIVE_QUERY_KEY.ACTIVITIES(params),
      queryFn: () => getActivities(params),
    }),
};
