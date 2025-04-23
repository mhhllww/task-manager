import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link
      to={'/'}
      children={
        <h1
          className={
            'text-xl font-bold flex items-center gap-[10px] cursor-pointer'
          }>
          <Clock />
          TaskManager
        </h1>
      }
    />
  );
};
