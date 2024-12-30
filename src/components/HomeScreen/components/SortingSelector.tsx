'use client';
import {useSearchType} from '@/slices/search_type_store';
import {SortingSubjectSelector} from './SortingSubjectSelector';
import {SortingTypeSelector} from './SortingTypeSelector';

export const SortingSelector = () => {
  const searchType = useSearchType(s => s.searchType);

  return (
    <div className="basis-[30%] mobile:hidden small:w-[60vw] small:min-w-[300px] min-w-[250px] my-0 rounded-none rounded-tr-md small:rounded-tr-none small:rounded-tl-md select-none flex justify-between px-0 shadow-book-reverse-box small:shadow-book-box small:hover:shadow-book-box-hover hover:shadow-book-reverse-box-hover hover:scale-102 transition-all">
      {searchType === 'subject' ? (
        <SortingSubjectSelector />
      ) : (
        <SortingTypeSelector />
      )}
    </div>
  );
};
