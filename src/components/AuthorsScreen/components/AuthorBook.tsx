'use client';
import {StarIcon} from '@/icons/Icons';
import {AuthorWorksRichEntry} from '@/types/author';
import {useMemo, useRef} from 'react';
import Link from 'next/link';

export const AuthorBook = ({
  book,
  title: _title,
}: Omit<AuthorWorksRichEntry, 'key'>) => {
  const ref = useRef<HTMLLIElement>(null);
  const onMouseMove = (e: React.MouseEvent<HTMLLIElement>) => {
    if (ref.current) {
      const x = e.pageX - ref.current?.offsetLeft;
      const y = e.pageY - ref.current?.offsetTop;
      ref.current.style.setProperty('--x', `${x}px`);
      ref.current.style.setProperty('--y', `${y}px`);
    }
  };

  const {description: _description, title, ratings, first_publish_date} = book;
  const description = useMemo(() => {
    if (!_description) return undefined;

    const redundantDescriptionIndex: number = _description?.indexOf('--') ?? -1;
    const words = _description.slice(0, redundantDescriptionIndex).split(' ');
    const maxWords = 30;
    return (
      words
        .slice(0, words.length > maxWords ? maxWords : words.length)
        .join(' ') + `${words.length > maxWords ? '... [Read More]' : ''}`
    );
  }, [_description]);
  return (
    <li
      ref={ref}
      onMouseMove={onMouseMove}
      className="px-3 shadow-book-box backgroundeffect large:hover:shadow-book-box-hover large:hover:-translate-x-1 large:hover:-translate-y-1 cursor-pointer py-2 rounded-tl-md min-w-[275px] w-[25%] h-[28vh] relative text-gray-100 overflow-hidden">
      <Link
        href={`/works/${book._key?.replace('/works/', '')}`}
        className="focus:border-none focus:outline-none">
        <div className="absolute -top-3 -left-3 size-6 bg-orange-700 rotate-45"></div>
        <div className="flex flex-col gap-y-1">
          <p className="font-wotfardMd text-white small:text-base">
            {title ?? _title}
          </p>
          {description && (
            <p className="text-sm small:text-xs">{description}</p>
          )}
        </div>
        <div className="flex gap-x-1 items-end absolute bottom-2 left-2">
          {first_publish_date && (
            <p className="text-sm font-wotfardRg ">
              Published on {first_publish_date}.
            </p>
          )}
        </div>
        {ratings && ratings.average && (
          <div className="flex absolute items-center gap-x-1 bottom-2 right-2">
            <p>{ratings.average?.toFixed(1)}</p>
            <StarIcon />
          </div>
        )}
      </Link>
    </li>
  );
};
