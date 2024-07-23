import Projects from "@/components/projects";
import { transition } from "@/theme/animation";
import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import useDictionary from "@/hooks/useDictionary";
export default function ProjectsSections() {
  const { projects } = useDictionary();
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef);
  return (
    <div className="section">
      <section className="min-h-svh w-full relative" id="projetos">
        <motion.div
          initial={{ height: 0 }}
          animate={inView && { height: "70vh" }}
          transition={{
            ...transition,
            duration: 1,
            delay: 0,
          }}
          className="bg-emerald-200 w-full absolute top-0 left-0 h-[70svh]"
        />
        <motion.div
          initial={{ height: 0 }}
          animate={inView && { height: "70vh" }}
          transition={{
            ...transition,
            duration: 1,
            delay: 0.1,
          }}
          className="bg-emerald-400 w-full absolute top-0 left-0 h-[70svh]"
        />
        <div className="w-full pt-24 pb-8 h-[70svh] text-white">
          <div className="content w-full h-full" ref={sectionRef}>
            <div className="flex gap-8 items-end mb-16">
              <div className="relative">
                <p className="text-lg small:text-base ">{projects.subtitle}</p>
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
                className="unselectable undraggable mb-4 relative z-10"
              />
            </div>
            <Projects />
          </div>
        </div>
      </section>
    </div>
  );
}
