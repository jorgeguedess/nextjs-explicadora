import Link from "next/link";
import { Icon } from "./icons";
import { links } from "@/lib/utils";

export const Footer = () => {
  const nowDate = new Date();
  const currentYear = nowDate.getFullYear();

  return (
    <footer className="bg-popover">
      <div className="container py-6 sm:py-16">
        <div className="flex flex-col gap-8 *:flex-1 sm:flex-row sm:justify-between sm:gap-10">
          <div className="flex flex-col gap-4 ">
            <div className="flex max-w-80 flex-col gap-2">
              <h5 className="font-title text-lg text-footer">
                Profissional da Educação
              </h5>
              <p className="text-base">
                Somos uma explicadora com mais de <strong>20 anos</strong> de
                experiência ajudando crianças e adolescentes a alcançarem seus
                objetivos e superarem desafios acadêmicos.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className=" font-title text-lg text-footer">Nosso Contato</h5>
            <ul className="flex flex-col gap-2 text-secondary  sm:gap-4">
              <li>
                <Link
                  className="flex w-fit flex-wrap items-center gap-1  text-sm font-medium hover:text-primary hover:underline"
                  href={"tel:+21996026504"}
                >
                  <Icon.Phone className="size-4 flex-shrink-0 text-primary" />
                  (21) 99602-6504
                </Link>
              </li>
              <li>
                <address className="flex flex-wrap items-center gap-1  text-sm font-medium not-italic">
                  <Icon.Location className="size-4 flex-shrink-0 text-primary" />
                  Rio de Janeiro - Pedra de Guaratiba
                </address>
              </li>
              <li>
                <Link
                  className="flex w-fit max-w-full flex-wrap items-center gap-1 text-wrap break-all  text-sm font-medium hover:text-primary hover:underline"
                  href={"mailto:explicadoratiadenise@gmail.com"}
                >
                  <Icon.Mail className="size-4 flex-shrink-0 text-primary" />
                  explicadoratiadenise@gmail.com
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col gap-4">
              <h5 className=" font-title text-lg text-footer">Links</h5>
              <nav>
                <ul className="flex flex-col gap-2 text-secondary">
                  {links.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={link.path}
                        className="inline-block w-full  py-1 text-sm font-medium text-secondary hover:text-primary"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex flex-col gap-4 self-end sm:self-baseline">
              <h5 className=" font-title text-lg text-footer">Siga-nos</h5>
              <Link
                href={
                  "https://www.facebook.com/p/Explicadora-tia-Denise-100063166152781/"
                }
                target="_blank"
                className="w-fit  py-2 text-primary"
                aria-label="Facebook"
              >
                <Icon.Facebook className="size-7" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-footer py-4 text-footer-foreground">
        <span className="block text-center text-sm text-accent">
          Copyright © {currentYear} By{" "}
          <Link
            href={"https://github.com/jorgeguedess"}
            target="_blank"
            className="font-medium transition-colors hover:text-primary"
          >
            Jorge Guedes
          </Link>
        </span>
      </div>
    </footer>
  );
};
