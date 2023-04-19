import { atom } from 'recoil';

// 차량 id 전역 저장
const carClassIdAtom = atom({
  key: 'carClassIdAtom',
  default: 0,
});

export default carClassIdAtom;
