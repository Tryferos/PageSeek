import {create} from 'zustand';

type State = {
  images: Record<string, string>;
  addImage: (image: string, key: string) => void;
};

export const useImageStore = create<State>(set => ({
  images: {},
  addImage: (image, key) => {
    set(state => {
      state.images[key] = image;
      return {images: state.images};
    });
  },
}));
