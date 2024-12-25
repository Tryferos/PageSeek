'use client';
import {ClockIcon, LocationIcon, PersonIcon} from '@/icons/Icons';
import {BookWorkRich} from '@/types/works';
import {useEffect, useMemo, useState} from 'react';

type Props = Pick<
  BookWorkRich,
  'subjects' | 'subject_people' | 'subject_places' | 'subject_times'
>;

export const BookSubjects = (props: Props) => {
  const [selectedSubject, setSelectedSubject] =
    useState<keyof Props>('subject_people');

  const mapKeysToTitles = (key: keyof Props) => {
    if (key === 'subject_people') {
      return 'Interesting Characters';
    } else if (key === 'subject_places') {
      return 'Important Places';
    } else if (key === 'subject_times') {
      return 'Chronology';
    } else {
      return 'Other';
    }
  };

  const Icon = useMemo(() => {
    if (selectedSubject === 'subject_people') {
      return <PersonIcon />;
    } else if (selectedSubject === 'subject_places') {
      return <LocationIcon />;
    } else if (selectedSubject === 'subject_times') {
      return <ClockIcon />;
    } else {
      return null;
    }
  }, [selectedSubject]);

  const subjects = useMemo(() => {
    //* Filter out non-english words
    const _props: typeof props = {};
    Object.keys(props).forEach(key => {
      const subjects = props[key as keyof Props]?.filter(subject =>
        /[A-Za-z][A-Za-z0-9]*/i.test(subject),
      );
      if (subjects && subjects.length > 0) {
        _props[key as keyof Props] = subjects;
      }
    });
    return _props;
  }, [props]);

  const menuItems = useMemo(() => {
    return Object.keys(subjects) as Array<keyof Props>;
  }, [subjects]);

  useEffect(() => {
    if (!menuItems.find(subject => subject === selectedSubject)) {
      setSelectedSubject(menuItems[0]);
    }
  }, [menuItems, selectedSubject]);

  if (menuItems.length === 0) {
    return null;
  } else {
    return (
      <div className="flex flex-col gap-y-2 *:shadow-book-result">
        {menuItems.length > 1 && (
          <div className="flex gap-x-4 w-full px-0 rounded-md">
            {menuItems.map(subject => (
              <div
                key={subject}
                className={`${selectedSubject === subject ? 'linear-gradient text-gray-200 font-wotfardMd' : 'hover:scale-101 hover:font-wotfardMd'} rounded px-2 py-1 cursor-pointer flex gap-x-1 items-center`}
                onClick={() => setSelectedSubject(subject)}>
                {selectedSubject === subject && Icon}
                <p className="text-md">{mapKeysToTitles(subject)}</p>
              </div>
            ))}
          </div>
        )}
        <div className="grid grid-flow-row grid-row-4 grid-cols-6 gap-x-6 px-3 py-2 rounded-md min-h-[75px] transition-all">
          {subjects[selectedSubject]?.map((subject, i: number) => (
            <p
              key={i}
              className="text-sm font-wotfardRg text-secondary hover:underline cursor-default min-w-[50px]">
              <span className="font-wotfardMd w-[10px]">
                {`${i + 1}.${i + 1 < 10 ? '\xa0' : ''}`}&nbsp;
              </span>
              {subject}
            </p>
          ))}
        </div>
      </div>
    );
  }
};
