'use client';
import Image from 'next/image';
import {useEffect, useState} from 'react';
type Props = {
  src: string;
  fallbackSrc: string;
  alt: string;
  fill?: boolean;
  loading?: 'eager' | 'lazy';
  quality?: number;
  priority?: boolean;
};

export default function ImageFallback({src, fallbackSrc, ...rest}: Props) {
  const [imgSrc, set_imgSrc] = useState(src);

  useEffect(() => {
    set_imgSrc(src);
  }, [src]);

  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        set_imgSrc(fallbackSrc);
      }}
    />
  );
}
