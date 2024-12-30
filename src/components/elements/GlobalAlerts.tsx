'use client';
import {InfoIcon} from '@/icons/Icons';
import {useAlerts} from '@/slices/alerts_store';
import {useEffect, useRef} from 'react';

export const GlobalAlerts = () => {
  const {alert, removeAlert} = useAlerts();

  if (!alert) {
    return null;
  } else {
    const styles =
      alert.type === 'Success'
        ? 'bg-success'
        : alert.type === 'Error'
          ? 'bg-error'
          : alert.type === 'Info'
            ? 'bg-info'
            : 'bg-warning';
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-start z-[1000] pointer-events-none">
        <div
          onClick={removeAlert}
          className={`w-[30%] cursor-pointer min-w-[250px] h-[64px] text-white ${styles} rounded-b-xl flex items-center gap-x-4 px-4 py-2 shadow-book-result bg-opacity-80 relative pointer-events-auto`}>
          {alert.type === 'Info' && <InfoIcon width={24} height={24} />}
          <p className="font-wotfardMd">{alert.message}</p>
        </div>
      </div>
    );
  }
};
