import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
// import Carousel from '../components/Carousal';
// import { CarList } from '../components/CarList';

export default function CarListPage() {
  return (
    <Container>
      <Header>
        <Title>차량 리스트</Title>
      </Header>
      {/* <Label>특가 차량</Label>
      <Carousel />
      <Label>모든 차량</Label>
      <CarList /> */}
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 0 24px;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: 'Spoqa Han Sans Neo';
  font-size: 24px;
`;

const Label = styled.span`
  font-family: 'Spoqa Han Sans Neo';
  font-size: 18px;
  padding-top: 32px;
`;
