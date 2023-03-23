import { LOGIN } from 'lib/routes';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export default function Protected() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname.startsWith('/protected')) {
      navigate(LOGIN);
    }
  }, [pathname]);

  return (
    <>
      <Outlet />
    </>
  );
}
