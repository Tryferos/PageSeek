import {ImageIcon} from '@/icons/Icons';

export const BookResultShimmer = () => {
  return (
    <li className="basis-[45%] h-full flex animate-pulse flex-col">
      <div className="flex w-full h-[13vh]">
        <figure className="relative h-full w-[15vh]">
          <ImageIcon width={'100%'} height={'100%'} />
        </figure>
        <div className="flex flex-col gap-y-1 h-full w-[60%] justify-center">
          <div className="w-full h-4 bg-gray-300 rounded-md animate-[pulse_1.2s_cubic-bezier(0.4,_0,_0.6,_1)_infinite]"></div>
          <div className="w-full h-4 bg-gray-300 rounded-md animate-[pulse_1.4s_cubic-bezier(0.4,_0,_0.6,_1)_infinite]"></div>
          <div className="w-full h-4 bg-gray-300 rounded-md animate-[pulse_1.6s_cubic-bezier(0.4,_0,_0.6,_1)_infinite]"></div>
          <div className="w-full h-4 bg-gray-300 rounded-md animate-[pulse_1.8s_cubic-bezier(0.4,_0,_0.6,_1)_infinite]"></div>
          <div className="w-full h-4 bg-gray-300 rounded-md animate-[pulse_2.0s_cubic-bezier(0.4,_0,_0.6,_1)_infinite]"></div>
        </div>
      </div>
      <div className="w-[calc(60%+15vh)] h-8 bg-gray-300 rounded-md "></div>
    </li>
  );
};
