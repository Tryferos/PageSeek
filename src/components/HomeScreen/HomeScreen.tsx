import {SearchMode} from './components/SearchMode';
import {SearchResults} from './components/SearchResults';
import {SearchTypeSelector} from './components/SearchTypeSelector';
import {SortingSelector} from './components/SortingSelector';
import {SortingTypeSelector} from './components/SortingTypeSelector';
export default function HomeScreen() {
  return (
    <div className="flex flex-col gap-y-4 h-full w-full z-[99999]">
      <div className="flex justify-between small:justify-center small:items-center small:flex-col small:gap-y-4 small:h-[25vh] gap-x-4 ">
        <SearchTypeSelector />
        <SearchMode />
        <SortingSelector />
      </div>
      <div className="h-[78vh] small:h-[60vh] z-[9999]">
        <SearchResults />
      </div>
    </div>
  );
}
