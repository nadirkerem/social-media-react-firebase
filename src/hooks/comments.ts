import { useToast } from '@chakra-ui/react';
import { uuidv4 } from '@firebase/util';
import {
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  orderBy,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { db } from 'lib/firebase';
import { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export function useAddComment({
  postID,
  uid,
}: {
  postID: string;
  uid: string | undefined;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  async function addComment(text: string) {
    setIsLoading(true);
    const id = uuidv4();
    const date = Date.now();
    const docRef = doc(db, 'comments', id);
    await setDoc(docRef, { text, id, date, postID, uid });

    toast({
      title: 'Comment added.',
      status: 'success',
      isClosable: true,
      position: 'top',
      duration: 5000,
    });

    setIsLoading(false);
  }

  return { addComment, isLoading };
}

export function useComments(postID: string) {
  const q = query(
    collection(db, 'comments') as CollectionReference<Comment>,
    where('postID', '==', postID),
    orderBy('date', 'asc')
  );

  const [comments, isLoading, error] = useCollectionData(q);

  if (error) throw error;

  return { comments, isLoading };
}

export function useDeleteComment(id: string) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useToast();

  async function deleteComment() {
    const res = window.confirm(
      'Are you sure you want to delete this comment? This action cannot be undone.'
    );

    if (res) {
      setIsLoading(true);
      const docRef = doc(db, 'comments', id);
      await deleteDoc(docRef);
      toast({
        title: 'Comment deleted.',
        status: 'success',
        isClosable: true,
        position: 'top',
        duration: 5000,
      });
      setIsLoading(false);
    }
  }

  return { deleteComment, isLoading };
}
