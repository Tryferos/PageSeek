import {SearchMode} from './components/SearchMode';
import {SearchResults} from './components/SearchResults';
import {SearchTypeSelector} from './components/SearchTypeSelector';
import {SortingSelector} from './components/SortingSelector';
import {SortingTypeSelector} from './components/SortingTypeSelector';
export default function HomeScreen() {
  return (
    <div className="flex flex-col gap-y-10 h-full w-full">
      <div className="flex justify-between small:justify-center small:items-center small:flex-col small:gap-y-4 small:h-[25vh] gap-x-4 ">
        <SearchTypeSelector />
        <SearchMode />
        <SortingSelector />
      </div>
      <div className="h-[75vh]">
        <SearchResults />
      </div>
    </div>
  );
}
