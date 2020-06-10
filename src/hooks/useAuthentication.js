import { useEffect, useState } from "react";
import { auth } from "../firebase";

const useAuthentication = () => {
  const [userAuthenticated, saveUserAuthenticated] = useState(null);

  useEffect(() => {
    const aSubscriber = auth.onAuthStateChanged((user) => {
      if (user) {
        saveUserAuthenticated(auth.currentUser);
      } else {
        saveUserAuthenticated(null);
      }
    });

    return () => {
      aSubscriber();
    };
  }, []);
  return userAuthenticated;
};

export default useAuthentication;
