import { useLocation } from 'react-router-dom';

import { Login, Register } from '@/pages/auth';

const AuthPage = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/login' && <Login />}
      {location.pathname === '/register' && <Register />}
    </>
  );
};

export default AuthPage;
