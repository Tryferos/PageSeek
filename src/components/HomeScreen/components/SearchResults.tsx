'use client';

import {QueryBooks} from '@/network/search';
import {useSearch} from '@/slices/search';
import {BookQueryResult} from '@/types/search_books';
import {Suspense, useDeferredValue, useEffect, useMemo, useState} from 'react';
import {BookBlunt} from './BookBlunt';
import {BookResultShimmer} from '../Shimmers/BookResultShimmer';
import {useSearchResult} from '@/slices/search_result';
import {useLoading} from '@/slices/loading';
import {ResultPagination} from './ResultPagination';
import {usePagination} from '@/slices/pagination';
import Link from 'next/link';
import {useImageStore} from '@/slices/image_store';
export const SearchResults = () => {
  const {getPageResult} = useSearchResult();
  const {loading} = useLoading();
  const {currentPage} = usePagination();
  const pageResult = getPageResult(currentPage);
  const {addImage, images} = useImageStore();

  useEffect(() => {
    if (pageResult?.docs) {
      pageResult.docs.forEach(book => {
        if (book.thumbnail) {
          addImage(book.thumbnail, book.key);
        }
      });
    }
  }, [pageResult]);

  if (loading && !pageResult?.docs.length) {
    return (
      <ListWrapper>
        {new Array(6).fill(0).map((_, i) => (
          <BookResultShimmer key={i} />
        ))}
      </ListWrapper>
    );
  }

  if (pageResult && pageResult?.docs.length > 0) {
    return (
      <div className="w-full h-full flex flex-col gap-y-4">
        <ListWrapper>
          {pageResult.docs.slice(0, 9).map(book => (
            <li
              key={book.key}
              className="basis-[30%] min-h-[30%] max-h-[35%] flex flex-col gap-4 min-w-[350px]">
              <Link className="w-full h-full" href={`${book.key}`}>
                <BookBlunt book={book} />
              </Link>
            </li>
          ))}
        </ListWrapper>
        <ResultPagination perPage={9} totalResults={pageResult.numFound} />
      </div>
    );
  } else {
    return <div>No results</div>;
  }
};

const ListWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-4 h-[100%] justify-start overflow-hidden ">
      {children}
    </ul>
  );
};
