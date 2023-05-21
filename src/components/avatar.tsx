import { Avatar as ChakraAvatar } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Avatar({
  user,
  size,
}: {
  user: User | undefined;
  size: string;
}) {
  return (
    <ChakraAvatar
      name={user?.avatar ? '' : user?.username}
      colorScheme="green"
      size={size}
      src={user?.avatar}
      _hover={{ cursor: 'pointer' }}
    />
  );
}
