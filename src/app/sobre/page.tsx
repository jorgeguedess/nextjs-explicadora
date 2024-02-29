import { SectionAbout } from "@/components/section-about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
};

export default function Sobre() {
  return <SectionAbout />;
}
