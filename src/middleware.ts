import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Admin sayfalarını koruma
  if (pathname.startsWith('/admin')) {
    const token = request.cookies.get('accessToken')?.value;

    if (!token) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = '/login';
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  // Login sayfası serbest
  if (pathname === '/login') {
    return NextResponse.next();
  }

  // Diğer tüm yollar için i18n middleware
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/admin/:path*', '/login', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
