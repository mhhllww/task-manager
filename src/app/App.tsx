import { Route, Routes, useLocation } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

import { useAuth } from '@/shared/hooks/useAuth.ts';
import { AnimatedDiv } from '@/shared/ui/animated-div.tsx';
import { PublicRoute } from '@/shared/ui/public-route.tsx';

import AuthPage from './auth/page';
import HomePage from './home/page';

function CustomRoutes() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <AnimatedDiv>
            <HomePage />
          </AnimatedDiv>
        }
      />

      <Route
        path='/login'
        element={
          <PublicRoute>
            <AnimatedDiv>
              <AuthPage />
            </AnimatedDiv>
          </PublicRoute>
        }
      />

      <Route
        path='/register'
        element={
          <PublicRoute>
            <AnimatedDiv>
              <AuthPage />
            </AnimatedDiv>
          </PublicRoute>
        }
      />
    </Routes>
  );
}

function LayoutWrapper() {
  const location = useLocation();

  const { loading } = useAuth();

  // TODO: CREATE LOADING ANIMATION
  if (loading) return <>Загрузка!!!!</>;

  const hideLayoutPaths = ['/login', '/register'];
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && (
        <AnimatedDiv className={'sticky top-0'}>
          <Header />
        </AnimatedDiv>
      )}

      <CustomRoutes />

      {!shouldHideLayout && (
        <AnimatedDiv>
          <Footer />
        </AnimatedDiv>
      )}
    </>
  );
}

const App = () => {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
};

export default App;
