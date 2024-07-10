"use client";

import React from "react";
import FontProvider from "./font";
import "../app/globals.css";
import AlertProvider from "./alert";
import SwiperProvider from "./swiper";
import ProjectProvider from "./project";
import CustomCursor from "@/components/cursor";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <FontProvider>
        <SwiperProvider>
          <AlertProvider>
            <ProjectProvider />
            <CustomCursor />
            {children}
          </AlertProvider>
        </SwiperProvider>
      </FontProvider>
    </html>
  );
}
