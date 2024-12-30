'use client';
import {Subjects} from '@/constants/search';
import {useDimensions} from '@/hooks/useDimensions';
import {usePopups} from '@/slices/popups_store';
import {useSearch} from '@/slices/search_store';
import {useEffect, useMemo, useRef, useState} from 'react';

const _subjects = Object.keys(Subjects);

export const SubjectsPopupContent = () => {
  const {query, setQuery} = useSearch();
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const closePopup = usePopups(s => s.closePopup);
  const keyDownRef = useRef<(e: KeyboardEvent) => void>();
  const [filter, setFilter] = useState<string>('');
  const {isSmall} = useDimensions();

  const subjects = useMemo(() => {
    return _subjects.filter(s =>
      s.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [filter]);

  useEffect(() => {
    keyDownRef.current = e => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        e.stopPropagation();
      }
      if (e.key === 'ArrowUp') {
        setSelectedSubject(
          subjects[
            (subjects.indexOf(selectedSubject ?? subjects[0]) -
              1 +
              subjects.length) %
              subjects.length
          ],
        );
      } else if (e.key === 'ArrowDown') {
        setSelectedSubject(
          subjects[
            (subjects.indexOf(selectedSubject ?? subjects[0]) + 1) %
              subjects.length
          ],
        );
      } else if (e.key === 'Enter' || e.key === 'Escape') {
        closePopup();
      }
    };
  }, [selectedSubject, subjects]);

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => keyDownRef.current?.(e);

    document.documentElement.addEventListener('keydown', keyDownHandler);
    return () => {
      document.documentElement.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  useEffect(() => {
    if (!selectedSubject) {
      setSelectedSubject(query ?? subjects[0]);
    }
  }, [query, selectedSubject]);

  useEffect(() => {
    if (selectedSubject) {
      const element = document.getElementById(selectedSubject);
      if (element) {
        element.scrollIntoView({behavior: 'smooth', block: 'center'});
      }
      setQuery(selectedSubject);
    }
  }, [selectedSubject]);

  const onSelect = (subject: string) => {
    setSelectedSubject(subject);
    if (isSmall) {
      setQuery(subject);
      closePopup();
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-y-4 items-center">
      <input
        value={filter}
        onChange={e => setFilter(e.target.value)}
        type="search"
        placeholder="Can't find your subject?"
        className="w-[40%] h-full px-4 py-2 border-b-[1px] border-gray-200 focus:outline-none focus:border-gray-400 small:w-[60%] mobile:w-[70%]"
      />
      <ul className="w-full flex flex-col gap-y-1 mobile:gap-y-2">
        {subjects.map(subject => (
          <li
            id={subject}
            onClick={() => onSelect(subject)}
            key={subject}
            className={`w-full h-full cursor-pointer flex justify-center items-center gap-x-1 transition-transform 
            ${selectedSubject === subject ? 'bg-orange-100 scale-101 font-wotfardMd' : 'hover:scale-101 hover:font-wotfardMd'}`}>
            <p className="text-secondary text-base">{subject}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
