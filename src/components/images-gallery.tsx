"use client";

import Image from "next/image";

interface ImagesProps {
  data: {
    src: string;
    srcSm: string;
    alt: string;
  }[];
  onClick: (index: number) => void;
}

export const ImagesGallery = ({ data, onClick }: ImagesProps) => {
  const handleClickImage = (index: number) => {
    onClick(index);
  };

  return (
    <div className="grid grid-cols-1 gap-9 sm:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
      {data.map((image, index) => (
        <picture
          key={image.alt}
          className="h-[320px] w-full cursor-pointer rounded-md"
          onClick={() => handleClickImage(index)}
        >
          <source media="(min-width:640px)" srcSet={image.src}></source>
          <Image
            src={image.srcSm}
            alt={image.alt}
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full rounded-md object-cover object-center"
          />
        </picture>
      ))}
    </div>
  );
};
