import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, StrictMode } from 'react';
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
import { PublicRoute } from '@/shared/ui/public-route';

import AuthPage from './auth/page';
import HomePage from './home/page';
import './styles/main.css';

const layoutTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};

function AnimatedRoute({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence mode='wait'>
      <motion.div {...layoutTransition}>{children}</motion.div>
    </AnimatePresence>
  );
}

function CustomRoutes() {
  return (
    <Routes>
      <Route path='/' element={<AnimatedRoute children={<HomePage />} />} />
      <Route
        path='/login'
        element={
          <PublicRoute>
            <AnimatedRoute children={<AuthPage />} />
          </PublicRoute>
        }
      />
      <Route
        path='/register'
        element={
          <PublicRoute>
            <AnimatedRoute children={<AuthPage />} />
          </PublicRoute>
        }
      />
    </Routes>
  );
}

// TODO: CREATE LOADING ANIMATION
function LayoutWrapper() {
  const location = useLocation();

  const { loading } = useAuth();

  if (loading) return <>Загрузка!!!!</>;

  const hideLayoutPaths = ['/login', '/register'];
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <AnimatedRoute children={<Header />} />}
      <CustomRoutes />
      {!shouldHideLayout && <AnimatedRoute children={<Footer />} />}
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
