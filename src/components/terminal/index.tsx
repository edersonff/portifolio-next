import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useDictionary from "@/hooks/useDictionary";

export default function Terminal() {
  const {
    about: { prompt },
  } = useDictionary();
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 2, duration: 0.65 },
      }}
      viewport={{ once: true }}
      className="w-full bg-zinc-800 min-h-64 border-4 max-w-main-8 border-black rounded font-source-code-pro py-3 px-5 text-white font-medium"
    >
      <p className=" text-stone-300 mb-2.5">
        <span className="text-red-500 font-normal">root$</span> {prompt.year}
        =`date +&apos;%Y&apos;` && {prompt.age}=$((${prompt.year} - 2004))
      </p>
      <p className=" mb-8">
        <span className="text-red-500">root$</span>{" "}
        <span className="text-stone-300">echo</span>{" "}
        <span dangerouslySetInnerHTML={{ __html: prompt.lines[0] }} />{" "}
        <span className="text-blue-500">\n</span>
        <br className="mb-2.5" />
        <span dangerouslySetInnerHTML={{ __html: prompt.lines[1] }} />{" "}
        <span className="text-blue-500">\n</span>
        <br className="mb-2.5" />
        <span dangerouslySetInnerHTML={{ __html: prompt.lines[2] }} />
      </p>
      <div className="flex flex-1 justify-between items-end w-full">
        {/* prettier-ignore */}
        <p className="whitespace-pre">
        |\---/|{"\n"}| o_o |{"\n"} \_^_/
        </p>
        {/* prettier-ignore */}
        <p className="whitespace-pre text-sm">  ( ({"\n"}   ) ){"\n"} ........{"\n"} |      |]{"\n"} \      / {"\n"}  `----&apos;{"\n"}</p>

        {/* prettier-ignore */}
        <p className="whitespace-pre"> _____{"\n"}|.---.|{"\n"}||___||{"\n"}|+  .&apos;|{"\n"}| _ _ |{"\n"}|_____/{"\n"}</p>

        {/* prettier-ignore */}
        <p className="whitespace-pre text-sm">▔╲         ╱▔▏{"\n"}╲┈╲╱▔▔▔▔▔╲╱┈╱{"\n"} ╲┈╭╮┈┈┈╭╮┈╱ {"\n"} ╱┈╰╯┈▂┈╰╯┈╲ {"\n"} ▏╭╮▕━┻━▏╭╮▕ {"\n"} ╲╰╯┈╲▂╱┈╰╯╱ {"\n"}
        </p>
      </div>
    </motion.div>
  );
}
