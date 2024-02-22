import Link from "next/link";
import { Icon } from "./icons";

export const NavTop = () => {
  return (
    <nav className="w-full bg-footer text-xs text-footer-foreground sm:text-sm">
      <div className="container flex items-center justify-between gap-2  py-1 font-medium">
        <ul className="flex flex-1 flex-wrap items-center justify-between gap-2 sm:justify-start sm:gap-9">
          <li>
            <address className="flex items-center gap-1 not-italic">
              <Icon.Location className="size-4 flex-shrink-0" />
              Rio de Janeiro - Pedra de Guaratiba
            </address>
          </li>
          <li className="group">
            <Link
              className="group-underline flex items-center gap-1 py-1 not-italic  group-hover:underline sm:py-3"
              href={"tel:+21996026504"}
            >
              <Icon.Phone className="size-4 flex-shrink-0" />
              (21) 99602-6504
            </Link>
          </li>
        </ul>
        <ul className="hidden sm:block">
          <li className="flex items-start gap-2">
            Siga-nos:
            <Link
              href={
                "https://www.facebook.com/p/Explicadora-tia-Denise-100063166152781/"
              }
              target="_blank"
              aria-label="Facebook"
            >
              <Icon.Facebook className="size-5" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
