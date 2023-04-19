import styled from 'styled-components';
import SkeletonBox from '../common/SkeletonBox';

function CarListSkeleton() {
  return (
    <Container>
      <ImageContainer>
        <SkeletonBox translucent />
      </ImageContainer>
      <InfoContainer>
        <SkeletonBox translucent />
      </InfoContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(40, 50, 60, 0.1);
  padding: 20px 24px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  height: 40px;
`;

export default CarListSkeleton;
