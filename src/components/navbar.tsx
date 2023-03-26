import { Button, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import { useLogout } from 'hooks/auth';

import { DASHBOARD } from 'lib/routes';

export default function Navbar() {
  const { logout, isLoading } = useLogout();

  return (
    <Flex
      pos="fixed"
      justify="center"
      width="full"
      height="16"
      zIndex="2"
      borderBottom="1px solid"
      borderColor="gray.200"
      bg="cyan.400"
    >
      <Flex w="full" maxW="1200px" align="center" px="4" bg="cyan.400">
        <Link
          as={RouterLink}
          to={DASHBOARD}
          fontWeight="bold"
          color="white"
          _hover={{
            textDecoration: 'none',
          }}
        >
          Home
        </Link>
        <Button ml="auto" size="sm" onClick={logout} isLoading={isLoading}>
          Logout
        </Button>
      </Flex>
    </Flex>
  );
}
