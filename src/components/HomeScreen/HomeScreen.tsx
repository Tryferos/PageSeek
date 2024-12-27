import {SearchMode} from './components/SearchMode';
import {SearchResults} from './components/SearchResults';

export default function HomeScreen() {
  return (
    <div className="flex flex-col gap-y-10 h-full overflow-">
      <div className="flex justify-between">
        <div className="border-2 border-black basis-[33%]"></div>
        <SearchMode />
        <div className="border-2 border-black basis-[33%]"></div>
      </div>
      <div className="h-[75vh]">
        <SearchResults />
      </div>
    </div>
  );
}
