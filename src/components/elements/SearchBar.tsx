import {SearchIcon} from '@/icons/Search';
import {FC} from 'react';

type Props = {
  search: string;
  setSearch: (s: string) => void;
  onIconClick?: () => void;
};

export const SearchBar: FC<Props> = ({search, setSearch, onIconClick}) => {
  return (
    <div className="justify-start pointer-events-auto flex px-4 py-3 bg-white rounded-full w-[40%] items-center">
      <input
        className="focus:outline-none w-full"
        type="text"
        value={search}
        onChange={ev => setSearch(ev.target.value)}
        placeholder="Query..."
      />
      <SearchIcon onClick={onIconClick} />
    </div>
  );
};
