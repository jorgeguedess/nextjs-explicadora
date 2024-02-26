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

export function formatNumberCell(phoneNumber: string): string {
  const cleanedNumber = phoneNumber.replace(/\D/g, "");

  const formattedNumber = cleanedNumber.startsWith("21")
    ? cleanedNumber
    : `21${cleanedNumber}`;

  const internationalNumber = formattedNumber.startsWith("55")
    ? formattedNumber
    : `55${formattedNumber}`;

  return internationalNumber;
}
