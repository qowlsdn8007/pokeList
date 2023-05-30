import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetPokes } from '../../queries/useGetPokes';
import { IPokeProps } from '../Poke/type';
import Poke from '../Poke';
import { useScrollToTarget } from './useScrollToTarget';
import pokeClassIdAtom from '../../recoil/atom/PokeClassIdAtom';
import Empty from './Empty';

export function PokeList() {
  // 포켓몬 데이터 pagination 훅
  const { data, fetchNextPage, hasNextPage } = useGetPokes();

  // 맨 위로 핸들러
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // 더보기 버튼 클릭시 다음 페이지 fetch
  const handleFetchNextPage = () => {
    fetchNextPage();
  };

  // 포켓몬 개수
  const pokes = data?.pages.flatMap((page) => page.data) ?? [];

  // 캐러셀로부터 선택된 포켓몬 id
  const pokeId = useRecoilValue(pokeClassIdAtom);

  // 포켓몬 id reset할 함수
  const setPokeId = useSetRecoilState(pokeClassIdAtom);
  const resetPokeId = () => setPokeId(0);

  // 선택된 포켓몬 모달 오픈
  const navigate = useNavigate();
  const handleSelectPoke = (e: React.MouseEvent) => {
    const id = Number(e.currentTarget.id);
    navigate(`/list/${id}`);
  };

  // 선택된 포켓몬 id element로 스크롤 이동 훅
  const [targetRef, scrollToTarget] = useScrollToTarget();
  useEffect(() => {
    if (targetRef.current) {
      scrollToTarget();
    }
    resetPokeId();
  }, [pokeId]);

  // 빈 화면일 때 출력
  if (pokes.length === 0) return <Empty />;

  return (
    <Container>
      <PokeInfoContainer>
        {pokes.map((poke: IPokeProps) => (
          <Poke
            {...poke}
            ref={poke.pokeClassId === pokeId ? targetRef : null}
            key={poke.pokeClassId}
            id={`${poke.pokeClassId}`}
            onClick={handleSelectPoke}
          />
        ))}
      </PokeInfoContainer>
      <ButtonContainer>
        {hasNextPage ? (
          <AddButton onClick={handleFetchNextPage}>더보기</AddButton>
        ) : (
          <GotoTopButton onClick={scrollToTop}>맨 위로</GotoTopButton>
        )}
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 32px 0 0 0;
`;

const PokeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
`;

const ButtonContainer = styled.div`
  margin-top: 32px;
  margin-bottom: 60px;
  width: 100%;
`;

const AddButton = styled.button`
  width: 100%;
  color: #646f7c;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 16px;
  text-align: center;
  height: 54px;
  border: 1px solid #e9ebee;
  cursor: pointer;
  :active {
    background-color: #e9ebee;
  }
  border-radius: 4px;
`;

const GotoTopButton = styled.button`
  width: 100%;
  bottom: 0;
  color: #646f7c;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 16px;
  text-align: center;
  height: 54px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
