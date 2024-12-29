import {SearchTypes, SortTypes} from '@/constants/search';
import {create} from 'zustand';

type State = {
  searchType: keyof typeof SearchTypes;
  sortingType: keyof typeof SortTypes;
  previousSortingType: keyof typeof SortTypes;
  publishedIn: {
    start: number | null;
    end: number | null;
  };
};

type Actions = {
  setSearchType: (searchType: State['searchType']) => void;
  setSortingType: (sortingType: State['sortingType']) => void;
  setPreviousSortingType: (sortingType: State['sortingType']) => void;
  setPublishedIn: (publishedIn: State['publishedIn']) => void;
};

export const useSearchType = create<State & Actions>()(set => ({
  searchType: 'q',
  sortingType: 'want_to_read',
  publishedIn: {
    start: null,
    end: null,
  },
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
  setPublishedIn: (publishedIn: State['publishedIn']) => {
    set({publishedIn});
  },
}));
