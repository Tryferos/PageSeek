import {BookQueryResult} from '@/types/search_books';
import {create} from 'zustand';

type State = {
  result: BookQueryResult | null;
};

type Actions = {
  setResult: (r: BookQueryResult | null) => void;
};

export const useSearchResult = create<State & Actions>()((set, get, store) => ({
  result: null,
  setResult: (r: BookQueryResult | null) => {
    set({result: r});
  },
}));
