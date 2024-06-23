import React from "react";

import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SwiperProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  SwiperCore.use([Autoplay]);
  return <>{children}</>;
}
