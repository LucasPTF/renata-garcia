import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seu Primeiro Negócio Digital | Carreira Profissional Prime",
  description:
    "Workshop ao vivo e prático para descobrir qual negócio digital faz sentido para você e organizar seus primeiros passos.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Seu Primeiro Negócio Digital",
    description:
      "Clareza para escolher o que vender, para quem vender e por onde começar.",
    images: ["/images/social-card.png"],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
