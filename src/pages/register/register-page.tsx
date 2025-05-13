import { RegisterForm } from '@/features/auth/ui';

import { FadingDiv } from '@/shared/ui/fading-div.tsx';

export const RegisterPage = () => {
  return (
    <FadingDiv>
      <main
        className={'h-[100vh] flex flex-col items-center justify-center px-5'}>
        <RegisterForm />
      </main>
    </FadingDiv>
  );
};
