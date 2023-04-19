import { render, fireEvent, screen, getByRole } from '@testing-library/react';
import { createRef } from 'react';
import Car from '.';
import { ICarProps } from './type';

describe('Car', () => {
  const props: ICarProps = {
    carClassId: 1,
    carClassName: '더뉴아반떼',
    carModel: '준중형',
    image: 'https://image.socar.kr/car_image/car086_detail1.png',
    drivingDistance: 5000,
    year: 2021,
    price: 225123,
    discountPercent: 25,
    regionGroups: ['서울/경기/인천', '광주'],
    carTypeTags: ['특가', '인기'],
    textOverFlow: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('상품의 가격, 3자리마다 콤마로 구분, 10의 자리 반올림 확인', async () => {
    const { container } = render(<Car {...props} />);
    expect(container).toHaveTextContent('225,100원');
  });

  test('getKoNumber 함수 동작 확인 => 거리 단위 한글로 변환', () => {
    const { container } = render(<Car {...props} drivingDistance={123456} />);
    expect(container).toHaveTextContent('12만3천456km~');
  });
});
