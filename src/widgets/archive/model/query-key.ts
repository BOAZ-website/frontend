import type { ActivitiesParams, BlogsParams, ProjectsParams } from '@/shared/api/archive';

export const ARCHIVE_QUERY_KEY = {
  PROJECTS: (params?: ProjectsParams) => ['archive', 'projects', params] as const,
  BLOGS: (params?: BlogsParams) => ['archive', 'blogs', params] as const,
  ACTIVITIES: (params?: ActivitiesParams) => ['archive', 'activities', params] as const,
};
