"use client";

import React from "react";
import FontProvider from "./font";
import "../app/globals.css";
import AlertProvider from "./alert";
import SwiperProvider from "./swiper";
import ProjectProvider from "./project";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
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
