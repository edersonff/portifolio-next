"use client";

import Hero from "@/components/hero";
import Image from "next/image";
import Link from "next/link";
import Loading from "./loading";
import { useResolutionStore } from "@/store/resolution";
import Contact from "@/components/contact";
import Terminal from "@/components/terminal";
import { AnimatePresence, motion } from "framer-motion";
import { useLoadingStore } from "@/store/loading";
import Projects from "@/components/projects";

export default function Home() {
  const isLoading = useLoadingStore((state) => state.loading);
  const [resolution, setResolution] = useResolutionStore((state) => [
    state.resolution,
    state.setResolution,
  ]);

  return (
    <main className="flex flex-col">
      <AnimatePresence>
        {isLoading && <Loading isComponent={true} />}
      </AnimatePresence>

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
                    src="/images/illustrations/low-resolution.webp"
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
                    src="/images/illustrations/high-resolution.svg"
                    alt="Icone de alta resolução"
                    width={45}
                    height={45}
                    onDragStart={(e) => e.preventDefault()}
                    className="unselectable undraggable grayscale transition-all duration-300 hover:grayscale-0"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
        <Hero />
        <div className="h-[100vh] w-full relative">
          <div className="relative content h-full w-full">
            <div className="absolute h-full left-0 top-0 flex-center">
              <div className="flex flex-col gap-2 mt-16">
                {["Sobre", "Projetos", "Contato"].map((item, i) => (
                  <motion.a
                    initial={{
                      color: "rgba(255,255,255,0)",
                      x: 65,
                    }}
                    whileInView={{
                      color: "rgba(255,255,255,1)",
                      x: 0,
                    }}
                    transition={{
                      delay: (i + 1) * 0.25 + 1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                    viewport={{ once: true }}
                    key={item}
                    target="_self"
                    href={"#" + item.toLowerCase()}
                    className="text-white uppercase font-black text-6xl small:text-5xl ml-8 opacity-70 hover:x-[opacity-100,underline]"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
            <h2 className="text-9xl small:text-7xl opacity-50 text-white font-ibm-plex-serif absolute leading-[0px] right-[4%] bottom-[10%] small:x-[right-0,mr-6] unselectable vertical">
              DEV
            </h2>
          </div>
        </div>
      </section>
      <section className="snap-start" id="sobre">
        <div className="w-full pt-36 pb-16 min-h-svh bg-[#EDEDED]">
          <div className="content w-full flex justify-between items-center small:flex-col gap-28">
            <div>
              <div className="flex items-center gap-8 mb-12">
                <div className="relative">
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="text-xl small:text-base"
                  >
                    Sobre
                  </motion.p>
                  <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.75,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="text-[40px] small:text-3xl font-extrabold mb-3"
                  >
                    Oi, meu nome é{" "}
                    <span className="text-[#262045]">EDERSON</span>
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="text-xl small:text-base"
                  >
                    Sou desenvolvedor <b>FullStack</b> & <b>Mobile</b>
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 1.25,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <Image
                    src="/images/icons/exclamation.svg"
                    alt="Icone de exclamação"
                    width={30}
                    height={30}
                    onDragStart={(e) => e.preventDefault()}
                    className="unselectable undraggable"
                  />
                </motion.div>
              </div>
              <Terminal />
            </div>
            <div className="flex flex-col gap-12 items-center">
              <Image
                src="/images/illustrations/ederson.webp"
                alt="Foto de perfil"
                width={500}
                height={500}
                onDragStart={(e) => e.preventDefault()}
                className="unselectable undraggable"
              />
              <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 2,
                  duration: 0.65,
                  type: "spring",
                }}
              >
                <Image
                  src="/images/illustrations/hobbies.svg"
                  alt="Hobbies"
                  width={380}
                  height={200}
                  onDragStart={(e) => e.preventDefault()}
                  className="unselectable undraggable"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="snap-start min-h-svh">
        <div className="w-full pt-16 pb-8 small:pb-96 min-h-svh bg-indigo-700 text-white">
          <div className="content w-full h-full">
            <div className="flex gap-8 items-end mb-14">
              <div className="relative">
                <p className="text-lg small:text-base leading-[3px]">Trajeto</p>
                <h2 className="text-[40px] small:text-3xl font-extrabold inline-block">
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

            <div className="flex small:flex-col flex-1 gap-14">
              <div className="flex flex-col gap-16 justify-between">
                <div className="flex small:flex-col">
                  <div className="flex items-center small:items-start flex-2 relative">
                    <div>
                      <Image
                        src="/images/perfil/5.webp"
                        alt="Minha foto de 5 anos"
                        width={130}
                        height={130}
                        onDragStart={(e) => e.preventDefault()}
                        className="unselectable undraggable"
                      />
                      <p className="text-center text-lg small:text-base font-extrabold">
                        -5 anos
                      </p>
                    </div>
                    <Image
                      src="/images/arrows/fun-g.svg"
                      alt="Seta fun"
                      width={100}
                      height={100}
                      onDragStart={(e) => e.preventDefault()}
                      className="unselectable undraggable mx-2 mb-6 small:x-[absolute,top-0,w-16,left-[19%],translate-x-1/2]"
                    />

                    <Image
                      src="/images/arrows/down-g.svg"
                      alt="Flecha para baixo"
                      width={80}
                      height={80}
                      onDragStart={(e) => e.preventDefault()}
                      className="unselectable undraggable absolute -bottom-[40%] left-[25%] small:x-[left-[10%],-rotate-[65deg]]"
                    />

                    <div className="flex justify-center items-center big:gap-8 small:x-[flex-col,gap-4]">
                      <div>
                        <Image
                          src="/images/perfil/8.webp"
                          alt="Minha foto de 8 anos"
                          width={130}
                          height={130}
                          onDragStart={(e) => e.preventDefault()}
                          className="unselectable undraggable"
                        />
                        <p className="text-center text-lg small:text-base font-extrabold">
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

                  <div className="ml-10 flex-1 small:hidden">
                    <Image
                      src="/images/perfil/17.webp"
                      alt="Minha foto de 17 anos"
                      width={130}
                      height={130}
                      onDragStart={(e) => e.preventDefault()}
                      className="unselectable undraggable mx-auto"
                    />
                    <p className="text-center text-lg small:text-base font-extrabold">
                      17 anos - Atual
                    </p>
                  </div>
                </div>

                <div className="flex items-start small:flex-col gap-9">
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
                      <p className="text-center text-lg small:text-base font-extrabold">
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
                      className="unselectable undraggable absolute -right-[25%] top-[5%] small:x-[-bottom-[10%],right-[10%],rotate-[120deg]]"
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
                      <p className="text-center text-lg small:text-base font-extrabold">
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
                      <p className="text-center text-lg small:text-base font-extrabold">
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
                <div className="ml-10 flex-1 big:hidden">
                  <Image
                    src="/images/perfil/17.webp"
                    alt="Minha foto de 17 anos"
                    width={130}
                    height={130}
                    onDragStart={(e) => e.preventDefault()}
                    className="unselectable undraggable mx-auto"
                  />
                  <p className="text-center text-lg small:text-base font-extrabold">
                    17 anos - Atual
                  </p>
                </div>
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
                <p className="text-lg small:text-base leading-[3px]">
                  Projetos
                </p>
                <h2 className="text-[40px] small:text-3xl font-extrabold inline-block">
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
            <Projects />
          </div>
        </div>
      </section>

      <section className="snap-start h-svh" id="contato">
        <div className="w-full py-24 min-h-[100svh]">
          <div className="content w-full h-full flex flex-col">
            <div className="flex gap-8 items-end mb-16">
              <div className="relative">
                <p className="text-lg small:text-base leading-[3px]">Contato</p>
                <h2 className="text-[40px] small:text-3xl font-extrabold inline-block">
                  Vamos Trabalhar juntos!
                </h2>
              </div>
            </div>

            <Contact />
          </div>
        </div>
      </section>

      <section className="snap-start h-svh" id="projetos">
        <div className="h-[100svh] flex flex-col justify-end">
          <div className="w-full py-24 min-h-[400px] relative bg-black">
            <div className="content flex-center h-full">
              <div className="big:min-w-main-8 bg-white text-blue-500 p-6 relative z-10">
                <h2 className="text-[32px] font-ibm-plex-serif font-semibold">
                  Feito com
                  <Image
                    src="/images/icons/heart.svg"
                    alt="Icone de coração"
                    width={38}
                    height={46}
                    onDragStart={(e) => e.preventDefault()}
                    className="unselectable undraggable inline-block mx-6"
                  />
                  por{" "}
                  <span className="text-emerald-400 font-bold">
                    Ederson Franzen Fagundes
                  </span>
                </h2>
              </div>
            </div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute-full object-cover opacity-30"
            >
              <source src="/videos/background.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="min-h-80 bg-blue-500"></div>
        </div>
      </section>
    </main>
  );
}
