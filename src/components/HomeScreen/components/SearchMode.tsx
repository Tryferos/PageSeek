'use client';

import {FC, useEffect, useState} from 'react';
import {SearchBar} from '../../elements/SearchBar';
import {Highlighted} from '../../elements/Highlight';
import {useSearch} from '@/slices/search';
import {useLoading} from '@/slices/loading';
import {QueryBooks} from '@/network/search';
import {useSearchResult} from '@/slices/search_result';
type Props = {};
export const SearchMode: FC<Props> = () => {
  const {query, setQuery, isQueryValid} = useSearch();
  const {setLoading, loading} = useLoading();
  const {setResult} = useSearchResult();

  const searchBooks = async () => {
    if (isQueryValid && query) {
      setLoading(true);
      const res = await QueryBooks({
        query: query,
        includeThumbnail: true,
        queryType: 'q',
        limit: 9,
        page: 1,
      });
      setResult(res);
      setLoading(false);
    }
  };
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
