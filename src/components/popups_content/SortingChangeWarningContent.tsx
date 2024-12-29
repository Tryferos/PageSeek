import {useCheckResetPagination} from '@/hooks/useCheckResetPagination';
import {useSearchHandler} from '@/hooks/useSearchHandler';
import {usePagination} from '@/slices/pagination_store';
import {usePopups} from '@/slices/popups_store';
import {useSearchResult} from '@/slices/search_result_store';
import {useSearchType} from '@/slices/search_type_store';

export const SortingChangeWarningContent = () => {
  const closePopup = usePopups(s => s.closePopup);
  const setSortingType = useSearchType(s => s.setSortingType);
  const setSearchType = useSearchType(s => s.setSearchType);
  const previousSortingType = useSearchType(s => s.previousSortingType);
  const previouslySearchType = useSearchType(s => s.previouslySearchType);

  const {paginateBooks} = useSearchHandler();

  const {hasChangeSortingType, hasChangedSearchType} =
    useCheckResetPagination();

  const resetSorting = () => {
    if (hasChangeSortingType) {
      setSortingType(previousSortingType);
    } else if (hasChangedSearchType) {
      setSearchType(previouslySearchType);
    }
    closePopup();
  };

  const goWithNewSorting = () => {
    paginateBooks();
    closePopup();
  };
  return (
    <div className="w-full h-[23vh] py-2 flex flex-col items-center justify-between ">
      <div className="flex flex-col items-center text-center">
        <p className="font-wotfardMd text-lg text-red-600 mb-2">
          You have changed the {hasChangeSortingType ? 'sorting' : 'search'}{' '}
          method. This action will reset the pagination!
        </p>
        <p className="font-wotfardRg text-sm text-secondary">
          If you want to{' '}
          <span className="font-wotfardMd">keep the pagination</span>, click on
          "Reset to previous {hasChangeSortingType ? 'Sorting' : 'Search'}{' '}
          method".
        </p>
        <p className="font-wotfardRg text-sm text-secondary">
          If you want to{' '}
          <span className="font-wotfardMd">
            search with the new {hasChangeSortingType ? 'sorting' : 'method'}
          </span>
          , click on "Search with new{' '}
          {hasChangeSortingType ? 'Sorting' : 'method'}".
        </p>
      </div>
      <div className="flex items-end justify-center gap-x-4 w-full">
        <button
          onClick={resetSorting}
          className="px-4 py-2 outline outline-1 hover:brightness-125 outline-orange-700 hover:scale-101 transition-all rounded-md text-orange-700">
          Reset to previous {hasChangeSortingType ? 'Sorting' : 'Search'} method
        </button>
        <button
          onClick={goWithNewSorting}
          className="px-4 py-2 backgroundeffect rounded-md text-gray-100 hover:scale-101 ">
          Search with new {hasChangeSortingType ? 'Sorting' : 'method'}
        </button>
      </div>
    </div>
  );
};
