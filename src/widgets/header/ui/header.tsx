import { Button } from '@/shared/ui/button';
import { Logo } from '@/shared/ui/logo';

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
          <Button variant={'link'}>Features</Button>
          <Button variant={'link'}>How It Works</Button>
          <Button variant={'link'}>FAQ</Button>
        </article>
        <article className={'flex items-center gap-[50px]'}>
          <Button variant={'link'}>Log In</Button>
          <Button>Get Started</Button>
        </article>
      </nav>
    </header>
  );
};
