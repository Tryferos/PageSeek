import {BackNavigation} from '@/components/client/BackNavigation';

export default function LayoutBackWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className="flex flex-col gap-y-6 h-[100%] w-[100%]">
      <BackNavigation />
      {children}
    </article>
  );
}
