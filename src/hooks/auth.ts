import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { auth } from 'lib/firebase';

import { DASHBOARD } from 'lib/routes';

export function useAuth() {
  const [authUser, isLoading, error] = useAuthState(auth);

  return { user: authUser, isLoading, error };
}

type LoginProps = {
  email: string;
  password: string;
  redirectTo?: string;
};

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  async function login({
    email,
    password,
    redirectTo = DASHBOARD,
  }: LoginProps) {
    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: 'You are successfully logged in',
        status: 'success',
        duration: 6000,
        isClosable: true,
        position: 'top',
      });
      navigate(redirectTo);
    } catch (error: any) {
      toast({
        title: 'An error occurred',
        description: error.message,
        status: 'error',
        duration: 6000,
        isClosable: true,
        position: 'top',
      });
      return false;
    }
    setIsLoading(false);
    return true;
  }

  return { login, isLoading };
}
