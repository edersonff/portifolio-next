import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import useDictionary from "@/hooks/useDictionary";
import useLang from "@/hooks/useLang";
import { SignatureBr, SignatureEn } from "../signature";

export default function Footer() {
  const year = new Date().getFullYear();
  const lang = useLang();
  const {
    footer: { nav, social },
  } = useDictionary();

  return (
    <div className="section">
      <section className="h-svh w-full" id="assinatura">
        <div className="h-[100svh] flex flex-col justify-end">
          <div className="w-full py-24 min-h-[400px] relative bg-black">
            <div className="content flex-center h-full">
              <div className="big:min-w-main-8 bg-white text-blue-500 p-6 relative z-10 overflow-hidden">
                {lang === "en" ? <SignatureEn /> : <SignatureBr />}
              </div>
            </div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute-full object-cover opacity-30"
            >
              <source src="/videos/background.mp4" type="video/mp4" />
            </video>
          </div>

          <footer className="content-container bg-dark text-black small:pb-10">
            <h2 className="hidden">Footer</h2>
            <div className="mx-auto w-full content p-4 py-10 lg:py-8">
              <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0 small:mb-10">
                  <Link href="#" className="flex items-center">
                    <span className="text-2xl font-bold text-white stroke-2 hard-shadow-text ">
                      EDERFF
                    </span>
                  </Link>
                </div>
                <div className="grid small:-order-1 grid-cols-2 gap-14">
                  <div>
                    <h3 className="mb-7 small:mb-4 text-sm small:text-xs font-semibold text-neutral-800 uppercase ">
                      {nav.title}
                    </h3>
                    <ul className="text-neutral-900  font-medium">
                      <li>
                        <Link
                          href="#sobre"
                          className="hover:underline small:text-sm !text-neutral-900"
                        >
                          {nav.items[0]}
                        </Link>
                      </li>
                      <li className="my-5">
                        <Link
                          href="#projetos"
                          className="hover:underline small:text-sm !text-neutral-900"
                        >
                          {nav.items[1]}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#contato"
                          className="hover:underline small:text-sm !text-neutral-900"
                        >
                          {nav.items[2]}
                        </Link>
                      </li>
                      <li className="mt-5">
                        <Link
                          href="#assinatura"
                          className="hover:underline small:text-sm !text-neutral-900"
                        >
                          {nav.items[3]}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-7 small:mb-4 text-sm small:text-xs font-semibold text-neutral-800 uppercase ">
                      {social.title}
                    </h3>
                    <ul className="font-medium">
                      <li>
                        <Link
                          href="https://instagram.com/edersonfff"
                          target="_blank"
                          className="hover:underline small:text-sm !text-neutral-900"
                        >
                          Instagram
                        </Link>
                      </li>
                      <li className="my-5">
                        <Link
                          href="https://github.com/edersonff"
                          target="_blank"
                          className="hover:underline small:text-sm !text-neutral-900"
                        >
                          Github
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://wa.me/47996556538"
                          target="_blank"
                          className="hover:underline small:text-sm !text-neutral-900"
                        >
                          Whatsapp
                        </Link>
                      </li>
                      <li className="mt-5">
                        <Link
                          href="https://linkedin.com/in/ederson-franzen-fagundes"
                          target="_blank"
                          className="hover:underline small:text-sm !text-neutral-900"
                        >
                          Linkedin
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr className="my-6 border-neutral-800 sm:mx-auto  lg:my-8" />
              <div className="sm:flex sm:items-center sm:justify-between">
                <p className="text-xs">
                  © {year !== 2024 ? year + "-" : null}
                  {year}{" "}
                  <Link
                    href="/"
                    className="text-neutral-800 hover:underline small:text-sm"
                  >
                    Ederson Franzen Fagundes
                  </Link>
                </p>
                <div className="flex mt-4 sm:justify-center sm:mt-0">
                  <SocialFooterItem
                    type="instagram"
                    href="https://instagram.com/edersonfff"
                  />
                  <SocialFooterItem
                    type="facebook"
                    href="https://facebook.com/ederson.edi"
                  />
                  <SocialFooterItem
                    type="whatsapp"
                    href="https://wa.me/47996556538"
                  />
                  <SocialFooterItem
                    type="linkedin"
                    href="https://linkedin.com/in/ederson-franzen-fagundes"
                  />
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}

export function SocialFooterItem({
  type,
  href,
}: {
  type: "facebook" | "twitter" | "instagram" | "linkedin" | "whatsapp";
  href: string;
}) {
  const Icon = useMemo(() => {
    const icons = {
      facebook: <FaFacebook />,
      twitter: <BsTwitter />,
      instagram: <BsInstagram />,
      linkedin: <FaLinkedinIn />,
      whatsapp: <FaWhatsapp />,
    };
    return icons[type];
  }, [type]);

  return (
    <Link
      target="_blank"
      href={href}
      className="text-neutral-900 hover:text-neutral-800  ms-5"
    >
      {Icon}
      <span className="sr-only">{type} page</span>
    </Link>
  );
}
