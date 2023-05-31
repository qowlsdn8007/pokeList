export type ErrorPageConstants = typeof errorPageConstants;
export type ErrorStatusCode = keyof ErrorPageConstants;

export const errorPageConstants = {
  ERROR_401: {
    statusCode: 401,
    message: '로그인이 필요한 서비스입니다.',
    redirectPath: '/login',
    redirectMessage: '로그인',
  },
  ERRPR_404: {
    statusCode: 404,
    message: '페이지를 찾을 수 없습니다.',
    redirectPath: '/',
    redirectMessage: '홈으로 이동',
  },
  ERROR_500: {
    statusCode: 500,
    message: '서버에 오류가 발생했습니다.',
    redirectPath: '/',
    redirectMessage: '홈으로 이동',
  },
  ERROR_503: {
    statusCode: 503,
    message: '서버에 오류가 발생했습니다.',
    redirectPath: '/',
    redirectMessage: '홈으로 이동',
  },
};
