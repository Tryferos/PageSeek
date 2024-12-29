'use client';
import {EnterIcon, SearchIcon} from '@/icons/Icons';
import {useSearchType} from '@/slices/search_type_store';
import {FC} from 'react';

type Props = {
  search: string;
  setSearch: (s: string) => void;
  searchFunction?: () => void;
};

export const SearchBar: FC<Props> = ({search, setSearch, searchFunction}) => {
  const searchType = useSearchType(s => s.searchType);
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchFunction?.();
    }
  };
  return (
    <div
      onKeyDown={onKeyDown}
      className="shadow-book-box flex items-center gap-x-2 relative hover:scale-102 transition-transform h-[45px]">
      <div className="absolute w-2 h-[100%] bg-gray-100 right-[-9px]"></div>
      <div className="absolute w-3 h-2 bg-gray-100 -bottom-[8px] rotate-[120deg] right-[-9.5px]"></div>
      <input
        className="focus:outline-none w-full bg-transparent text-secondary py-0 px-3"
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
      <div className=" fill-secondary cursor-pointer hover:fill-black w-12 h-[100%] absolute right-0 top-0 items-center justify-center flex pr-2">
        <div
          onClick={searchFunction}
          className="bg-tertiary outline-tertiary outline bg-opacity-90 hover:bg-opacity-100 text-white px-2 py-1 rounded">
          {/* <p className="text-xs font-wotfardMd">Enter</p> */}
          <EnterIcon width={14} height={14} />
        </div>
        {/* <SearchIcon onClick={searchFunction} /> */}
      </div>
    </div>
  );
};
