"use client";

import Hero from "@/components/hero";
import Image from "next/image";
import Link from "next/link";
import Loading from "./loading";
import { useResolutionStore } from "@/store/resolution";
import Contact from "@/components/contact";

export default function Home() {
  const [resolution, setResolution] = useResolutionStore((state) => [
    state.resolution,
    state.setResolution,
  ]);

  return (
    <main className="flex flex-col">
      <section className="snap-start h-svh">
        <div className="w-full absolute z-50 top-16">
          <div className="content flex justify-between">
            <Link
              className="text-3xl font-bold text-white stroke-2 hard-shadow-text"
              href="/"
            >
              EDERFF
            </Link>
            <div className="flex gap-8">
              {resolution === "max" ? (
                <button className="group" onClick={() => setResolution("min")}>
                  <Image
                    src="/images/illustration/low-resolution.webp"
                    alt="Icone de baixa resolução"
                    width={45}
                    height={45}
                    onDragStart={(e) => e.preventDefault()}
                    className="unselectable undraggable grayscale transition-all duration-300 hover:grayscale-0"
                  />
                </button>
              ) : (
                <button className="group" onClick={() => setResolution("max")}>
                  <Image
                    src="/images/illustration/high-resolution.svg"
                    alt="Icone de alta resolução"
                    width={45}
                    height={45}
                    onDragStart={(e) => e.preventDefault()}
                    className="unselectable undraggable grayscale transition-all duration-300 hover:grayscale-0"
                  />
                </button>
              )}
              <a className="flex flex-col items-end gap-4">
                <div className="w-20 h-[3px] bg-white"></div>
                <div className="w-12 h-[3px] bg-white"></div>
              </a>
            </div>
          </div>
        </div>
        <Hero />
        <div className="h-[100vh] w-full relative">
          <div className="relative content h-full w-full">
            <div className="absolute h-full left-0 top-0 flex-center">
              <div className="flex flex-col gap-2 mt-16">
                {["Sobre", "Projetos", "Contato"].map((item) => (
                  <a
                    key={item}
                    href={"#" + item.toLowerCase()}
                    className="text-white uppercase opacity-70 font-black text-6xl hover:x-[opacity-100,underline]"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <h2 className="text-9xl opacity-50 text-white font-ibm-plex-serif absolute leading-[0px] right-[4%] bottom-[10%] unselectable vertical">
              DEV
            </h2>
          </div>
        </div>
      </section>
      <section className="snap-start h-svh" id="sobre">
        <div className="w-full pt-36 pb-16 h-svh bg-[#EDEDED]">
          <div className="content w-full flex justify-between items-center gap-28">
            <div>
              <div className="flex items-center gap-8 mb-12">
                <div className="relative">
                  <p className="text-xl">Sobre</p>
                  <h2 className="text-[40px] font-extrabold mb-3">
                    Oi, meu nome é{" "}
                    <span className="text-[#262045]">EDERSON</span>
                  </h2>
                  <p className="text-xl">
                    Sou desenvolvedor <b>FullStack</b> & <b>Mobile</b>
                  </p>
                </div>

                <Image
                  src="/images/icons/exclamation.svg"
                  alt="Icone de exclamação"
                  width={30}
                  height={30}
                  onDragStart={(e) => e.preventDefault()}
                  className="unselectable undraggable"
                />
              </div>
              <div className="w-full bg-zinc-800 border-4 max-w-main-7 border-black rounded font-source-code-pro py-3 px-5 text-white font-medium">
                <p className=" text-stone-300 mb-2.5">
                  <span className="text-red-500 font-normal">root$</span>{" "}
                  ano=`date +&apos;%Y&apos;` && idade=$(($ano - 2004))
                </p>
                <p className=" mb-8">
                  <span className="text-red-500">root$</span>{" "}
                  <span className="text-stone-300">echo</span> Tenho $idade anos
                  e sou apaixonado pelo que faço.
                  <span className="text-blue-500">\n</span>
                  <br className="mb-2.5" />
                  Fora a programação, eu gosto de <b>Fotografia</b>,{" "}
                  <b>Edição de vídeo</b>,<b>Arduino/Lego Ev3</b>,{" "}
                  <b>Hacking(Kali)</b>, entre outros.
                  <span className="text-blue-500">\n</span>
                  <br className="mb-2.5" />
                  Geralmente eu entro de cabeça em novos projetos e sou muito
                  dedicado, estudo tudo sobre informatica desde muito cedo, mas
                  recentemente(<b>2022</b>) comecei a trabalhar na área com{" "}
                  <b>17 anos</b>.
                </p>
                <div className="flex justify-between items-end w-full">
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
            </div>
            <div className="flex flex-col gap-12 items-center">
              <Image
                src="/images/illustration/ederson.webp"
                alt="Foto de perfil"
                width={500}
                height={500}
                onDragStart={(e) => e.preventDefault()}
                className="unselectable undraggable"
              />
              <Image
                src="/images/illustration/hobbies.svg"
                alt="Hobbies"
                width={380}
                height={200}
                onDragStart={(e) => e.preventDefault()}
                className="unselectable undraggable"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="snap-start h-svh">
        <div className="w-full pt-16 pb-8 h-svh bg-indigo-700 text-white">
          <div className="content w-full h-full">
            <div className="flex gap-8 items-end mb-14">
              <div className="relative">
                <p className="text-lg leading-[3px]">Trajeto</p>
                <h2 className="text-[40px] font-extrabold inline-block">
                  <span className="text-emerald-400">
                    Como eu vim parar aqui
                  </span>
                </h2>
              </div>
              <Image
                src="/images/icons/smiley.svg"
                alt="Icone de sorriso"
                width={50}
                height={50}
                onDragStart={(e) => e.preventDefault()}
                className="unselectable undraggable"
              />
            </div>

            <div className="flex flex-1 gap-14">
              <div className="flex flex-col gap-16 justify-between">
                <div className="flex">
                  <div className="flex items-center flex-2 relative">
                    <div>
                      <Image
                        src="/images/perfil/5.webp"
                        alt="Minha foto de 5 anos"
                        width={130}
                        height={130}
                        onDragStart={(e) => e.preventDefault()}
                        className="unselectable undraggable"
                      />
                      <p className="text-center text-lg font-extrabold">
                        -5 anos
                      </p>
                    </div>
                    <Image
                      src="/images/arrows/fun-g.svg"
                      alt="Seta fun"
                      width={100}
                      height={100}
                      onDragStart={(e) => e.preventDefault()}
                      className="unselectable undraggable mx-2 mb-6"
                    />

                    <Image
                      src="/images/arrows/down-g.svg"
                      alt="Flecha para baixo"
                      width={80}
                      height={80}
                      onDragStart={(e) => e.preventDefault()}
                      className="unselectable undraggable absolute -bottom-[40%] left-[25%]"
                    />

                    <div className="flex justify-center items-center gap-8">
                      <div>
                        <Image
                          src="/images/perfil/8.webp"
                          alt="Minha foto de 8 anos"
                          width={130}
                          height={130}
                          onDragStart={(e) => e.preventDefault()}
                          className="unselectable undraggable"
                        />
                        <p className="text-center text-lg font-extrabold">
                          ~8 anos
                        </p>
                      </div>
                      <ul className="text-xs list-disc space-y-2">
                        <li>
                          Primeiro contato com programação(<b>JS</b>).
                        </li>
                        <li>
                          Primeiros cursos de <b>programação</b> e de{" "}
                          <b>inglês</b>.
                        </li>
                        <li>
                          Maior parte do tempo jogando e assistindo Youtube
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="ml-10 flex-1">
                    <Image
                      src="/images/perfil/17.webp"
                      alt="Minha foto de 17 anos"
                      width={130}
                      height={130}
                      onDragStart={(e) => e.preventDefault()}
                      className="unselectable undraggable mx-auto"
                    />
                    <p className="text-center text-lg font-extrabold">
                      17 anos - Atual
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-9">
                  <div className="flex flex-1 flex-col justify-center gap-6 relative">
                    <div>
                      <Image
                        src="/images/perfil/13.webp"
                        alt="Minha foto de 13 anos"
                        width={130}
                        height={130}
                        onDragStart={(e) => e.preventDefault()}
                        className="unselectable undraggable mx-auto"
                      />
                      <p className="text-center text-lg font-extrabold">
                        ~13 anos
                      </p>
                    </div>
                    <ul className="text-xs list-disc space-y-2">
                      <li>
                        Primeiro sistema hackeado(<b>Kali Linux</b>).
                      </li>
                      <li>
                        Fazia curso(parceria publico/privada) de robótica,{" "}
                        <b>Lego Ev3</b>.
                      </li>
                      <li>Estudava em escola publica.</li>
                      <li>
                        Aprendeu programação <b>Python</b>, Básico de <b>C#</b>
                        (para <b>Unity</b>), também programação por blocos com{" "}
                        <b>Contruct 2</b>.
                      </li>
                      <li>
                        Também aprendeu edição de vídeos/imagem com{" "}
                        <b>Premiere</b>, <b>After Effects</b>,{" "}
                        <b>Illustrator</b>, <b>Photoshop</b> entre outros. Sabia
                        o básico de modelagem 3d com <b>3Ds max</b> e{" "}
                        <b>Blender</b>.
                      </li>
                    </ul>

                    <Image
                      src="/images/arrows/dashed-g.svg"
                      alt="Seta tracejada"
                      width={120}
                      height={120}
                      onDragStart={(e) => e.preventDefault()}
                      className="unselectable undraggable absolute -right-[25%] top-[5%] "
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-center gap-6 relative">
                    <div>
                      <Image
                        src="/images/perfil/15.webp"
                        alt="Minha foto de 15 anos"
                        width={130}
                        height={130}
                        onDragStart={(e) => e.preventDefault()}
                        className="unselectable undraggable mx-auto"
                      />
                      <p className="text-center text-lg font-extrabold">
                        ~15 anos
                      </p>
                    </div>
                    <ul className="text-xs list-disc space-y-2">
                      <li>
                        Trabalhando no <b>Jornal OCP</b> como{" "}
                        <b>editor de vídeo/fotografia</b>, produção de{" "}
                        <b>programas ao vivo</b>.
                      </li>
                      <li>
                        Curso de programação <b>NodeJS</b>.
                      </li>
                      <li>
                        Durante trabalho, solidificou conhecimentos com edição
                        com o pacote <b>Adobe</b>, e aprendeu também a utilizar
                        e configurar o software para programas ao vivo,{" "}
                        <b>vMix</b>(principal) e <b>OBS</b>.
                      </li>
                    </ul>

                    <Image
                      src="/images/arrows/right-g.svg"
                      alt="Flecha para baixo"
                      width={120}
                      height={120}
                      onDragStart={(e) => e.preventDefault()}
                      className="unselectable undraggable absolute -right-[25%] top-[10%] "
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-center gap-6 relative">
                    <Image
                      src="/images/icons/rocket.svg"
                      alt="Icone de foguete"
                      width={50}
                      height={50}
                      onDragStart={(e) => e.preventDefault()}
                      className="unselectable undraggable absolute transform translate-x-[-50%] left-1/2 -top-[16%]"
                    />
                    <div>
                      <Image
                        src="/images/perfil/16.webp"
                        alt="Minha foto de 16 anos"
                        width={130}
                        height={130}
                        onDragStart={(e) => e.preventDefault()}
                        className="unselectable undraggable mx-auto"
                      />
                      <p className="text-center text-lg font-extrabold">
                        ~16 anos
                      </p>
                    </div>
                    <ul className="text-xs list-disc space-y-2">
                      <li>
                        Aprendeu <b>NodeJS</b>, <b>TS</b>, <b>React</b>,{" "}
                        <b>C#</b>, <b>C</b>, <b>Java</b>, <b>SQL</b>,{" "}
                        <b>NoSQL</b>, <b>React Native</b>, <b>PHP</b>, entre
                        outros.
                      </li>
                      <li>
                        Fez curso no <b>Senai</b> de{" "}
                        <b>Desenvolvimento de sistemas</b> integrado ao Ensino
                        médio.
                      </li>
                      <li>
                        Hackeou 4 sistemas tercerizados do <b>Senai</b>:
                      </li>
                      <ul className="ml-4 list-square">
                        <li>
                          <b>Mangahigh</b>(atividades de matématica);
                        </li>

                        <li>Sistema de redações;</li>

                        <li>
                          <b>GeekieOne</b> - Ativação de licensas;
                        </li>
                        <li>
                          <b>GeekieOne</b> - Provas e atividades.
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <ul className="text-xs list-disc space-y-2">
                  <li>
                    Começou a trabalhar como programador Backend na{" "}
                    <b>BeMobile</b>, entrando a partir de um projeto em{" "}
                    <b>AdonisJS</b>, Trabalhando principalmente com{" "}
                    <b>Laravel</b>.
                  </li>
                  <li>
                    Mais tarde, pegou o cargo de programador <b>Mobile</b>(
                    <b>React Native</b>) e conforme necessidade Front end.
                  </li>
                  <li>
                    Fez palestra na empresa sobre <b>hacking</b> e proteção de
                    dados.
                  </li>
                  <li>
                    Achou vunerabilidade em plataforma de grande empresa da
                    região.
                  </li>
                  <li>Criou por sozinho softwares como: </li>
                  <ul className="ml-4 list-square">
                    <li>
                      <b>AutoZap</b> - IA para responder pelo <b>Whatsapp</b>;
                    </li>
                    <li>
                      <b>GuiaJaraguá</b> - Guia virtual, <b>encerrado</b> por
                      falta de estrutura;
                    </li>
                    <li>
                      Criação de empresa <b>Merlin</b> de software - falta de
                      estrutura.
                    </li>
                  </ul>
                  <br />
                  <li>
                    No ultimo ano, como desejo pessoal, venho tentando criar
                    algo próprio, como os softwares listados acima.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="snap-start h-svh" id="projetos">
        <div className="w-full pt-24 pb-8 h-[65svh] bg-emerald-400 text-white">
          <div className="content w-full h-full">
            <div className="flex gap-8 items-end mb-16">
              <div className="relative">
                <p className="text-lg leading-[3px]">Projetos</p>
                <h2 className="text-[40px] font-extrabold inline-block">
                  Trabalhos que participei
                </h2>
              </div>
              <Image
                src="/images/icons/command-line.svg"
                alt="Icone de linha de comando"
                width={50}
                height={50}
                onDragStart={(e) => e.preventDefault()}
                className="unselectable undraggable mb-4"
              />
            </div>

            <div className="relative">
              <div className="absolute w-full top-0 flex gap-[30px] h-48">
                <div className="flex-1 relative">
                  <Image
                    src="/images/icons/double-underline.svg"
                    alt="Icone de linha dupla"
                    width={85}
                    height={20}
                    onDragStart={(e) => e.preventDefault()}
                    className="unselectable undraggable absolute -bottom-12 left-1/2 transform -translate-x-1/2"
                  />
                </div>
                <div className="flex-1 relative">
                  <Image
                    src="/images/icons/asterisk.svg"
                    alt="Icone de asterisco"
                    width={30}
                    height={40}
                    onDragStart={(e) => e.preventDefault()}
                    className="unselectable undraggable absolute left-4 bottom-3"
                  />
                  <Image
                    src="/images/icons/chevrons.svg"
                    alt="Icone de duas setas"
                    width={55}
                    height={55}
                    onDragStart={(e) => e.preventDefault()}
                    className="unselectable undraggable absolute -right-1 -top-3"
                  />
                </div>
                <div className="flex-1 relative">
                  <Image
                    src="/images/icons/bar-chart.svg"
                    alt="Icone de gráfico de barras"
                    width={35}
                    height={38}
                    onDragStart={(e) => e.preventDefault()}
                    className="unselectable undraggable absolute left-4 bottom-3"
                  />
                  <Image
                    src="/images/icons/pointer.svg"
                    alt="Icone de ponteiro"
                    width={39}
                    height={52}
                    onDragStart={(e) => e.preventDefault()}
                    className="unselectable undraggable absolute -right-4 -bottom-8"
                  />
                </div>
                <div className="flex-1 relative">
                  <Image
                    src="/images/icons/check.svg"
                    alt="Icone de check"
                    width={25}
                    height={36}
                    onDragStart={(e) => e.preventDefault()}
                    className="unselectable undraggable absolute right-2 top-2"
                  />
                </div>
              </div>

              <div className="flex gap-[30px] min-h-48">
                {[1, 2, 3, 4].map((item) => (
                  <div className="flex-1 border-[5px] border-black bg-white hard-shadow"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="snap-start h-svh" id="projetos">
        <div className="w-full py-24 h-[100svh]">
          <div className="content w-full h-full flex flex-col">
            <div className="flex gap-8 items-end mb-16">
              <div className="relative">
                <p className="text-lg leading-[3px]">Contato</p>
                <h2 className="text-[40px] font-extrabold inline-block">
                  Vamos Trabalhar juntos!
                </h2>
              </div>
            </div>

            <Contact />
          </div>
        </div>
      </section>
    </main>
  );
}
