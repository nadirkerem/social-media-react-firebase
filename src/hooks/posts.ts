import { useState } from 'react';
import { useToast } from '@chakra-ui/toast';
import { uuidv4 } from '@firebase/util';
import {
  collection,
  CollectionReference,
  doc,
  query,
  setDoc,
  orderBy,
} from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

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
      createdAt: Date.now(),
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

export function usePosts() {
  const q = query(
    collection(db, 'posts') as CollectionReference<Post>,
    orderBy('createdAt', 'desc')
  );
  const [posts, isLoading, error] = useCollectionData<Post>(q);

  if (error) throw new Error(error.message);

  return { posts, isLoading };
}
