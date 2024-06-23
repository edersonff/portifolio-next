import { Project } from "@/@types/project";
import React from "react";

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
  return <div>Projects</div>;
}
