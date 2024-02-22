import { Icon } from "@/components/icons";
import { Section } from "@/components/section";

const benefits = [
  {
    title: "Preparação para as provas",
    icon: <Icon.Class />,
  },
  {
    title: "Auxílio nas tarefas de casa",
    icon: <Icon.Study />,
  },
  {
    title: "Orientação a pesquisa e trabalhos",
    icon: <Icon.Notebook />,
  },
  {
    title: "Foco na dificuldade do aluno",
    icon: <Icon.Math />,
  },
];

export const SectionChoice = () => {
  return (
    <Section
      className="sm:py-32"
      isDefault
      newTitle="Por que escolher um reforço escolar?"
      newDescription="Entenda os benefícios que um reforço escolar pode oferecer"
    >
      <ul className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:flex-wrap">
        {benefits.map((item) => (
          <li
            key={item.title}
            className="flex flex-col items-center justify-center gap-4 rounded-lg transition-all duration-300 hover:scale-110 sm:min-w-[220px] sm:flex-1"
          >
            <span className="rounded-full bg-muted p-5 text-primary shadow-sm *:size-10 sm:*:size-10">
              {item.icon}
            </span>
            <p className="text-center text-base font-normal text-footer sm:text-base">
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
};
