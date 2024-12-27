'use client';
import {useLoading} from '@/slices/loading';

export const GlobalLoader = () => {
  const {loading} = useLoading();
  if (!loading) {
    return null;
  } else {
    return (
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-90 pointer-events-none">
        <div className="size-16 border-[6px] border-tertiary border-t-[transparent] rounded-[50%] animate-spin"></div>
      </div>
    );
  }
};
