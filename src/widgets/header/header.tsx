import { Link } from 'react-router-dom';

import { signOutUser } from '@/features/auth/api';
import { useAuth } from '@/features/auth/lib';

import { Button } from '@/shared/ui/button.tsx';
import { Logo } from '@/shared/ui/logo.tsx';

export const Header = () => {
  const { user } = useAuth();

  const FeaturesClick = () => {
    const element = document.getElementById('features');
    element?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const HIWClick = () => {
    const element = document.getElementById('how-it-work');
    element?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const FAQClick = () => {
    const element = document.getElementById('faq');
    element?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <header
      className={
        'md:p-[0_120px] h-16 border-b border-gray-300 backdrop-blur-2xl'
      }>
      <nav
        className={
          'h-full flex items-center justify-between text-[14px] font-medium'
        }>
        <Logo />
        <article className={'flex gap-[50px]'}>
          <Button variant={'link'} onClick={() => FeaturesClick()}>
            Features
          </Button>
          <Button variant={'link'} onClick={() => HIWClick()}>
            How It Works
          </Button>
          <Button variant={'link'} onClick={() => FAQClick()}>
            FAQ
          </Button>
        </article>
        <article className={'flex items-center gap-[50px]'}>
          {!user && (
            <Link to='/login'>
              <Button variant='link'>Log In</Button>
            </Link>
          )}
          {user ? (
            <Button onClick={() => signOutUser()}>Log Out</Button>
          ) : (
            <Link to='/register'>
              <Button>Get Started</Button>
            </Link>
          )}
        </article>
      </nav>
    </header>
  );
};
