'use client';
import {Tooltip} from '@/components/elements/Tooltip';
import {SearchTypes} from '@/constants/search';
import {TooltipText} from '@/constants/text';
import {
  IdentificationIcon,
  InfoIcon,
  PersonIcon,
  SearchIcon,
} from '@/icons/Icons';
import {usePopups} from '@/slices/popups_store';
import {useSearchType} from '@/slices/search_type_store';
import {useCallback, useEffect} from 'react';

export const SearchTypeSelector = () => {
  const {searchType, setSearchType} = useSearchType();
  const showPopup = usePopups(s => s.showPopup);
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
  useEffect(() => {
    openSubjectsPopup();
  }, [searchType]);

  const openSubjectsPopup = useCallback(() => {
    if (searchType === 'subject') {
      showPopup('Subjects', 'Browse book subjects');
    }
  }, [searchType]);

  return (
    <div className="basis-[30%] min-w-[250px] small:w-[60vw] small:min-w-[300px] select-none my-0 rounded-none rounded-tl-md flex justify-between px-0 shadow-book-box hover:shadow-book-box-hover hover:scale-102 transition-all">
      {Object.keys(SearchTypes).map(key => {
        const _key = key as keyof typeof SearchTypes;
        const title = SearchTypes[_key];
        return (
          <Tooltip key={key} text={TooltipText[title]}>
            <div
              onClick={() => {
                if (_key === 'subject') {
                  openSubjectsPopup();
                }
                setSearchType(_key);
              }}
              className={`${searchType === key ? 'bg-gradient-to-tr from-orange-700 to-orange-400 via-orange-500 gap-x-1' : 'border-r-[1px] border-l-[1px] hover:bg-gradient-to-tr hover:from-orange-700 hover:to-orange-400 hover:via-orange-500'} 
            cursor-pointer group-first:rounded-tl-md items-center flex justify-center w-full h-full group-first:border-l-[0px] group-last:border-r-[0px] border-gray-200 group`}>
              <div
                className={`scale-90 ${searchType === _key ? 'scale-[0.7] tablet:scale-100 fill-gray-200 text-gray-200' : 'group-hover:text-gray-200 group-hover:fill-gray-200'} transition-transform`}>
                {getIcon(_key)}
              </div>
              <div
                className={`tablet:hidden mobile:hidden first-letter:uppercase text-white text-sm h-[24px] items-center justify-start flex transition-all ${searchType === _key ? 'opacity-100 translate-x-0 w-[60%]' : 'opacity-0 -translate-x-4 w-0'}`}>
                <span className="first-letter:uppercase">{title}</span>
              </div>
            </div>
          </Tooltip>
        );
      })}
    </div>
  );
};
