import { Box } from '@chakra-ui/react';
import { useComments } from 'hooks/comments';
import Comment from './comment';

export default function CommentList({ post }: { post: Post | undefined }) {
  const { id } = post!;
  const { comments, isLoading } = useComments(id);

  return (
    <Box>
      {!isLoading &&
        comments?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
    </Box>
  );
}
