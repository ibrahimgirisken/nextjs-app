import { cookies, headers } from 'next/headers';
import { NextResponse } from 'next/server';

const BACKEND_BASE = process.env.BACKEND_API_URL ?? 'http://localhost:5070/api';

async function forward(req: Request, method: string, path: string[]) {
  const url = new URL(req.url);
  const target = `${BACKEND_BASE}/${path.join('/')}${url.search}`;

  const body = method === 'GET' || method === 'HEAD' ? undefined : await req.arrayBuffer();

  const token = (await cookies()).get('accessToken')?.value;

  const h = new Headers();
  h.set('Content-Type', req.headers.get('content-type') ?? 'application/json');
  if (token) h.set('Authorization', `Bearer ${token}`);

  const incoming = await headers();
  const accept = incoming.get('accept');
  if (accept) h.set('accept', accept);

  const resp = await fetch(target, {
    method,
    headers: h,
    body: body ? Buffer.from(body) : undefined,
  });

  // 401 ise cookie'yi temizle ve login'e yönlendir
  if (resp.status === 401) {
    const res = NextResponse.redirect(new URL('/login', req.url));
    res.cookies.set('accessToken', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict', // login'de kullandığın ayarla aynı olmalı
      path: '/',
      maxAge: 0,
    });
    return res;
  }

  const respHeaders = new Headers(resp.headers);
  return new Response(await resp.arrayBuffer(), {
    status: resp.status,
    headers: respHeaders,
  });
}

// Not: params artık Promise! Kullanırken await et.
type Ctx = { params: Promise<{ path: string[] }> };

export async function GET(req: Request, ctx: Ctx) {
  const { path } = await ctx.params;
  return forward(req, 'GET', path);
}

export async function POST(req: Request, ctx: Ctx) {
  const { path } = await ctx.params;
  return forward(req, 'POST', path);
}

export async function PUT(req: Request, ctx: Ctx) {
  const { path } = await ctx.params;
  return forward(req, 'PUT', path);
}

export async function PATCH(req: Request, ctx: Ctx) {
  const { path } = await ctx.params;
  return forward(req, 'PATCH', path);
}

export async function DELETE(req: Request, ctx: Ctx) {
  const { path } = await ctx.params;
  return forward(req, 'DELETE', path);
}
