import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Typewriter from "../typewriter";

export default function Terminal() {
  const ref = useRef(null);
  const inView = useInView(ref);

  const [status, setStatus] = useState(0);

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        setStatus(1);
      }, 1000);

      const timeout2 = setTimeout(() => {
        setStatus(2);
      }, 2000);

      return () => {
        clearTimeout(timeout);
        clearTimeout(timeout2);
      };
    }
  }, [inView]);

  return (
    <div
      className="w-full bg-zinc-800 min-h-64 border-4 max-w-main-7 border-black rounded font-source-code-pro py-3 px-5 text-white font-medium"
      ref={ref}
    >
      {status >= 1 && (
        <p className=" text-stone-300 mb-2.5">
          <span className="text-red-500 font-normal">root$</span>{" "}
          <Typewriter
            text="ano=`date +'%Y'` && idade=$(($ano - 2004))"
            delay={1000}
          />
        </p>
      )}
      {status >= 2 && (
        <p className=" mb-8">
          <span className="text-red-500">root$</span>{" "}
          <span className="text-stone-300">echo</span>{" "}
          <Typewriter
            text="Tenho $idade anos e sou apaixonado pelo que faço."
            delay={1000}
          />
          <span className="text-blue-500">\n</span>
          <br className="mb-2.5" />
          <Typewriter
            text="Fora a programação, eu gosto de <b>Fotografia</b>, <b>Edição de vídeo</b>,<b>Arduino/Lego Ev3</b>, <b>Hacking(Kali)</b>, entre outros."
            delay={2000}
          />
          <span className="text-blue-500">\n</span>
          <br className="mb-2.5" />
          <Typewriter
            text="Geralmente eu entro de cabeça em novos projetos e sou muito dedicado, estudo tudo sobre informatica desde muito cedo, mas recentemente(<b>2022</b>) comecei a trabalhar na área com <b>17 anos</b>."
            delay={3000}
          />
        </p>
      )}
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
    </div>
  );
}
