import React from "react";
import FontProvider from "./font";
import "../app/globals.css";
import AlertProvider from "./alert";
import SwiperProvider from "./swiper";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <FontProvider>
      <SwiperProvider>
        <AlertProvider>{children}</AlertProvider>
      </SwiperProvider>
    </FontProvider>
  );
}
