import {create} from 'zustand';

type State = {
  loading: boolean;
  setLoading: (l: boolean) => void;
};

export const useLoading = create<State>()(set => ({
  loading: false,
  setLoading: (l: boolean) => set({loading: l}),
}));
