import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface ErrorPageProps {
  statusCode: number | string;
  message: string;
  redirectPath?: string;
  redirectMessage?: string;
}

function CommonErrorPage({
  statusCode,
  message,
  redirectPath,
  redirectMessage,
}: ErrorPageProps) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    if (redirectPath) {
      navigate(redirectPath);
    }
  };

  return (
    <Container>
      <Text>{statusCode}</Text>
      <Text>{message}</Text>
      {redirectPath && (
        <RedirectButton onClick={handleRedirect}>
          {redirectMessage}
        </RedirectButton>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 24px;
`;

const Text = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-size: 16px;
`;

const RedirectButton = styled.button`
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

export default CommonErrorPage;
