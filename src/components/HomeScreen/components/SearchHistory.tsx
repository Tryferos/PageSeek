import {ClockIcon, CloseIcon} from '@/icons/Icons';
import {useHistory} from '@/slices/history_store';
import {useSearch} from '@/slices/search_store';

export const SearchHistory = () => {
  const history = useHistory(s => s.history);
  const removeFromHistory = useHistory(s => s.removeFromHistory);
  const setQuery = useSearch(s => s.setQuery);
  const query = useSearch(s => s.query);

  const clearFocus = () => {
    console.log(document.activeElement);
    const activeElement = document.activeElement;
    if (activeElement && activeElement instanceof HTMLElement) {
      activeElement.focus();
    }
  };

  const setItem = (item: string) => {
    setQuery(item);
    clearFocus();
  };

  if (history.length === 0) {
    return null;
  } else {
    return (
      <div className="absolute left-0 flex gap-y-2 flex-col w-full bg-white shadow-book-result-hover px-4 py-3 top-[calc(100%+8px)] opacity-0 pointer-events-none group-focus:flex group-focus-within:opacity-100 hover:opacity-100 group-focus-within:pointer-events-auto hover:pointer-events-auto transition-all delay-100 z-[9999] pb-4 pt-4 rounded small:items-center">
        <div className="flex justify-between px-1">
          <p className="font-wotfardMd text-base">Previous Searches</p>
        </div>
        <ul className="flex flex-col gap-y-2 overflow-y-auto scrollbar max-h-[clamp(200px,30vh,300px)] scrollbar small:w-full">
          {history.map(item => (
            <li
              onClick={() => setItem(item)}
              key={item}
              className="flex gap-x-2 items-center cursor-pointer px-2 rounded-t pt-1 pb-[2px] w-full justify-between hover:bg-gray-200 border-b-[1px]">
              <p className="text-sm text-secondary select-none">{item}</p>
              <div className="flex gap-x-2 items-center">
                <ClockIcon />
                <CloseIcon
                  onClick={ev => {
                    ev.stopPropagation();
                    removeFromHistory(item);
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
