import {useSearchHandler} from '@/hooks/useSearchHandler';
import {BackIcon} from '@/icons/Icons';
import {useLoading} from '@/slices/loading';
import {usePagination} from '@/slices/pagination';
import {useSearchResult} from '@/slices/search_result';
import {useDeferredValue, useEffect} from 'react';

type Props = {
  perPage: number;
  totalResults: number;
};

export const ResultPagination = ({perPage, totalResults}: Props) => {
  const {currentPage, nextPage, previousPage} = usePagination();
  const deferredPage = useDeferredValue(currentPage);
  const {loading} = useLoading();
  const {paginateBooks} = useSearchHandler();
  useEffect(() => {
    paginateBooks();
  }, [currentPage]);
  const onBack = () => {
    if (!loading) {
      previousPage();
    }
  };
  const onNext = () => {
    if (!loading) {
      nextPage();
    }
  };
  return (
    <div className="flex justify-between gap-y-2 select-none">
      <div className="w-[175px]">
        <div
          onClick={onBack}
          className={`bg-gradient-to-tr backgroundeffect w-[155px] from-orange-700 to-orange-500 text-white font-wotfardMd px-4 py-2 rounded-md cursor-pointer flex items-center ${currentPage <= 1 || loading ? 'opacity-50 cursor-not-allowed' : 'group'}`}>
          <div className="group-hover:opacity-100 group-hover:w-4 w-0 transition-all group-hover:-translate-x-2">
            <BackIcon />
          </div>
          <p>Previous Page</p>
        </div>
      </div>
      <div className="flex gap-x-4 justify-center flex-col items-center">
        <p className="text-xs">
          Showing{' '}
          <span className="font-wotfardMd">
            {perPage * (deferredPage - 1)}-{perPage * deferredPage}
          </span>{' '}
          of <span className="font-wotfardMd">{totalResults}</span> results
        </p>
        <p className="text-sm">
          Page <span className="font-wotfardMd">{deferredPage}</span> of{' '}
          <span className="font-wotfardMd">
            {Math.ceil(totalResults / perPage)}
          </span>
        </p>
      </div>
      <div className="w-[175px] justify-end flex">
        <div
          onClick={onNext}
          className={`bg-gradient-to-tr backgroundeffect w-[130px] from-orange-700 to-orange-500 text-white font-wotfardMd px-4 py-2 rounded-md cursor-pointer flex items-center justify-end ${loading ? 'opacity-50 cursor-wait' : 'group'}`}>
          <p>Next Page</p>
          <div className="group-hover:opacity-100 group-hover:w-4 w-0 transition-all group-hover:translate-x-2 rotate-180">
            <BackIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
