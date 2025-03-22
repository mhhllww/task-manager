import { Clock } from 'lucide-react';

export const Logo = () => {
  return (
    <h1
      className={
        'text-xl font-bold flex items-center gap-[10px] cursor-pointer'
      }>
      <Clock />
      TaskManager
    </h1>
  );
};
