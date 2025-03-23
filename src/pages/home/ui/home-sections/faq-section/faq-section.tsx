import { RoundedSpan } from '../../../../../shared/ui';

import { QuestionList } from './question-list.tsx';

export const FaqSection = () => {
  return (
    <section className={'p-[128px_145px] w-full bg-gray-100 flex flex-col'}>
      <article className={'flex flex-col items-center gap-[8px] text-center'}>
        <RoundedSpan text={'FAQ'} />
        <h1 className={'text-[36px] font-bold tracking-tighter'}>
          Frequently Asked Questions
        </h1>
        <p className={'text-[20px] text-gray-500'}>
          Find answers to common questions about TaskManager.
        </p>
      </article>
      <QuestionList />
    </section>
  );
};
