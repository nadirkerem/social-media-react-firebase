import { Box, Text } from '@chakra-ui/react';
import Post from './post';

export default function AllPosts({ posts }: { posts: Post[] | undefined }) {
  return (
    <Box maxW="600px" mx="auto">
      {posts && posts?.length > 0 ? (
        posts.map((post) => {
          return (
            <Box key={post.id} maxW="600px">
              <Post post={post}></Post>
            </Box>
          );
        })
      ) : (
        <Text textAlign="center" fontSize="xl">
          No posts found. You can add one by writing a post and clicking the
          button.
        </Text>
      )}
    </Box>
  );
}
