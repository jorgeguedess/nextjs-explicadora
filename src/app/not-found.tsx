export default function NotFound() {
  return (
    <div className="flex w-full items-center bg-gray-100 py-16 font-main sm:py-32">
      <div className="max-w-lg"></div>
      <div className="container flex flex-col items-center justify-center px-5 text-foreground md:flex-row">
        <div className="flex max-w-lg flex-col items-center gap-4 text-center">
          <div className="font-title text-5xl font-bold text-primary md:text-6xl">
            404
          </div>
          <p className="mb-4 text-2xl font-medium leading-normal md:text-4xl">
            Oops! Página não encontrada.
          </p>
          <p className="text-base md:text-lg">
            Parece que a página que você procura não existe ou não está mais
            disponível.
          </p>
        </div>
      </div>
    </div>
  );
}
