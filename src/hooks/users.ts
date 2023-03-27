import { doc, DocumentReference } from 'firebase/firestore';
import { db } from 'lib/firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';

export function useUser(id: string) {
  const q = doc(db, 'users', id) as DocumentReference<User>;
  const [user, isLoading] = useDocumentData<User>(q);
  return { user, isLoading };
}
