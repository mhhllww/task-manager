import { RoundedSpan } from '@/pages/home/ui/rounded-span';

import { CARDS } from '../consts';

import { FeatureCard } from './feature-card';

export const FeaturesSection = () => {
  return (
    <section
      id={'features'}
      className={
        'md:p-[192px_145px] w-full bg-gray-100 flex justify-center items-center gap-50'
      }>
      <article className={'flex flex-col items-center gap-[8px] text-center'}>
        <RoundedSpan text={'Features'} />
        <h1 className={'text-[36px] font-bold tracking-tighter'}>
          Everything You Need to Stay Organized
        </h1>
        <p className={'text-[20px] text-gray-500'}>
          TaskManager combines powerful features with an intuitive interface to
          help you manage work effectively.
        </p>
        <div
          className={'max-w-[64rem] py-[48px] mx-auto grid gap-6 grid-cols-3'}>
          {CARDS.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </article>
    </section>
  );
};
