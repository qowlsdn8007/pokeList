import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import CommonErrorPage from './CommonErrorPage';
import { errorPageConstants } from '../../constants/error';

const { ERROR_401, ERRPR_404, ERROR_500, ERROR_503 } = errorPageConstants;

function RootBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      return <CommonErrorPage {...ERROR_401} />;
    }

    if (error.status === 404) {
      return <CommonErrorPage {...ERRPR_404} />;
    }

    if (error.status === 500) {
      return <CommonErrorPage {...ERROR_500} />;
    }

    if (error.status === 503) {
      return <CommonErrorPage {...ERROR_503} />;
    }
  }

  return (
    <CommonErrorPage
      statusCode=""
      message="알 수 없는 오류가 발생했습니다"
      redirectMessage="홈으로 이동"
      redirectPath="/"
    />
  );
}

export default RootBoundary;
