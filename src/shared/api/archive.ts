import { get } from './client';
import { END_POINT } from './end-point';
import type { ArchivePageResponse } from './types';

export type ArchiveTrack = 'ALL' | 'ANALYSIS' | 'VISUALIZATION' | 'ENGINEERING';

export interface ProjectsParams {
  track?: ArchiveTrack;
  term?: number;
  keyword?: string;
  page?: number;
  size?: number;
}

export interface BlogsParams {
  track?: ArchiveTrack;
  keyword?: string;
  page?: number;
  size?: number;
}

export interface ActivitiesParams {
  term?: number;
  keyword?: string;
  page?: number;
  size?: number;
}

export const getProjects = (params?: ProjectsParams) =>
  get<ArchivePageResponse>(END_POINT.ARCHIVING.GET_PROJECTS, { params });

export const getBlogs = (params?: BlogsParams) =>
  get<ArchivePageResponse>(END_POINT.ARCHIVING.GET_BLOGS, { params });

export const getActivities = (params?: ActivitiesParams) =>
  get<ArchivePageResponse>(END_POINT.ARCHIVING.GET_ACTIVITIES, { params });

export interface TermOption {
  value: number;
  label: string;
}

export const getTerms = () => get<{ terms: TermOption[] }>(END_POINT.ARCHIVING.GET_TERMS);
