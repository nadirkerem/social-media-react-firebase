import { Box, Button, Heading, HStack, Textarea } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import TextareaAutosize from 'react-textarea-autosize';

import { useAuth } from 'hooks/auth';
import { useAddPost } from 'hooks/posts';

export default function AddPost() {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addPostLoading } = useAddPost();
  const { user, isLoading: authLoading } = useAuth();

  async function handleAddPost(data: Pick<Post, 'text'>) {
    addPost({
      uid: user?.id as string,
      text: data.text,
    });
    reset();
  }

  return (
    <Box maxW="600px" py="10" ml="12">
      <form onSubmit={handleSubmit(({ text }) => handleAddPost({ text }))}>
        <HStack justify="space-between">
          <Heading size="xl">Share your thoughts</Heading>
          <Button
            type="submit"
            colorScheme="cyan"
            color="white"
            isLoading={authLoading || addPostLoading}
            loadingText="Loading"
          >
            Post
          </Button>
        </HStack>
        <Textarea
          as={TextareaAutosize}
          mt="5"
          resize="none"
          focusBorderColor="cyan.600"
          placeholder="What do you think?"
          {...register('text', { required: true })}
        ></Textarea>
      </form>
    </Box>
  );
}
