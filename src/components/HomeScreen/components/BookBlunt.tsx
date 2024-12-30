'use client';
import {Highlighted} from '@/components/elements/Highlight';
import ImageFallback from '@/components/elements/ImageFallback';
import {StarIcon} from '@/icons/Icons';
import {useSearch} from '@/slices/search_store';
import {BookDocumentBlunt} from '@/types/search_books';
import Link from 'next/link';
import {useRef} from 'react';
import {BookImage} from './BookImage';

type Props = {
  book: BookDocumentBlunt;
};
export const BookBlunt = ({book}: Props) => {
  const {query} = useSearch();
  const {
    title,
    thumbnail,
    author_name,
    first_publish_year,
    ratings_average,
    isbn,
  } = book;
  const ref = useRef<HTMLAnchorElement>(null);
  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ref.current.style.setProperty('--x', `${x}px`);
      ref.current.style.setProperty('--y', `${y}px`);
    }
  };
  return (
    <Link
      onMouseMove={onMouseMove}
      ref={ref}
      className="hover:scale-[101%] transition-transform min-h-[200px] h-[35%] grow basis-auto box-border flex-col gap-4 min-w-[400px] relative overflow-hidden searchresultseffect bg-orange-50 rounded"
      href={`${book.key}`}>
      <li key={book.key} className="w-full h-full">
        <div className="w-full h-full flex gap-x-4 cursor-pointer py-4 px-4 relative">
          <BookImage book={book} />
          <div className="flex items-center gap-x-1 absolute right-4 top-4">
            <p>{ratings_average?.toFixed(1) ?? '0'}</p>
            <StarIcon />
          </div>
          <div className="gap-y-2 flex flex-col relative w-full">
            <p className="text-m font-wotfardMd w-[80%]">
              <Highlighted text={title} highlight={query ?? ''} />
            </p>
            <div className="text-sm font-wotfardRg text-secondary flex flex-col gap-y-1">
              <div className="flex gap-x-1 items-end flex-wrap">
                <p className="">Written by </p>
                {author_name?.slice(0, 3).map((author, i) => (
                  <p key={i} className="text-sm">
                    <Highlighted
                      text={author}
                      highlight={query ?? ''}
                      className="underline cursor-pointer "
                    />
                    {i === author_name?.slice(0, 3).length - 2
                      ? ' and'
                      : i === author_name?.slice(0, 3).length - 3
                        ? ', '
                        : '.'}
                  </p>
                ))}
              </div>
            </div>
            <div className="absolute bottom-1 flex justify-between w-full flex-wrap gap-x-2">
              {isbn && isbn?.[0] && (
                <p className="text-xs font-wotfardRg text-secondary flex items-end gap-x-1">
                  ISBN:{' '}
                  <span className="underline cursor-pointer text-sm">
                    <Highlighted
                      text={isbn?.[0] ?? ''}
                      highlight={query ?? ''}
                    />
                  </span>
                </p>
              )}
              <p className="text-sm font-wotfardRg text-secondary">
                Published on{' '}
                <span className="font-wotfardMd">
                  {' '}
                  <Highlighted
                    text={`${first_publish_year}`}
                    highlight={query ?? ''}
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};
