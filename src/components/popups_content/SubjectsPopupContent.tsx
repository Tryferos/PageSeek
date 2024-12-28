'use client';
import {Subjects} from '@/constants/search';
import {usePopups} from '@/slices/popups_store';
import {useSearch} from '@/slices/search_store';
import {useEffect, useRef, useState} from 'react';

const subjects = Object.keys(Subjects);

export const SubjectsPopupContent = () => {
  const {query, setQuery} = useSearch();
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const closePopup = usePopups(s => s.closePopup);
  const keyDownRef = useRef<(e: KeyboardEvent) => void>();

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
  }, [selectedSubject]);

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
      setQuery(selectedSubject);
    }
  }, [selectedSubject]);

  return (
    <div className="w-full h-full flex flex-col gap-y-2 items-center">
      <ul className="w-full flex flex-col gap-y-1">
        {subjects.map(subject => (
          <li
            onClick={() => setSelectedSubject(subject)}
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
