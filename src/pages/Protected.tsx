import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from 'hooks/auth';
import { LOGIN } from 'lib/routes';
import Navbar from 'components/navbar';

export default function Protected() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (pathname.startsWith('/protected') && !user) {
      navigate(LOGIN);
    }
  }, [pathname, user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
