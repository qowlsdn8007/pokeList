import { useRef } from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import useScrollable from './useScrollable';
import { useGetSpecificCars } from '../../queries/useGetSpecificCars';
import Car from '../Car';
import carClassId from '../../recoil/atom/carIClassIdAtom';
import { useGetCars } from '../../queries/useGetCars';
import Skeleton from './Skeleton';
import Empty from './Empty';

function Carousel() {
  // 특가 차량 데이터  get
  const { data: cars, isLoading } = useGetSpecificCars('특가');
  // 차량 데이터 페이지 get
  const { data, fetchNextPage } = useGetCars();
  //  선택한 차량 id set
  const setCarClassId = useSetRecoilState(carClassId);

  // 차량 선택 핸들러
  const handleSelectCar = async (e: React.MouseEvent) => {
    const carId = Number(e.currentTarget.id);

    // 차량 id보다 fetch된 차량이 적다면 그만큼 fetch
    if (data) {
      const pageNum = data?.pages.length;
      const selectedPageNum = Math.ceil(carId / 5);

      if (selectedPageNum > pageNum) {
        const diff = selectedPageNum - pageNum;
        for (let i = 0; i < diff; i += 1) {
          // eslint-disable-next-line no-await-in-loop
          await fetchNextPage();
        }
      }
    }
    // 선택한 차량 id atom에 set => 스크롤 이동
    setCarClassId(carId);
  };

  // 마우스 스와이핑 로직
  const ref = useRef<HTMLDivElement>(null);
  const { handleMouseDown, handleMouseLeave, handleMouseMove, handleMouseUp } =
    useScrollable<HTMLDivElement>(ref);

  // 로딩 화면 출력
  if (isLoading) return <Skeleton />;
  // 빈 화면일 때 출력
  if (!cars) return <Empty />;

  return (
    <CarouselContainer
      ref={ref}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {cars?.map((car) => (
        <Slide key={car.carClassId}>
          <Car
            {...car}
            onClick={handleSelectCar}
            id={`${car.carClassId}`}
            textOverFlow
          />
        </Slide>
      ))}
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  overflow: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
  margin: 24px 0 0 0;
`;

const Slide = styled.div`
  flex-shrink: 0;
  display: flex;
  scroll-snap-align: center;
  padding: 4px;
`;

export default Carousel;
