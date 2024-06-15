import React from "react";
import FontProvider from "./font";
import "../app/globals.css";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <FontProvider>{children}</FontProvider>;
}
