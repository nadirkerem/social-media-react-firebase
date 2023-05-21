import { Text } from '@chakra-ui/react';

export default function UsernameText({
  user,
  isLoading,
  size,
  color,
}: {
  user: User | undefined;
  isLoading: boolean;
  size: string;
  color: string;
}) {
  return (
    <Text fontSize={size} color={color} fontWeight="bold">
      {isLoading ? <>Loading...</> : <>@{user?.username}</>}
    </Text>
  );
}
