import React from "react";
import FontProvider from "./font";
import "../app/globals.css";
import AlertProvider from "./alert";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <FontProvider>
      <AlertProvider>{children}</AlertProvider>
    </FontProvider>
  );
}
