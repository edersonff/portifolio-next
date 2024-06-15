"use client";

import { IBM_Plex_Serif, Inter, Source_Code_Pro } from "next/font/google";
import React from "react";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-ibm_plex_serif",
});

const sourceCodePro = Source_Code_Pro({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-source_code_pro",
});

export default function FontProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body
      className={`${inter.className} ${inter.variable} ${ibmPlexSerif.variable} ${sourceCodePro.variable}`}
    >
      {children}
    </body>
  );
}
