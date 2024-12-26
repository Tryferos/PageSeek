'use client';
import {BackIcon} from '@/icons/Icons';
import Image from 'next/image';
import Link from 'next/link';
import {useMemo} from 'react';
export const NotFound = () => {
  const type = useMemo(() => {
    if (window.location.href.includes('works')) {
      return 'works';
    } else if (window.location.href.includes('authors')) {
      return 'authors';
    } else {
      return undefined;
    }
  }, []);
  return (
    <section className="flex pt-4 flex-col justify-between h-[77.5vh] items-center">
      <p className="font-wotfardMd text-2xl text-center">
        The{' '}
        {type === 'works' ? 'Book' : type === 'authors' ? 'Author' : 'Resource'}{' '}
        you are looking for is not here.
      </p>
      <figure className="relative w-full h-[50vh]">
        <Image src={'/not_found.svg'} fill alt="Not Found" />
      </figure>
      <Link
        href={'/'}
        className="bg-gradient-to-tr from-orange-700 to-orange-500 text-white font-wotfardMd px-4 py-2 rounded-md backgroundeffect group flex cursor-pointer">
        <div className="group-hover:opacity-100 group-hover:w-4 w-0 transition-all group-hover:-translate-x-1">
          <BackIcon />
        </div>
        <p>Go Back</p>
      </Link>
    </section>
  );
};
