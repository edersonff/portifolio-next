import Providers from "@/providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ederson Franzen Fagundes - Portifólio",
  description:
    "Oi, meu nome é Ederson, Sou desenvolvedor FullStack & Mobile. Tenho 20 anos e sou apaixonado pelo que faço.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Providers>{children}</Providers>;
}
