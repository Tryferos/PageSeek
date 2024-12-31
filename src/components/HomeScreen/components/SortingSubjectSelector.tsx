'use client';

import {useSearchType} from '@/slices/search_type_store';
import {useEffect, useRef, useState} from 'react';

const limits = {
  start: 1400,
  end: new Date().getFullYear(),
  distance: 80,
};

export const SortingSubjectSelector = () => {
  const setPublishedIn = useSearchType(s => s.setPublishedIn);
  const setPreviouslyPublishedIn = useSearchType(
    s => s.setPreviouslyPublishedIn,
  );
  const storedPublishedIn = useSearchType(s => s.publishedIn);
  const storedPreviouslyPublishedIn = useSearchType(
    s => s.previouslyPublishedIn,
  );

  const [start, setStart] = useState<number>();
  const [end, setEnd] = useState<number>();

  const startRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const startPointRef = useRef<number | null>(null);
  const endPointRef = useRef<number | null>(null);
  const mouseMoveRef = useRef<(x: number) => void>();
  const mouseUpRef = useRef<() => void>();

  useEffect(() => {
    if (!start && !end) {
      /**
       * * Set Already stored values
       */
      setStart(storedPublishedIn.start ?? 1900);
      setEnd(storedPublishedIn.end ?? limits.end);
    }
  }, [start, end, storedPublishedIn]);

  useEffect(() => {
    if (startRef.current && start) {
      const left = ((start - limits.start) / (limits.end - limits.start)) * 100;
      startRef.current.style.left = `calc(${left}% - ${(left / 100) * 16}px)`;
    }
    if (endRef.current && end) {
      const right = ((end - limits.start) / (limits.end - limits.start)) * 100;
      endRef.current.style.left = `calc(${right}% - ${(right / 100) * 16}px)`;
    }
  }, [startRef, endRef, start, end]);

  useEffect(() => {
    if (start && end) {
      if (
        !storedPreviouslyPublishedIn.start ||
        !storedPreviouslyPublishedIn.end
      ) {
        setPreviouslyPublishedIn({start, end});
      }
      setPublishedIn({start, end});
    }
  }, [start, end]);

  useEffect(() => {
    /*
     * Mouse Move (Start Listening to Drag)
     */
    mouseMoveRef.current = (x: number) => {
      const speed = 1.4;
      if (startPointRef.current && start && end) {
        const startingPoint = startPointRef.current;
        const diff = x - startingPoint;
        setStart(
          Math.max(
            limits.start,
            Math.min(end - limits.distance, Math.round(start + diff * speed)),
          ),
        );
        startPointRef.current = x;
      } else if (endPointRef.current && start && end) {
        const startingPoint = endPointRef.current;
        const diff = x - startingPoint;
        setEnd(
          Math.min(
            limits.end,
            Math.max(start + limits.distance, Math.round(end + diff * speed)),
          ),
        );
        endPointRef.current = x;
      }
    };

    /*
     * Mouse Up (Stop Listening to Drag)
     */
    mouseUpRef.current = () => {
      startPointRef.current = null;
      endPointRef.current = null;
    };
  }, [startPointRef.current, endPointRef.current, start, end]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => mouseMoveRef.current?.(e.clientX);
    const onTouchMove = (e: TouchEvent) =>
      mouseMoveRef.current?.(e.touches[0]?.clientX);
    const onMouseUp = () => mouseUpRef.current?.();

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchend', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, []);

  const onMouseDownStart = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX;
    startPointRef.current = x;
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const x = e.touches[0]?.clientX;
    startPointRef.current = x;
  };

  const onMouseDownEnd = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX;
    endPointRef.current = x;
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const x = e.touches[0]?.clientX;
    endPointRef.current = x;
  };

  const bulletClassNames =
    'absolute cursor-pointer left-0 size-4 rounded-full z-[200] backgroundeffect hover:bg-orange-700 transition-transform';

  return (
    <div className="flex flex-col w-full h-full items-center select-none cursor-default">
      <p className="font-wotfardRg text-sm">
        Published in{' '}
        <span className="text-base font-wotfardMd">
          {start}
          <span className="font-wotfardRg text-sm">-</span>
          {end}
        </span>
      </p>
      <div className="flex relative w-[calc(100%-16px)] h-full ">
        <div
          onMouseDown={onMouseDownStart}
          onPointerDown={onMouseDownStart}
          onTouchStart={onTouchStart}
          ref={startRef}
          className={bulletClassNames}></div>
        <div className="absolute left-0 h-[2px] translate-y-2 w-full bg-gray-200 rounded-full"></div>
        <div
          onMouseDown={onMouseDownEnd}
          onPointerDown={onMouseDownEnd}
          onTouchStart={onTouchEnd}
          ref={endRef}
          className={bulletClassNames}></div>
      </div>
    </div>
  );
};
