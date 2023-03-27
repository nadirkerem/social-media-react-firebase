import { Button, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Avatar from './avatar';
import UsernameText from './username-text';

import { useAuth } from 'hooks/auth';

import { PROTECTED } from 'lib/routes';

export default function ActiveUser() {
  const { user, isLoading } = useAuth();

  return (
    <Stack align="center" spacing="5" marginTop="8" marginBottom="3">
      <Avatar user={user} size="xl" />
      <UsernameText
        user={user}
        isLoading={isLoading}
        size="2xl"
        color="white"
      />
      <Button as={Link} to={`${PROTECTED}/profile/${user?.id}`} w="full">
        Your Profile
      </Button>
    </Stack>
  );
}
