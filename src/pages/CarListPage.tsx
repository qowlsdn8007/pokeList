import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Carousel from '../components/Carousal';
import { CarList } from '../components/CarList';
import CarousalSkeleton from '../components/Carousal/CarousalSkeleton';
import CarListSkeleton from '../components/CarList/CarListSkeleton';
import CommonErrorFallback from '../components/common/Error/CarErrorFallback';

export default function CarListPage() {
  return (
    <Container>
      <Header>
        <Title>차량 리스트</Title>
      </Header>
      <Label>특가 차량</Label>
      <ErrorBoundary FallbackComponent={CommonErrorFallback}>
        <Suspense fallback={<CarousalSkeleton />}>
          <Carousel />
        </Suspense>
      </ErrorBoundary>
      <Label>모든 차량</Label>
      <ErrorBoundary FallbackComponent={CommonErrorFallback}>
        <Suspense fallback={<CarListSkeleton />}>
          <CarList />
        </Suspense>
      </ErrorBoundary>
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
