import {MobileFilters} from './components/MobileFilters';
import {SearchMode} from './components/SearchMode';
import {SearchResults} from './components/SearchResults';
import {SearchTypeSelector} from './components/SearchTypeSelector';
import {SortingSelector} from './components/SortingSelector';
import {SortingTypeSelector} from './components/SortingTypeSelector';
export default function HomeScreen() {
  return (
    <div className="flex flex-col gap-y-3 h-full w-full z-[200]">
      <div className="flex justify-between small:justify-center small:items-center mobile:flex-row small:flex-col small:gap-y-4 small:h-[16vh] gap-x-4 z-[200] mobile:h-[60px]">
        <SearchTypeSelector />
        <SearchMode />
        <MobileFilters />
        <SortingSelector />
      </div>
      <div className="h-[78vh] small:h-[70vh] z-[100] mobile:h-[calc(100vh-10vh-60px-39px)]">
        <SearchResults />
      </div>
    </div>
  );
}
