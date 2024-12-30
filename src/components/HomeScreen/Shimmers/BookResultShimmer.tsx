import {ImageIcon} from '@/icons/Icons';

export const BookResultShimmer = () => {
  return (
    <li className="basis-[45%] grow box-border min-w-[300px] max-w-[600px] small:w-full mobile:h-[165px] h-[150px] flex animate-pulse flex-col">
      <div className="flex w-full h-[13vh] mobile:h-[15vh]">
        <figure className="relative h-full w-[30%]">
          <ImageIcon width={'100%'} height={'100%'} />
        </figure>
        <div className="flex flex-col gap-y-1 h-full w-[70%] justify-center">
          <div className="w-full h-4 bg-gray-300 rounded-md animate-[pulse_1.2s_cubic-bezier(0.4,_0,_0.6,_1)_infinite]"></div>
          <div className="w-full h-4 bg-gray-300 rounded-md animate-[pulse_1.4s_cubic-bezier(0.4,_0,_0.6,_1)_infinite]"></div>
          <div className="w-full h-4 bg-gray-300 rounded-md animate-[pulse_1.6s_cubic-bezier(0.4,_0,_0.6,_1)_infinite]"></div>
          <div className="w-full h-4 bg-gray-300 rounded-md animate-[pulse_1.8s_cubic-bezier(0.4,_0,_0.6,_1)_infinite]"></div>
          <div className="w-full h-4 bg-gray-300 rounded-md animate-[pulse_2.0s_cubic-bezier(0.4,_0,_0.6,_1)_infinite]"></div>
        </div>
      </div>
      <div className="w-[calc(100%-2vw)] ml-[2vw] h-8 bg-gray-300 rounded-md"></div>
    </li>
  );
};
