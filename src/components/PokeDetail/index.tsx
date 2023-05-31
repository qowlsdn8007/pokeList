import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { IPokeDetail } from './type';
import { useGetPokeDetail } from '../../queries/useGetPokeDetail';

interface IInfoItem {
  title: string;
  content: string;
}

export function PokeDetail() {
  // url에서 포켓몬 id 값 추출
  const { pathname } = useLocation();
  const regex = /[^0-9]/g;
  const id = Number(pathname.replace(regex, ''));

  // 포켓몬 상세 데이터 훅
  const { data: poke } = useGetPokeDetail(id);

  const {
    pokeClassName,
    pokeImage,
    type,
    pokeModel,
    height,
    weight,
    characteristic,
  } = poke as IPokeDetail;

  // info grid에 들어갈 데이터, 루프를 통해 렌더링
  const infoItems: IInfoItem[] = [
    { title: '타입', content: type },
    { title: '키', content: `${height}m` },
    { title: '분류', content: pokeModel },
    { title: '몸무게', content: `${weight}kg` },
    { title: '특성', content: characteristic },
  ];

  return (
    <Container>
      <ImageContainer>
        <Image src={pokeImage} alt="포켓몬 이미지" />
      </ImageContainer>
      <PokeName>{pokeClassName}</PokeName>
      <InfoGridContainer>
        {infoItems.map((item) => (
          <InfoItemContainer key={item.title}>
            <InfoItemTitle>{item.title}</InfoItemTitle>
            <InfoItemContent>{item.content}</InfoItemContent>
          </InfoItemContainer>
        ))}
      </InfoGridContainer>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 16px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 240px;
  max-height: 120px;
  // 이미지 드래그 방지
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
`;

const PokeName = styled.h3`
  font-family: 'Spoqa Han Sans Neo';
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  text-align: start;
`;

const InfoGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 16px;
  width: 100%;
  height: 100%;
`;

const InfoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
  width: 100%;
  height: 100%;
`;

const InfoItemTitle = styled.span`
  font-family: 'Spoqa Han Sans Neo';
  font-size: 14px;
  font-weight: 400;
  color: #646f7c;
  line-height: 1.43;
`;

const InfoItemContent = styled.span`
  font-family: 'Spoqa Han Sans Neo';
  font-size: 16px;
  font-weight: 400;
  text-align: start;
  color: #374553;
  line-height: 1.5;
`;
