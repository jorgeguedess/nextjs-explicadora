import React from "react";
import { Section } from "./section";
import { ContactForm } from "./contact-form";
import Image from "next/image";

export const SectionForm = () => {
  return (
    <Section className="bg-muted sm:py-16">
      <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-[auto,auto] md:items-start">
        <ContactForm />
        <div className="mb-8 flex flex-col items-center justify-center gap-8">
          <div className="flex max-w-[26rem] flex-col gap-4">
            <span className="font-title text-[1.25rem] font-semibold text-footer">
              Sobre Reforço Escolar
            </span>
            <p className="text-sm font-medium text-footer">
              Do 1º ao 9º ano do Ensino Fundamental - Todas as matérias com foco
              em Matemática e Português.
            </p>
          </div>

          <picture className="relative block w-full max-w-[320px]">
            <Image
              src={"/form.png"}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="z-20 w-full"
            />
          </picture>
        </div>
      </div>
    </Section>
  );
};
