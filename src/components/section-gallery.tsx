"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "./section";
import { usePathname } from "next/navigation";

const GALLERY_IMAGES = [
  {
    url: "explicadora1.jpeg",
    alt: "Imagem 1",
  },
  {
    url: "explicadora2.jpeg",
    alt: "Imagem 2",
  },
  {
    url: "explicadora3.jpeg",
    alt: "Imagem 3",
  },
  {
    url: "explicadora4.jpeg",
    alt: "Imagem 4",
  },
  {
    url: "explicadora5.jpeg",
    alt: "Imagem 5",
  },
  {
    url: "explicadora6.jpeg",
    alt: "Imagem 6",
  },
  {
    url: "explicadora7.jpeg",
    alt: "Imagem 7",
  },
  {
    url: "explicadora8.jpeg",
    alt: "Imagem 8",
  },
];

const getInitialImages = GALLERY_IMAGES.slice(0, 3);

export const SectionGallery = () => {
  const path = usePathname();
  const allGallery = path === "/galeria" ? GALLERY_IMAGES : getInitialImages;

  return (
    <Section
      isDefault
      newTitle="Galeria"
      newDescription="Conheça nossa galeria"
    >
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
        {allGallery.map((image) => (
          <picture key={image.url} className="h-[320px] w-full rounded-md">
            <source
              media="(min-width:640px)"
              srcSet={`/explicadora/lg/${image.url}`}
            ></source>
            <Image
              src={`/explicadora/${image.url}`}
              alt={image.alt}
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full rounded-md object-cover object-center"
            />
          </picture>
        ))}
      </div>
      {path === "/" && (
        <div className="text-center">
          <Link
            href={"/galeria"}
            className="font-medium text-secondary underline hover:text-primary focus-visible:text-primary"
          >
            Veja mais fotos aqui
          </Link>
        </div>
      )}
    </Section>
  );
};
