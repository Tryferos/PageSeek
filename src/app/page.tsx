'use client';
import {Experience} from './three/Experience';
import {Suspense} from 'react';

export default function Home() {
  return (
    <>
      <Suspense>
        <Experience />
      </Suspense>
    </>
  );
}
