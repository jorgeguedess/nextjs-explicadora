import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

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
  title: {
    default: "Explicadora Tia Denise - Aula de Reforço Escolar",
    template: "%s - Explicadora Tia Denise",
  },
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
  authors: [{ name: "Denise Cristina" }],
  creator: "Jorge Guedes",
  publisher: "Jorge Guedes",
  openGraph: {
    type: "website",
    title: "Explicadora Tia Denise",
    siteName: "Explicadora Tia Denise",
    url: "https://explicadoratiadenise.com.br/",
  },
  robots: {
    follow: true,
    index: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  verification: {
    google: "ocSuGR64vU3ROat2A9veTGtDcH8DUvRnVgq1fCq4Azk",
    yandex: "yandex",
    yahoo: "yahoo",
  },
  category: "educação",
  applicationName: "Explicadora Tia Denise",
  twitter: {
    card: "summary_large_image",
    title: "Explicadora Tia Denise",
    description:
      "Explicadora localizada em Pedra de Guaratiba - Rio de Janeiro, RJ. Aqui na Explicadora Tia Denise oferecemos aulas de reforço desde o maternal até todo Ensino Fundamental, priorizamos focar nas matérias com mais dificuldade do aluno, garantindo o sucesso do seu filho no dia a dia acadêmico. Nossos serviços abrangem a alfabetização, reforço escolar, auxilio a trabalhos escolares e preparação a provas.",
    images:
      "https://opengraph.b-cdn.net/production/documents/09d3c725-80ea-41b3-b4a1-51c69a84b81b.png?token=YyMwJyZ5XwJZC2TSnk8kPF6aWKo56Aab4jM_KU_H7So&height=564&width=1200&expires=33245148886",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          id="google-tag-script"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-CEZCVKW7JX`}
        ></Script>

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CEZCVKW7JX');
          `}
        </Script>
        <Script id="google-tag">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W6DXSL96');
          `}
        </Script>
      </head>
      <body
        className={`${roboto.variable} ${poppins.variable} flex min-h-screen flex-col bg-background font-main text-foreground`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-W6DXSL96`}
            height="0"
            width="0"
            className="hidden"
          ></iframe>
        </noscript>
        <Header />
        <main className="relative top-[141px] mb-[141px] flex-1 min-[368px]:top-[117px] min-[368px]:mb-[117px] min-[648px]:top-[137px] min-[648px]:mb-[137px]">
          {children}
        </main>
        <Footer />
        <GoogleTagManager gtmId={"G-CEZCVKW7JX"} />
      </body>
    </html>
  );
}
