import { RoundedSpan } from '@/shared/ui/rounded-span';

import { List } from './list';

export const HowItWorkSection = () => {
  return (
    <section className={'p-[128px_145px] w-full bg-white'}>
      <article className={'flex flex-col items-center gap-[8px] text-center'}>
        <RoundedSpan text={'How It Works'} />
        <h1 className={'text-[36px] font-bold tracking-tighter'}>
          Simple Steps to Boost Your Productivity
        </h1>
        <p className={'text-[20px] text-gray-500'}>
          Get started with TaskManager in minutes and transform how your team
          works.
        </p>
      </article>
      <article
        className={'flex justify-center items-center gap-6 mx-auto py-[48px]'}>
        <img
          src={'/how-it-work-section.png'}
          alt=''
          className={'w-[40%] object-cover rounded-3xl'}
        />
        <List />
      </article>
    </section>
  );
};
