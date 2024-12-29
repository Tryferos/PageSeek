import {ReactNode, useEffect, useRef} from 'react';

export const Tooltip = ({
  children,
  text,
}: {
  children: ReactNode;
  text?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const checkRef = useRef<() => void>();

  useEffect(() => {
    const checkProximity = () => checkRef.current?.();
    window.addEventListener('resize', checkProximity);
    return () => {
      window.removeEventListener('resize', checkProximity);
    };
  }, [checkRef]);

  useEffect(() => {
    checkRef.current = () => {
      if (ref.current) {
        const isRefCloseToEnd =
          ref.current.getBoundingClientRect().right > window.innerWidth;
        const isCloseToStart = ref.current.getBoundingClientRect().left < 0;
        if (isRefCloseToEnd || isCloseToStart) {
          ref.current.style.left = isRefCloseToEnd ? 'auto' : '0';
          ref.current.style.right = isRefCloseToEnd ? '0' : 'auto';
          if (indicatorRef.current) {
            if (isRefCloseToEnd) {
              indicatorRef.current.style.right = '8px';
            } else {
              indicatorRef.current.style.left = '8px';
            }
          }
        }
      }
    };

    checkRef.current();
  }, [ref]);

  if (!text) {
    return <>{children}</>;
  } else {
    return (
      <div className="w-full h-full group relative">
        {children}
        <div
          ref={ref}
          className="absolute group-hover:opacity-100 hover:opacity-100 opacity-0 pointer-events-none rounded-md hover:pointer-events-auto text-center justify-center items-center right-[-50%] top-[calc(100%+8px)] transition-all bg-white shadow-book-result-hover">
          <div
            ref={indicatorRef}
            className="absolute -top-[8px] right-[calc(50%-6px)] size-4 rotate-45 bg-white"></div>
          <p className="grow basis-auto flex w-full box-border min-w-[175px] justify-center text-center text-secondary text-sm font-wotfardMd px-2 py-2">
            {text}
          </p>
        </div>
      </div>
    );
  }
};
