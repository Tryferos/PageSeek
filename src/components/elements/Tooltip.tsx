import {ReactNode, useEffect, useRef} from 'react';

export const Tooltip = ({
  children,
  text,
}: {
  children: ReactNode;
  text: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      const isRefCloseToEnd =
        ref.current.getBoundingClientRect().right > window.innerWidth;
      if (isRefCloseToEnd) {
        ref.current.style.left = 'auto';
        ref.current.style.right = '0';
        if (indicatorRef.current) {
          indicatorRef.current.style.right = '8px';
        }
      }
    }
  }, [ref]);
  return (
    <div className="w-full h-full group relative">
      {children}
      <div
        ref={ref}
        className="absolute group-hover:opacity-100 hover:opacity-100 opacity-0 pointer-events-none rounded-md hover:pointer-events-auto py-2 text-center justify-center items-center -left-[50%] top-[calc(100%+8px)] transition-all bg-white  shadow-book-result-hover">
        <div
          ref={indicatorRef}
          className="absolute -top-[8px] right-[calc(50%-6px)] size-4 rotate-45 bg-white"></div>
        <p className="grow basis-auto flex w-full box-border min-w-[175px] justify-center text-center">
          {text}
        </p>
      </div>
    </div>
  );
};
