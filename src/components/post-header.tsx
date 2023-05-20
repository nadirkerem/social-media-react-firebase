import { Box, Flex, Text } from '@chakra-ui/react';
import { formatDistanceToNow } from 'date-fns';

import Avatar from 'components/avatar';

import { useUser } from 'hooks/users';
import UsernameText from './username-text';
import { Link } from 'react-router-dom';
import { PROTECTED } from 'lib/routes';

export default function PostHeader({ post }: { post: Post }) {
  const { uid, id, createdAt } = post;
  const { user, isLoading: userLoading } = useUser(uid);

  return (
    <Flex
      p="2"
      alignItems="center"
      borderBottom="2px solid"
      borderColor="gray.300"
      borderRadius="sm"
      borderBottomRadius="none"
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
      <Text
        as={Link}
        to={`${PROTECTED}/comments/${id}`}
        fontSize="xs"
        color="gray.600"
        ml="auto"
      >
        {formatDistanceToNow(createdAt)} ago
      </Text>
    </Flex>
  );
}
