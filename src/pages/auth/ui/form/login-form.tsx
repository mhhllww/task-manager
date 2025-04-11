import { GalleryVerticalEnd } from 'lucide-react';
import { useState } from 'react';

import { loginUser, registerUser } from '@/features/auth/firebase-auth.ts';

import { cn } from '@/shared/lib/utils.ts';
import { Button } from '@/shared/ui/button.tsx';
import { Input } from '@/shared/ui/input.tsx';
import { Label } from '@/shared/ui/label.tsx';

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [action, setAction] = useState<'login' | 'register'>('login');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      window.location.href = '/';
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerUser(email, password);
      window.location.href = '/';
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <form onSubmit={action === 'login' ? handleLogin : handleRegister}>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col items-center gap-2'>
            <a className='flex flex-col items-center gap-2 font-medium'>
              <div className='flex h-8 w-8 items-center justify-center rounded-md'>
                <GalleryVerticalEnd className='size-6' />
              </div>
              <span className='sr-only'>Acme Inc.</span>
            </a>
            <h1 className='text-xl font-bold'>
              {action === 'login' ? (
                <span>Welcome to Task Manager</span>
              ) : (
                <span>Create a New Account</span>
              )}
            </h1>
            <div className='text-center text-sm'>
              {action === 'login' ? (
                <span>Don&apos;t have an Account? </span>
              ) : (
                <span>Do you already have an Account? </span>
              )}
              <a
                onClick={
                  action === 'login'
                    ? () => setAction('register')
                    : () => setAction('login')
                }
                className='cursor-pointer underline underline-offset-4'>
                {action === 'login' ? (
                  <span>Sign up</span>
                ) : (
                  <span>Log in</span>
                )}
              </a>
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='m@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                type='password'
                placeholder=''
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type='submit' className='w-full'>
              {action === 'login' ? (
                <span>Login</span>
              ) : (
                <span>Create an Account</span>
              )}
            </Button>
          </div>
          <div className='relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border'>
            <span className='relative z-10 bg-background px-2 text-muted-foreground'>
              Or
            </span>
          </div>
          <div className='grid gap-4'>
            <Button variant='outline' className='w-full'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path
                  d='M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z'
                  fill='currentColor'
                />
              </svg>
              Continue with Google
            </Button>
          </div>
        </div>
      </form>
      <div className='text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  '>
        By clicking continue, you agree to our <a href='#'>Terms of Service</a>{' '}
        and <a href='#'>Privacy Policy</a>.
      </div>
    </div>
  );
}
