'use client';
import {useSearchType} from '@/slices/search_type_store';
import {SortingSubjectSelector} from './SortingSubjectSelector';
import {SortingTypeSelector} from './SortingTypeSelector';

export const SortingSelector = () => {
  const searchType = useSearchType(s => s.searchType);

  return (
    <div className="basis-[46%] min-w-[325px] my-0 rounded-none rounded-tr-md mx-10 select-none flex justify-between px-0 shadow-book-reverse-box hover:shadow-book-reverse-box-hover hover:scale-102 transition-all">
      {searchType === 'subject' ? (
        <SortingSubjectSelector />
      ) : (
        <SortingTypeSelector />
      )}
    </div>
  );
};
