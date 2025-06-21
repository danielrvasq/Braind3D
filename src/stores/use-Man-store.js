import { create } from "zustand";

const useManStore = create((set) => ({
  Animation: "Flow",
  setAnimation: (animation) => set(() => ({ Animation: animation })),
}));

export default useManStore;