import { Box } from '@chakra-ui/react';
import NewComment from 'components/new-comment';
import Post from 'components/post';
import { usePost } from 'hooks/posts';
import { useParams } from 'react-router-dom';

export default function Comments() {
  const { id } = useParams<{ id: string }>();
  const { post, isLoading: postLoading } = usePost(id as string);

  if (postLoading) {
    return <Box>Loading...</Box>;
  }

  return (
    // @ts-ignore
    <Box align="center" pt="50">
      {post && <Post post={post} />}
      <NewComment post={post} />
    </Box>
  );
}
