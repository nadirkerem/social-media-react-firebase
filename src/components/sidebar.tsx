import { Box } from '@chakra-ui/react';

import ActiveUser from './active-user';

export default function Sidebar() {
  return (
    <Box
      px="6"
      height="100vh"
      w="100%"
      maxW="300px"
      position="sticky"
      top="16"
      display={{ md: 'block' }}
      bg="cyan.400"
    >
      <ActiveUser />
    </Box>
  );
}
