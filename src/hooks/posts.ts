import { useState } from 'react';
import { useToast } from '@chakra-ui/toast';
import { uuidv4 } from '@firebase/util';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

import { db } from 'lib/firebase';
import { toastOptions } from 'utils/toast';

export function useAddPost() {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  async function addPost(post: { text: string; uid: string }) {
    setIsLoading(true);
    const id = uuidv4();
    const newPost: Post = {
      ...post,
      id,
      createdAt: serverTimestamp(),
      likes: [],
    };
    await setDoc(doc(db, 'posts', id), newPost);
    toast({
      title: 'Post created',
      status: 'success',
      ...toastOptions,
    });
    setIsLoading(false);
  }

  return { addPost, isLoading };
}
