import styled from 'styled-components';
import CarSvgIcon from '../CarList/CarSvgIcon';

function Empty() {
  return (
    <Container>
      <CarSvgIcon />
      <EmptyText>특가 차량이 없습니다.</EmptyText>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 16px;
`;

export const EmptyText = styled.span`
  font-family: 'Spoqa Han Sans Neo';
  font-size: 18px;
  margin: 0;
  text-align: center;
`;

export default Empty;
