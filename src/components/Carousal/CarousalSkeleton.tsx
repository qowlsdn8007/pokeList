import styled from 'styled-components';
import SkeletonBox from '../common/SkeletonBox';

function CarousalSkeleton() {
  return (
    <Container>
      <SubContainer>
        <SkeletonBox translucent />
      </SubContainer>
      <SubContainer>
        <SkeletonBox translucent />
      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(40, 50, 60, 0.1);
  padding: 20px 24px;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
`;

export default CarousalSkeleton;
