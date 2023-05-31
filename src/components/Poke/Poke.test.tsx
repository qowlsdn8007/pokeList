import { render } from '@testing-library/react';
import Poke from '.';
import { IPokeProps } from './type';

describe('Poke', () => {
  const props: IPokeProps = {
    pokeClassId: 1,
    pokeClassName: '더뉴아반떼',
    pokeModel: '준중형',
    image: 'https://image.sopoke.kr/poke_image/poke086_detail1.png',
    price: 225123,
    discountPercent: 25,
    pokeTypeTags: ['특가', '인기'],
    textOverFlow: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('상품의 가격, 3자리마다 콤마로 구분, 10의 자리 반올림 확인', async () => {
    const { container } = render(<Poke {...props} />);
    expect(container).toHaveTextContent('225,100원');
  });
});
