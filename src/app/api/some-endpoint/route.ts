import { createServerApi } from '@/lib/serverApi';
import { cookies } from 'next/headers';

export async function GET() {
  const token = (await cookies()).get('accessToken')?.value;

  if (!token) {
    return new Response('Unauthorized', { status: 401 });
  }

  const api = createServerApi(token);
  const response = await api.get('Users/Profile');

  return Response.json(response.data);
}
