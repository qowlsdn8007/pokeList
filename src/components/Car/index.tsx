import styled from 'styled-components';
import { ForwardedRef, forwardRef } from 'react';
import { ICarProps } from './type';
import { getKoNumber } from '../../utils/getKoNumber';

const Car = forwardRef(
  (
    {
      carClassId,
      carClassName,
      image,
      drivingDistance,
      year,
      price,
      discountPercent,
      regionGroups,
      carTypeTags,
      onClick,
      id,
      textOverFlow,
    }: ICarProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    // 돈 단위 처리
    const koPrice = `${(Math.round(price / 100) * 100).toLocaleString(
      'ko-KR'
    )}원`;

    // 주행거리 단위 처리
    const koDrivingDistance = getKoNumber(drivingDistance);

    // 차령 정보 텍스트
    const yearAndDistanceAndRegion = `${year}년 | ${koDrivingDistance}km~ | ${regionGroups.join(
      ', '
    )}`;

    return (
      <Container onClick={onClick} ref={ref} id={id}>
        <ImageContainer>
          <Image src={image} alt="차량 이미지" />
        </ImageContainer>
        <InfoContainer>
          <NameAndTagContainer>
            <CarName>{carClassName}</CarName>
            <CarTagContainer>
              {carTypeTags.map((tag) => (
                <CarTag key={carClassId + tag}>{tag}</CarTag>
              ))}
            </CarTagContainer>
          </NameAndTagContainer>
          <DisCountInfoText>할인율</DisCountInfoText>
          <PriceContainer>
            <DisCountPriceText>{discountPercent}%</DisCountPriceText>
            <PriceText>{koPrice}</PriceText>
          </PriceContainer>
          <DetailInfoText textOverFlow={textOverFlow}>
            {yearAndDistanceAndRegion}
          </DetailInfoText>
        </InfoContainer>
      </Container>
    );
  }
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(40, 50, 60, 0.1);
  padding: 20px 24px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  max-width: 240px;
  max-height: 120px;
  user-select: none;
  // 이미지 드래그 방지
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  height: 100%;
`;

const NameAndTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const CarName = styled.span`
  font-family: 'Spoqa Han Sans Neo';
  font-size: 16px;
`;

const CarTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const CarTag = styled.span`
  height: 24px;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 12px;
  color: #00b8ff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0faff;
  padding: 0 8px;
  border-radius: 4px;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const PriceText = styled.strong`
  font-family: 'Spoqa Han Sans Neo';
  font-size: 18px;
`;

const DetailInfoText = styled.p<{ textOverFlow?: boolean }>`
  font-family: 'Spoqa Han Sans Neo';
  line-height: 1.7;
  font-size: 12px;
  color: #646f7c;
  // max-width 조절로 말줄임 효과 적용
  max-width: ${({ textOverFlow }) => (textOverFlow ? '200px' : '100%')};
  min-height: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ${({ textOverFlow }) => (textOverFlow ? 'ellipsis' : 'none')};
`;

const DisCountInfoText = styled.span`
  font-family: 'Spoqa Han Sans Neo';
  line-height: 1.7;
  font-size: 12px;
  color: #646f7c;
`;
const DisCountPriceText = styled(PriceText)`
  color: #00b8ff;
`;

export default Car;
