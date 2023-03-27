import { Box } from '@chakra-ui/react';

import AddPost from 'components/add-post';
import AllPosts from 'components/all-posts';
import Spinner from 'components/spinner';

import { usePosts } from 'hooks/posts';

export default function Dashboard() {
  const { posts, isLoading: postsLoading } = usePosts();

  return (
    <Box px="4">
      <AddPost />
      {postsLoading ? (
        <Box align="center">
          <Spinner />
        </Box>
      ) : (
        <AllPosts posts={posts} />
      )}
    </Box>
  );
}
