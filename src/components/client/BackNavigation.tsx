'use client';
import {BackIcon} from '@/icons/Icons';
import {useRouter} from 'next/navigation';

export const BackNavigation = () => {
  const router = useRouter();
  const onBack = () => {
    router.push('/');
  };
  return <BackIcon width={24} height={24} onClick={onBack} />;
};
