import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from '@/widgets/header';

import { useAuth } from '@/shared/lib/hooks/useAuth.ts';
import { AnimatedDiv } from '@/shared/ui/animated-div.tsx';
import { Loader } from '@/shared/ui/loader.tsx';
import { PublicRoute } from '@/shared/ui/public-route.tsx';

import AuthPage from './auth/page';
import HomePage from './home/page';
import StoreProvider from './providers/store-provider';

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
  const { loading } = useAuth();

  if (loading) return <Loader />;
  return (
    <>
      <Header />
      <CustomRoutes />
    </>
  );
}

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <LayoutWrapper />
      </Router>
    </StoreProvider>
  );
};

export default App;
