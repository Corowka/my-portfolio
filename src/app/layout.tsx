import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./reset.css";
import "./globals.css";

import { Roboto } from "next/font/google";
import { ToastContainer } from "react-toastify";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["cyrillic", "latin"],
});

const SEO = {
  title: "Евгений Копанчук - веб-разработка",
  name: "Евгений Копанчук",
  url: process.env.NEXT_PUBLIC_WEBSITE_URL,
  description:
    "Эта страница - визитка для моих клиентов, здесь вы можете увидеть мои услуги, технологии, которые применяются для создания сайтов, а также контакты, чтобы со мной связаться",
  locale: "ru_RU",
  type: "website" as const,
};

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  metadataBase: new URL(SEO.url!),
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: SEO.url,
    siteName: SEO.name,
    locale: SEO.locale,
    type: SEO.type,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${roboto.variable}`}>
        {children}
        <ToastContainer />
        <Analytics />
      </body>
    </html>
  );
}
