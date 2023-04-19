import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { ICarDetail } from '../components/CarDetail/type';

// 특정 차량 id 상세 정보 get
const fetchCarDetail = async (target: number): Promise<ICarDetail> => {
  const data: ICarDetail[] = await axios(`/carClass?carClassId=${target}`).then(
    (res) => res.data
  );
  const result = data[0];
  return result;
};

export const useGetCarDetail = (carClassId: number) => {
  return useQuery(['carDetail', carClassId], () => fetchCarDetail(carClassId));
};
