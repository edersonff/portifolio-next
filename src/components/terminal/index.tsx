import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Terminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 2, duration: 0.65 },
      }}
      viewport={{ once: true }}
      className="w-full bg-zinc-800 min-h-64 border-4 max-w-main-7 border-black rounded font-source-code-pro py-3 px-5 text-white font-medium"
    >
      <p className=" text-stone-300 mb-2.5">
        <span className="text-red-500 font-normal">root$</span> ano=`date
        +&apos;%Y&apos;` && idade=$(($ano - 2004))
      </p>
      <p className=" mb-8">
        <span className="text-red-500">root$</span>{" "}
        <span className="text-stone-300">echo</span> Tenho $idade anos e sou
        apaixonado pelo que faço.
        <span className="text-blue-500">\n</span>
        <br className="mb-2.5" />
        Fora a programação, eu gosto de <b>Fotografia</b>,{" "}
        <b>Edição de vídeo</b>,<b>Arduino/Lego Ev3</b>, <b>Hacking(Kali)</b>,
        entre outros.
        <span className="text-blue-500">\n</span>
        <br className="mb-2.5" />
        Geralmente eu entro de cabeça em novos projetos e sou muito dedicado,
        estudo tudo sobre informatica desde muito cedo, mas recentemente(
        <b>2022</b>) comecei a trabalhar na área com <b>17 anos</b>.
      </p>
      <div className="flex flex-1 justify-between items-end w-full">
        <div>
          {/* prettier-ignore */}
          <p className="whitespace-pre">
        |\---/|{"\n"}| o_o |{"\n"} \_^_/
        </p>
        </div>
        {/* prettier-ignore */}
        <p className="whitespace-pre text-sm">  ( ({"\n"}   ) ){"\n"} ........{"\n"} |      |]{"\n"} \      / {"\n"}  `----&apos;{"\n"}
        </p>
        {/* prettier-ignore */}
        <p className="whitespace-pre"> _____{"\n"}
|.---.|{"\n"}
||___||{"\n"}
|+  .&apos;|{"\n"}
| _ _ |{"\n"}
|_____/{"\n"}

        </p>

        {/* prettier-ignore */}
        <p className="whitespace-pre text-sm">▔╲         ╱▔▏{"\n"}╲┈╲╱▔▔▔▔▔╲╱┈╱{"\n"} ╲┈╭╮┈┈┈╭╮┈╱ {"\n"} ╱┈╰╯┈▂┈╰╯┈╲ {"\n"} ▏╭╮▕━┻━▏╭╮▕ {"\n"} ╲╰╯┈╲▂╱┈╰╯╱ {"\n"}
        </p>
      </div>
    </motion.div>
  );
}
