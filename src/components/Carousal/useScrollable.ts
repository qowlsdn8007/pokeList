import { RefObject, useRef, useState } from 'react';

function useScrollable<T extends HTMLElement>(containerRef: RefObject<T>) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [scrollLeft, setScrollLeft] = useState<number | null>(null);
  const isMouseMove = useRef<boolean>(false);
  const container = containerRef.current;

  const handleMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
    // 드래그 시작되면 flag on
    setIsDragging(true);

    // 마운트 시 초기 스크롤 위치를 계산해야 함
    const initScrollLeft = (window.innerWidth - document.body.clientWidth) / 2;
    // 시작 x 위치 표시
    setStartX(event.pageX - (container?.offsetLeft ?? initScrollLeft));
    // 캐러셀 내의 스크롤 위치 표시
    setScrollLeft(container?.scrollLeft ?? 0);
  };

  const handleMouseUp = (event: React.MouseEvent) => {
    event.preventDefault();
    // 드래그 종료되면 flag off
    setIsDragging(false);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging) return;
    isMouseMove.current = true;
    event.preventDefault();

    // 이벤트 발생 위치 - 캐러셀 시작 위치
    const x = event.pageX - (container?.offsetLeft ?? 0);
    // 스크롤 할 거리
    const walk = (x - (startX ?? 0)) * 1.3;
    if (container) {
      container.scrollLeft = (scrollLeft ?? 0) - walk;
    }
  };

  // 마우스 장외 시 드래그 종료
  const handleMouseLeave = () => {
    setIsDragging(false);
    isMouseMove.current = false;
  };

  return {
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    handleMouseLeave,
    isMouseMove,
  };
}

export default useScrollable;
