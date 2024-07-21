import { create } from "zustand";

export type HeroStore = {
  isInView: boolean;
  setInView: (inView: boolean) => void;
};

export const useHeroStore = create<HeroStore>((set) => ({
  isInView: true,
  setInView: (inView) => {
    set({ isInView: inView });
  },
}));
