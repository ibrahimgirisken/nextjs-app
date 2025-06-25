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
  const isDetailPage = !!slug;

  const translatedPaths: Record<string, keyof typeof routesConfig> = Object.entries(routesConfig)
    .filter(([, route]) => !route.hasSlug)
    .reduce(
      (acc, [key, route]) => {
        const i18nKey = route.i18nKey ?? `routes.${key}`;
        acc[t(i18nKey)] = key as keyof typeof routesConfig;
        return acc;
      },
      {} as Record<string, keyof typeof routesConfig>
    );

  const baseKey = translatedPaths[firstSegment] ?? 'home';

  const detailRouteMap: Record<string, keyof typeof routesConfig> = {
    products: 'productDetail',
    categories: 'categoryDetail',
    // diğer eşleşmeleri burada tanımla
  };

  const finalKey = isDetailPage ? (detailRouteMap[baseKey] ?? baseKey) : baseKey;

  const routeEntry = routesConfig[finalKey];
  if (!routeEntry) return notFound();

  if (routeEntry.hasSlug && !slug) return notFound();

  return {
    component: routeEntry.component,
    layout: routeEntry.layout,
    componentParams: routeEntry.hasSlug ? { locale, slug } : { locale },
  };
}
