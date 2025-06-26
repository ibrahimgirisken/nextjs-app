import '@/styles/globals.css';
import { ReactNode } from 'react';
import ClientProviders from '@/components/ClientProviders';

export const metadata = {
  title: 'CW Enerji',
  description: 'CW Enerji yönetim ve kullanıcı paneli',
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClientProviders>
      {children}
    </ClientProviders>
  );
}
