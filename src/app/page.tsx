"use client";

import Image from "next/image";
import Link from "next/link";
import Loading from "./loading";
import Contact from "@/components/contact";
import Terminal from "@/components/terminal";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useLoadingStore } from "@/store/loading";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import Fullscreen from "@/components/fullscreen";
import dynamic from "next/dynamic";
import { fullpageApi } from "@fullpage/react-fullpage";
import useDictionary from "@/hooks/useDictionary";
import useLang from "@/hooks/useLang";
import { transition } from "@/theme/animation";
import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { useHeroStore } from "@/store/hero";
import TrajectorySection from "@/sections/trajectory";
import ProjectsSections from "@/sections/projects";
import { useResolutionStore } from "@/store/resolution";

const Hero = dynamic(() => import("@/components/hero"), {
  ssr: false,
});

export default function Home() {
  const isLoading = useLoadingStore((state) => state.loading);

  return (
    <>
      <h1 className="hidden">Ederson Franzen Fagundes - Portfolio</h1>

      <AnimatePresence>
        {isLoading && <Loading isComponent={true} />}
      </AnimatePresence>

      <main className="flex flex-col overflow-hidden">
        <Fullscreen>
          {({ fullpageApi }) => <Sections fullpageApi={fullpageApi} />}
        </Fullscreen>
      </main>
    </>
  );
}

