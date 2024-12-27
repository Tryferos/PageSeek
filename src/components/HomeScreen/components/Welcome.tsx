import Image from 'next/image';

export const Welcome = () => {
  return (
    <div className="items-center flex flex-col justify-between h-[84.4vh] pt-4 bg-">
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
      <figure className="relative w-full h-[35vh] mt-20">
        <Image
          priority
          src={'/books-welcome.svg'}
          alt="Welcome to Books"
          fill
        />
      </figure>
      <footer className="w-[calc(100%+96px)] -ml-12 h-[140px] flex justify-center items-center relative">
        <Image
          src={'/bottom-blob.svg'}
          alt="Footer Blob"
          width={1920}
          height={240}
        />
      </footer>
    </div>
  );
};
