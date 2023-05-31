import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { IPokeDetail } from '../components/PokeDetail/type';

// 특정 포켓몬 id 상세 정보 get
const fetchPokeDetail = async (target: number): Promise<IPokeDetail> => {
  const data: IPokeDetail[] = await axios(
    `/pokeClass?pokeClassId=${target}`
  ).then((res) => res.data);
  const result = data[0];
  return result;
};

export const useGetPokeDetail = (pokeClassId: number) => {
  return useQuery(
    ['pokeDetail', pokeClassId],
    () => fetchPokeDetail(pokeClassId),
    {
      cacheTime: 0,
      staleTime: 0,
    }
  );
};
