import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/Header/Header";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Footer from "@/components/Footer/Footer";
 
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className={'main'}>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
