import { SectionGallery } from "@/components/section-gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria",
};

export default function Galeria() {
  return <SectionGallery />;
}
