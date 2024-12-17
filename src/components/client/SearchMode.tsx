'use client';

import {FC, useState} from 'react';
import {SearchBar} from '../elements/SearchBar';
import {Highlighted} from '../elements/Highlight';
type Props = {
  titles: string[];
};
export const SearchMode: FC<Props> = ({titles}) => {
  const [search, setSearch] = useState('');
  return (
    <div className="flex gap-4 w-[100vw] min-h-[50vh] bg-gray-200 flex-wrap flex-col">
      <SearchBar search={search} setSearch={setSearch} />
      {titles.map((title, i) => (
        <Highlighted key={i} text={title} highlight={search} />
      ))}
    </div>
  );
};
