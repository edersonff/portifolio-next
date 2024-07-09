import { useProjectStore } from "@/store/project";
import React, { ReactNode } from "react";

export default function ProjectProvider() {
  const [maximized, setMaximized] = useProjectStore((state) => [
    state.project,
    state.setProject,
  ]);

  if (maximized)
    return (
      <>
        <div
          className="fixed-full z-[999] bg-black bg-opacity-90 flex-center"
          aria-modal
        >
          <div
            className="relative w-full h-full"
            onClick={() => setMaximized(undefined)}
          >
            <div className="absolute-full z-10"></div>
            <div className="absolute-full z-20 flex-center p-10 pointer-events-none">
              <video
                autoPlay
                loop
                controls
                className="max-w-full max-h-full pointer-events-auto"
                src={maximized}
              />
            </div>
          </div>
        </div>
      </>
    );
}
