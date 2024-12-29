'use client';

import {useSearchType} from '@/slices/search_type_store';
import {useEffect, useRef, useState} from 'react';

const limits = {
  start: 1700,
  end: new Date().getFullYear(),
  distance: 20,
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
  const mouseMoveRef = useRef<(e: MouseEvent) => void>();
  const mouseUpRef = useRef<(e: MouseEvent) => void>();

  useEffect(() => {
    if (!start && !end) {
      /**
       * * Set Already stored values
       */
      setStart(storedPublishedIn.start ?? 1960);
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
    mouseMoveRef.current = (e: MouseEvent) => {
      const speed = 0.8;
      if (startPointRef.current && start && end) {
        const x = e.clientX;
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
        const x = e.clientX;
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
    mouseUpRef.current = (e: MouseEvent) => {
      startPointRef.current = null;
      endPointRef.current = null;
    };
  }, [startPointRef.current, endPointRef.current, start, end]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => mouseMoveRef.current?.(e);
    const onMouseUp = (e: MouseEvent) => mouseUpRef.current?.(e);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  const onMouseDownStart = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX;
    startPointRef.current = x;
  };

  const onMouseDownEnd = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX;
    endPointRef.current = x;
  };

  return (
    <div className="flex flex-col w-full h-full items-center">
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
          ref={startRef}
          className="absolute left-0 size-4 rounded-full bg-orange-600 z-[200] hover:scale-101 hover:bg-orange-700 transition-transform"></div>
        <div className="absolute left-0 h-[2px] translate-y-2 w-full bg-gray-200 rounded-full"></div>
        <div
          onMouseDown={onMouseDownEnd}
          ref={endRef}
          className="absolute left-0 size-4 rounded-full bg-orange-900 z-[200] hover:scale-101 hover:bg-orange-700 transition-transform"></div>
      </div>
    </div>
  );
};
