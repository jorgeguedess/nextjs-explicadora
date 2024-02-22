"use client";

import { Icon } from "./icons";
import { Section } from "./section";
import { Card } from "@/components/ui/card";

const CARDS_DOUBTS = [
  {
    icon: <Icon.Clock />,
    title: "Carga Horária",
    description:
      "Aulas de Segunda à Sexta, contando com horários de <strong>15h às 17h</strong> ou de <strong>17h30 às 19h30</strong>",
  },
  {
    icon: <Icon.Class />,
    title: "Orientação Customizada",
    description:
      "Contamos com auxílio personalizado para cada aluno tirar suas dúvidas ",
  },
  {
    icon: <Icon.Teaching />,
    title: "Alfabetização",
    description:
      "Domínio da leitura e escrita na infância, promovendo o sucesso na alfabetização",
  },
  {
    icon: <Icon.Graduation />,
    title: "Turmas",
    description:
      "Do <strong>1º ano</strong> ao <strong>9º ano</strong> do <strong>Ensino Fundamental</strong> - Todas as matérias com foco em Matemática e Português.",
  },
];

export const SectionDoubts = () => {
  return (
    <Section
      className="bg-popover"
      isDefault
      newTitle="Como funciona o reforço escolar?"
      newDescription="Aulas de todas as matérias do ensino fundamental com foco em
    matématica e português"
    >
      <section className="flex w-full justify-between gap-4 overflow-x-auto sm:gap-8">
        {CARDS_DOUBTS.map((card) => (
          <div className="w-full flex-1" key={card.title}>
            <Card card={card} />
          </div>
        ))}
      </section>
    </Section>
  );
};
