"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Icon } from "./icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "./ui/button";
import { links } from "@/lib/utils";
import { sendGTMEvent } from "@next/third-parties/google";

export const NavBottom = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();

  const handleToggleMenu = () => {
    setIsMenuOpen((prevMenu) => !prevMenu);
  };

  return (
    <nav
      className={`relative flex h-fit w-full flex-col overflow-y-auto bg-popover ${isMenuOpen && "h-[calc(100vh-40px)] sm:h-fit"}`}
    >
      <div className="shadow-sm">
        <div className="container flex flex-wrap items-center justify-between gap-1 py-3">
          <Link href={"/"} className="block w-40">
            <Image
              src="/logo.svg"
              alt="Explicadora Tia Denise"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full"
            />
          </Link>
          <Button
            className="block px-0 py-1 sm:hidden"
            onClick={handleToggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir Menu"}
            aria-haspopup={true}
            aria-controls="menu"
            aria-expanded={isMenuOpen}
            variant="link"
          >
            {isMenuOpen ? (
              <Icon.Close className="h-8 w-8 text-foreground" />
            ) : (
              <Icon.Menu className="h-8 w-8 text-foreground" />
            )}
          </Button>
          <ul className="hidden sm:flex sm:gap-6">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.path}
                  className={`hover:text- relative px-2 py-1  text-lg transition-colors hover:text-primary  ${path === link.path ? "text-primary" : "text-secondary"}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={"https://wa.me/5521996026504"}
            target="_blank"
            className={`${buttonVariants({ variant: "success", size: "sm" })} hidden sm:flex sm:flex-wrap sm:gap-2`}
          >
            <Icon.Whatsapp className="size-5 flex-shrink-0" />
            <span className="hidden md:inline-block">Fale no Whatsapp</span>
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <div className="flex flex-1 flex-col justify-between gap-5 overflow-auto sm:hidden">
          <ul className="flex flex-1 flex-col gap-0 bg-background">
            {links.map((link) => (
              <li
                key={link.id}
                className="flex flex-1 flex-col text-center font-normal transition-colors"
                onClick={handleToggleMenu}
              >
                <Link
                  href={link.path}
                  className={`block flex-1 border-b border-b-[#E3E8EF] py-6 text-[3vh] text-lg outline-none transition-colors hover:bg-accent/60 ${path === link.path ? "bg-accent text-primary" : "text-secondary"}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="container flex flex-col gap-8 py-4">
            <Link
              href={"https://wa.me/5521996026504"}
              target="_blank"
              className={`${buttonVariants({ variant: "success" })} w-full flex-wrap gap-2`}
              onClick={() => {
                sendGTMEvent({ event: "buttonClicked", value: "xyz" });
              }}
            >
              <Icon.Whatsapp className="flex-shrink-0" />
              Fale no Whatsapp
            </Link>
            <div className="flex justify-between">
              <p className="flex flex-col gap-1 text-sm">
                De Segunda à Sexta
                <span className="mt-2">15:00 às 17:00</span>
                <span>17:30 às 19:30</span>
              </p>
              <Link
                href={
                  "https://www.facebook.com/p/Explicadora-tia-Denise-100063166152781/"
                }
                target="_blank"
                className="self-end py-1"
              >
                <Icon.Facebook />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
