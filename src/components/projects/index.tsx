import { ProjectType } from "@/@types/project";
import Image from "next/image";
import React, {
  MouseEventHandler,
  RefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide, SwiperSlideProps } from "swiper/react";
import { CgExternal, CgMaximizeAlt } from "react-icons/cg";
import {
  AnimatePresence,
  motion,
  Target,
  useAnimate,
  useInView,
} from "framer-motion";
import Technology from "../technology";
import useDictionary from "@/hooks/useDictionary";
import { useProjectStore } from "@/store/project";
import Link from "next/link";
import { transition as defaultTransition } from "@/theme/animation";

const projects: ProjectType[] = [
  {
    name: "Homepage Alarc",
    url: "alarc-home.vercel.app",
    description: "home-alarc",
    image: "alarc-home/screenshot.webp",
    video: "alarc-home/video.mp4",
    techs: ["next.js", "tailwind", "typescript", "vps"],
  },

  {
    name: "Alarc Tools",
    url: "tools.alarc.com.br",
    description: "tools-alarc",
    image: "alarc-tools/screenshot.webp",
    video: "alarc-tools/video.mp4",
    techs: ["next.js", "tailwind", "postgres", "typescript", "heroku"],
  },

  {
    name: "Manga Anime",
    url: "manga-psi.vercel.app",
    description: "manga-psi",
    image: "animes/screenshot.webp",
    video: "animes/video.mp4",
    techs: ["next.js", "tailwind", "typescript", "vercel"],
  },

  {
    name: "Decorando a lei Seca",
    url: "www.decorandoaleiseca.com.br",
    description: "decorandoaleiseca",
    image: "decorandoaleiseca/screenshot.webp",
    techs: ["php", "mysql", "html", "css", "vps"],
  },

  {
    name: "Github",
    url: "github.com/edersonff",
    description: "github",
    image: "github/screenshot.webp",
    techs: [],
  },

  {
    name: "Guia Jaraguá",
    url: "guia-jaragua.vercel.app",
    description: "guia-jaragua",
    image: "guia-jaragua/screenshot.webp",
    video: "guia-jaragua/video.mp4",
    techs: ["next.js", "tailwind", "mongodb", "typescript", "vercel"],
  },

  {
    name: "Homepage Merlin",
    url: "merlin-tech.com.br",
    description: "merlin-new-home",
    image: "merlin-home/screenshot.webp",
    video: "merlin-home/video.mp4",
    techs: ["next.js", "tailwind", "typescript", "vercel"],
  },

  {
    name: "Merlin Tech",
    url: "tech.merlin-tech.com.br",
    description: "merlin-tech",
    image: "merlin-tech/screenshot.webp",
    video: "merlin-tech/video.mp4",
    techs: ["next.js", "tailwind", "typescript", "vercel"],
  },

  {
    name: "Vainorh APP",
    url: "play.google.com/store/apps/details?id=com.vainorhapp.app&hl=pt",
    description: "vainorh-app",
    image: "vainorh-app/screenshot.webp",
    techs: ["react native", "typescript", "android", "ios"],
  },

  {
    name: "Vainorh WEB",
    url: "app.vainorh.com.br",
    description: "vainorh-web",
    image: "vainorh-web/screenshot.webp",
    techs: ["laravel", "mysql", "html", "css", "vps"],
  },

  {
    name: "Zap Auto",
    url: "zap.merlin-tech.com.br",
    description: "zap-auto",
    image: "zap-auto/screenshot.webp",
    video: "zap-auto/video.mp4",
    techs: ["next.js", "tailwind", "mysql", "typescript", "vercel"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number>(-1);
  const [hoveredProject, setHoveredProject] = useState<{
    index: number;
    ref: RefObject<HTMLDivElement>;
  }>();
  const [transition, setTransition] = useState<boolean>(false);

  const [maximized, setMaximized] = useProjectStore((state) => [
    state.project,
    state.setProject,
  ]);

  const {
    projects: { descriptions, fullscreen },
  } = useDictionary();

  const swiperRef = useRef<SwiperRef>(null);

  function startTransition() {
    if (transition) return;

    setTransition(true);

    const timeout = setTimeout(() => {
      setTransition(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }

  const currentProject = projects[selectedProject];

  const video = useMemo(() => {
    const project = currentProject;

    if (selectedProject === -1) {
      return undefined;
    }

    if (!project.video) {
      return "/videos/transition.mp4";
    }

    return `/projects/${currentProject.video}`;
  }, [selectedProject]);

  function findSlideName(i = 0) {
    if (!swiperRef.current) return undefined;

    const { realIndex } = swiperRef.current.swiper;

    const isBigger = realIndex + i > projects.length - 1;

    if (isBigger) {
      return projects[realIndex + i - projects.length]?.name;
    }

    return projects[realIndex + i]?.name;
  }

  const hoveredSlideIndex = useMemo(() => {
    if (!hoveredProject) {
      return Number(undefined);
    }

    const { index, ref } = hoveredProject;
    const projectName = projects[index].name;

    if (findSlideName(0) === projectName) {
      return 0;
    }
    if (findSlideName(1) === projectName) {
      return 1;
    }
    if (findSlideName(2) === projectName) {
      return 2;
    }
    if (findSlideName(3) === projectName) {
      return 3;
    }

    return Number(undefined);
  }, [hoveredProject]);

  const left = `calc(${hoveredSlideIndex * 25}% + ${hoveredSlideIndex * 10}px)`;

  useEffect(() => {
    document.body.style.overflow = !maximized ? "hidden" : "auto";
  }, [maximized]);

  return (
    <>
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            ...defaultTransition,

            delay: 1,
          }}
          className="absolute w-full top-0 flex gap-[30px] h-48 select-none pointer-events-none"
        >
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
        </motion.div>

        <div
          className="h-52 flex"
          onMouseLeave={() => setHoveredProject(undefined)}
        >
          <Swiper
            ref={swiperRef}
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
          >
            {projects.map((project, i) => (
              <SwiperSlide
                key={project.name}
                role={project.video ? "button" : undefined}
                className="overflow-hidden"
                style={{
                  padding: 8,
                  paddingLeft: 0,
                }}
              >
                <Project
                  key={i}
                  project={project}
                  onClick={() => {
                    if (project.video) {
                      setSelectedProject(i);
                      startTransition();
                    }
                  }}
                  onMouseEnter={(ref) =>
                    setHoveredProject({ index: i, ref: ref })
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
                left,
              }}
              animate={{
                opacity: 1,
                y: 0,
                left,
              }}
              exit={{ opacity: 0, y: 50 }}
              transition={{
                ...defaultTransition,
                duration: 0.2,
              }}
              key={String(!hoveredProject)}
              className="absolute flex justify-start items-start top-[calc(100%+5vh)] left-0 text-xs p-2.5 z-20 group bg-gray-200 w-[calc(25%-20px)] small:hidden"
            >
              <div>
                <p className="text-black font-semibold leading-6">
                  {
                    descriptions[
                      projects[hoveredProject.index]
                        .description as keyof typeof descriptions
                    ]
                  }
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ...defaultTransition,
            delay: 0.1,
            duration: 0.75,
            type: "spring",
          }}
          className="absolute -bottom-[43vh] -right-[5vw] z-20 group"
        >
          <div
            role="button"
            className="absolute rounded-full bg-black bg-opacity-50 p-2 flex items-center gap-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            onClick={() => setMaximized(video)}
          >
            <CgMaximizeAlt size={20} />
            <p className="text-xs font-bold">{fullscreen}</p>
          </div>

          <Image
            src="/images/illustrations/laptop.svg"
            alt="Ilustração de um laptop isométrico"
            width={400}
            height={400}
            onDragStart={(e) => e.preventDefault()}
            className="unselectable undraggable pointer-events-none min-w-[400px] min-h-[400px]"
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
    </>
  );
}

export function Project({
  project,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: {
  project: ProjectType;
  onClick?: () => void;
  onMouseEnter?: (ref: RefObject<HTMLDivElement>) => void;
  onMouseLeave?: () => void;
}) {
  const observer = useRef<HTMLDivElement>(null);
  const isObserverInView = useInView(observer);
  const ref = useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isObserverInView) {
      animate(
        scope.current,
        {
          y: 0,
        },
        {
          delay: 0.35,
          duration: 0.75,
          type: "spring",
        }
      );
    }
  }, [isObserverInView]);

  return (
    <>
      <div ref={observer} className="absolute w-full h-full"></div>

      <motion.div
        initial={{ y: "110%" }}
        className="flex-1 h-full border-[5px] border-black bg-white text-black hard-shadow relative group"
        onClick={onClick}
        onMouseEnter={() => onMouseEnter?.(scope)}
        onMouseLeave={onMouseLeave}
        ref={scope}
      >
        <div className="absolute-full bg-black bg-opacity-50 z-10 opacity-0 transition-opacity duration-300">
          <div className="flex-center w-full h-full">
            <p className="text-white font-bold text-2xl">Ver mais</p>
          </div>
        </div>
        <div className="flex-center h-full relative z-10">
          <Link
            className="absolute top-1 left-1 p-1 bg-white rounded-full text-black hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group"
            href={`https://${project.url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CgExternal
              size={20}
              className=" group-hover:scale-110 transition-transform"
              aria-label={`Link para o projeto ${project.name}`}
            />
          </Link>
          <h3 className="text-center text-xl font-semibold font-ibm-plex-serif">
            {project.name}
          </h3>
          <div className="absolute right-1 bottom-1 flex gap-1">
            {project.techs.map((tech, i) => (
              <Technology
                key={i}
                tech={tech}
                className="w-4 h-4"
                aria-label={`Tecnologia ${tech}`}
              />
            ))}
          </div>
        </div>
        <Image
          src={`/projects/${project.image}`}
          alt={`Imagem do projeto ${project.name}`}
          width={300}
          height={300}
          className="absolute-full object-cover unselectable undraggable group-hover:opacity-50 opacity-0 transition-all"
        />
      </motion.div>
    </>
  );
}
