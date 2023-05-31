import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { IPoke } from '../components/Poke/type';

// 특정 태그의 포켓몬 데이터 리스트 get
const fetchPokes = async (target: string): Promise<IPoke[]> => {
  const data: IPoke[] = await axios(`/pokeClasses?q=${target}`).then(
    (res) => res.data
  );
  return data;
};

export const useGetSpecificPokes = (target: string) => {
  return useQuery(['specificPokes', target], () => fetchPokes(target));
};
