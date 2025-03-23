import { RoundedSpan } from '../../../../../shared/ui';

import { List } from './list.tsx';

export const HowItWorkSection = () => {
  return (
    <section className={'p-[128px_145px] w-full bg-white'}>
      <article className={'flex flex-col items-center gap-[8px]'}>
        <RoundedSpan text={'How It Works'} />
        <h1 className={'text-[36px] font-bold tracking-tighter'}>
          Simple Steps to Boost Your Productivity
        </h1>
        <p className={'text-[20px] text-gray-500'}>
          Get started with TaskTracker in minutes and transform how your team
          works.
        </p>
      </article>
      <article
        className={'flex justify-center items-center gap-6 mx-auto py-[48px]'}>
        <img
          src={'public/how-it-work-section.png'}
          alt=''
          className={'w-[40%] object-cover rounded-3xl'}
        />
        <List />
      </article>
    </section>
  );
};
