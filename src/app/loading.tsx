"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function Loading() {
  return (
    <motion.div
      className="fixed-full z-[999] flex-center bg-gradient-to-br from-neutral-950 to-neutral-900"
      animate={{ height: "100vh", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <div className="mx-auto w-[500px] bg-gray-950 min-h-52 rounded-xl overflow-hidden drop-shadow-xl">
        <div className="bg-[#333] flex items-center p-[5px] text-whitec relative">
          <div className="flex absolute left-3">
            <span className="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2"></span>
            <span className="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2"></span>
            <span className="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl"></span>
          </div>
          <div className="flex-1 text-center text-white">
            Portifólio - Ederson
          </div>
        </div>
        <div className="p-2.5 text-[#0f0]">
          <div>
            <span className="mr-2">Carregando</span>
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
      </div>
    </motion.div>
  );
}
