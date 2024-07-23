import useDictionary from "@/hooks/useDictionary";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { transition } from "@/theme/animation";
import { useMouse } from "@uidotdev/usehooks";
export default function TrajectorySection() {
  const { trajectory } = useDictionary();

  const [animationEnded, setAnimationEnded] = useState(false);
  const [{ x, y }] = useMouse();

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  const windowWidth = useMemo(
    () => (typeof window !== "undefined" ? window.innerWidth : 1000),
    []
  );

  return (
    <div className="section">
      <section className="min-h-svh w-full relative overflow-hidden ">
        <motion.div
          initial={{ width: 0, height: 0, translateX: 0, translateY: 0 }}
          animate={
            isInView && {
              width: windowWidth * 5,
              height: windowWidth * 5,
              marginLeft: -windowWidth * 2.5,
              marginTop: -windowWidth * 2.5,
            }
          }
          onAnimationEnd={() => setAnimationEnded(true)}
          transition={{
            ...transition,
            duration: 20,
            delay: 0.35,
            type: "spring",
          }}
          className="bg-indigo-700 rounded-full absolute transform -translate-x-1/2 -translate-y-1/2"
          style={
            !animationEnded && isInView
              ? { top: `${y}px`, left: `${x}px` }
              : { top: 500, left: 500 }
          }
        ></motion.div>
        <div
          className={
            "w-full pt-24 pb-24 small:x-[pt-24,pb-32] min-h-svh text-white transition-all delay-[4s] bg-transparent " +
            (isInView ? "small:bg-indigo-700" : "")
          }
        >
          <div ref={sectionRef} className="content w-full h-full">
            <div className="flex gap-8 items-end mb-14">
              <div className="relative">
                <p className="text-lg small:text-base ">
                  {trajectory.subtitle}
                </p>
                <h2 className="text-[40px] small:text-3xl font-extrabold inline-block">
                  <span className="text-emerald-400">{trajectory.title}</span>
                </h2>
              </div>
              <Image
                src="/images/icons/smiley.svg"
                alt="Icone de sorriso"
                width={50}
                height={50}
                onDragStart={(e) => e.preventDefault()}
                className="unselectable undraggable relative z-50"
              />
            </div>

            <div className="flex small:flex-col flex-1 gap-14">
              <div className="flex flex-col gap-16 justify-between">
                <div className="flex small:flex-col">
                  <div className="flex items-center small:x-[items-start] flex-2 relative">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        ...transition,
                        delay: 2,

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
                        ...transition,
                        delay: 2.25,

                        type: "spring",
                      }}
                      className="mx-2 mb-6 small:x-[absolute,top-0,left-[22%]]"
                    >
                      <Image
                        src="/images/arrows/fun-g.svg"
                        alt="Seta fun"
                        width={100}
                        height={100}
                        onDragStart={(e) => e.preventDefault()}
                        className="unselectable undraggable small:x-[w-[80%]]"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        ...transition,
                        delay: 3,

                        type: "spring",
                      }}
                      className="absolute -bottom-[40%] left-[25%] small:x-[left-[10%],-rotate-[65deg]]"
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

                    <div className="flex justify-center items-center big:gap-8 small:x-[flex-col,gap-4,w-full]">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          ...transition,
                          delay: 2.5,

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
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-xs list-disc space-y-2"
                      >
                        {trajectory["8 years"].map((item, i) => (
                          <div className="overflow-hidden" key={i}>
                            <motion.li
                              variants={{
                                hidden: { y: "100%" },
                                visible: { y: 0 },
                              }}
                              transition={{
                                ...transition,
                                delay: i * 0.25 + 2.75,
                              }}
                              dangerouslySetInnerHTML={{
                                __html: item,
                              }}
                              key={i}
                            />
                          </div>
                        ))}
                      </motion.ul>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      ...transition,
                      delay: 4.75,

                      type: "spring",
                    }}
                    className="ml-10 flex-1 small:hidden relative z-50"
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
                      ...transition,
                      delay: 3.25,

                      type: "spring",
                    }}
                    className="flex flex-1 flex-col justify-center gap-6 relative w-full"
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
                    <motion.ul
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="text-xs list-disc space-y-2"
                    >
                      {trajectory["13 years"].map((item, i) => (
                        <div className="overflow-hidden" key={i}>
                          <motion.li
                            variants={{
                              hidden: { y: "100%" },
                              visible: { y: 0 },
                            }}
                            transition={{
                              ...transition,
                              delay: i * 0.25 + 3.5,
                            }}
                            dangerouslySetInnerHTML={{
                              __html: item,
                            }}
                            key={i}
                          />
                        </div>
                      ))}
                    </motion.ul>

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
                      ...transition,
                      delay: 3.75,

                      type: "spring",
                    }}
                    className="flex flex-1 flex-col justify-center gap-6 relative w-full"
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
                    <motion.ul
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="text-xs list-disc space-y-2"
                    >
                      {trajectory["15 years"].map((item, i) => (
                        <div className="overflow-hidden" key={i}>
                          <motion.li
                            variants={{
                              hidden: { y: "100%" },
                              visible: { y: 0 },
                            }}
                            transition={{
                              ...transition,
                              delay: i * 0.25 + 4,
                            }}
                            dangerouslySetInnerHTML={{
                              __html: item,
                            }}
                            key={i}
                          />
                        </div>
                      ))}
                    </motion.ul>

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
                      ...transition,
                      delay: 4.25,

                      type: "spring",
                    }}
                    className="flex flex-1 flex-col justify-center gap-6 relative w-full"
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
                    <motion.ul
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="text-xs list-disc space-y-2"
                    >
                      {trajectory["16 years"].map((item, i) => (
                        <div className="overflow-hidden" key={i}>
                          <motion.li
                            variants={{
                              hidden: { y: "100%" },
                              visible: { y: 0 },
                            }}
                            transition={{
                              ...transition,
                              delay: i * 0.25 + 4.5,
                            }}
                            dangerouslySetInnerHTML={{
                              __html: item,
                            }}
                            key={i}
                          />
                        </div>
                      ))}
                    </motion.ul>
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  ...transition,
                  delay: 5,

                  type: "spring",
                }}
                className="relative z-50"
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
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-xs list-disc space-y-2"
                >
                  {trajectory["17 years"].map((item, i) => (
                    <div className="overflow-hidden" key={i}>
                      <motion.li
                        variants={{
                          hidden: { y: "100%" },
                          visible: { y: 0 },
                        }}
                        transition={{
                          ...transition,
                          delay: i * 0.25 + 5.5,
                        }}
                        dangerouslySetInnerHTML={{
                          __html: item,
                        }}
                        key={i}
                      />
                    </div>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
