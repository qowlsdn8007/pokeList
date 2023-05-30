import { FallbackProps } from 'react-error-boundary';
import styled from 'styled-components';
import ErrorSvgIcon from './ErrorSvgIcon';

function CommonErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <Container role="alert">
      <ErrorSvgIcon width={120} height={120} />
      <pre>{error.message}</pre>
      <Text>에러가 발생했습니다. 잠시 후 다시 시도해주세요.</Text>
      <RetryButton type="button" onClick={resetErrorBoundary}>
        다시 요청
      </RetryButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Text = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-size: 16px;
`;

const RetryButton = styled.button`
  width: 100%;
  color: #646f7c;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 16px;
  text-align: center;
  height: 40px;
  border: 1px solid #e9ebee;
  cursor: pointer;
  :active {
    background-color: #e9ebee;
  }
  border-radius: 4px;
`;

export default CommonErrorFallback;
