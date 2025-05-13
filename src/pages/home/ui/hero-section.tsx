import { CheckCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useScrollToRef } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui/button';

export const HeroSection = () => {
  return (
    <section className={'md:p-[192px_145px] flex items-center gap-50'}>
      <article className={'flex flex-col gap-[10px]'}>
        <h1 className={'text-[60px] font-bold tracking-tighter leading-16'}>
          Manage Tasks Effortlessly, Boost Productivity
        </h1>
        <p className={'text-gray-500 text-[20px]'}>
          TaskManager helps teams organize, track, and complete work
          efficiently. Streamline your workflow and never miss a deadline again.
        </p>
        <nav className={'flex gap-[10px] font-semibold text-[14px]'}>
          <Link to='/register'>
            <Button>Get Started for Free</Button>
          </Link>
          <Button
            onClick={() => useScrollToRef('how-it-work')}
            variant={'outline'}>
            See How It Works
            <ChevronRight className='ml-1 h-4 w-4' />
          </Button>
        </nav>
        <div className={'flex items-center gap-[8px] text-[14px]'}>
          <CheckCircle className='h-4 w-4 text-primary' />
          <span>No credit card required</span>
        </div>
      </article>
      <img
        src={'/hero-section.png'}
        alt=''
        className={'w-[50%] object-cover rounded-3xl'}
      />
    </section>
  );
};
