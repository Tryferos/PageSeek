'use client';

import {FC, useEffect, useState} from 'react';
import {SearchBar} from '../../elements/SearchBar';
import {Highlighted} from '../../elements/Highlight';
import {useSearch} from '@/slices/search';
import {useLoading} from '@/slices/loading';
import {QueryBooks} from '@/network/search';
import {useSearchResult} from '@/slices/search_result';
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
