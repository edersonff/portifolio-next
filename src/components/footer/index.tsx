import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="content-container bg-dark text-black">
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
              <h2 className="mb-7 small:mb-4 text-sm small:text-xs font-semibold text-neutral-800 uppercase ">
                Navegação
              </h2>
              <ul className="text-neutral-900  font-medium">
                <li>
                  <Link href="#sobre" className="hover:underline small:text-sm">
                    Sobre
                  </Link>
                </li>
                <li className="my-5">
                  <Link
                    href="#projetos"
                    className="hover:underline small:text-sm"
                  >
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contato"
                    className="hover:underline small:text-sm"
                  >
                    Contato
                  </Link>
                </li>
                <li className="mt-5">
                  <Link
                    href="#assinatura"
                    className="hover:underline small:text-sm"
                  >
                    Assinatura
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-7 small:mb-4 text-sm small:text-xs font-semibold text-neutral-800 uppercase ">
                Minhas redes
              </h2>
              <ul className="text-neutral-900  font-medium">
                <li>
                  <Link
                    href="https://instagram.com/edersonfff"
                    target="_blank"
                    className="hover:underline small:text-sm "
                  >
                    Instagram
                  </Link>
                </li>
                <li className="my-5">
                  <Link
                    href="https://github.com/edersonff"
                    target="_blank"
                    className="hover:underline small:text-sm"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://wa.me/47996556538"
                    target="_blank"
                    className="hover:underline small:text-sm "
                  >
                    Whatsapp
                  </Link>
                </li>
                <li className="mt-5">
                  <Link
                    href="https://linkedin.com/in/ederson-franzen-fagundes"
                    target="_blank"
                    className="hover:underline small:text-sm"
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
            © {2022}-{new Date().getFullYear()}{" "}
            <Link
              href="/"
              className="text-neutral-800 hover:underline small:text-sm"
            >
              Merlin
            </Link>
            . Todos os direitos reservados.
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
