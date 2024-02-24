import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const links = [
  {
    id: "home",
    name: "Início",
    path: "/",
  },
  {
    id: "about",
    name: "Sobre",
    path: "/sobre",
  },
  {
    id: "gallery",
    name: "Galeria",
    path: "/galeria",
  },
  {
    id: "contact",
    name: "Contato",
    path: "/contato",
  },
];

export function formatNumberCell(number: string): string {
  const clearNumber = number.replace(/\D/g, "");
  const formatedNumber = `55${clearNumber.substring(2)}`;
  return formatedNumber;
}
