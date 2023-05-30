import { useRef } from 'react';

export const useScrollToTarget = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const scrollToTarget = () => {
    if (targetRef.current) {
      window.scrollTo({
        // 해당 요소로 이동 후 화면 1/3만큼 내림
        top: targetRef.current.offsetTop - window.innerHeight / 3,
        behavior: 'smooth',
      });
    }
  };

  return [targetRef, scrollToTarget] as const;
};
