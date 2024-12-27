'use client';

import {useEffect} from 'react';
import {BookBlunt} from './BookBlunt';
import {BookResultShimmer} from '../Shimmers/BookResultShimmer';
import {useSearchResult} from '@/slices/search_result';
import {useLoading} from '@/slices/loading';
import {ResultPagination} from './ResultPagination';
import {usePagination} from '@/slices/pagination';
import {useImageStore} from '@/slices/image_store';
import {Welcome} from './Welcome';
import {NoResultsFound} from './NoResultsFound';

export const SearchResults = () => {
  const {getPageResult} = useSearchResult();
  const {loading} = useLoading();
  const {currentPage} = usePagination();
  const pageResult = getPageResult(currentPage);
  const {addImage} = useImageStore();

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
      <div className="w-full h-full flex flex-col gap-y-2">
        <ListWrapper>
          {pageResult.docs.slice(0, 9).map(book => (
            <BookBlunt book={book} key={book.key} />
          ))}
        </ListWrapper>
        <ResultPagination perPage={9} totalResults={pageResult.numFound} />
      </div>
    );
  } else if (pageResult?.numFound === 0) {
    return <NoResultsFound />;
  } else {
    return <Welcome />;
  }
};

const ListWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <ul className="flex flex-wrap gap-x-2 gap-y-2 min-h-[100%] overflow-hidden p-2 overflow-y-auto scrollbar">
      {children}
    </ul>
  );
};
