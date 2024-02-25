import Image from "next/image";
import { Section } from "@/components/section";

export const SectionAbout = () => {
  return (
    <Section className="relative overflow-hidden bg-popover">
      <div className="container grid grid-cols-1 items-start justify-end gap-8 md:grid-cols-2 md:items-center lg:gap-x-28">
        <div className="md:order-1 md:max-w-[30rem]">
          <h3 className="mb-6 font-title text-[clamp(1.875rem,5vw,2.625rem)] text-primary">
            Sobre mim
          </h3>
          <p className="text-base md:text-lg">
            Olá, me chamo <strong>Denise</strong>, sou graduada em{" "}
            <strong>Matemática</strong> e <strong>Pedagogia</strong>. Dedicada
            ao ensino fundamental, ofereço um serviço personalizado de reforço
            escolar domiciliar. Nossa abordagem abrange desde a alfabetização,
            aprimoramento da leitura até a construção de bases sólidas em
            matemática e português, adaptando-se às necessidades individuais de
            cada aluno.
          </p>
        </div>
        <div className="relative">
          <Image
            src={"/about.svg"}
            alt="Ilustração de uma professora ensinando sobre os números aos alunos"
            sizes="100vw"
            width={0}
            height={0}
            className="w-full"
          />
          <div className="absolute bottom-0 flex w-full flex-wrap items-center  justify-evenly gap-x-4 gap-y-2 rounded-2xl bg-primary px-5 py-4 text-primary-foreground md:flex-nowrap">
            <div>
              <h4 className="font-title text-2xl font-bold md:text-3xl lg:text-4xl">
                +20 anos
              </h4>
              <span className="text-[0.75rem] lg:text-sm">de Experiência</span>
            </div>
            <div>
              <h4 className="font-title text-2xl font-bold md:text-3xl lg:text-4xl">
                +600 alunos
              </h4>
              <span className="text-[0.75rem] lg:text-sm">Ajudados</span>
            </div>
          </div>
        </div>
      </div>
      <span className="absolute -right-10 -top-20 hidden size-[15rem] rounded-full bg-footer lg:block"></span>
    </Section>
  );
};
