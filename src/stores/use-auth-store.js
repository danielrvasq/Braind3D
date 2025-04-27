import { create } from "zustand";
import { onAuthStateChanged, signInWithPopup, signOut   } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase.config";
import { log } from "three/tsl";

const useAuthStore = create((set) => {
  const observerAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      user ? set({ userLooged: user }) : set({ userLooged: null });
    });
  };
  observerAuthState();

  return {
    userLooged: null,
    loginGoogleWhithPopup: async () => {
      const provider = new GoogleAuthProvider();
      try {
        return await signInWithPopup(auth, new GoogleAuthProvider());
      } catch (error) {
        console.error("Error during login:", error);
      }
    },

    logout: async () => {
      signOut(auth) 
      .then(() => set({userLooged: null}))
      .catch((error) => console.error("Error during logout:", error));
    },
  };
});

export default useAuthStore;
