import { AuthForm } from '@/features/auth/ui';

import { FadingDiv } from '@/shared/ui/fading-div.tsx';

export const LoginPage = () => {
  return (
    <FadingDiv>
      <main
        className={'h-[100vh] flex flex-col items-center justify-center px-5'}>
        <AuthForm action={'login'} />
      </main>
    </FadingDiv>
  );
};
