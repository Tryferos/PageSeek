'use client';
import {Tooltip} from '@/components/elements/Tooltip';
import {SortTypes} from '@/constants/search';
import {TooltipText} from '@/constants/text';
import {
  DownwardsIcon,
  IdentificationIcon,
  StarsIcon,
  StatisticsIcon,
  UpwardsIcon,
} from '@/icons/Icons';
import {useSearchType} from '@/slices/search_type_store';
import {useMemo, useState} from 'react';

export const SortingTypeSelector = () => {
  const sortingType = useSearchType(s => s.sortingType);
  const setSortingType = useSearchType(s => s.setSortingType);
  const getIcon = (sortingType: keyof typeof SortTypes) => {
    if (sortingType === 'new') {
      return <UpwardsIcon width={20} height={20} />;
    } else if (sortingType === 'old') {
      return <DownwardsIcon width={20} height={20} />;
    } else if (sortingType === 'rating desc') {
      return <StarsIcon width={20} height={20} />;
    } else if (sortingType === 'want_to_read') {
      return <StatisticsIcon width={20} height={20} />;
    } else if (sortingType === 'title') {
      return <IdentificationIcon width={20} height={20} />;
    } else {
      return null;
    }
  };

  return (
    <>
      {sortingType !== 'old' && (
        <Tooltip text={TooltipText['Recent']}>
          <div
            onClick={() => {
              if (sortingType === 'new') {
                setSortingType('old');
              } else {
                setSortingType('new');
              }
            }}
            className={`${sortingType === 'new' ? 'bg-gradient-to-tr from-orange-700 to-orange-400 via-orange-500 gap-x-1' : 'border-r-[1px] border-l-[1px] hover:bg-gradient-to-tr hover:from-orange-700 hover:to-orange-400 hover:via-orange-500'} 
            cursor-pointer group-last:rounded-tr-md items-center h-full flex justify-center w-full group-last:border-r-[0px] group-first:border-l-[0px] border-gray-200 group`}>
            <div
              className={`scale-90 ${sortingType === 'new' ? 'scale-[0.7] tablet:scale-100 fill-gray-200 text-gray-200' : 'group-hover:text-gray-200 group-hover:fill-gray-200'} transition-transform`}>
              <UpwardsIcon width={20} height={20} />
            </div>
            <div
              className={`first-letter:uppercase mobile:hidden tablet:hidden text-white text-sm h-[24px] items-center justify-start flex transition-all ${sortingType === 'new' ? 'opacity-100 translate-x-0 w-[60%]' : 'opacity-0 -translate-x-4 w-0'}`}>
              <span className="first-letter:uppercase">{'Recent'}</span>
            </div>
          </div>
        </Tooltip>
      )}
      {sortingType === 'old' && (
        <Tooltip text={TooltipText['Old']}>
          <div
            onClick={() => {
              if (sortingType === 'old') {
                setSortingType('new');
              } else {
                setSortingType('old');
              }
            }}
            className={`${sortingType === 'old' ? 'bg-gradient-to-tr from-orange-700 to-orange-400 via-orange-500 gap-x-1' : 'border-r-[1px] border-l-[1px] hover:bg-gradient-to-tr hover:from-orange-700 hover:to-orange-400 hover:via-orange-500'} 
            cursor-pointer group-last:rounded-tr-md items-center h-full flex justify-center w-full group-last:border-r-[0px] group-first:border-l-[0px] border-gray-200 group`}>
            <div
              className={`scale-90 ${sortingType === 'old' ? 'scale-[0.7] tablet:scale-100 fill-gray-200 text-gray-200' : 'group-hover:text-gray-200 group-hover:fill-gray-200'} transition-transform`}>
              <DownwardsIcon width={20} height={20} />
            </div>
            <div
              className={`first-letter:uppercase mobile:hidden tablet:hidden text-white text-sm h-[24px] items-center justify-start flex transition-all ${sortingType === 'old' ? 'opacity-100 translate-x-0 w-[60%]' : 'opacity-0 -translate-x-4 w-0'}`}>
              <span className="first-letter:uppercase">{'Old'}</span>
            </div>
          </div>
        </Tooltip>
      )}
      {Object.keys(SortTypes)
        .filter(key => key !== 'new' && key !== 'old')
        .map(key => {
          const _key = key as keyof typeof SortTypes;
          const title = SortTypes[_key];
          return (
            <Tooltip key={key} text={TooltipText[title]}>
              <div
                onClick={() => {
                  setSortingType(_key);
                }}
                className={`${sortingType === key ? 'bg-gradient-to-tr from-orange-700 to-orange-400 via-orange-500 gap-x-1' : 'border-r-[1px] border-l-[1px] hover:bg-gradient-to-tr hover:from-orange-700 hover:to-orange-400 hover:via-orange-500'} 
            cursor-pointer large:group-last:rounded-tr-md w-full h-full items-center flex justify-center group-last:border-r-[0px] group-first:border-l-[0px] border-gray-200 group`}>
                <div
                  className={`scale-90 ${sortingType === _key ? 'scale-[0.7] tablet:scale-100 fill-gray-200 text-gray-200' : 'group-hover:text-gray-200 group-hover:fill-gray-200'} transition-transform`}>
                  {getIcon(_key)}
                </div>
                <div
                  className={`tablet:hidden mobile:hidden first-letter:uppercase text-white text-sm h-[24px] items-center justify-start flex transition-all ${sortingType === _key ? 'opacity-100 translate-x-0 w-[60%]' : 'opacity-0 -translate-x-4 w-0'}`}>
                  <span className="first-letter:uppercase">{title}</span>
                </div>
              </div>
            </Tooltip>
          );
        })}
    </>
  );
};
