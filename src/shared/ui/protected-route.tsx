import { JSX } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '@/shared/hooks/useAuth';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Загрузка...</div>;
  if (!user) return <Navigate to='/login' />;

  return children;
};
