"use client";

import Hero from "@/components/hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="snap-start h-svh">
        <div className="w-full absolute z-50 top-16">
          <div className="content flex justify-between">
            <Link className="text-2xl font-bold text-white stroke-2" href="/">
              EderFF
            </Link>
            <a className="flex flex-col items-end gap-4">
              <div className="w-main-2 h-[1px] bg-white"></div>
              <div className="w-main-1 h-[1px] bg-white"></div>
            </a>
          </div>
        </div>
        <div className="h-[100vh] w-full bg-slate-500 relative">
          <div className="absolute-full h-full top-0 -z-1">
            <Hero />
          </div>
          <div className="relative content h-full w-full">
            <div className="absolute h-full left-0 top-0 flex-center">
              <div className="flex flex-col gap-2 mt-16">
                {["Sobre", "Projetos", "Contato"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-white opacity-50 font-bold text-6xl hover:x-[opacity-100,underline]"
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
      <section className="snap-start h-svh">
        <div className="w-full pt-36 pb-16 bg-[#EDEDED]">
          <div className="content w-full flex justify-between items-center gap-28">
            <div>
              <div className="relative mb-12">
                <p className="text-xl">Sobre</p>
                <h2 className="text-[40px] font-extrabold mb-3">
                  Oi, meu nome é <span className="text-[#262045]">EDERSON</span>
                </h2>
                <p className="text-xl">
                  Sou desenvolvedor <b>FullStack</b> & <b>Mobile</b>
                </p>
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
            <div className="relative mb-12">
              <p className="text-xl">Trajeto</p>
              <h2 className="text-[40px] font-extrabold mb-3">
                <span className="text-emerald-400">Como eu vim parar aqui</span>
              </h2>
            </div>
            <div className="flex flex-1 gap-14">
              <div className="flex flex-col gap-16 justify-between">
                <div className="flex">
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

                  <div className="flex flex-1 justify-center items-center gap-8">
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
                      <li>Maior parte do tempo jogando e assistindo Youtube</li>
                    </ul>
                  </div>

                  <div>
                    <Image
                      src="/images/perfil/17.webp"
                      alt="Minha foto de 17 anos"
                      width={130}
                      height={130}
                      onDragStart={(e) => e.preventDefault()}
                      className="unselectable undraggable"
                    />
                    <p className="text-center text-lg font-extrabold">
                      17 anos - Atual
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-9">
                  <div className="flex flex-1 flex-col justify-center gap-8">
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
                  </div>

                  <div className="flex flex-1 flex-col justify-center gap-8">
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
                        Trabalhando no Jornal OCP como editor de
                        vídeo/fotografia, produção de programas ao vivo.
                      </li>
                      <li>Curso de programação NodeJS.</li>
                      <li>
                        Durante trabalho, solidificou conhecimentos com edição
                        com o pacote Adobe, e aprendeu também a utilizar e
                        configurar o software para programas ao vivo,
                        vMix(principal) e OBS.
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-1 flex-col justify-center gap-8">
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
                        Aprendeu NodeJS, TS, React, C#, C, Java, SQL, NoSQL,
                        React Native, PHP, entre outros.
                      </li>
                      <li>
                        Fez curso no Senai de Desenvolvimento de sistemas
                        integrado ao Ensino médio.
                      </li>
                      <li>Hackeou 4 sistemas tercerizados do Senai:</li>
                      <li>- Mangahigh(atividades de matématica);</li>
                      <li>- Sistema de redações;</li>
                      <li>- GeekOne - Ativação de licensas;</li>
                      <li>- GeekOne - Provas e atividades.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <ul className="text-xs list-disc space-y-2">
                  <li>
                    Começou a trabalhar como programador Backend na BeMobile,
                    entrando a partir de um projeto em AdonisJS, Trabalhando
                    principalmente com Laravel.
                  </li>
                  <li>
                    Mais tarde, pegou o cargo de programador Mobile(React
                    Native) e conforme necessidade Front end.
                  </li>
                  <li>
                    Fez palestra na empresa sobre hacking e proteção de dados.
                  </li>
                  <li>
                    Achou vunerabilidade em plataforma de grande empresa da
                    região.
                  </li>
                  <li>Criou por sozinho softwares como: </li>
                  <li>AutoZap - IA para responder pelo Whatsapp;</li>
                  <li>
                    GuiaJaraguá - Guia virtual, encerrado por falta de
                    estrutura;
                  </li>
                  <li>
                    Criação de empresa Merlin de software - falta de estrutura.
                  </li>
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
    </main>
  );
}
