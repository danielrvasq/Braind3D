import { create } from "zustand";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase.config";

const provider = new GoogleAuthProvider();

const useAuthStore = create((set) => {
  const observeAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      user ? set({ userLooged: user }) : set({ userLooged: null });
    });
  };
  observeAuthState();

  return {
    userLooged: null,

    loginGoogleWithPopup: async () => {
      try {
        return await signInWithPopup(auth, provider);
      } catch (error) {
        console.error("Error loggin in: ", error);
      }
    },

    logout: async () => {
      return await signOut(auth)
        .then(() => set({ userLooged: null }))
        .catch((error) => console.error("Error loggin out: ", error));
    },
  };
});
