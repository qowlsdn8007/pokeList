import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IPoke } from '../components/Poke/type';

interface ApiResponse {
  data: IPoke[];
  nextPage: number | null;
}

// 포켓몬 데이터 page 단위로 get, limit 5
const fetchPokes = async (page: number): Promise<ApiResponse> => {
  const data: IPoke[] = await axios(`/pokeClasses?_page=${page}&_limit=5`).then(
    (res) => res.data
  );
  return {
    data,
    nextPage: data.length ? page + 1 : null,
  };
};

// 포켓몬 데이터 pagination
export const useGetPokes = () => {
  return useInfiniteQuery(
    ['pokes'],
    ({ pageParam = 1 }) => fetchPokes(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  );
};
