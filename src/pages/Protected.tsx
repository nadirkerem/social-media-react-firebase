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
    if (!isLoading && pathname.startsWith('/protected') && !user) {
      navigate(LOGIN);
    }
  }, [isLoading, pathname, user]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
