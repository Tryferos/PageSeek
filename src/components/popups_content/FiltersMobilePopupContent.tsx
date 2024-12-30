import {SearchTypes, SortTypes} from '@/constants/search';
import {useSearchType} from '@/slices/search_type_store';
import {getSearchIcon} from '../HomeScreen/components/SearchTypeSelector';
import {SortingSubjectSelector} from '../HomeScreen/components/SortingSubjectSelector';
import {SortingTypeSelector} from '../HomeScreen/components/SortingTypeSelector';
import {usePopups} from '@/slices/popups_store';
import {useDimensions} from '@/hooks/useDimensions';
import {useEffect} from 'react';

export const FiltersMobilePopupContent = () => {
  const closePopup = usePopups(s => s.closePopup);
  const {isSmall} = useDimensions();
  useEffect(() => {
    if (!isSmall) {
      onConfirm();
    }
  }, [isSmall]);
  const onConfirm = () => {
    closePopup();
  };
  return (
    <div className="w-full h-full flex flex-col gap-y-6 items-center large:min-h-[30vh]">
      <SearchTypeSelector />
      <SortingTypeSelectorComponent />
      <button
        className="shadow-book-box px-4 py-2 backgroundeffect mt-4 text-gray-100"
        onClick={onConfirm}>
        Apply and Close
      </button>
    </div>
  );
};

const SortingTypeSelectorComponent = () => {
  const sortingType = useSearchType(s => s.sortingType);
  const searchType = useSearchType(s => s.searchType);

  return (
    <div className="flex flex-col gap-y-1 w-full">
      <p className="font-wotfardMd text-sm flex gap-x-1">
        Sort by{' '}
        <span className="hidden mobile:flex tablet:flex first-letter:uppercase underline underline-offset-1">
          {searchType !== 'subject'
            ? SortTypes[sortingType].at(0)?.toUpperCase() +
              SortTypes[sortingType].slice(1)
            : 'Date'}
        </span>
      </p>
      {searchType === 'subject' ? (
        <SortingSubjectSelector />
      ) : (
        <div className="flex h-[50px] shadow-book-box">
          <SortingTypeSelector />
        </div>
      )}
    </div>
  );
};

const SearchTypeSelector = () => {
  const searchType = useSearchType(s => s.searchType);
  const setSearchType = useSearchType(s => s.setSearchType);

  return (
    <div className="flex flex-col gap-y-1 w-full">
      <p className="font-wotfardMd text-sm flex gap-x-1">
        Search by{' '}
        <span className="hidden mobile:flex tablet:flex first-letter:uppercase underline underline-offset-1">
          {SearchTypes[searchType].at(0)?.toUpperCase() +
            SearchTypes[searchType].slice(1)}
        </span>
      </p>
      <div className="flex h-[50px] w-full shadow-book-box">
        {Object.keys(SearchTypes).map(key => {
          const _key = key as keyof typeof SearchTypes;
          const title = SearchTypes[_key];
          return (
            <div
              key={_key}
              onClick={() => {
                setSearchType(_key);
              }}
              className={`${searchType === key ? 'bg-gradient-to-tr from-orange-700 to-orange-400 via-orange-500 gap-x-1' : 'border-r-[1px] border-l-[1px] hover:bg-gradient-to-tr hover:from-orange-700 hover:to-orange-400 hover:via-orange-500'} 
                    cursor-pointer group-first:rounded-tl-md items-center flex justify-center w-full h-full group-first:border-l-[0px] group-last:border-r-[0px] border-gray-200 group`}>
              <div
                className={`scale-90 ${searchType === _key ? 'scale-[0.7] tablet:scale-100 fill-gray-200 text-gray-200' : 'group-hover:text-gray-200 group-hover:fill-gray-200'} transition-transform`}>
                {getSearchIcon(_key)}
              </div>
              <div
                className={`tablet:hidden mobile:hidden first-letter:uppercase text-white text-sm h-[24px] items-center justify-start flex transition-all ${searchType === _key ? 'opacity-100 translate-x-0 w-[60%]' : 'opacity-0 -translate-x-4 w-0'}`}>
                <span className="first-letter:uppercase">{title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
