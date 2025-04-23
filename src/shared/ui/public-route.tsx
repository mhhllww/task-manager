import { JSX } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '@/shared/lib/hooks/useAuth';

export const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();

  if (user) return <Navigate to='/' />;

  return children;
};
