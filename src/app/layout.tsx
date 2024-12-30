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
        <main className="w-[100vw] min-h-[70vh] pt-6 px-6 small:pt-4 small:px-2 pb-0 bg-gray-100 relative overflow-x-hidden">
          <div id="children-wrapper" className="z-[200] pointer-events-auto">
            {children}
            <footer className="w-[calc(100%+96px)] pointer-events-none min-w-[700px] -ml-12 h-[calc(70px+3.5vh)] flex justify-center items-end relative overflow-hidden z-[1]">
              <Image
                src={'/bottom-blob.svg'}
                alt="Footer Blob"
                width={1920}
                height={240}
                style={{zIndex: 1, position: 'relative'}}
              />
            </footer>
          </div>
          <GlobalLoader />
          <GlobalAlerts />
          <GlobalPopups />
        </main>
      </body>
    </html>
  );
}
