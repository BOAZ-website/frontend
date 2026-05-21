export const END_POINT = {
  AUTH: {
    REFRESH: 'api/v1/auth/user/refresh',
    LOGOUT: 'api/v1/auth/user/logout',
  },
  RECRUITMENT: {
    GET_STATUS: 'api/v1/recruitment/status',
    GET_DETAIL: 'api/v1/recruitment/{term}',
    GET_DEADLINE: 'api/v1/recruitment/deadline',
    GET_QUESTIONS: 'api/v1/recruitment/questions',
    POST_SUBSCRIPTION: 'api/v1/recruitment/subscriptions',
    POST_APPLICATION: 'api/v1/recruitment/applications',
    GET_MY_APPLICATION: 'api/v1/recruitment/{recruitmentId}/applications/me',
    PUT_DRAFT: 'api/v1/recruitment/{recruitmentId}/applications/draft',
  },
  REVIEW: {
    GET_REVIEWS: 'api/v1/reviews',
  },
  CURRICULUM: {
    GET_CURRICULUMS: 'api/v1/curriculums',
  },
  ARCHIVING: {
    GET_PROJECTS: 'api/v1/archiving/projects',
    GET_FAQS: 'api/v1/archiving/faqs',
    GET_BLOGS: 'api/v1/archiving/blogs',
    GET_ACTIVITIES: 'api/v1/archiving/activities',
  },
} as const;
