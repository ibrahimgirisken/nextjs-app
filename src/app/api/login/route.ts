// app/api/login/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const loginRes = await fetch('http://localhost:5070/api/Auth/Login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const contentType = loginRes.headers.get('content-type');

    if (!loginRes.ok) {
      let errorMessage = 'Invalid login';
      try {
        if (contentType?.includes('application/json')) {
          const errData = await loginRes.json();
          errorMessage = errData?.message || errorMessage;
        } else {
          errorMessage = await loginRes.text();
        }
      } catch {
        // Yutulabilir
      }

      return NextResponse.json({ error: errorMessage }, { status: 401 });
    }

    const data = await loginRes.json();

    if (!data.token?.accessToken) {
      return NextResponse.json({ error: 'Token alınamadı' }, { status: 500 });
    }

    const response = NextResponse.json({ message: 'Login successful' });

    response.cookies.set('accessToken', data.token.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60, // 1 saat
    });

    return response;
  } catch (err: any) {
    console.error('Login API hatası:', err);
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 });
  }
}
