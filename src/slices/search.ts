import {QueryBooks} from '@/network/search';
import {BookQueryResult} from '@/types/search_books';
import {create} from 'zustand';
type State = {
  query: string | null;
  previousQuery: string | null;
  isQueryValid: boolean;
  setQuery: (q: string) => void;
  clearQuery: () => void;
};
export const useSearch = create<State>()((set, get, store) => ({
  query: null,
  previousQuery: null,
  isQueryValid: false,
  setQuery: (q: string) => {
    const previousQuery = get().query;
    set({
      query: q,
      previousQuery: previousQuery,
      isQueryValid: q.length >= 4 && previousQuery !== q,
    });
  },
  clearQuery: () => {
    set({query: null, previousQuery: null, isQueryValid: false});
  },
}));
