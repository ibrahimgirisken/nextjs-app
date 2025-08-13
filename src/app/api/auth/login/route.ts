import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const loginRes = await fetch(`${process.env.BACKEND_API_URL}/Auth/Login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!loginRes.ok) {
      const errorData = await loginRes.json().catch(() => ({}));
      return NextResponse.json({ error: errorData?.message || 'Invalid login' }, { status: 401 });
    }

    const data = await loginRes.json();
    if (!data.token?.accessToken) {
      return NextResponse.json({ error: 'Token alınamadı' }, { status: 500 });
    }

    const res = NextResponse.json({ message: 'Login successful' });

    res.cookies.set('accessToken', data.token.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60,
    });

    return res;
  } catch (err) {
    console.error('Login API hatası:', err);
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 });
  }
}
