import { Box, Button, Flex, Input } from '@chakra-ui/react';
import Avatar from 'components/avatar';
import { useAuth } from 'hooks/auth';
import { useAddComment } from 'hooks/comments';
import { useForm } from 'react-hook-form';
import Spinner from './spinner';

export default function NewComment({ post }: { post: Post | undefined }) {
  const { id: postID } = post!;
  const { user, isLoading: authLoading } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const { addComment, isLoading: commentLoading } = useAddComment({
    postID,
    uid: user?.id,
  });

  function handleAddComment(data: any) {
    addComment(data.text);
    reset();
  }

  if (authLoading) return <>Loading...</>;

  return (
    <Box maxW="600px">
      <Flex p="4">
        <Avatar user={user} size="sm" />
        <Box flex="1" ml="4">
          <form onSubmit={handleSubmit(handleAddComment)}>
            <Box>
              <Input
                size="sm"
                variant="flushed"
                placeholder="Write a comment"
                autoComplete="off"
                {...register('text', { required: true })}
              />
            </Box>
            <Flex pt="2">
              <Button
                isLoading={commentLoading || authLoading}
                type="submit"
                colorScheme="cyan"
                size="sm"
                ml="auto"
              >
                Add Comment
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}
