'use client';
import {useAlerts} from '@/slices/alerts';
import {useEffect, useRef} from 'react';

export const GlobalAlerts = () => {
  const ref = useRef<HTMLDivElement>(null);
  const {alert, removeAlert} = useAlerts();

  useEffect(() => {
    if (ref.current && alert) {
      const {duration} = alert;
      ref.current.style.width = `${((duration / 1000) * 100) / (duration / 1000)}%`;
    }
  }, [alert, ref]);

  if (!alert) {
    return null;
  } else {
    const styles =
      alert.type === 'Success'
        ? 'bg-success'
        : alert.type === 'Error'
          ? 'bg-error'
          : 'bg-warning';
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-start z-[1000]">
        <div
          onClick={removeAlert}
          className={`w-[30%] cursor-pointer min-w-[250px] h-[64px] text-white ${styles} rounded-b-md flex flex-col gap-y-1 px-4 py-2 shadow-book-result bg-opacity-70 relative`}>
          <p>{alert.message}</p>
          <div
            ref={ref}
            className="absolute left-0 bottom-0 w-[1%] h-[2px] bg-white transition-all"></div>
        </div>
      </div>
    );
  }
};
