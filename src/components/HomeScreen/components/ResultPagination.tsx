import {useSearchHandler} from '@/hooks/useSearchHandler';
import {useLoading} from '@/slices/loading';
import {usePagination} from '@/slices/pagination';
import {useSearchResult} from '@/slices/search_result';
import {useEffect} from 'react';

type Props = {
  perPage: number;
  totalResults: number;
};

export const ResultPagination = ({perPage, totalResults}: Props) => {
  const {currentPage, nextPage, previousPage} = usePagination();
  const {loading} = useLoading();
  const {paginateBooks} = useSearchHandler();
  useEffect(() => {
    paginateBooks();
  }, [currentPage]);
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex gap-x-4 justify-center">
        <p className="text-xs">
          Showing {perPage} of {totalResults} results
        </p>
      </div>
      <div className="flex justify-center gap-x-2">
        <div
          className="cursor-pointer"
          onClick={() => !loading && previousPage()}>
          {'<-'}
        </div>
        <div className="h-[40px] flex justify-center">{currentPage}</div>
        <div className="cursor-pointer" onClick={() => !loading && nextPage()}>
          {'->'}
        </div>
      </div>
    </div>
  );
};
