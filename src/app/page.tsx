"use client";

import Image from "next/image";
import Link from "next/link";
import Loading from "./loading";
import { useResolutionStore } from "@/store/resolution";
import Contact from "@/components/contact";
import Terminal from "@/components/terminal";
import { AnimatePresence, motion } from "framer-motion";
import { useLoadingStore } from "@/store/loading";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import Fullscreen from "@/components/fullscreen";
import dynamic from "next/dynamic";
import ReactFullpage from "@fullpage/react-fullpage";
import useDictionary from "@/hooks/useDictionary";
import useLang from "@/hooks/useLang";

const Hero = dynamic(() => import("@/components/hero"), {
  ssr: false,
});

export default function Home() {
  const lang = useLang();
  const flag = lang === "en" ? "br" : "usa";

  const { navigation, about, trajectory, projects, contact, footer } =
    useDictionary();

  const isLoading = useLoadingStore((state) => state.loading);
  const [resolution, setResolution] = useResolutionStore((state) => [
    state.resolution,
    state.setResolution,
  ]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loading isComponent={true} />}
      </AnimatePresence>
      <main className="flex flex-col overflow-hidden">
        <Fullscreen>
          {({ fullpageApi }) => (
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
                        <Link
                          href={{
                            href: "/",
                            query: { l: lang === "en" ? "" : "en" },
                          }}
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
                        </Link>
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
                            <motion.a
                              initial={{
                                color: "rgba(255,255,255,0)",
                                x: 65,
                              }}
                              animate={{
                                color: "rgba(255,255,255,1)",
                                x: 0,
                              }}
                              transition={{
                                delay: (i + 1) * 0.25 + 2,
                                duration: 0.5,
                                type: "spring",
                                stiffness: 120,
                              }}
                              viewport={{ once: true }}
                              key={item}
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
                              className="text-white uppercase font-black text-6xl small:x-[text-5xl,ml-8] opacity-70 hover:x-[opacity-100,underline] cursor-pointer"
                            >
                              {item}
                            </motion.a>
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
                              {about.subtitle}
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
                              {about.title}{" "}
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
                              dangerouslySetInnerHTML={{
                                __html: about.text,
                              }}
                            ></motion.p>
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
              </div>

              <div className="section">
                <section className="min-h-svh w-full">
                  <div className="w-full pt-24 pb-24   small:x-[pt-24,pb-32] min-h-svh bg-indigo-700 text-white">
                    <div className="content w-full h-full">
                      <div className="flex gap-8 items-end mb-14">
                        <div className="relative">
                          <p className="text-lg small:text-base ">
                            {trajectory.subtitle}
                          </p>
                          <h2 className="text-[40px] small:text-3xl font-extrabold inline-block">
                            <span className="text-emerald-400">
                              {trajectory.title}
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
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                  delay: 0.5,
                                  duration: 0.5,
                                  type: "spring",
                                }}
                              >
                                <Image
                                  src="/images/perfil/5.webp"
                                  alt="Minha foto de 5 anos"
                                  width={130}
                                  height={130}
                                  onDragStart={(e) => e.preventDefault()}
                                  className="unselectable undraggable"
                                />
                                <p className="text-center text-lg small:text-base font-extrabold">
                                  -5 {trajectory.years}
                                </p>
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                  delay: 0.7,
                                  duration: 0.5,
                                  type: "spring",
                                }}
                                className="mx-2 mb-6 small:x-[absolute,top-0,left-[20%]]"
                              >
                                <Image
                                  src="/images/arrows/fun-g.svg"
                                  alt="Seta fun"
                                  width={100}
                                  height={100}
                                  onDragStart={(e) => e.preventDefault()}
                                  className="unselectable undraggable small:x-[w-[70px],translate-x-1/2]"
                                />
                              </motion.div>

                              <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                  delay: 1.5,
                                  duration: 0.5,
                                  type: "spring",
                                }}
                                className="flex-1 absolute -bottom-[40%] left-[25%] small:x-[left-[10%],-rotate-[65deg]]"
                              >
                                <Image
                                  src="/images/arrows/down-g.svg"
                                  alt="Flecha para baixo"
                                  width={80}
                                  height={80}
                                  onDragStart={(e) => e.preventDefault()}
                                  className="unselectable undraggable "
                                />
                              </motion.div>

                              <div className="flex justify-center items-center big:gap-8 small:x-[flex-col,gap-4]">
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  whileInView={{ opacity: 1 }}
                                  viewport={{ once: true }}
                                  transition={{
                                    delay: 1,
                                    duration: 0.5,
                                    type: "spring",
                                  }}
                                >
                                  <Image
                                    src="/images/perfil/8.webp"
                                    alt="Minha foto de 8 anos"
                                    width={130}
                                    height={130}
                                    onDragStart={(e) => e.preventDefault()}
                                    className="unselectable undraggable"
                                  />
                                  <p className="text-center text-lg small:text-base font-extrabold">
                                    ~8 {trajectory.years}
                                  </p>
                                </motion.div>
                                <motion.ul
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{
                                    delay: 1.2,
                                    duration: 0.5,
                                    type: "spring",
                                  }}
                                  className="text-xs list-disc space-y-2"
                                >
                                  {trajectory["8 years"].map((item, i) => (
                                    <li
                                      dangerouslySetInnerHTML={{ __html: item }}
                                      key={i}
                                    />
                                  ))}
                                </motion.ul>
                              </div>
                            </div>

                            <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                delay: 3.2,
                                duration: 0.5,
                                type: "spring",
                              }}
                              className="ml-10 flex-1 small:hidden"
                            >
                              <Image
                                src="/images/perfil/17.webp"
                                alt="Minha foto de 17 anos"
                                width={130}
                                height={130}
                                onDragStart={(e) => e.preventDefault()}
                                className="unselectable undraggable mx-auto"
                              />
                              <p className="text-center text-lg small:text-base font-extrabold">
                                17 {trajectory.years} - Atual
                              </p>
                            </motion.div>
                          </div>

                          <div className="flex items-start small:flex-col gap-9">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                delay: 1.7,
                                duration: 0.5,
                                type: "spring",
                              }}
                              className="flex flex-1 flex-col justify-center gap-6 relative"
                            >
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
                                  ~13 {trajectory.years}
                                </p>
                              </div>
                              <ul className="text-xs list-disc space-y-2">
                                {trajectory["13 years"].map((item, i) => (
                                  <li
                                    dangerouslySetInnerHTML={{ __html: item }}
                                    key={i}
                                  />
                                ))}
                              </ul>

                              <Image
                                src="/images/arrows/dashed-g.svg"
                                alt="Seta tracejada"
                                width={120}
                                height={120}
                                onDragStart={(e) => e.preventDefault()}
                                className="unselectable undraggable absolute -right-[25%] top-[5%] small:hidden"
                              />
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                delay: 2.2,
                                duration: 0.5,
                                type: "spring",
                              }}
                              className="flex flex-1 flex-col justify-center gap-6 relative"
                            >
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
                                  ~15 {trajectory.years}
                                </p>
                              </div>
                              <ul className="text-xs list-disc space-y-2">
                                {trajectory["15 years"].map((item, i) => (
                                  <li
                                    dangerouslySetInnerHTML={{ __html: item }}
                                    key={i}
                                  />
                                ))}
                              </ul>

                              <Image
                                src="/images/arrows/right-g.svg"
                                alt="Flecha para baixo"
                                width={120}
                                height={120}
                                onDragStart={(e) => e.preventDefault()}
                                className="unselectable undraggable absolute -right-[25%] top-[10%] small:hidden"
                              />
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                delay: 2.7,
                                duration: 0.5,
                                type: "spring",
                              }}
                              className="flex flex-1 flex-col justify-center gap-6 relative"
                            >
                              <Image
                                src="/images/icons/rocket.svg"
                                alt="Icone de foguete"
                                width={45}
                                height={45}
                                onDragStart={(e) => e.preventDefault()}
                                className="unselectable undraggable absolute transform translate-x-[-50%] left-1/2 -top-[16%] small:-top-[6%]"
                              />
                              <div className="small:pt-10">
                                <Image
                                  src="/images/perfil/16.webp"
                                  alt="Minha foto de 16 anos"
                                  width={130}
                                  height={130}
                                  onDragStart={(e) => e.preventDefault()}
                                  className="unselectable undraggable mx-auto"
                                />
                                <p className="text-center text-lg small:text-base font-extrabold">
                                  ~16 {trajectory.years}
                                </p>
                              </div>
                              <ul className="text-xs list-disc space-y-2">
                                {trajectory["16 years"].map((item, i) => (
                                  <li
                                    dangerouslySetInnerHTML={{ __html: item }}
                                    key={i}
                                  />
                                ))}
                              </ul>
                            </motion.div>
                          </div>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 3.5,
                            duration: 0.5,
                            type: "spring",
                          }}
                        >
                          <div className="ml-10 flex-1 big:hidden">
                            <Image
                              src="/images/perfil/17.webp"
                              alt="Minha foto de 17 anos"
                              width={130}
                              height={130}
                              onDragStart={(e) => e.preventDefault()}
                              className="unselectable undraggable mx-auto"
                            />
                            <p className="text-center text-lg small:text-base font-extrabold mb-6">
                              17 {trajectory.years} - Atual
                            </p>
                          </div>
                          <ul className="text-xs list-disc space-y-2">
                            {trajectory["17 years"].map((item, i) => (
                              <li
                                dangerouslySetInnerHTML={{ __html: item }}
                                key={i}
                              />
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="section">
                <section className="min-h-svh w-full" id="projetos">
                  <div className="w-full pt-24 pb-8 h-[70svh] bg-emerald-400 text-white">
                    <div className="content w-full h-full">
                      <div className="flex gap-8 items-end mb-16">
                        <div className="relative">
                          <p className="text-lg small:text-base ">
                            {projects.subtitle}
                          </p>
                          <h2 className="text-[40px] small:text-3xl font-extrabold inline-block">
                            {projects.title}
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
              </div>

              <div className="section small:mt-[40%]">
                <section className="min-h-svh w-full" id="contato">
                  <div className="w-full py-24 min-h-[100svh]">
                    <div className="content w-full h-full flex flex-col">
                      <div className="flex gap-8 items-end mb-16">
                        <div className="relative">
                          <p className="text-lg small:text-base ">
                            {contact.subtitle}
                          </p>
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

              <div className="section">
                <section className="h-svh w-full" id="assinatura">
                  <div className="h-[100svh] flex flex-col justify-end">
                    <div className="w-full py-24 min-h-[400px] relative bg-black">
                      <div className="content flex-center h-full">
                        <div className="big:min-w-main-8 bg-white text-blue-500 p-6 relative z-10">
                          <h2 className="text-[32px] small:text-2xl font-ibm-plex-serif font-semibold">
                            {footer.left}
                            <Image
                              src="/images/icons/heart.svg"
                              alt="Icone de coração"
                              width={38}
                              height={46}
                              onDragStart={(e) => e.preventDefault()}
                              className="unselectable undraggable inline-block mx-6 small:x-[w-5,mx-1.5]"
                            />
                            {footer.right}{" "}
                            <span className="text-emerald-400 font-bold small:block">
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
                    <Footer />
                  </div>
                </section>
              </div>
            </>
          )}
        </Fullscreen>
      </main>
    </>
  );
}
