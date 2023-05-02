import { useToast } from '@chakra-ui/react';
import { uuidv4 } from '@firebase/util';
import { doc, setDoc } from 'firebase/firestore';
import { db } from 'lib/firebase';
import { useState } from 'react';

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
    await setDoc(docRef, { text, id, date, postID });

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
