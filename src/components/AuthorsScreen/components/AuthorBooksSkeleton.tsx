export const AuthorBooksSkeleton = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="w-full h-[24px] bg-gray-300 rounded-md animate-pulse"></div>
      <div className="flex gap-x-2 w-full h-[20vh] ">
        <div className="w-[25%] h-full bg-gray-300 rounded-md animate-pulse"></div>
        <div className="w-[25%] h-full bg-gray-300 rounded-md animate-pulse"></div>
        <div className="w-[25%] h-full bg-gray-300 rounded-md animate-pulse"></div>
        <div className="w-[25%] h-full bg-gray-300 rounded-md animate-pulse"></div>
      </div>
    </div>
  );
};
