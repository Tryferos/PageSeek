import Image from 'next/image';

export const Welcome = () => {
  return (
    <div className="items-center flex flex-col justify-between h-[64.4vh] pt-4 small:mt-10 mt-16 relative">
      <div className="flex flex-col gap-y-2 items-center">
        <p className="texteffect text-2xl font-wotfardSb">PageSeek</p>
        <p className="font-wotfardRg text-xl text-center">
          Try searching for a{' '}
          <span className="font-wotfardMd">
            book<span className="font-wotfardRg">, an</span> author{' '}
            <span className="font-wotfardRg">or a</span> subject
          </span>
        </p>
      </div>
      <figure className="relative w-full h-[25vw] min-h-[250px] mt-20 z-[60] bg-transparent">
        <Image
          priority
          src={'/books-welcome.svg'}
          alt="Welcome to Books"
          fill
        />
      </figure>
      <Books />
    </div>
  );
};

const Books = () => {
  return (
    <div className="absolute right-24 bottom-12 mobile:hidden z-[60] small:right-12 small:scale-[0.8]">
      <div className="h-[30px] w-[120px] bg-orange-600 rotate-[115deg] shadow-[2px_-3px_0px_#000] booknoise relative flex justify-end">
        <p className="text-md rotate-180 text-gray-100 font-wotfardMd absolute bottom-[2px] right-2">
          Science
        </p>
      </div>
      <div className="h-[30px] absolute left-10 bottom-3 w-[150px] bg-cyan-700 rotate-[90deg] shadow-[2px_-3px_0px_#000] booknoise flex justify-end">
        <p className="text-md rotate-180 text-gray-100 font-wotfardMd absolute bottom-[2px] right-2">
          Fiction
        </p>
      </div>
      <div className="h-[30px] absolute -left-[74.9vw] bottom-[calc(-50%-12px)] w-[110px] bg-yellow-600 rotate-[155deg] shadow-[-2px_-3px_0px_#000] booknoise flex justify-end small:hidden">
        <p className="text-md rotate-180 text-gray-100 font-wotfardMd absolute bottom-[2px] right-2">
          Cooking
        </p>
      </div>
      <div className="h-[30px] absolute -left-[calc(76vw-100px)] -bottom-12 w-[100px] bg-lime-700 rotate-[180deg] shadow-[-2px_-3px_0px_#000] booknoise flex justify-end small:hidden">
        <p className="text-md rotate-180 text-gray-100 font-wotfardMd absolute bottom-[2px] right-2">
          Music
        </p>
      </div>
    </div>
  );
};
