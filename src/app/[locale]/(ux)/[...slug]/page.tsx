import { getTranslations } from 'next-intl/server';
import resolveRouteKey from '@/utils/resolveRouteKey';

import ProductList from '@/features/product/pages/ProductsPage';
import ProductDetail from '@/features/product/pages/ProductDetailPage';
// ... diğer componentler

export default async function UXRouter(props: { params: { locale: string; slug?: string[] } }) {
  const { params } = props;
  const { locale, slug = [] } = await params;

  const t = await getTranslations({ locale, namespace: 'routes.ux' });

  const translatedRoutes = {
    products: await t('products'),
    categories: await t('categories'),
    projects: await t('projects'),
  };

  const routeSegment = slug[0]; // örn. 'urunler'
  const detailSegment = slug[1]; // örn. 'akilli-panel'

  const routeKey = resolveRouteKey(routeSegment, translatedRoutes);

  if (!routeKey) return <div>404 Not Found</div>;

  // Detay sayfası
  if (detailSegment) {
    switch (routeKey) {
      case 'products':
        return <ProductDetail slug={detailSegment} locale={locale} />;
      case 'projects':
        return <div>Proje Detay</div>;
      default:
        return <div>Detay Sayfası Yok</div>;
    }
  }

  // Liste sayfası
  switch (routeKey) {
    case 'products':
      return <ProductList locale={locale} />;
    case 'projects':
      return <div>Projeler Listesi</div>;
    case 'categories':
      return <div>Kategoriler Listesi</div>;
    default:
      return <div>404 Not Found</div>;
  }
}
