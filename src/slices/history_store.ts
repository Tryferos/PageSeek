import {create} from 'zustand';

type State = {
  history: string[];
  addToHistory: (history: string) => void;
  removeFromHistory: (history: string) => void;
  initHistory: () => void;
};

const JSON_KEY = 'history-pageseek';

export const useHistory = create<State>()(set => ({
  history: [],
  removeFromHistory: (history: string) => {
    set(state => {
      const newHistory = state.history.filter(h => h !== history);
      localStorage.setItem(JSON_KEY, JSON.stringify(newHistory));
      return {history: newHistory};
    });
  },
  addToHistory: (history: string) => {
    set(state => {
      const newHistory = [
        history,
        ...state.history.filter(h => h !== history),
      ].slice(0, 20);
      localStorage.setItem(JSON_KEY, JSON.stringify(newHistory));
      return {history: newHistory};
    });
  },
  initHistory: () => {
    const history = localStorage.getItem(JSON_KEY);
    if (history) {
      set({history: JSON.parse(history)});
    }
  },
}));
