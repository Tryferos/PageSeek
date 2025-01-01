import {ClockIcon, CloseIcon} from '@/icons/Icons';
import {useHistory} from '@/slices/history_store';
import {useSearch} from '@/slices/search_store';
import {act, useEffect, useRef, useState} from 'react';

export const SearchHistory = () => {
  const history = useHistory(s => s.history);
  const removeFromHistory = useHistory(s => s.removeFromHistory);
  const setQuery = useSearch(s => s.setQuery);
  const ref = useRef<HTMLDivElement>(null);
  const onClickRef = useRef<(e: FocusEvent) => void>();
  const onFocusRef = useRef<(e: FocusEvent) => void>();

  useEffect(() => {
    onClickRef.current = (e: FocusEvent) => {
      const input = document.getElementById('pageseek-search-bar-input');
      /**
       * * Hide the search bar when clicking outside of it, any children, or the input
       */
      if (
        ref.current &&
        e.target !== ref.current &&
        e.target instanceof Node &&
        !ref.current.contains(e.target) &&
        input !== e.target
      ) {
        ref.current.style.opacity = '0';
        ref.current.style.pointerEvents = 'none';
      }
    };
    onFocusRef.current = (e: FocusEvent) => {
      if (ref.current) {
        ref.current.style.opacity = '1';
        ref.current.style.pointerEvents = 'auto';
      }
    };
  }, [ref]);

  useEffect(() => {
    const onFocus = (e: FocusEvent) => onFocusRef.current?.(e);
    const onBlur = (e: FocusEvent) => onClickRef.current?.(e);
    const input = document.getElementById('pageseek-search-bar-input');
    input?.addEventListener('focus', onFocus);
    document.addEventListener('click', onBlur);
    return () => {
      input?.removeEventListener('focus', onFocus);
      document.removeEventListener('click', onBlur);
    };
  }, []);

  const setItem = (item: string) => {
    setQuery(item);
  };

  if (history.length === 0) {
    return null;
  } else {
    return (
      <div
        ref={ref}
        className="absolute left-0 flex gap-y-2 flex-col w-full bg-white shadow-book-result-hover px-4 py-3 top-[calc(100%+8px)] opacity-0 pointer-events-none hover:opacity-100 hover:pointer-events-auto transition-all delay-100 z-[9999] pb-4 pt-4 rounded small:items-center">
        <div className="flex justify-between px-1">
          <p className="font-wotfardMd text-base">Previous Searches</p>
        </div>
        <ul className="flex flex-col gap-y-2 overflow-y-auto scrollbar max-h-[clamp(200px,30vh,300px)] scrollbar small:w-full">
          {history.map(item => (
            <li
              onClick={() => setItem(item)}
              key={item}
              className="flex gap-x-2 items-center cursor-pointer px-2 rounded-t pt-1 pb-[2px] w-full justify-between hover:bg-gray-200 border-b-[1px]">
              <p className="text-sm text-secondary select-none">{item}</p>
              <div className="flex gap-x-2 items-center">
                <ClockIcon />
                <CloseIcon
                  onClick={ev => {
                    ev.stopPropagation();
                    removeFromHistory(item);
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
