'use client';

import {useRef} from 'react';

export const BookEffect = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ref.current.style.setProperty('--x', `${x}px`);
      ref.current.style.setProperty('--y', `${y}px`);
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className="bookeffect linear-gradient"></div>
  );
};
