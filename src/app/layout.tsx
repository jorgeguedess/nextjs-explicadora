import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const poppins = Poppins({
  weight: ["600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Explicadora Tia Denise - Aula de Reforço Escolar",
  description:
    "Explicadora localizada em Pedra de Guaratiba - Rio de Janeiro, RJ. Aqui na Explicadora Tia Denise oferecemos aulas de reforço desde o maternal até todo Ensino Fundamental, priorizamos focar nas matérias com mais dificuldade do aluno, garantindo o sucesso do seu filho no dia a dia acadêmico. Nossos serviços abrangem a alfabetização, reforço escolar, auxilio a trabalhos escolares e preparação a provas.",
  keywords: [
    "Explicadora",
    "Pedra de Guaratiba",
    "Rio de Janeiro",
    "aulas de reforço",
    "maternal",
    "Ensino Fundamental",
    "sucesso acadêmico",
    "alfabetização",
    "trabalhos escolares",
    "provas",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.variable} ${poppins.variable} flex min-h-screen flex-col bg-background font-main text-foreground`}
      >
        <Header />
        <main className="relative top-[141px] mb-[141px] flex-1 min-[368px]:top-[117px] min-[368px]:mb-[117px] min-[648px]:top-[137px] min-[648px]:mb-[137px]">
          {children}
        </main>
      </body>
    </html>
  );
}
