import styled from 'styled-components';
import SkeletonBox from '../common/SkeletonBox';

function PokeDetailSkeleton() {
  return (
    <Container>
      <ImageContainer>
        <SkeletonBox translucent />
      </ImageContainer>
      <NameContainer>
        <SkeletonBox translucent />
      </NameContainer>
      <InfoGridContainer>
        <InfoItemContainer>
          <SkeletonBox translucent />
        </InfoItemContainer>
        <InfoItemContainer>
          <SkeletonBox translucent />
        </InfoItemContainer>
        <InfoItemContainer>
          <SkeletonBox translucent />
        </InfoItemContainer>
        <InfoItemContainer>
          <SkeletonBox translucent />
        </InfoItemContainer>
      </InfoGridContainer>
      <InfoFlexContainer>
        <InfoItemContainer>
          <SkeletonBox translucent />
        </InfoItemContainer>
        <InfoItemContainer>
          <SkeletonBox translucent />
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
  height: 120px;
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  width: 40%;
  height: 16px;
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
  width: 40px;
  height: 16px;
`;

export default PokeDetailSkeleton;
