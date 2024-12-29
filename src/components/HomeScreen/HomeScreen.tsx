import {SearchMode} from './components/SearchMode';
import {SearchResults} from './components/SearchResults';
import {SearchTypeSelector} from './components/SearchTypeSelector';
import {SortingSelector} from './components/SortingSelector';
import {SortingTypeSelector} from './components/SortingTypeSelector';
export default function HomeScreen() {
  return (
    <div className="flex flex-col gap-y-10 h-full w-full">
      <div className="flex justify-between">
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
