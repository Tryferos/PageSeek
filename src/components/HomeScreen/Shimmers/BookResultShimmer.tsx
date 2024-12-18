export const BookResultShimmer = () => {
  return (
    <li className="basis-[45%] h-[35%] flex flex-col gap-4">
      <figure className="relative w-[15vh] min-w-[128px] h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-300 rounded-md"></div>
      </figure>
      <div className="flex gap-x-2 flex-col gap-y-2">
        <div className="h-4 w-full bg-gray-300 rounded-md"></div>
        <div className="h-4 w-full bg-gray-300 rounded-md"></div>
        <div className="h-3 w-full bg-gray-300 rounded-md"></div>
        <div className="h-3 w-full bg-gray-300 rounded-md"></div>
      </div>
    </li>
  );
};
