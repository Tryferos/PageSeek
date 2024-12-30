'use client';

import {SearchBar} from '../../client/SearchBar';
import {useSearch} from '@/slices/search_store';
import {useSearchHandler} from '@/hooks/useSearchHandler';
import {FilterIcon} from '@/icons/Icons';
export const SearchMode = () => {
  const {query, setQuery} = useSearch();
  const {searchBooks} = useSearchHandler();

  return (
    <>
      {query && <title>Searching for {query}</title>}
      <div className="basis-[35%] small:basis-auto min-w-[250px] w-full small:rounded-tl-md mobile:w-[calc(90%-16px)] small:w-[60vw]">
        <SearchBar
          searchFunction={searchBooks}
          search={query ?? ''}
          setSearch={setQuery}
        />
      </div>
    </>
  );
};
