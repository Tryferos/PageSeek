'use client';
import {useDimensions} from '@/hooks/useDimensions';
import {EnterIcon, SearchIcon} from '@/icons/Icons';
import {useSearchType} from '@/slices/search_type_store';
import {FC, useRef} from 'react';

type Props = {
  search: string;
  setSearch: (s: string) => void;
  searchFunction?: () => void;
};

export const SearchBar: FC<Props> = ({search, setSearch, searchFunction}) => {
  const searchType = useSearchType(s => s.searchType);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const {isSmall} = useDimensions();
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      buttonRef.current?.focus();
      searchFunction?.();
    }
  };
  return (
    <div
      onKeyDown={onKeyDown}
      className="shadow-book-box flex items-center gap-x-0 relative hover:scale-102 transition-transform h-[45px]">
      <div className="absolute w-2 h-[100%] bg-gray-100 right-[-9px]"></div>
      <div className="absolute w-3 h-2 bg-gray-100 -bottom-[8px] rotate-[120deg] right-[-9.5px]"></div>
      <input
        maxLength={100}
        id="pageseek-search-bar-input"
        pattern=".{4,75}"
        className="focus:outline-none w-full bg-transparent text-secondary py-0 px-3 invalid:text-red-500"
        type="text"
        value={search}
        onChange={ev => setSearch(ev.target.value)}
        placeholder={
          searchType === 'subject'
            ? 'e.g. Science Fiction'
            : searchType === 'author'
              ? 'e.g. J.R.R. Tolkien'
              : searchType === 'title'
                ? 'e.g. Harry Potter'
                : 'What are you looking for?'
        }
      />
      <div className="h-[100%] items-center justify-center flex pr-3">
        <button
          ref={buttonRef}
          onClick={searchFunction}
          className="bg-tertiary outline-tertiary outline bg-opacity-80 focus:bg-opacity-100 hover:bg-opacity-100 text-white px-2 py-1 rounded cursor-pointer fill-white">
          {isSmall ? (
            <SearchIcon width={14} height={14} />
          ) : (
            <EnterIcon width={14} height={14} />
          )}
        </button>
      </div>
    </div>
  );
};
