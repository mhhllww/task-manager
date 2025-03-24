import { RoundedButton, TextInput } from '../../../../../shared/ui';

export const CtaSection = () => {
  return (
    <section className={'w-full py-12 flex flex-col items-center'}>
      <article className={'text-center'}>
        <h1 className={'text-[36px] font-bold tracking-tighter'}>
          Ready to Transform Your Workflow?
        </h1>
        <p className={'text-[20px] text-gray-500'}>
          Join thousands of teams that use TaskManager to stay organized and
          boost productivity.
        </p>
      </article>
      <form className={'mx-auto mt-[16px] flex gap-2'}>
        <TextInput label={'Enter your email'} />
        <RoundedButton
          text={'Get Started'}
          onClick={() => {}}
          btnSize={'small'}
          btnType={'black'}
        />
      </form>
      <p className={'mt-1 text-[12px] text-gray-500'}>
        Get started for free.{' '}
        <a href={''} className={'cursor-pointer underline'}>
          Terms & Conditions
        </a>
      </p>
    </section>
  );
};
