import { routesConfig } from '@/lib/routesConfig';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

type Params = {
  locale: string;
  segments?: string[];
};

export async function resolveRoute(params: Params) {
  const { locale, segments = [] } = params;
  const t = await getTranslations({ locale });

  const firstSegment = segments[0] ?? '';
  const slug = segments[1] ?? undefined;

  const translatedPaths = Object.entries(routesConfig)
    .filter(([, route]) => !route.hasSlug)
    .reduce(
      (acc, [key, route]) => {
        const tKey = route.i18nKey ?? `routes.${key}`;
        acc[t(tKey)] = key as keyof typeof routesConfig;
        return acc;
      },
      {} as Record<string, keyof typeof routesConfig>
    );

  let matchedKey = translatedPaths[firstSegment] ?? 'home';
  const baseRoute = routesConfig[matchedKey];

  // Slug varsa detay sayfa bul
  if (baseRoute && baseRoute.hasSlug === false && slug) {
    const detailKey = Object.keys(routesConfig).find((key) => {
      const r = routesConfig[key];
      return r.i18nKey === baseRoute.i18nKey && r.hasSlug;
    }) as keyof typeof routesConfig;

    if (detailKey) {
      matchedKey = detailKey;
    }
  }

  const routeEntry = routesConfig[matchedKey];
  if (!routeEntry) notFound();
  if (routeEntry.hasSlug && !slug) notFound();

  return {
    component: routeEntry.component,
    layout: routeEntry.layout,
    componentParams: routeEntry.hasSlug ? { locale, slug } : { locale },
  };
}
