'use client';

import {useHasMounted} from '@/hooks/useHasMounted';
import {BackIcon} from '@/icons/Icons';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {useMemo} from 'react';
export const NotFound = () => {
  const router = useRouter();
  const hasMounted = useHasMounted();
  const type = useMemo(() => {
    if (!hasMounted) return undefined;
    if (typeof window === 'undefined') return undefined;
    if (window.location.href.includes('works')) {
      return 'works';
    } else if (window.location.href.includes('authors')) {
      return 'authors';
    } else {
      return undefined;
    }
  }, [hasMounted]);
  const goBack = () => {
    router.back();
  };
  return (
    <section className="flex pt-4 flex-col justify-between h-[80.6vh] bg- items-center px-4">
      <p className="font-wotfardMd text-secondary text-xl text-center">
        The{' '}
        {type === 'works' ? 'Book' : type === 'authors' ? 'Author' : 'Resource'}{' '}
        you are looking for is not here.
      </p>
      <figure className="relative w-full h-[25vw] min-h-[250px]">
        <Image src={'/not_found.svg'} fill alt="Not Found" />
      </figure>
      <div
        onClick={goBack}
        className="bg-gradient-to-tr from-orange-700 to-orange-500 text-white font-wotfardMd px-4 py-2 rounded-md backgroundeffect group flex cursor-pointer">
        <div className="group-hover:opacity-100 small:w-4 small:opacity-100 small:-translate-x-2 group-hover:w-4 w-0 transition-all group-hover:-translate-x-2">
          <BackIcon />
        </div>
        <p>Go back and find another book</p>
      </div>
    </section>
  );
};
