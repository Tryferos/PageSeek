import {create} from 'zustand';
import {usePopups} from './popups_store';

type State = {
  currentPage: number;
  totalPages: number;

  reset: () => void;
  setTotalPages: (totalPages: number) => void;
  setCurrentPage: (page: number) => void;
  nextPage: (verifyChange?: boolean) => void;
  previousPage: (verifyChange?: boolean) => void;
};

export const usePagination = create<State>()((set, get) => ({
  currentPage: 1,
  totalPages: 1,
  reset: () => set({currentPage: 1, totalPages: 1}),
  setTotalPages: (totalPages: number) =>
    set({totalPages: Math.round(totalPages)}),
  setCurrentPage: (page: number) => set({currentPage: page}),
  nextPage: (verifyChange = false) => {
    if (verifyChange) {
      const showPopup = usePopups.getState().showPopup;
      showPopup('SortingChangeWarning', 'Sorting Change Warning');
    } else {
      set(({currentPage, totalPages}) => {
        if (currentPage >= totalPages) {
          return {};
        } else {
          return {currentPage: currentPage + 1};
        }
      });
    }
  },
  previousPage: (verifyChange = false) => {
    if (verifyChange) {
      const showPopup = usePopups.getState().showPopup;
      showPopup('SortingChangeWarning', 'Sorting Change Warning');
    } else {
      set(({currentPage}) => {
        if (currentPage <= 1) {
          return {currentPage: 1};
        } else {
          return {currentPage: currentPage - 1};
        }
      });
    }
  },
}));
