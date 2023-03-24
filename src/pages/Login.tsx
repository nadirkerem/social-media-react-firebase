import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Link,
  Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useLogin } from 'hooks/auth';
import { emailValidation, passwordValidation } from 'utils/form-validation';

import { REGISTER } from 'lib/routes';

export default function Login() {
  const { login, isLoading } = useLogin();
  const { register, handleSubmit } = useForm();

  return (
    <Center w="100%" h="100vh">
      <Box maxW="md" p="10" borderWidth="1px" borderRadius="sm">
        <Heading mb="5" size="lg" textAlign="center">
          Log Into Your Account
        </Heading>
        <form>
          <FormControl py="2">
            <Input
              type="email"
              placeholder="Email"
              {...register('email', emailValidation)}
            />
          </FormControl>
          <FormControl py="2">
            <Input
              type="password"
              placeholder="Password"
              {...register('password', passwordValidation)}
            />
          </FormControl>
          <Button mt="3" type="submit" colorScheme="cyan" w="full">
            Log In
          </Button>
        </form>
        <Text fontSize="lg" align="center" mt="5">
          Don't have an account yet?{' '}
          <Link
            as={RouterLink}
            to={REGISTER}
            color="cyan.800"
            _hover={{ color: 'cyan.600' }}
            fontWeight="medium"
          >
            Register Here
          </Link>
        </Text>
      </Box>
    </Center>
  );
}
