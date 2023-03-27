import { Box } from '@chakra-ui/react';

import ActiveUser from './active-user';

export default function Sidebar() {
  return (
    <Box
      px="4"
      height="100vh"
      w="100%"
      maxW="300px"
      mr="8"
      position="sticky"
      top="16"
      display={{ md: 'block' }}
      bg="cyan.400"
    >
      <ActiveUser />
    </Box>
  );
}
