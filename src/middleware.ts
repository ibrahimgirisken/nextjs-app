import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin')) {
    const token = request.cookies.get('accessToken')?.value;

    if (!token) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = '/login';
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  }

  if (pathname === '/login') {
    return NextResponse.next(); // serbest geçiş
  }

  return intlMiddleware(request);
}
export const config = {
  matcher: ['/admin', '/login', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
