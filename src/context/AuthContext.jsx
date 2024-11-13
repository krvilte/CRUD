import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../config/firebase";

const methods = {
  user: () => {},
  logIn: () => {},
  signUp: () => {},
  logOut: () => {},
  googleSignIn: () => {},
};

//Create Context
const authContext = createContext(methods);

//Consume Contest
export const useAuthContext = () => {
  return useContext(authContext);
};

// Provide Context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  //Login with email and password
  const logIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error;
    }
  };

  //Signup with email and password
  const signUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error;
    }
  };

  // Signin with google
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      throw error;
    }
  };

  // Logout user
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      throw error;
    }
  };

  return (
    <authContext.Provider value={{ user, logIn, signUp, logOut, googleSignIn }}>
      {children}
    </authContext.Provider>
  );
};
