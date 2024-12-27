import {create} from 'zustand';

type State = {
  currentPage: number;
  totalPages: number;
  reset: () => void;
  setTotalPages: (totalPages: number) => void;
  setCurrentPage: (page: number) => void;
  nextPage: () => void;
  previousPage: () => void;
};

export const usePagination = create<State>()(set => ({
  currentPage: 1,
  totalPages: 1,
  reset: () => set({currentPage: 1, totalPages: 1}),
  setTotalPages: (totalPages: number) =>
    set({totalPages: Math.round(totalPages)}),
  setCurrentPage: (page: number) => set({currentPage: page}),
  nextPage: () =>
    set(({currentPage, totalPages}) => {
      if (currentPage >= totalPages) {
        return {};
      } else {
        return {currentPage: currentPage + 1};
      }
    }),
  previousPage: () =>
    set(({currentPage}) => {
      if (currentPage <= 1) {
        return {currentPage: 1};
      } else {
        return {currentPage: currentPage - 1};
      }
    }),
}));
