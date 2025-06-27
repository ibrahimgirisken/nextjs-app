import '@/styles/globals.css';
import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import ClientProviders from '@/components/ClientProviders';

export const metadata = {
  title: 'CW Enerji',
  description: 'CW Enerji yönetim ve kullanıcı paneli',
};

type Props = {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = params;
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ClientProviders>
            {children}
          </ClientProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
