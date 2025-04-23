import { User, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { auth } from '@/shared/firebase.ts';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = Date.now();

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      const elapsed = Date.now() - start;
      const remaining = 2000 - elapsed;

      if (remaining > 0) {
        const timer = setTimeout(() => setLoading(false), remaining);
        return () => clearTimeout(timer);
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
};
