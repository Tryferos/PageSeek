'use client';
import {FilterIcon} from '@/icons/Icons';
import {usePopups} from '@/slices/popups_store';

export const MobileFilters = () => {
  const showPopup = usePopups(s => s.showPopup);
  return (
    <div
      onClick={() => showPopup('FiltersMobile', 'Filters')}
      className="hidden small:flex p-2 mt-1 cursor-pointer backgroundeffect rounded-md text-gray-100 items-center">
      <FilterIcon width={24} height={24} />
    </div>
  );
};
