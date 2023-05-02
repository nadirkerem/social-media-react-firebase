import { Text, Flex, IconButton } from '@chakra-ui/react';
import { useAuth } from 'hooks/auth';
import { useToggleLike, useDeletePost } from 'hooks/posts';
import { PROTECTED } from 'lib/routes';
import { AiFillHeart, AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import { BsTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function PostActions({ post }: { post: Post }) {
  const { id, likes } = post;

  const { user, isLoading: authLoading } = useAuth();

  const isLiked = likes.includes(user?.id!);

  const { toggleLike, isLoading: likeLoading } = useToggleLike({
    id,
    isLiked,
    uid: user?.id!,
  });

  const { deletePost, isLoading: deleteLoading } = useDeletePost(id);

  return (
    <Flex>
      <Flex alignItems="center">
        <IconButton
          onClick={toggleLike}
          isLoading={likeLoading || authLoading}
          colorScheme="red"
          variant="ghost"
          aria-label="Like"
          icon={isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
          _hover={{ color: 'red.500' }}
          isRound
        />
        <Text fontSize="md">{likes.length}</Text>
      </Flex>
      <Flex alignItems="center" ml="2">
        <IconButton
          as={Link}
          to={`${PROTECTED}/comments/${id}`}
          colorScheme="yellow"
          variant="ghost"
          aria-label="Comment"
          icon={<AiOutlineComment />}
          _hover={{ color: 'yellow.500' }}
          isRound
        />
        1
      </Flex>
      <IconButton
        ml="auto"
        onClick={deletePost}
        isLoading={deleteLoading}
        colorScheme="black"
        variant="ghost"
        aria-label="Delete"
        icon={<BsTrashFill />}
        isRound
      />
    </Flex>
  );
}
