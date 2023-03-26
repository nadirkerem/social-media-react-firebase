import { Button, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Avatar from './avatar';

import { useAuth } from 'hooks/auth';

import { PROTECTED } from 'lib/routes';

export default function ActiveUser() {
  const { user, isLoading } = useAuth();

  return (
    <Stack align="center" spacing="5" marginTop="8" marginBottom="3">
      <Avatar user={user} size="xl"></Avatar>
      <Text
        as={Link}
        to={`${PROTECTED}/profile/${user?.id}`}
        fontWeight="bold"
        color="white"
        fontSize="2xl"
      >
        {isLoading ? <>Loading...</> : <>@{user?.username}</>}
      </Text>
      <Button as={Link} to={`${PROTECTED}/profile/${user?.id}`} w="full">
        Your Profile
      </Button>
    </Stack>
  );
}
