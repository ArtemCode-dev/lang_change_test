
// import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/Header/Header";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Footer from "@/components/Footer/Footer";
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'
// import { useRouter } from "next/router";
 
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
 //const router = useRouter()
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale || 'en'} messages={messages}>
          <ErrorBoundary>
            <Header />
              <main className={'main'}>{children}</main>
            <Footer />
          </ErrorBoundary>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
