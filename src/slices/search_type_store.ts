import {SearchTypes, SortTypes} from '@/constants/search';
import {create} from 'zustand';

type State = {
  searchType: keyof typeof SearchTypes;
  sortingType: keyof typeof SortTypes;
  previousSortingType: keyof typeof SortTypes;
};

type Actions = {
  setSearchType: (searchType: State['searchType']) => void;
  setSortingType: (sortingType: State['sortingType']) => void;
  setPreviousSortingType: (sortingType: State['sortingType']) => void;
};

export const useSearchType = create<State & Actions>()(set => ({
  searchType: 'q',
  sortingType: 'want_to_read',
  previousSortingType: 'want_to_read',
  setSearchType: (searchType: State['searchType']) => {
    set({searchType});
  },
  setSortingType: (sortingType: State['sortingType']) => {
    set({sortingType: sortingType});
  },
  setPreviousSortingType: (sortingType: State['sortingType']) => {
    set({previousSortingType: sortingType});
  },
}));
