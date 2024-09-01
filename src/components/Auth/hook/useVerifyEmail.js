import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../../../services/firebase';

export const useVerifyEmail = () => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.emailVerified) {
        setStatus('emailVerified');
        return;
      }

      if (user?.emailVerified == false) {
        setStatus('verifyEmail');
        return;
      }

      setStatus('loggedOut');
    });
  }, []);

  return {
    setStatus,
    status,
  };
};
