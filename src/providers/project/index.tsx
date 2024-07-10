import { useProjectStore } from "@/store/project";
import React, { ReactNode } from "react";

export default function ProjectProvider() {
  const [maximized, setMaximized] = useProjectStore((state) => [
    state.project,
    state.setProject,
  ]);

  if (maximized)
    return (
      <div className="fixed-full z-[99999999] flex-center" aria-modal>
        <div
          className="absolute-full bg-black/75"
          onClick={() => setMaximized(undefined)}
        ></div>
        <div className="absolute-full flex-center p-10 pointer-events-none">
          <video
            autoPlay
            loop
            controls
            className="max-w-full max-h-full pointer-events-auto"
            src={maximized}
          />
        </div>
      </div>
    );
}
