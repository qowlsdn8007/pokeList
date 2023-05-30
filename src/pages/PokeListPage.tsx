import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Carousel from '../components/Carousal';
import { PokeList } from '../components/PokeList';
import CarousalSkeleton from '../components/Carousal/CarousalSkeleton';
import PokeListSkeleton from '../components/PokeList/PokeListSkeleton';
import CommonErrorFallback from '../components/common/Error/PokeErrorFallback';

export default function PokeListPage() {
  return (
    <Container>
      <Header>
        <Title>포켓몬 리스트</Title>
      </Header>
      <Label>특가 포켓몬</Label>
      <ErrorBoundary FallbackComponent={CommonErrorFallback}>
        <Suspense fallback={<CarousalSkeleton />}>
          <Carousel />
        </Suspense>
      </ErrorBoundary>
      <Label>모든 포켓몬</Label>
      <ErrorBoundary FallbackComponent={CommonErrorFallback}>
        <Suspense fallback={<PokeListSkeleton />}>
          <PokeList />
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
