import { Logo } from '@/shared/ui/logo';

import { FooterSection } from './ui';

export const Footer = () => {
  return (
    <footer
      className={
        'p-[48px_120px] grid gap-8 sm:grid-cols-2 md:grid-cols-4 border-b border-t'
      }>
      <article>
        <Logo />
        <p className={'text-[14px] text-gray-500'}>
          Streamline your workflow and boost productivity with our intuitive
          task management platform.
        </p>
        <nav></nav>
      </article>
      <FooterSection />
      <span className={'text-gray-500 text-[12px]'}>
        © 2025 TaskTracker. All rights reserved.
      </span>
    </footer>
  );
};
