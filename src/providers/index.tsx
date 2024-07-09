"use client";

import React from "react";
import FontProvider from "./font";
import "../app/globals.css";
import AlertProvider from "./alert";
import SwiperProvider from "./swiper";
import { useSearchParams } from "next/navigation";
import useLang from "@/hooks/useLang";
import ProjectProvider from "./project";

export default function Providers({ children }: { children: React.ReactNode }) {
  const lang = useLang();

  return (
    <html lang={lang}>
      <FontProvider>
        <SwiperProvider>
          <AlertProvider>
            <ProjectProvider />
            {children}
          </AlertProvider>
        </SwiperProvider>
      </FontProvider>
    </html>
  );
}
