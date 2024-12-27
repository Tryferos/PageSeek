'use client';

import {FC} from 'react';
import {SearchBar} from '../../elements/SearchBar';
import {useSearch} from '@/slices/search';
import {useSearchHandler} from '@/hooks/useSearchHandler';
type Props = {};
export const SearchMode: FC<Props> = () => {
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
