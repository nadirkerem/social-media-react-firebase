import { Text } from '@chakra-ui/react';
import { PROTECTED } from 'lib/routes';
import { Link } from 'react-router-dom';

export default function UsernameText({
  user,
  isLoading,
  size,
  color,
}: {
  user: User | undefined;
  isLoading: boolean;
  size: string;
  color: string;
}) {
  return (
    <Text
      as={Link}
      to={`${PROTECTED}/profile/${user?.id}`}
      fontSize={size}
      color={color}
      fontWeight="bold"
      _hover={{ textDecoration: 'underline' }}
    >
      {isLoading ? <>Loading...</> : <>@{user?.username}</>}
    </Text>
  );
}
