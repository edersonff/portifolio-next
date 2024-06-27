import { Project } from "@/@types/project";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CgMaximizeAlt } from "react-icons/cg";
import { motion } from "framer-motion";

const projects: Project[] = [
  {
    name: "Homepage Alarc",
    url: "alarc-home.vercel.app",
    description: "Homepage da empresa Alarc",
    image: "alarc-home/screenshot.webp",
    video: "alarc-home/video.mp4",
    techs: ["next.js", "tailwind", "typescript", "vps"],
  },

  {
    name: "Alarc Tools",
    url: "tools.alarc.com.br",
    description: "Ferramentas da empresa Alarc",
    image: "alarc-tools/screenshot.webp",
    video: "alarc-tools/video.mp4",
    techs: ["next.js", "tailwind", "postgres", "typescript", "heroku"],
  },

  {
    name: "Manga Anime",
    url: "manga-psi.vercel.app",
    description: "Site de leitura de mangás",
    image: "animes/screenshot.webp",
    video: "animes/video.mp4",
    techs: ["next.js", "tailwind", "typescript", "vercel"],
  },

  {
    name: "Decorando a lei Seca",
    url: "www.decorandoaleiseca.com.br",
    description: "Site de estudos para concursantes da área jurídica",
    image: "decorandoaleiseca/screenshot.webp",
    video: "decorandoaleiseca/video.mp4",
    techs: ["php", "mysql", "html", "css", "vps"],
  },

  {
    name: "Github",
    url: "github.com/edersonff",
    description: "Meu github",
    image: "github/screenshot.webp",
    techs: [],
  },

  {
    name: "Guia Jaraguá",
    url: "guia-jaragua.vercel.app",
    description: "Guia de empresas de Jaraguá do Sul",
    image: "guia-jaragua/screenshot.webp",
    video: "guia-jaragua/video.mp4",
    techs: ["next.js", "tailwind", "mongodb", "typescript", "vercel"],
  },

  {
    name: "Homepage Merlin",
    url: "merlin-new-home.vercel.app",
    description: "Homepage da empresa Merlin",
    image: "merlin-home/screenshot.webp",
    video: "merlin-home/video.mp4",
    techs: ["next.js", "tailwind", "typescript", "vercel"],
  },

  {
    name: "Merlin Tech",
    url: "merlin-tech.vercel.app",
    description: "Página de tecnologias da empresa Merlin",
    image: "merlin-tech/screenshot.webp",
    video: "merlin-tech/video.mp4",
    techs: ["next.js", "tailwind", "typescript", "vercel"],
  },

  {
    name: "Vainorh APP",
    url: "play.google.com/store/apps/details?id=com.vainorhapp.app&hl=pt",
    description: "Aplicativo da plataforma Vainorh",
    image: "vainorh-app/screenshot.webp",
    techs: ["react native", "typescript", "android", "ios"],
  },

  {
    name: "Vainorh WEB",
    url: "app.vainorh.com.br",
    description: "Plataforma para gerenciamento do RH das empresas",
    image: "vainorh-web/screenshot.webp",
    techs: ["laravel", "mysql", "html", "css", "vps"],
  },

  {
    name: "Zap Auto",
    url: "github.com/edersonff/zapzap-auto",
    description: "Plataforma para automação de mensagens no whatsapp",
    image: "zap-auto/screenshot.webp",
    video: "zap-auto/video.mp4",
    techs: ["next.js", "tailwind", "mysql", "typescript", "vercel"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number>(-1);
  const [transition, setTransition] = useState<boolean>(false);
  const [maximized, setMaximized] = useState<boolean>(false);

  function startTransition() {
    if (transition) return;

    setTransition(true);

    const timeout = setTimeout(() => {
      setTransition(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }

  const video = useMemo(() => {
    const project = projects[selectedProject];

    if (selectedProject === -1) {
      return undefined;
    }

    if (!project.video) {
      return "/videos/transition.mp4";
    }

    return `/projects/${projects[selectedProject].video}`;
  }, [selectedProject]);

  const showMaximized = useMemo(() => {
    const project = projects[selectedProject];

    if (selectedProject === -1) {
      return false;
    }

    return project.video !== undefined;
  }, [selectedProject]);

  useEffect(() => {
    document.body.style.overflow = maximized ? "hidden" : "auto";
  }, [maximized]);

  return (
    <>
      <div className="relative">
        <div className="absolute w-full top-0 flex gap-[30px] h-48 select-none pointer-events-none">
          <div className="flex-1 relative z-20">
            <Image
              src="/images/icons/double-underline.svg"
              alt="Icone de linha dupla"
              width={85}
              height={20}
              onDragStart={(e) => e.preventDefault()}
              className="unselectable undraggable absolute -bottom-12 left-1/2 transform -translate-x-1/2"
            />
          </div>
          <div className="flex-1 small:hidden relative z-20">
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
              className="unselectable undraggable absolute z-20 -right-1 -top-3"
            />
          </div>
          <div className="flex-1 small:hidden relative z-20">
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
          <div className="flex-1 small:hidden relative z-20">
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

        <div className="h-52 flex">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            breakpoints={{
              1024: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 2,
              },
              1: {
                slidesPerView: 1,
              },
            }}
            loop
            autoplay={{
              delay: 5000,
            }}
            pagination={{ clickable: true }}
            className="h-full"
            style={{
              paddingBottom: 16,
            }}
          >
            {projects.map((item, i) => (
              <SwiperSlide key={item.name}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1,
                    duration: 0.75,
                    type: "spring",
                  }}
                  className="flex-1 h-full border-[5px] border-black bg-white hard-shadow relative cursor-pointer"
                  onClick={() => {
                    setSelectedProject(i);
                    startTransition();
                  }}
                >
                  <div className="absolute-full bg-black bg-opacity-50 z-10 opacity-0 transition-opacity duration-300">
                    <div className="flex-center w-full h-full">
                      <p className="text-white font-bold text-2xl">Ver mais</p>
                    </div>
                  </div>
                  <Image
                    src={`/projects/${item.image}`}
                    alt={`Imagem do projeto ${item.name}`}
                    width={300}
                    height={300}
                    className="absolute-full object-cover"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.1,
            duration: 0.75,
            type: "spring",
          }}
          className="absolute -bottom-[43vh] -right-[5vw] z-20 group"
        >
          {showMaximized && (
            <div
              className="absolute rounded-full bg-black bg-opacity-50 p-2 flex items-center gap-2 cursor-pointer transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              onClick={() => setMaximized(!maximized)}
            >
              <CgMaximizeAlt size={20} />
              <p className="text-xs font-bold">Ver em tela cheia</p>
            </div>
          )}

          <Image
            src="/images/illustrations/laptop.svg"
            alt="Ilustração de um laptop isométrico"
            width={400}
            height={400}
            onDragStart={(e) => e.preventDefault()}
            className="unselectable undraggable"
          />
          <div
            className="absolute top-0 bg-black"
            style={{
              width: 341,
              height: 194,
              left: 111,
              top: 61,
              transform: "rotateX(29deg) rotateY(50deg) rotateZ(0deg)",
            }}
          >
            {transition ? (
              // /videos/transitions.mp4
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute-full object-cover"
                src="/videos/transition.mp4"
              />
            ) : (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute-full object-cover"
                src={video}
              />
            )}
          </div>
        </motion.div>
      </div>

      {maximized && (
        <div
          className="fixed-full z-[999] bg-black bg-opacity-90 flex-center"
          aria-modal
        >
          <div
            className="relative w-full h-full"
            onClick={() => setMaximized(false)}
          >
            <div className="absolute-full z-10"></div>
            <div className="absolute-full z-20 flex-center p-10 pointer-events-none">
              <video
                autoPlay
                loop
                controls
                className="max-w-full max-h-full pointer-events-auto"
                src={video}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
