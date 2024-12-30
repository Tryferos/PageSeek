import {FilterIcon} from '@/icons/Icons';

export const MobileFilters = () => {
  return (
    <div className="hidden mobile:flex p-2 cursor-pointer backgroundeffect rounded-md text-gray-100">
      <FilterIcon width={24} height={24} />
    </div>
  );
};
