import {MobileFilters} from './components/MobileFilters';
import {SearchMode} from './components/SearchMode';
import {SearchResults} from './components/SearchResults';
import {SearchTypeSelector} from './components/SearchTypeSelector';
import {SortingSelector} from './components/SortingSelector';
import {SortingTypeSelector} from './components/SortingTypeSelector';
export default function HomeScreen() {
  return (
    <div className="flex flex-col gap-y-3 h-full w-full z-[200] bg-">
      <div className="flex justify-between small:w-full small:items-center small:justify-evenly small:gap-x-0 gap-x-4 small:gap-x-4 z-[200] h-[50px]">
        <SearchTypeSelector />
        <SearchMode />
        <MobileFilters />
        <SortingSelector />
      </div>
      <div className="h-[calc(100vh-50px-12px-24px-70px-3.5vh)] z-[100] small:h-[calc(100vh-50px-12px-16px-70px-3.5vh)]">
        <SearchResults />
      </div>
    </div>
  );
}
