import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type LoadingStore = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

const loadingStore = persist<LoadingStore>(
  (set) => ({
    loading: true,
    setLoading: (loading) => {
      set({ loading });
    },
  }),
  {
    name: "loading-store",
    storage: createJSONStorage(() => sessionStorage),
  }
);

export const useLoadingStore = create(loadingStore);
