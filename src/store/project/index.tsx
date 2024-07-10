import { create } from "zustand";

export type ProjectStore = {
  project: string | undefined;
  setProject: (project: string | undefined) => void;
};

export const useProjectStore = create<ProjectStore>((set) => ({
  project: undefined,
  setProject: (project) => {
    set({ project });
  },
}));
