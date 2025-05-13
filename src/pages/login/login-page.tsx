import { LoginForm } from '@/features/auth/ui/login-form';

import { FadingDiv } from '@/shared/ui/fading-div';

export const LoginPage = () => {
  return (
    <FadingDiv>
      <main
        className={'h-[100vh] flex flex-col items-center justify-center px-5'}>
        <LoginForm />
      </main>
    </FadingDiv>
  );
};
