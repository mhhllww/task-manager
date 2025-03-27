import { Logo, RoundedButton, UnderlineLink } from '@/shared/ui';

export const Header = () => {
  return (
    <header
      className={
        'md:p-[0_120px] h-16 sticky top-0 border-b border-gray-300 backdrop-blur-2xl'
      }>
      <nav
        className={
          'h-full flex items-center justify-between text-[14px] font-medium'
        }>
        <Logo />
        <article className={'flex gap-[50px]'}>
          <UnderlineLink text={'Features'} />
          <UnderlineLink text={'How It Works'} />
          <UnderlineLink text={'FAQ'} />
        </article>
        <article className={'flex items-center gap-[50px]'}>
          <UnderlineLink text={'Log In'} />
          <RoundedButton
            text={'Get Started'}
            onClick={() => {}}
            btnType={'black'}
            btnSize={'small'}
          />
        </article>
      </nav>
    </header>
  );
};
