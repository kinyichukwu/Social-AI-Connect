import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  db,
} from "../utils/firebase/firebase.utils";

import { doc, getDoc } from "firebase/firestore";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
  userData: {},
  setUserData: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState({});
  const value = { currentUser, setCurrentUser, userData, setUserData };

  async function getUserData(user) {
    try{
      const docRef = doc(db, "users", user?.uid);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        setUserData({ ...docSnap?.data() });
      } else {
        setUserData({});
      }
    }catch(err){

    }
   
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
        getUserData(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
