import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Link,
  Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useRegister } from 'hooks/auth';
import {
  emailValidation,
  passwordValidation,
  usernameValidation,
} from 'utils/form-validation';

import { DASHBOARD, LOGIN } from 'lib/routes';

export default function Register() {
  const { register: signUp, isLoading } = useRegister();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function handleRegister(data: UserAuth) {
    const signedUp = await signUp({
      username: data.username,
      email: data.email,
      password: data.password,
      redirectTo: DASHBOARD,
    });

    if (signedUp) reset();
  }

  return (
    <Center w="100%" h="100vh">
      <Box maxW="md" p="10" borderWidth="1px" borderRadius="sm">
        <Heading mb="5" size="lg" textAlign="center">
          Create Your Account
        </Heading>
        <form
          onSubmit={handleSubmit(({ username, email, password }) =>
            handleRegister({ username, email, password })
          )}
        >
          <FormControl isInvalid={!!errors.username} py="2">
            <Input
              type="text"
              placeholder="Username"
              {...register('username', usernameValidation)}
            />
            <FormErrorMessage>
              {errors.email?.message as string}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.email} py="2">
            <Input
              type="email"
              placeholder="Email"
              {...register('email', emailValidation)}
            />
            <FormErrorMessage>
              {errors.email?.message as string}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.password} py="2">
            <Input
              type="password"
              placeholder="Password"
              {...register('password', passwordValidation)}
            />
            <FormErrorMessage>
              {errors.password?.message as string}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt="3"
            type="submit"
            colorScheme="cyan"
            w="full"
            isLoading={isLoading}
            loadingText="Signing Up"
          >
            Register
          </Button>
        </form>
        <Text fontSize="lg" align="center" mt="5">
          Already have an account?{' '}
          <Link
            as={RouterLink}
            to={LOGIN}
            color="cyan.800"
            _hover={{ color: 'cyan.600' }}
            fontWeight="medium"
          >
            Login Here
          </Link>
        </Text>
      </Box>
    </Center>
  );
}
