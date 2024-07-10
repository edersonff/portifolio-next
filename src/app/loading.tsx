"use client";

import { useLoadingStore } from "@/store/loading";
import { motion } from "framer-motion";
import React, { useEffect } from "react";

export default function Loading({ isComponent }: { isComponent: boolean }) {
  const setLoading = useLoadingStore((state) => state.setLoading);
  useEffect(() => {
    if (isComponent) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [isComponent]);

  return (
    <motion.div
      className="fixed-full z-[99999999] flex-center small:px-6 bg-gradient-to-br from-neutral-950 to-neutral-900 overflow-hidden"
      animate={{ height: "100vh" }}
      exit={{ height: "0vh" }}
      transition={{
        duration: 1,
        delay: 1,
        type: "tween",
      }}
    >
      <motion.div
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1,
          delay: 0,
          type: "tween",
        }}
        className="mx-auto w-[500px] small:w-full max-w-[80vw] bg-gray-950 min-h-52 rounded-xl overflow-hidden drop-shadow-xl"
      >
        <div className="bg-[#333] flex items-center p-[5px] text-whitec relative">
          <div className="flex absolute left-3">
            <span className="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2"></span>
            <span className="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2"></span>
            <span className="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl"></span>
          </div>
          <div className="flex-1 text-center text-white">
            Portfolio - Ederson
          </div>
        </div>
        <div className="p-2.5 text-[#0f0]">
          <div>
            <span className="mr-2">Loading</span>
            <span className="animate-[ping_1.5s_0.5s_ease-in-out_infinite]">
              .
            </span>
            <span className="animate-[ping_1.5s_0.7s_ease-in-out_infinite]">
              .
            </span>
            <span className="animate-[ping_1.5s_0.9s_ease-in-out_infinite]">
              .
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
