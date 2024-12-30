import type {Metadata} from 'next';
import './globals.css';
import {FontFamilies} from '@/constants/types';
import {GlobalLoader} from '@/components/elements/GlobalLoader';
import {GlobalAlerts} from '@/components/elements/GlobalAlerts';
import {GlobalPopups} from '@/components/elements/GlobalPopups';

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
        className={`${FontFamilies.wotfard} antialiased font-wotfard font-wotfardRg scrollbar`}>
        <main className="w-[100%] min-h-[100%] py-6 px-6 bg-gray-100 relative">
          <div id="children-wrapper" className="w-full h-full">
            {children}
          </div>
          <GlobalLoader />
          <GlobalAlerts />
          <GlobalPopups />
        </main>
      </body>
    </html>
  );
}
