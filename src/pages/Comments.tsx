import { useNavigate, useParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import { usePost } from 'hooks/posts';

import Post from 'components/post';
import NewComment from 'components/new-comment';
import CommentList from 'components/comment-list';

export default function Comments() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { post, isLoading: postLoading } = usePost(id as string);

  if (!post) {
    return navigate('/protected/dashboard');
  }

  if (postLoading) {
    return <Box>Loading...</Box>;
  }

  return (
    // @ts-ignore
    <Box align="center" pt="50">
      {post && <Post post={post} />}
      <NewComment post={post} />
      <CommentList post={post} />
    </Box>
  );
}
