interface CardProps {
  card: {
    icon: JSX.Element;
    title: string;
    description: string;
  };
}

export const Card = ({ card }: CardProps) => {
  return (
    <div className="flex h-full w-full min-w-[14rem] max-w-[18.75rem] flex-col items-center justify-center gap-6 rounded-md bg-background px-6 py-9 shadow-sm sm:min-w-[15rem]">
      <div className="rounded-full bg-accent p-8 shadow-sm *:size-16 *:text-primary">
        {card.icon}
      </div>
      <div className="text-center">
        <h4 className="mb-4 font-title text-xl text-primary">{card.title}</h4>
        <p dangerouslySetInnerHTML={{ __html: card.description }}></p>
      </div>
    </div>
  );
};
