import { Text, Flex, IconButton } from '@chakra-ui/react';
import { useAuth } from 'hooks/auth';
import { useToggleLike } from 'hooks/posts';
import { PROTECTED } from 'lib/routes';
import { AiFillHeart, AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
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

  return (
    <Flex p="2">
      <Flex alignItems="center">
        <IconButton
          onClick={toggleLike}
          isLoading={likeLoading || authLoading}
          size="md"
          colorScheme="red"
          variant="ghost"
          aria-label="Like"
          icon={isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
          isRound
        />
        <Text fontSize="md">{likes.length}</Text>
      </Flex>
      <Flex alignItems="center" ml="2">
        <IconButton
          as={Link}
          to={`${PROTECTED}/comments/${id}`}
          // onClick={}
          // isLoading={}
          size="md"
          colorScheme="yellow"
          variant="ghost"
          aria-label="Comment"
          icon={<AiOutlineComment />}
          isRound
        />
        {/* <Text fontSize="md">{comments.length}</Text> */}1
      </Flex>
    </Flex>
  );
}
