import { Box } from '@chakra-ui/react';
import { useComments } from 'hooks/comments';
import Comment from './comment';

export default function CommentList({ post }: { post: Post | undefined }) {
  const { id } = post!;
  const { comments, isLoading } = useComments(id);

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box>
      {comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </Box>
  );
}
