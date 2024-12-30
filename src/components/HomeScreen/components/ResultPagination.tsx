import {useCheckResetPagination} from '@/hooks/useCheckResetPagination';
import {useSearchHandler} from '@/hooks/useSearchHandler';
import {BackIcon} from '@/icons/Icons';
import {useLoading} from '@/slices/loading_store';
import {usePagination} from '@/slices/pagination_store';
import {useSearchResult} from '@/slices/search_result_store';
import {useSearchType} from '@/slices/search_type_store';
import {useDeferredValue, useEffect, useMemo} from 'react';

type Props = {
  perPage: number;
  totalResults: number;
};

export const ResultPagination = ({perPage, totalResults}: Props) => {
  const {currentPage, nextPage, previousPage} = usePagination();
  const deferredPage = useDeferredValue(currentPage);
  const {loading} = useLoading();
  const {hasChangedSearchSortingType} = useCheckResetPagination();
  const {paginateBooks} = useSearchHandler();

  const nextText = useMemo(() => {
    if (hasChangedSearchSortingType) {
      return 'New Search';
    } else {
      return 'Next Page';
    }
  }, [hasChangedSearchSortingType]);

  const previousText = useMemo(() => {
    if (hasChangedSearchSortingType) {
      return 'New Search';
    } else {
      return 'Previous Page';
    }
  }, [hasChangedSearchSortingType]);

  useEffect(() => {
    paginateBooks();
  }, [currentPage]);

  const onBack = () => {
    if (!loading) {
      previousPage(hasChangedSearchSortingType);
    }
  };
  const onNext = () => {
    if (!loading) {
      nextPage(hasChangedSearchSortingType);
    }
  };

  return (
    <div className="flex justify-between gap-y-2 select-none px-2 z-[99999] absolute w-full -bottom-10">
      <div className="w-[175px]">
        {!hasChangedSearchSortingType && (
          <div
            onClick={onBack}
            className={`bg-gradient-to-tr backgroundeffect ${hasChangedSearchSortingType ? 'w-[145px]' : 'w-[155px]'} from-orange-700 to-orange-500 text-white font-wotfardMd px-4 py-2 rounded-md cursor-pointer flex items-center ${currentPage <= 1 || loading ? 'opacity-50 cursor-not-allowed' : 'group'}`}>
            <div className="group-hover:opacity-100 group-hover:w-4 w-0 transition-all group-hover:-translate-x-2">
              <BackIcon />
            </div>
            <p>{previousText}</p>
          </div>
        )}
      </div>
      <div className="flex gap-x-4 justify-center flex-col items-center z-[99999] absolute w-full -top-10 left-0 pointer-events-none">
        <p className="text-xs">
          Showing{' '}
          <span className="font-wotfardMd">
            {perPage * (deferredPage - 1)}-
            {Math.min(perPage * deferredPage, totalResults)}
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
          className={`bg-gradient-to-tr backgroundeffect ${hasChangedSearchSortingType ? 'w-[140px]' : 'w-[130px]'} from-orange-700 to-orange-500 text-white font-wotfardMd px-4 py-2 rounded-md cursor-pointer flex items-center justify-end ${loading || perPage * deferredPage >= totalResults ? 'opacity-50 cursor-wait' : 'group'}`}>
          <p>{nextText}</p>
          <div className="group-hover:opacity-100 group-hover:w-4 w-0 transition-all group-hover:translate-x-2 rotate-180">
            <BackIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
