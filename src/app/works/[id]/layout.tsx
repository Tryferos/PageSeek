import {BackNavigation} from '@/components/client/BackNavigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className="flex flex-col gap-y-6">
      <BackNavigation />
      {children}
    </article>
  );
}
