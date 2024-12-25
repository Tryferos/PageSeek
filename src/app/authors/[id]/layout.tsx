import LayoutBackWrapper from '@/components/elements/LayoutBackWrapper';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LayoutBackWrapper>{children}</LayoutBackWrapper>;
}
