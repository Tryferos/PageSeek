import type {Metadata} from 'next';
import './globals.css';
import {FontFamilies} from '@/constants/types';
import {GlobalLoader} from '@/components/elements/GlobalLoader';

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
        {children}
      </body>
    </html>
  );
}
