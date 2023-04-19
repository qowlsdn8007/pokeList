import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ICar } from '../components/Car/type';

interface ApiResponse {
  data: ICar[];
  nextPage: number | null;
}

// 차량 데이터 page 단위로 get, limit 5
const fetchCars = async (page: number): Promise<ApiResponse> => {
  const data: ICar[] = await axios(`/carClasses?_page=${page}&_limit=5`).then(
    (res) => res.data
  );
  return {
    data,
    nextPage: data.length ? page + 1 : null,
  };
};

// 차량 데이터 pagination
export const useGetCars = () => {
  return useInfiniteQuery(
    ['cars'],
    ({ pageParam = 1 }) => fetchCars(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  );
};
