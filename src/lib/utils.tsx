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
