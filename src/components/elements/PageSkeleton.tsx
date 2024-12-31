import {ImageIcon} from '@/icons/Icons';

export default function PageSkeleton() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-[95%] flex justify-center items-center opacity-90 pointer-events-none z-[200]">
        <div className="size-16 border-[6px] border-sky-600 border-t-[transparent] rounded-[50%] animate-spin"></div>
      </div>
      <section className="flex w-[100%] h-[calc(100vh-24px-24px-24px-70px-3.5vh)] small:h-[calc(100vh-24px-24px-16px-70px-3.5vh)] gap-y-10 flex-col">
        <div className="flex gap-x-4 w-[100%] h-full relative">
          <div className="h-[55vh] w-[40%] bg-gray-300 animate-pulse rounded relative">
            <ImageIcon height={'100%'} width={'100%'} />
          </div>
          <div className="flex flex-col gap-y-2 w-full h-[55vh] relative">
            <div className="rounded-md bg-gray-300 animate-pulse h-[40px] w-full"></div>
            <div className="flex flex-col gap-y-1">
              <div className="rounded-md bg-gray-300 animate-pulse h-[212px] w-full"></div>
            </div>
            <div className="flex flex-col w-full gap-y-1 absolute bottom-0 left-0">
              <div className="rounded-md bg-gray-300 animate-pulse h-[16px] w-full"></div>
              <div className="rounded-md bg-gray-300 animate-pulse h-[16px] w-full"></div>
              <div className="rounded-md bg-gray-300 animate-pulse h-[16px] w-full"></div>
              <div className="rounded-md bg-gray-300 animate-pulse h-[16px] w-full"></div>
              <div className="rounded-md bg-gray-300 animate-pulse h-[16px] w-full"></div>
              <div className="rounded-md bg-gray-300 animate-pulse h-[16px] w-full"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-[25vh] gap-y-2">
          <div className="flex gap-x-2 w-full h-[30%]">
            <div className="bg-gray-300 w-[25%] h-full animate-pulse rounded-xl"></div>
            <div className="bg-gray-300 w-[25%] h-full animate-pulse rounded-xl"></div>
            <div className="bg-gray-300 w-[25%] h-full animate-pulse rounded-xl"></div>
            <div className="bg-gray-300 w-[25%] h-full animate-pulse rounded-xl"></div>
          </div>
          <div className="flex gap-y-1 h-[35%] w-full flex-col">
            <div className="bg-gray-300 w-full h-[72px] animate-pulse rounded-xl"></div>
            <div className="bg-gray-300 w-full h-[72px] animate-pulse rounded-xl"></div>
            <div className="bg-gray-300 w-full h-[72px] animate-pulse rounded-xl"></div>
          </div>
        </div>
      </section>
    </>
  );
}
