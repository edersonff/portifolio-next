import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Resolution = "max" | "min";

export type ResolutionStore = {
  resolution: Resolution;
  setResolution: (resolution: Resolution) => void;
};

const resolutionStore = persist<ResolutionStore>(
  (set) => ({
    resolution: "max",
    setResolution: (resolution) => {
      set({ resolution });
    },
  }),
  {
    name: "resolution-store",
    storage: createJSONStorage(() => sessionStorage),
  }
);

export const useResolutionStore = create(resolutionStore);
