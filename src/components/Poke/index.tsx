import styled from 'styled-components';
import { ForwardedRef, forwardRef } from 'react';
import { IPokeProps } from './type';

const Poke = forwardRef(
  (
    {
      pokeClassId,
      pokeClassName,
      image,
      price,
      discountPercent,
      pokeTypeTags,
      onClick,
      id,
    }: IPokeProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    // 돈 단위 처리
    const koPrice = `${(Math.round(price / 100) * 100).toLocaleString(
      'ko-KR'
    )}원`;

    return (
      <Container onClick={onClick} ref={ref} id={id}>
        <ImageContainer>
          <Image src={image} alt="포켓몬 이미지" />
        </ImageContainer>
        <InfoContainer>
          <NameAndTagContainer>
            <PokeName>{pokeClassName}</PokeName>
            <PokeTagContainer>
              {pokeTypeTags.map((tag) => (
                <PokeTag key={pokeClassId + tag}>{tag}</PokeTag>
              ))}
            </PokeTagContainer>
          </NameAndTagContainer>
          <DisCountInfoText>할인율</DisCountInfoText>
          <PriceContainer>
            <DisCountPriceText>{discountPercent}%</DisCountPriceText>
            <PriceText>{koPrice}</PriceText>
          </PriceContainer>
        </InfoContainer>
      </Container>
    );
  }
);

const Container = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 248px;
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

const PokeName = styled.span`
  font-family: 'Spoqa Han Sans Neo';
  font-size: 16px;
`;

const PokeTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const PokeTag = styled.span`
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

const DisCountInfoText = styled.span`
  font-family: 'Spoqa Han Sans Neo';
  line-height: 1.7;
  font-size: 12px;
  color: #646f7c;
`;
const DisCountPriceText = styled(PriceText)`
  color: #00b8ff;
`;

export default Poke;
