import { LoginForm } from '@/pages/auth';

export const Register = () => {
  return (
    <main
      className={'h-[100vh] flex flex-col items-center justify-center px-5'}>
      <LoginForm action={'register'} />
    </main>
  );
};
