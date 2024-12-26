export default function PageSkeleton() {
  return (
    <section className="flex w-[100%] h-full gap-y-10 flex-col">
      <div className="flex gap-x-4 w-[100%] h-full relative">
        <div className="h-[55vh] w-[40%] bg-gray-300 animate-pulse rounded"></div>
        <div className="flex flex-col gap-y-2 w-[60%] h-[55vh] relative">
          <div className="rounded-md bg-gray-300 animate-pulse h-[40px] w-[70%]"></div>
          <div className="flex flex-col gap-y-1">
            <div className="rounded-md bg-gray-300 animate-pulse h-[96px] w-[70%]"></div>
          </div>
          <div className="flex flex-col w-full gap-y-1 absolute bottom-0 left-0">
            <div className="rounded-md bg-gray-300 animate-pulse h-[16px] w-[70%]"></div>
            <div className="rounded-md bg-gray-300 animate-pulse h-[16px] w-[70%]"></div>
            <div className="rounded-md bg-gray-300 animate-pulse h-[16px] w-[70%]"></div>
            <div className="rounded-md bg-gray-300 animate-pulse h-[16px] w-[70%]"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-[25vh] gap-y-2">
        <div className="flex gap-x-2 w-full h-[30%]">
          <div className="bg-gray-300 w-[20%] h-full animate-pulse rounded-xl"></div>
          <div className="bg-gray-300 w-[20%] h-full animate-pulse rounded-xl"></div>
          <div className="bg-gray-300 w-[20%] h-full animate-pulse rounded-xl"></div>
          <div className="bg-gray-300 w-[20%] h-full animate-pulse rounded-xl"></div>
        </div>
        <div className="flex gap-y-1 h-[20%] w-full flex-col">
          <div className="bg-gray-300 w-[calc(80%+24px)] h-[36px] animate-pulse rounded-xl"></div>
          <div className="bg-gray-300 w-[calc(80%+24px)] h-[32px] animate-pulse rounded-xl"></div>
          <div className="bg-gray-300 w-[calc(80%+24px)] h-[32px] animate-pulse rounded-xl"></div>
        </div>
      </div>
    </section>
  );
}
