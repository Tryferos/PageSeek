'use client';

import {useAlerts} from '@/slices/alerts_store';
import {memo, useEffect, useState} from 'react';

export const HighlightedComponent = ({
  text = '',
  highlight = '',
  className = '',
}: {
  text: string;
  highlight: string;
  className?: string;
}) => {
  const [regex, setRegex] = useState<RegExp | undefined>(undefined);

  useEffect(() => {
    if (highlight.trim()) {
      setRegex(getRegex(highlight));
    } else {
      setRegex(undefined);
    }
  }, [highlight]);

  const getRegex = (highlight: string) => {
    try {
      const regex = new RegExp(`(${highlight})`, 'gi');
      useAlerts.getState().removeAlert();
      return regex;
    } catch (err: unknown) {
      useAlerts.getState().showAlert({
        type: 'Error',
        message: (err as {message: string})?.message ?? 'Invalid Regex Pattern',
      });
      return undefined;
    }
  };

  if (!regex) {
    return <span>{text}</span>;
  }

  const parts = regex ? text.split(regex) : [text];

  return (
    <span className={className}>
      {parts
        .filter(part => part)
        .map((part, i) => {
          if (regex && regex.test(part)) {
            return <mark key={i}>{part}</mark>;
          } else {
            return <span key={i}>{part}</span>;
          }
        })}
    </span>
  );
};

export const Highlighted = memo(HighlightedComponent);
