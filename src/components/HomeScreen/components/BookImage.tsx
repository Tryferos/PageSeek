import ImageFallback from '@/components/elements/ImageFallback';
import {
  fillDocumentsWithMetadata,
  getDocumentImageUrl,
} from '@/network/metadata';
import {useImageStore} from '@/slices/image_store';
import {BookDocument} from '@/types/search_books';
import {useEffect, useState} from 'react';

export const BookImage = ({book}: {book: BookDocument}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const {addImage, images} = useImageStore();
  useEffect(() => {
    if (!imageUrl) {
      (async () => {
        if (book.ia && book.ia.length > 0 && book.ia[0] !== 'null') {
          const image = new Image();
          const url =
            images[book.key] ?? (await getDocumentImageUrl(book.ia[0]));
          if (url) {
            image.src = url;
            image.onload = () => {
              if (image.complete && image.naturalHeight > 0) {
                setImageUrl(url);
                addImage(url, book.key);
              }
            };
          }
        }
      })();
    }
  }, [book.ia]);
  return (
    <figure className="relative w-[15vh] min-w-[128px] h-full">
      <ImageFallback
        fallbackSrc="/book.svg"
        src={imageUrl ?? `/book.svg`}
        alt={book.title}
        fill
        quality={100}
        loading="lazy"
      />
    </figure>
  );
};
