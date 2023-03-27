import { Spinner as ChakraSpinner } from '@chakra-ui/react';

export default function Spinner({ size }: { size: string }) {
  return (
    <ChakraSpinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="cyan.500"
      size={size}
    />
  );
}
