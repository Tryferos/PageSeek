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
    <figure className="relative w-[35%] min-w-[300px] h-[35vw] min-h-[375px]">
      <ImageFallback
        quality={100}
        fallbackSrc="/book.png"
        src={thumbnail ?? '/book.png'}
        alt={title}
        fill
      />
    </figure>
  );
};