function Sections({ fullpageApi }: { fullpageApi: fullpageApi }) {
  const lang = useLang();
  const params = useParams();
  const flag = lang === "en" ? "br" : "usa";

  const { navigation, about, contact, footer } = useDictionary();

  const [resolution, setResolution] = useResolutionStore((state) => [
    state.resolution,
    state.setResolution,
  ]);

  useEffect(() => {
    function onChangeHash() {
      const hash = window.location.hash;

      if (hash) {
        switch (hash) {
          case "#sobre":
            fullpageApi.moveTo(2);
            break;
          case "#projetos":
            fullpageApi.moveTo(4);
            break;
          case "#contato":
            fullpageApi.moveTo(5);
            break;
          case "#assinatura":
            fullpageApi.moveTo(6);
            break;
        }
      }
    }

    if (!fullpageApi?.moveTo) {
      return;
    }

    onChangeHash();
  }, [params, fullpageApi]);

  return (
    <>
      <div className="section">
        <section className="h-svh w-full">
          <div className="w-full absolute z-50 top-16">
            <div className="content flex justify-between">
              <Link
                className="text-3xl font-bold text-white stroke-2 hard-shadow-text"
                href="/"
              >
                EDERFF
              </Link>
              <div className="flex-center gap-6">
                {resolution === "max" ? (
                  <div
                    aria-label="Baixa resolução"
                    role="button"
                    className="group"
                    onClick={() => setResolution("min")}
                  >
                    <Image
                      src="/images/illustrations/low-resolution.webp"
                      alt="Icone de baixa resolução"
                      width={45}
                      height={45}
                      onDragStart={(e) => e.preventDefault()}
                      className="unselectable undraggable grayscale transition-all duration-300 hover:grayscale-0"
                    />
                  </div>
                ) : (
                  <div
                    aria-label="Alta resolução"
                    role="button"
                    className="group"
                    onClick={() => setResolution("max")}
                  >
                    <Image
                      src="/images/illustrations/high-resolution.svg"
                      alt="Icone de alta resolução"
                      width={45}
                      height={45}
                      onDragStart={(e) => e.preventDefault()}
                      className="unselectable undraggable grayscale transition-all duration-300 hover:grayscale-0"
                    />
                  </div>
                )}
                <a
                  href={"/" + (lang === "en" ? "" : "?l=en")}
                  aria-label="Mudar idioma"
                >
                  <Image
                    src={"/images/flags/" + flag + ".png"}
                    alt={`Icone de idioma ${
                      lang === "pt" ? "inglês" : "português"
                    }`}
                    width={32}
                    height={32}
                    loading="eager"
                    onDragStart={(e) => e.preventDefault()}
                    className="unselectable undraggable"
                  />
                </a>
              </div>
            </div>
          </div>
          <Hero />
          <div className="h-[100vh] w-full relative">
            <div className="relative content h-full w-full">
              <div className="absolute h-full left-0 top-0 flex-center">
                <div className="flex flex-col gap-2 mt-16">
                  {[
                    navigation.about,
                    navigation.projects,
                    navigation.contact,
                  ].map((item, i) => (
                    <div className="overflow-hidden relative" key={item}>
                      <motion.a
                        initial={{
                          y: "100%",
                          color: "rgba(255,255,255,0)",
                        }}
                        animate={{
                          y: 0,
                          color: "rgba(255,255,255,1)",
                        }}
                        transition={{
                          ...transition,
                          duration: 1,
                          delay: (i + 1) * 0.1 + 2.5,
                        }}
                        viewport={{ once: true }}
                        onClick={(e) => {
                          e.preventDefault();
                          switch (i) {
                            case 0:
                              fullpageApi.moveTo(2);
                              break;
                            case 1:
                              fullpageApi.moveTo(4);
                              break;
                            case 2:
                              fullpageApi.moveTo(5);
                              break;
                          }
                        }}
                        target="_self"
                        aria-label={`Ir para ${item}`}
                        className="inline-block text-white uppercase font-black text-6xl small:x-[text-5xl,ml-8] opacity-70 hover:x-[opacity-100,underline]"
                      >
                        {item}
                      </motion.a>
                    </div>
                  ))}
                </div>
              </div>
              <h2 className="text-9xl small:text-7xl opacity-70 text-white font-black font-ibm-plex-serif absolute leading-[0px] right-[4%] bottom-[10%] small:x-[right-0,mr-6] unselectable vertical">
                DEV
              </h2>
            </div>
          </div>
        </section>
      </div>

      <div className="section">
        <section id="sobre" className="w-full">
          <div className="w-full pt-24 pb-16 small:x-[pb-36] min-h-svh bg-[#EDEDED]">
            <div className="content w-full flex justify-between items-center small:flex-col gap-28">
              <div>
                <div className="flex items-center gap-8 mb-12">
                  <div className="relative overflow-hidden">
                    <motion.p
                      initial={{ opacity: 0, y: "100%" }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        ...transition,
                        delay: 0.5,

                        type: "spring",
                        stiffness: 100,
                      }}
                      className="text-xl small:text-base"
                    >
                      {about.subtitle}
                    </motion.p>
                    <div className="overflow-hidden mb-3">
                      <motion.h2
                        initial={{ opacity: 0, y: "100%" }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          ...transition,
                          delay: 0.75,

                          type: "spring",
                          stiffness: 100,
                        }}
                        className="text-[40px] small:text-3xl font-extrabold"
                      >
                        {about.title}{" "}
                        <span className="text-[#262045]">EDERSON</span>
                      </motion.h2>
                    </div>
                    <div className="overflow-hidden">
                      <motion.p
                        initial={{ opacity: 0, y: "100%" }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          ...transition,
                          delay: 1,

                          type: "spring",
                          stiffness: 100,
                        }}
                        className="text-xl small:text-base"
                        dangerouslySetInnerHTML={{
                          __html: about.text,
                        }}
                      ></motion.p>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      ...transition,
                      delay: 1.25,

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
              <div className="flex flex-col gap-12 items-center overflow-hidden">
                <Image
                  src="/images/illustrations/ederson.webp"
                  alt="Foto de perfil"
                  width={550}
                  height={550}
                  onDragStart={(e) => e.preventDefault()}
                  className="unselectable undraggable"
                />
                <motion.div
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    ...transition,
                    delay: 1,
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
      </div>

      <TrajectorySection />

      <ProjectsSections />

      <div className="section small:mt-[40%]">
        <section className="min-h-svh w-full" id="contato">
          <div className="w-full py-24 min-h-[100svh]">
            <div className="content w-full h-full flex flex-col">
              <div className="flex gap-8 items-end mb-16">
                <div className="relative">
                  <p className="text-lg small:text-base ">{contact.subtitle}</p>
                  <h2 className="text-[40px] small:text-3xl font-extrabold inline-block">
                    {contact.title}
                  </h2>
                </div>
              </div>

              <Contact />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
