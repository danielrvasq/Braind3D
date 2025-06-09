import { create } from "zustand";

const useOldmanStore = create((set) => ({
    currentAnimation: "Lost",
    setCurrentAnimation: (animation) => set(() => ({ currentAnimation: animation, })),
}));

export default useOldmanStore;