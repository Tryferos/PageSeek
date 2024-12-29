import {usePagination} from '@/slices/pagination_store';
import {usePopups} from '@/slices/popups_store';
import {useSearchType} from '@/slices/search_type_store';

export const SortingChangeWarningContent = () => {
  const closePopup = usePopups(s => s.closePopup);
  const setSortingType = useSearchType(s => s.setSortingType);
  const previousSortingType = useSearchType(s => s.previousSortingType);
  const resetPagination = usePagination(s => s.reset);

  const resetSorting = () => {
    setSortingType(previousSortingType);
    closePopup();
  };
  const goWithNewSorting = () => {
    resetPagination();
    closePopup();
  };
  return (
    <div className="w-full h-[23vh] py-2 flex flex-col items-center justify-between ">
      <div className="flex flex-col items-center text-center">
        <p className="font-wotfardMd text-lg text-red-600 mb-2">
          You have changed the sorting type. This action will reset the
          pagination!
        </p>
        <p className="font-wotfardRg text-sm text-secondary">
          If you want to{' '}
          <span className="font-wotfardMd">keep the pagination</span>, click on
          "Reset to previous Sorting".
        </p>
        <p className="font-wotfardRg text-sm text-secondary">
          If you want to{' '}
          <span className="font-wotfardMd">search with the new sorting</span>,
          click on "Search with new Sorting".
        </p>
      </div>
      <div className="flex items-end justify-center gap-x-4 w-full">
        <button
          onClick={resetSorting}
          className="px-4 py-2 outline outline-1 hover:brightness-125 outline-orange-700 hover:scale-101 transition-all rounded-md text-orange-700">
          Reset to previous Sorting
        </button>
        <button
          onClick={goWithNewSorting}
          className="px-4 py-2 backgroundeffect rounded-md text-gray-100 hover:scale-101 ">
          Search with new Sorting
        </button>
      </div>
    </div>
  );
};
