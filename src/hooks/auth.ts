import { useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { auth, db } from 'lib/firebase';
import isUsernameExists from 'utils/is-username-exists';

import { DASHBOARD, LOGIN } from 'lib/routes';
import { toastOptions } from 'utils/toast';

export function useAuth() {
  const [authUser, authLoading, error] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const userData = (await (
        await getDoc(doc(db, 'users', authUser!.uid))
      ).data()) as User;
      setUser(userData);
      setIsLoading(false);
    }

    if (!authLoading) {
      if (authUser) fetchData();
      else setIsLoading(false);
    }
  }, [authLoading]);

  return { user, isLoading, error };
}

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

export function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  async function register({
    username,
    email,
    password,
    redirectTo = DASHBOARD,
  }: UserAuth) {
    setIsLoading(true);

    const usernameExists = await isUsernameExists(username as string);

    if (usernameExists) {
      toast({
        title: 'An error occurred',
        description: 'Username already exists',
        status: 'error',
        ...toastOptions,
      });
      setIsLoading(false);
      return false;
    } else {
      try {
        const createdUser = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await setDoc(doc(db, 'users', createdUser.user.uid), {
          id: createdUser.user.uid,
          username: username!.toLowerCase(),
          avatar: '',
          email,
          createdAt: serverTimestamp(),
        });
        toast({
          title: 'You are successfully registered',
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
      } finally {
        setIsLoading(false);
      }
    }
  }

  return { register, isLoading };
}
