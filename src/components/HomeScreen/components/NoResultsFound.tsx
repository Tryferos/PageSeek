'use client';
import {useSearch} from '@/slices/search';
import Image from 'next/image';
import {useEffect, useState} from 'react';

export const NoResultsFound = () => {
  const [query, setQuery] = useState<string>();
  const {query: _query} = useSearch();
  useEffect(() => {
    if (!query && _query) {
      setQuery(_query);
    }
  }, [_query]);
  return (
    <div className="items-center flex flex-col justify-between h-[84.4vh] pt-4 bg-">
      <div className="flex flex-col gap-y-2 items-center">
        <p className="texteffect text-2xl font-wotfardSb">PageSeek</p>
        <p className="font-wotfardRg text-xl text-center">
          The search for <span className="font-wotfardMd">{query}</span>{' '}
          returned no results.
        </p>
      </div>
      <figure className="relative w-full h-[35vh] mt-20">
        <Image src={'/not_found.svg'} alt="Welcome to Books" fill />
      </figure>
      <footer className="w-[calc(100%+96px)] -ml-12 h-[140px] flex justify-center items-center relative">
        <Image
          src={'/bottom-blob.svg'}
          alt="Footer Blob"
          width={1920}
          height={240}
        />
      </footer>
    </div>
  );
};