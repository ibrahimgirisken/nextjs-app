import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // admin'i dışlamak için 'admin' ve 'admin/' kelimelerini iki seçenek olarak veriyoruz:
    '/((?!api|trpc|_next|_vercel|.*\\..*|admin|admin/|login).*)',
  ],
};
