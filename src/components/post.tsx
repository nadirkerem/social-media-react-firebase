import { Box, Text } from '@chakra-ui/react';
import PostHeader from './post-header';

export default function Post({ post }: { post: Post }) {
  const { uid, text, createdAt } = post;

  return (
    <Box py="2" maxW="600px">
      <Box border="2px solid" borderColor="gray.300" borderRadius="md">
        <PostHeader uid={uid} createdAt={createdAt} />
        <Box p="2" minH="100px">
          <Text wordBreak="break-word" fontSize={['sm', 'md']}>
            {text}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
