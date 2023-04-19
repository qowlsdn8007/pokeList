import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { ICarDetail } from './type';
import { useGetCarDetail } from '../../queries/useGetCarDetail';
import Skeleton from './Skeleton';

interface IInfoItem {
  title: string;
  content: string;
}

export function CarDetail() {
  // url에서 차량 id 값 추출
  const { pathname } = useLocation();
  const regex = /[^0-9]/g;
  const id = Number(pathname.replace(regex, ''));

  // 차량 상세 데이터 훅
  const { data: car, isLoading } = useGetCarDetail(id);

  // 로딩 화면 출력
  if (isLoading) return <Skeleton />;

  const {
    carClassName,
    capacity,
    carImage,
    carModel,
    fuel,
    gearbox,
    maker,
    additionalOption,
    safetyOption,
  } = car as ICarDetail;

  // info grid에 들어갈 데이터, 루프를 통해 렌더링
  const infoItems: IInfoItem[] = [
    { title: '제조사', content: maker },
    { title: '분류', content: carModel },
    { title: '연료', content: fuel },
    { title: '변속방식', content: gearbox },
    { title: '승차정원', content: `${capacity}` },
  ];

  return (
    <Container>
      <ImageContainer>
        <Image src={carImage} alt="차량 이미지" />
      </ImageContainer>
      <CarName>{carClassName}</CarName>
      <InfoGridContainer>
        {infoItems.map((item) => (
          <InfoItemContainer key={item.title}>
            <InfoItemTitle>{item.title}</InfoItemTitle>
            <InfoItemContent>{item.content}</InfoItemContent>
          </InfoItemContainer>
        ))}
      </InfoGridContainer>
      <InfoFlexContainer>
        <InfoItemContainer>
          <InfoItemTitle>안전옵션</InfoItemTitle>
          <InfoListItemContent>
            {safetyOption?.map((option) => (
              <InfoItemContent key={option}>- {option}</InfoItemContent>
            ))}
          </InfoListItemContent>
        </InfoItemContainer>
        <InfoItemContainer>
          <InfoItemTitle>편의옵션</InfoItemTitle>
          <InfoListItemContent>
            {additionalOption?.map((option) => (
              <InfoItemContent key={option}>- {option}</InfoItemContent>
            ))}
          </InfoListItemContent>
        </InfoItemContainer>
      </InfoFlexContainer>
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

const CarName = styled.h3`
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

const InfoFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const InfoListItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
  padding: 8px 0;
`;
