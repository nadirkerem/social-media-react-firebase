import { Box, Text } from '@chakra-ui/react';
import PostActions from './post-actions';
import PostHeader from './post-header';

export default function Post({ post }: { post: Post }) {
  const { text } = post;

  return (
    <Box py="2" maxW="600px">
      <Box border="2px solid" borderColor="gray.300" borderRadius="md">
        <PostHeader post={post} />
        <Box p="2" minH="100px">
          <Text wordBreak="break-word" fontSize={['sm', 'md']}>
            {text}
          </Text>
        </Box>
        <PostActions post={post} />
      </Box>
    </Box>
  );
}
