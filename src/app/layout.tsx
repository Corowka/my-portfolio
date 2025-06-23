import type { Metadata } from "next";
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
  description:
    "Эта страница - визитка для моих клиентов, здесь вы можете увидеть мои услуги, технологии, которые применяются для создания сайтов, а также контакты, чтобы со мной связаться",
};

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
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
      </body>
    </html>
  );
}
