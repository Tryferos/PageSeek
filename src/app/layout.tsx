import type {Metadata} from 'next';
import './globals.css';
import {FontFamilies} from '@/constants/types';
import {GlobalLoader} from '@/components/elements/GlobalLoader';
import {GlobalAlerts} from '@/components/elements/GlobalAlerts';
import {GlobalPopups} from '@/components/elements/GlobalPopups';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'PageSeek',
  description: 'Three.js Web App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${FontFamilies.wotfard} antialiased font-wotfard font-wotfardRg scrollbar overflow-x-hidden`}>
        <main className="w-[100vw] min-h-[70vh] py-6 px-6 pb-0 bg-gray-100 relative overflow-x-hidden">
          <div id="children-wrapper">{children}</div>
          <footer className="w-[calc(100%+96px)] min-w-[700px] -ml-12 h-[90px] flex justify-center items-end relative overflow-hidden">
            <Image
              src={'/bottom-blob.svg'}
              alt="Footer Blob"
              width={1920}
              height={240}
            />
          </footer>
          <GlobalLoader />
          <GlobalAlerts />
          <GlobalPopups />
        </main>
      </body>
    </html>
  );
}
