"use client";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../../../components/ui/button";
import { Icon } from "../../../components/icons";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { slidesContent } from "@/data/slides";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";

export const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        injectStyles={[
          `
            .swiper-button-next,
            .swiper-button-prev {
              background-color: white;
              padding: 8px 16px;
              border-radius: 100%;
              border: 2px solid black;
              color: red;
            }
            .swiper-pagination-bullet{
              width: 40px;
              height: 40px;
              background-color: red;
            }
            `,
        ]}
        className="mySwiper"
      >
        {slidesContent.map((slide) => (
          <SwiperSlide key={slide.alt}>
            <div className="relative h-fit max-h-[37.5rem] min-[648px]:h-[calc(100vh-137px)]">
              <div className="container flex w-full flex-col items-start justify-center bg-[#314F67] py-10 text-white sm:absolute sm:h-full sm:w-1/2 sm:rounded-br-[60px] sm:rounded-tr-[60px] sm:py-0 sm:pl-[80px] lg:max-w-[50%]">
                <div className="pointer-events-none mb-8 flex h-[8rem] max-w-[350px] flex-col gap-4 sm:h-fit">
                  <h1 className="font-title  text-[clamp(1.5rem,4vw,3rem)] font-semibold">
                    {slide.title}
                  </h1>
                  <p className="text-[clamp(1rem,2vw,1.25rem)] font-medium">
                    {slide.subtitle}
                  </p>
                </div>
                <Link
                  href={"https://wa.me/5521996026504"}
                  target="_blank"
                  className={`${buttonVariants({ variant: "success" })} gap-2`}
                >
                  <Icon.Whatsapp className="size-5 flex-shrink-0" />
                  Fale no Whatsapp
                </Link>
              </div>
              <picture className="hidden h-full w-full sm:block">
                <Image
                  src={slide.imageUrl}
                  alt={slide.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-full w-full object-cover sm:block"
                />
              </picture>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
