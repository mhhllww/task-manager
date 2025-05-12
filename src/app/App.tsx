import { useAuth } from '@/features/auth/lib';

import RouteProvider from './providers/route-provider';

export function App() {
  const { loading } = useAuth();

  if (loading) return <>Загрузка!!!!</>;

  return <RouteProvider />;
}
