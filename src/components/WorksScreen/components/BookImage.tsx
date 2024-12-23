'use client';

import ImageFallback from '@/components/elements/ImageFallback';
import {useImageStore} from '@/slices/image_store';
import {useMemo} from 'react';

type Props = {
  thumbnail?: string | null;
  title: string;
  bookKey?: string;
};
export const BookImage = ({thumbnail: _thumbnail, title, bookKey}: Props) => {
  const thumbnail = useMemo(() => {
    if (!_thumbnail && bookKey) {
      return useImageStore.getState().images[bookKey];
    } else {
      return _thumbnail;
    }
  }, [_thumbnail]);

  return (
    <figure className="relative w-[25vw] min-w-[128px] h-[35vw] min-h-[300px] bg-black">
      <ImageFallback
        quality={100}
        fallbackSrc="/file.svg"
        src={thumbnail ?? 'file.svg'}
        alt={title}
        fill
      />
    </figure>
  );
};
