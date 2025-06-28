import '@/styles/globals.css';
import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import AdminLayoutClient from '@/components/layout/AdminLayoutClient';

export const metadata = {
  title: 'CW Enerji Admin Paneli',
  description: 'CW Enerji içerik yönetimi',
};

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const locale = 'tr';
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AdminLayoutClient>{children}</AdminLayoutClient>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
