import {create} from 'zustand';

type Popup = 'Subjects' | 'SortingChangeWarning' | 'FiltersMobile';

type State = {
  popup: Popup | null;
  title?: string | null;
};

type Actions = {
  showPopup: (popup: Popup, title: string) => void;
  closePopup: () => void;
};

export const usePopups = create<State & Actions>()(set => ({
  popup: null,
  title: null,
  showPopup: (popup, title) => set({popup, title}),
  closePopup: () => set({popup: null, title: null}),
}));
