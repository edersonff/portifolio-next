import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type ProjectStore = {
  project: string | undefined;
  setProject: (project: string | undefined) => void;
};

const projectStore = persist<ProjectStore>(
  (set) => ({
    project: undefined,
    setProject: (project) => {
      set({ project });
    },
  }),
  {
    name: "project-store",
    storage: createJSONStorage(() => sessionStorage),
  }
);

export const useProjectStore = create(projectStore);
