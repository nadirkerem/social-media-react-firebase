import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { formatDistanceToNow } from 'date-fns';
import { BsTrashFill } from 'react-icons/bs';

import { useUser } from 'hooks/users';

import Avatar from './avatar';
import UsernameText from './username-text';
import { useDeleteComment } from 'hooks/comments';
import { useAuth } from 'hooks/auth';

export default function Comment({ comment }: { comment: Comment }) {
  const { uid, id, text, date } = comment;
  const { user, isLoading: userLoading } = useUser(uid);
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { deleteComment, isLoading: deleteLoading } = useDeleteComment(id);

  if (userLoading || authLoading) return <>Loading...</>;

  return (
    <Box px="4" py="2" maxW="600px" mx="auto" textAlign="left">
      <Flex pb="2">
        <Avatar user={user} size="sm" />
        <Box flex="1" ml="4">
          <Flex
            borderBottom="1px solid"
            borderColor="cyan.600"
            alignItems="center"
            pb="2"
          >
            <UsernameText
              user={user}
              isLoading={userLoading}
              size="md"
              color="cyan.700"
            />
            <Flex ml="auto" alignItems="center">
              <Text fontSize="xs" color="gray.600">
                {formatDistanceToNow(date)} ago
              </Text>

              {!authLoading && authUser?.id === uid && (
                <IconButton
                  size="xs"
                  onClick={deleteComment}
                  isLoading={deleteLoading}
                  ml="auto"
                  colorScheme="black"
                  variant="ghost"
                  aria-label="Delete"
                  icon={<BsTrashFill />}
                  isRound
                ></IconButton>
              )}
            </Flex>
          </Flex>
          <Box pt="2" fontSize="sm">
            <Text>{text}</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
