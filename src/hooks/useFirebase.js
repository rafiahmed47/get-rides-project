import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import initializeFirebase from '../Pages/Login/firebase/firebase.init';


initializeFirebase()

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true)

  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setIsLoading(false)
    });
    return () => unsubscribe;
  }, [])


  const logout = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
        // An error happened.
    })
        .finally(() => setIsLoading(false))
}


  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user)
      })
      .finally(() => setIsLoading(false))
  }

  return {
    user,
    signInWithGoogle,
    logout,
    isLoading
  };
};

export default useFirebase;