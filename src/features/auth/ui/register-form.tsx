import { GalleryVerticalEnd } from 'lucide-react';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { registerUser } from '@/features/auth/api';

import { cn } from '@/shared/lib/utils.ts';
import { Button } from '@/shared/ui/button.tsx';
import { Input } from '@/shared/ui/input.tsx';
import { Label } from '@/shared/ui/label.tsx';

export const RegisterForm = () => {
  const location = useLocation();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const params = new URLSearchParams(location.search);
  const redirectedEmail = params.get('email');
  React.useEffect(() => {
    if (redirectedEmail) setEmail(redirectedEmail);
  }, []);

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
    <div className={cn('flex flex-col gap-6')}>
      <form onSubmit={handleRegister}>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col items-center gap-2'>
            <a className='flex flex-col items-center gap-2 font-medium'>
              <div className='flex h-8 w-8 items-center justify-center rounded-md'>
                <GalleryVerticalEnd className='size-6' />
              </div>
              <span className='sr-only'>Acme Inc.</span>
            </a>
            <h1 className='text-xl font-bold'>
              <span>Create a New Account</span>
            </h1>
            <div className='text-center text-sm'>
              <span>Do you already have an Account? </span>
              <span className='cursor-pointer underline underline-offset-4'>
                <Link to='/login'>Log in</Link>
              </span>
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
                autoComplete={'email'}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                type='password'
                placeholder=''
                value={password}
                autoComplete='new-password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button onClick={handleRegister} type='submit' className='w-full'>
              <span>Create an Account</span>
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
};
