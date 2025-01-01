import {BackNavigation} from '@/components/client/BackNavigation';

export default function LayoutBackWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className="flex flex-col gap-y-6 h-[calc(100vh-24px-90px-3.5vh)] small:h-[calc(100dvh-16px-90px-3.5vh)] w-[100%] z-[200]">
      <BackNavigation />
      {children}
    </article>
  );
}
