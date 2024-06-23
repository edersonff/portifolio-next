import Providers from "@/providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ederson Franzen Fagundes - Portifólio",
  description: "Portifólio de Ederson Franzen Fagundes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Providers>{children}</Providers>
    </html>
  );
}
