"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Section } from "./section";
import { ImagesGallery } from "./images-gallery";
import { GALLERY_IMAGES } from "@/data/gallery";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import {
  Counter,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";

const getInitialImages = GALLERY_IMAGES.slice(0, 3);

export const SectionGallery = () => {
  const path = usePathname();
  const allGallery = path === "/galeria" ? GALLERY_IMAGES : getInitialImages;
  const [index, setIndex] = useState<number>(-1);

  return (
    <Section
      isDefault
      newTitle="Galeria"
      newDescription="Conheça nossa galeria"
    >
      <ImagesGallery
        data={allGallery}
        onClick={(currentIndex) => setIndex(currentIndex)}
      />

      <Lightbox
        styles={{
          container: {
            backgroundColor: "rgba(0, 0, 0, .9)",
          },
        }}
        plugins={[Fullscreen, Zoom, Thumbnails, Counter]}
        captions={{
          showToggle: true,
          descriptionTextAlign: "end",
        }}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={allGallery}
      />

      {path === "/galeria" && (
        <div>
          <p>Em breve mais fotos...</p>
        </div>
      )}

      {/* {path === "/" && (
        <div className="text-center">
          <Link
            href={"/galeria"}
            className="font-medium text-primary underline hover:text-primary/80 focus-visible:text-primary/80"
          >
            Veja mais fotos aqui
          </Link>
        </div>
      )} */}
    </Section>
  );
};
