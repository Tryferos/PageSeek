'use client';
import {SearchIcon} from '@/icons/Icons';
import {FC} from 'react';

type Props = {
  search: string;
  setSearch: (s: string) => void;
  searchFunction?: () => void;
};

export const SearchBar: FC<Props> = ({search, setSearch, searchFunction}) => {
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchFunction?.();
    }
  };
  return (
    <div
      onKeyDown={onKeyDown}
      className="justify-start pointer-events-auto flex px-4 py-3 bg-white rounded-full w-[100%] items-center">
      <input
        className="focus:outline-none w-full"
        type="text"
        value={search}
        onChange={ev => setSearch(ev.target.value)}
        placeholder="Query..."
      />
      <SearchIcon onClick={searchFunction} />
    </div>
  );
};
