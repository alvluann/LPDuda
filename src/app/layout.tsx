import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap"
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Maria Eduarda Vieira | Psicóloga",
  description:
    "Atendimento psicológico online com escuta qualificada, acolhimento e cuidado emocional. Agende uma conversa e conheça o processo terapêutico.",
  openGraph: {
    title: "Maria Eduarda Vieira | Psicóloga",
    description:
      "Psicoterapia com escuta, presença e acolhimento, baseada na Psicanálise winnicottiana.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${sans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
