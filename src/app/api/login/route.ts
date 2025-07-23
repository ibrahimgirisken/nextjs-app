// app/api/login/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const loginRes = await fetch('http://localhost:5070/api/Users/Login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!loginRes.ok) {
      const err = await loginRes.text();
      return NextResponse.json({ error: err || 'Invalid login' }, { status: 401 });
    }

    const data = await loginRes.json();

    const response = NextResponse.json({ message: 'Login successful' });
    response.cookies.set('accessToken', data.token.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60, // 1 saat
    });

    return response;
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
