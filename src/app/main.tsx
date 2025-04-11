import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

import { useAuth } from '@/shared/hooks/useAuth';
// import { ProtectedRoute } from '@/shared/ui/protected-route.tsx';
import { PublicRoute } from '@/shared/ui/public-route';

import AuthPage from './auth/page';
import HomePage from './home/page';
import './styles/main.css';

function LayoutWrapper() {
  const { loading } = useAuth();

  if (loading) return <>Загрузка!!!!</>;

  const location = useLocation();
  const hideLayoutPaths = ['/login', '/register'];

  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Header />}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/login'
          element={
            <PublicRoute>
              <AuthPage />
            </PublicRoute>
          }
        />
        <Route
          path='/register'
          element={
            <PublicRoute>
              <AuthPage />
            </PublicRoute>
          }
        />
      </Routes>

      {!shouldHideLayout && <Footer />}
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <Router>
    <StrictMode>
      <LayoutWrapper />
    </StrictMode>
  </Router>
);
