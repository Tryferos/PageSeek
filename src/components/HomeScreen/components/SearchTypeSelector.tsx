'use client';
import {SearchTypes} from '@/constants/search';
import {
  IdentificationIcon,
  InfoIcon,
  PersonIcon,
  SearchIcon,
} from '@/icons/Icons';
import {useSearchType} from '@/slices/search_type';

export const SearchTypeSelector = () => {
  const {searchType, setSearchType} = useSearchType();
  const getIcon = (searchType: keyof typeof SearchTypes) => {
    if (searchType === 'q') {
      return <SearchIcon width={16} height={16} />;
    } else if (searchType === 'title') {
      return <IdentificationIcon width={20} height={20} />;
    } else if (searchType === 'author') {
      return <PersonIcon width={20} height={20} />;
    } else if (searchType === 'subject') {
      return <InfoIcon width={22} height={22} />;
    } else {
      return null;
    }
  };
  return (
    <div className="basis-[50%] min-w-[325px] my-0 rounded-none rounded-tl-md mx-10 flex justify-between px-0 shadow-book-box hover:shadow-book-box-hover hover:scale-102 transition-all">
      {Object.keys(SearchTypes).map(key => {
        const _key = key as keyof typeof SearchTypes;
        const title = SearchTypes[_key];
        return (
          <div
            onClick={() => setSearchType(_key)}
            className={`${searchType === key ? 'bg-gradient-to-tr from-orange-700 to-orange-400 via-orange-500 gap-x-1' : 'border-r-[1px] border-l-[1px] hover:bg-gradient-to-tr hover:from-orange-700 hover:to-orange-400 hover:via-orange-500'} 
            cursor-pointer first:rounded-tl-md items-center flex justify-center w-full first:border-l-[0px] last:border-r-[0px] border-gray-200 group`}
            key={key}>
            <div
              className={`scale-90 ${searchType === _key ? 'scale-[0.7] fill-gray-200 text-gray-200' : 'group-hover:text-gray-200 group-hover:fill-gray-200'} transition-transform`}>
              {getIcon(_key)}
            </div>
            <div
              className={`first-letter:uppercase text-white text-sm h-[24px] items-center justify-start flex text-secondary transition-all ${searchType === _key ? 'opacity-100 translate-x-0 w-[60%]' : 'opacity-0 -translate-x-4 w-0'}`}>
              <span className="first-letter:uppercase">{title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
