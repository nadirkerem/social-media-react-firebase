import { Box, Flex, Text } from '@chakra-ui/react';
import { formatDistanceToNow } from 'date-fns';

import Avatar from 'components/avatar';

import { useUser } from 'hooks/users';
import UsernameText from './username-text';

export default function PostHeader({
  uid,
  createdAt,
}: {
  uid: string;
  createdAt: number;
}) {
  const { user, isLoading: userLoading } = useUser(uid);

  return (
    <Flex
      p="2"
      alignItems="center"
      borderBottom="2px solid"
      borderColor="gray.300"
      borderRadius="md"
      borderBottomRadius="none"
      m="-0.5"
      bg="gray.300"
    >
      <Box mr="2">
        <Avatar user={user} size="sm" />
      </Box>
      <UsernameText
        user={user}
        isLoading={userLoading}
        size="md"
        color="cyan.700"
      />
      <Text fontSize="xs" color="gray.600" ml="auto">
        {formatDistanceToNow(createdAt)} ago
      </Text>
    </Flex>
  );
}
