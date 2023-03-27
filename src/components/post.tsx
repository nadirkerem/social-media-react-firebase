import { Box, Text } from '@chakra-ui/react';

export default function Post({ post }: { post: any }) {
  const { text } = post;
  return (
    <Box py="2" maxW="600px">
      <Box border="2px solid" borderColor="gray.300" borderRadius="md">
        <Box p="2" minH="100px">
          <Text wordBreak="break-word" fontSize={['sm', 'md']}>
            {text}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
