import { create } from "zustand";

export type LoadingStore = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export const useLoadingStore = create<LoadingStore>((set) => ({
  loading: true,
  setLoading: (loading) => {
    set({ loading });
  },
}));
