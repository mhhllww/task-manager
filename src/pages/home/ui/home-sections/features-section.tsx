import { RoundedSpan } from '../../../../shared/ui';

export const FeaturesSection = () => {
  return (
    <section className={'p-[128px_145px] w-full bg-gray-100'}>
      <article className={'flex flex-col items-center gap-[8px]'}>
        <RoundedSpan text={'Features'} />
        <h1 className={'text-[36px] font-bold tracking-tighter'}>
          Everything You Need to Stay Organized
        </h1>
        <p className={'text-[20px] text-gray-500'}>
          TaskTracker combines powerful features with an intuitive interface to
          help you manage work effectively.
        </p>
      </article>
    </section>
  );
};
