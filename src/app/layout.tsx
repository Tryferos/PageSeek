import type {Metadata} from 'next';
import './globals.css';
import {FontFamilies} from '@/constants/types';
import {GlobalLoader} from '@/components/elements/GlobalLoader';
import {GlobalAlerts} from '@/components/elements/GlobalAlerts';

export const metadata: Metadata = {
  title: '3D Version',
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
        <main className="w-[100%] min-h-[100%] py-10 px-12 bg-gray-200 relative">
          {children}
          <GlobalLoader />
          <GlobalAlerts />
        </main>
      </body>
    </html>
  );
}
