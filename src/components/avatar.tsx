import { Avatar as ChakraAvatar } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { PROTECTED } from 'lib/routes';

export default function Avatar({
  user,
  size,
}: {
  user: User | undefined;
  size: string;
}) {
  return (
    <ChakraAvatar
      as={Link}
      to={`${PROTECTED}/profile/${user?.id}`}
      name={user?.avatar ? '' : user?.username}
      colorScheme="green"
      size={size}
      src={user?.avatar}
      _hover={{ cursor: 'pointer' }}
    />
  );
}
