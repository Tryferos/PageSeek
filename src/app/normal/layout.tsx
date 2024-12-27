import type {Metadata} from 'next';
import {GlobalLoader} from '@/components/elements/GlobalLoader';

export const metadata: Metadata = {
  title: 'Normal Version',
  description: 'Tranditional Web App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-[100%] h-[100%] py-6 px-12 bg-gray-200 relative">
      {children}
      <GlobalLoader />
    </main>
  );
}
