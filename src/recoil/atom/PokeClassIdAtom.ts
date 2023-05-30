import { atom } from 'recoil';

// 포켓몬 id 전역 저장
const pokeClassIdAtom = atom({
  key: 'pokeClassIdAtom',
  default: 0,
});

export default pokeClassIdAtom;
