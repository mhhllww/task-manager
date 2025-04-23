import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

export const CtaSection = () => {
  const router = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router(`/register?email=${encodeURIComponent(email)}`);
  };

  return (
    <section className={'w-full py-12 flex flex-col items-center'}>
      <article className={'text-center'}>
        <h1 className={'text-[36px] font-bold tracking-tighter'}>
          Ready to Transform Your Workflow?
        </h1>
        <p className={'text-[20px] text-gray-500'}>
          Join thousands of teams that use TaskManager to stay organized and
          boost productivity.
        </p>
      </article>
      <form onSubmit={handleSubmit} className={'mx-auto mt-[16px] flex gap-2'}>
        <Input
          type={'email'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='m@example.com'
          required
        />
        <Button type={'submit'}>Get Started</Button>
      </form>
      <p className={'mt-1 text-[12px] text-gray-500'}>
        Get started for free.{' '}
        <a href={''} className={'cursor-pointer underline'}>
          Terms & Conditions
        </a>
      </p>
    </section>
  );
};
