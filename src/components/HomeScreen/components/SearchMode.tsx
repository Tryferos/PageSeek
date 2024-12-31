'use client';

import {SearchBar} from '../../client/SearchBar';
import {useSearch} from '@/slices/search_store';
import {useSearchHandler} from '@/hooks/useSearchHandler';
import {FilterIcon} from '@/icons/Icons';
import {useHistory} from '@/slices/history_store';
import {useEffect} from 'react';
import {SearchHistory} from './SearchHistory';
export const SearchMode = () => {
  const {query, setQuery} = useSearch();
  const {searchBooks} = useSearchHandler();
  const initHistory = useHistory(s => s.initHistory);

  useEffect(() => {
    initHistory();
  }, []);

  return (
    <>
      {query && <title>Searching for {query}</title>}
      <div className="basis-[35%] small:basis-auto large:min-w-[250px] w-full small:min-w-[200px] small:rounded-tl-md small:w-[90%] relative group">
        <SearchBar
          searchFunction={searchBooks}
          search={query ?? ''}
          setSearch={setQuery}
        />
        <SearchHistory />
      </div>
    </>
  );
};
