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
  updateDoc,
  arrayRemove,
  arrayUnion,
  DocumentReference,
} from 'firebase/firestore';
import {
  useCollectionData,
  useDocumentData,
} from 'react-firebase-hooks/firestore';

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

export function useToggleLike({
  id,
  isLiked,
  uid,
}: {
  id: string;
  isLiked: boolean;
  uid: string;
}) {
  const [isLoading, setIsLoading] = useState(false);

  async function toggleLike() {
    setIsLoading(true);
    const docRef = doc(db, 'posts', id);
    await updateDoc(docRef, {
      likes: isLiked ? arrayRemove(uid) : arrayUnion(uid),
    });
    setIsLoading(false);
  }

  return {
    toggleLike,
    isLoading,
  };
}

export function useDeletePost(id: string) {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  async function deletePost() {
    setIsLoading(true);
    await updateDoc(doc(db, 'posts', id), {
      deleted: true,
    });
    toast({
      title: 'Post deleted',
      status: 'success',
      ...toastOptions,
    });
    setIsLoading(false);
  }

  return { deletePost, isLoading };
}

export function usePost(id: string) {
  const q = doc(db, 'posts', id) as DocumentReference<Post>;
  const [post, isLoading] = useDocumentData<Post>(q);

  return { post, isLoading };
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
