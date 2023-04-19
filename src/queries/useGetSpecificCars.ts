import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { ICar } from '../components/Car/type';

// 특정 태그의 차량 데이터 리스트 get
const fetchCars = async (target: string): Promise<ICar[]> => {
  const data: ICar[] = await axios(`/carClasses?q=${target}`).then(
    (res) => res.data
  );
  return data;
};

export const useGetSpecificCars = (target: string) => {
  return useQuery(['specificCars', target], () => fetchCars(target));
};
