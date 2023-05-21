import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';

import Navbar from 'components/navbar';
import Sidebar from 'components/sidebar';

import { useAuth } from 'hooks/auth';
import { LOGIN } from 'lib/routes';

export default function Protected() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && pathname.startsWith('/') && !user) {
      navigate(LOGIN);
    }
  }, [isLoading, pathname, user]);

  return (
    <>
      <Box bg="#f0f2f5">
        <Navbar />
        <Flex pt="16" pb="12" mx="auto" w="full" maxW="1200px">
          <Sidebar />
          <Box w="900px">
            <Outlet />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
