import { Technologies } from "@/@types/tech";
import React from "react";
import {
  FaPython,
  FaJava,
  FaPhp,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaLaravel,
  FaReact,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiNestjs,
  SiAdonisjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiVercel,
  SiHeroku,
} from "react-icons/si";
import { TbLetterCSmall, TbBrandReactNative } from "react-icons/tb";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { GrCloudComputer } from "react-icons/gr";

const convertTechToIcon: { [key in Technologies]: React.ElementType } = {
  python: FaPython,
  javascript: IoLogoJavascript,
  typescript: SiTypescript,
  c: TbLetterCSmall,
  "c++": BiLogoCPlusPlus,
  java: FaJava,
  php: FaPhp,
  //
  nodejs: FaNodeJs,
  express: SiExpress,
  //
  html: FaHtml5,
  css: FaCss3Alt,
  tailwind: SiTailwindcss,
  //
  nestjs: SiNestjs,
  "adonis.js": SiAdonisjs,
  laravel: FaLaravel,
  //
  "react.js": FaReact,
  "next.js": RiNextjsFill,
  //
  "react native": TbBrandReactNative,
  android: FaAndroid,
  ios: FaApple,
  //
  mysql: SiMysql,
  postgres: SiPostgresql,
  mongodb: SiMongodb,
  sqlite: SiSqlite,
  //
  vercel: SiVercel,
  heroku: SiHeroku,
  vps: GrCloudComputer,
};

export default function Technology({
  tech,
  ...props
}: {
  tech: Technologies;
} & React.HTMLAttributes<HTMLDivElement>) {
  const Icon = convertTechToIcon[tech];

  return <Icon {...props} />;
}
