import {BookQueryResult} from '@/types/search_books';
import {create} from 'zustand';

type State = {
  result: BookQueryResult | null;
  previousResults: BookQueryResult[];
  lastPageFetched: number;
  getPageResult: (page: number) => BookQueryResult | null;
};

type Actions = {
  setResult: (r: BookQueryResult | null, page?: number) => void;
};

const PAGE_SIZE = 9;

export const useSearchResult = create<State & Actions>()((set, get, store) => ({
  result: null,
  previousResults: [],
  lastPageFetched: 0,
  getPageResult: page => {
    const {result, previousResults} = get();
    const start = PAGE_SIZE * (page - 1);
    return previousResults.find(r => r.start === start) ?? result;
  },
  setResult: (r: BookQueryResult | null, page = 1) => {
    set(({previousResults, result}) => {
      const _previousResults =
        page === 1
          ? []
          : result
            ? [...previousResults, result]
            : [...previousResults];
      return {
        result: r,
        previousResults: _previousResults,
        lastPageFetched: page,
      };
    });
  },
}));
