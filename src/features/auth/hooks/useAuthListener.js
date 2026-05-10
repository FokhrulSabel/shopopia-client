import { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "@/lib/firebase";
import { logout, setCredentials } from "../store/authSlice";


export const useAuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(
          setCredentials({
            user: {
              id: user.uid,
              name: user.displayName,
              email: user.email,
              avatar: user.photoURL,
            },
            token: await user.getIdToken(),
          }),
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);
};
