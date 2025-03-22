import { Clock } from 'lucide-react';

export const Logo = () => {
  return (
    <h1 className={'flex items-center gap-[10px] cursor-pointer'}>
      <Clock />
      TaskManager
    </h1>
  );
};
