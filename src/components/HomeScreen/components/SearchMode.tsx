'use client';

import {SearchBar} from '../../elements/SearchBar';
import {useSearch} from '@/slices/search_store';
import {useSearchHandler} from '@/hooks/useSearchHandler';
export const SearchMode = () => {
  const {query, setQuery} = useSearch();
  const {searchBooks} = useSearchHandler();

  return (
    <div className="basis-[50%] w-full px-4">
      <SearchBar
        searchFunction={searchBooks}
        search={query ?? ''}
        setSearch={setQuery}
      />
    </div>
  );
};
