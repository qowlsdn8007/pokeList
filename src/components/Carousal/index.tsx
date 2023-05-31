import { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import useScrollable from './useScrollable';
import { useGetSpecificPokes } from '../../queries/useGetSpecificPokes';
import Poke from '../Poke';
import pokeClassId from '../../recoil/atom/PokeClassIdAtom';
import { useGetPokes } from '../../queries/useGetPokes';
import Empty from './Empty';

function Carousel() {
  // 특가 포켓몬 데이터  get
  const { data: pokes } = useGetSpecificPokes('특가');
  // 포켓몬 데이터 페이지 get
  const { data, fetchNextPage } = useGetPokes();
  //  선택한 포켓몬 id set
  const setPokeClassId = useSetRecoilState(pokeClassId);

  // 마우스 스와이핑 로직
  const ref = useRef<HTMLDivElement>(null);
  const {
    handleMouseDown,
    handleMouseLeave,
    handleMouseMove,
    handleMouseUp,
    isMouseMove,
  } = useScrollable<HTMLDivElement>(ref);

  // 포켓몬 선택 핸들러
  const handleSelectPoke = useCallback(
    async (e: React.MouseEvent) => {
      // 마우스 무빙 시 클릭 방지
      if (isMouseMove.current) {
        isMouseMove.current = false;
        return;
      }

      const pokeId = Number(e.currentTarget.id);

      // 포켓몬 id보다 fetch된 포켓몬이 적다면 그만큼 fetch
      if (data) {
        const pageNum = data?.pages.length;
        const selectedPageNum = Math.ceil(pokeId / 5);

        if (selectedPageNum > pageNum) {
          const diff = selectedPageNum - pageNum;
          for (let i = 0; i < diff; i += 1) {
            // eslint-disable-next-line no-await-in-loop
            await fetchNextPage();
          }
        }
      }
      // 선택한 포켓몬 id atom에 set => 스크롤 이동
      setPokeClassId(pokeId);
    },
    [setPokeClassId, data, fetchNextPage]
  );

  // 빈 화면일 때 출력
  if (!pokes) return <Empty />;

  return (
    <CarouselContainer
      ref={ref}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {pokes?.map((poke) => (
        <Slide key={poke.pokeClassId}>
          <Poke
            {...poke}
            onClick={handleSelectPoke}
            id={`${poke.pokeClassId}`}
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
