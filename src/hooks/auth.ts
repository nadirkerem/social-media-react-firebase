import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { useToast, UseToastOptions } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { auth } from 'lib/firebase';

import { DASHBOARD, LOGIN } from 'lib/routes';

export function useAuth() {
  const [authUser, isLoading, error] = useAuthState(auth);

  return { user: authUser, isLoading, error };
}

const toastOptions: UseToastOptions = {
  duration: 6000,
  isClosable: true,
  position: 'top',
};

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  async function login({ email, password, redirectTo = DASHBOARD }: UserAuth) {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: 'You are successfully logged in',
        status: 'success',
        ...toastOptions,
      });
      navigate(redirectTo);
    } catch (error: any) {
      toast({
        title: 'An error occurred',
        description: error.message,
        status: 'error',
        ...toastOptions,
      });
      setIsLoading(false);
      return false;
    }
    setIsLoading(false);
    return true;
  }

  return { login, isLoading };
}

export function useLogout() {
  const [signOut, isLoading, error] = useSignOut(auth);
  const navigate = useNavigate();
  const toast = useToast();

  async function logout() {
    if (await signOut()) {
      toast({
        title: 'You are successfully logged out',
        status: 'success',
        ...toastOptions,
      });
      navigate(LOGIN);
    } else {
      toast({
        title: 'An error occurred',
        description: error?.message,
        status: 'error',
        ...toastOptions,
      });
    }
  }

  return { logout, isLoading };
}
