'use client';

import {QueryBooks} from '@/network/search';
import {useSearch} from '@/slices/search';
import {BookQueryResult} from '@/types/search_books';
import {Suspense, useDeferredValue, useEffect, useMemo, useState} from 'react';
import {BookBlunt} from './BookBlunt';
import {BookResultShimmer} from '../Shimmers/BookResultShimmer';
import {useSearchResult} from '@/slices/search_result';
import {useLoading} from '@/slices/loading';
export const SearchResults = () => {
  const {result} = useSearchResult();
  const {loading} = useLoading();

  if (loading && !result?.docs.length) {
    return (
      <ListWrapper>
        {new Array(6).fill(0).map((_, i) => (
          <BookResultShimmer key={i} />
        ))}
      </ListWrapper>
    );
  }

  if (result && result?.docs.length > 0) {
    return (
      <ListWrapper>
        {result.docs.slice(0, 9).map(book => (
          <li
            key={book.key}
            className="basis-[30%] min-h-[30%] max-h-[35%] flex flex-col gap-4 min-w-[350px]">
            <BookBlunt book={book} />
          </li>
        ))}
      </ListWrapper>
    );
  } else {
    return <div>No results</div>;
  }
};

const ListWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-4 h-[100%] justify-center pt-4 overflow-hidden ">
      {children}
    </ul>
  );
};
