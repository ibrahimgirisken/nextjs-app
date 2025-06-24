import { getTranslations } from 'next-intl/server';

export async function resolveRoute(locale: string, key: string) {
  const t = await getTranslations({ locale });
  const route = t(`routes.${key}`);
  return `/${locale}${route ? '/' + route : ''}`;
}
