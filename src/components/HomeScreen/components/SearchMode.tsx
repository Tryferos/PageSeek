'use client';

import {SearchBar} from '../../client/SearchBar';
import {useSearch} from '@/slices/search_store';
import {useSearchHandler} from '@/hooks/useSearchHandler';
export const SearchMode = () => {
  const {query, setQuery} = useSearch();
  const {searchBooks} = useSearchHandler();

  return (
    <div className="basis-[35%] min-w-[250px] w-full small:rounded-tl-md small:min-w-[350px] small:w-[60vw]">
      <SearchBar
        searchFunction={searchBooks}
        search={query ?? ''}
        setSearch={setQuery}
      />
    </div>
  );
};
