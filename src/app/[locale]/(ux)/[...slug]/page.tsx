import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import UXProductsPage from '@/features/product/pages/UXProductsPage';
import UXCategoriesPage from '@/features/category/pages/UXCategoriesPage';
import UXBrandsPage from '@/features/brand/pages/UXBrandsPage';

type Props = {
  params: {
    locale: string;
    slug?: string[];
  };
};

// Eşleme tablosu
const componentsMap = {
  products: UXProductsPage,
  categories: UXCategoriesPage,
  brands: UXBrandsPage
};

export default async function Page({ params }: Props) {
  const { locale, slug = [] } =await params;

const t = await getTranslations({ locale, namespace: 'routes.ux' });

  const routeSegment = slug[0] || '';

  // Dil dosyasındaki route eşlemesini tersten çöz
const routeKey = Object.entries({
  products: t('products'),
  categories: t('categories'),
  brands: t('brands')
}).find(([, value]) => value === routeSegment)?.[0];

  if (!routeKey) return notFound();

  const Component = componentsMap[routeKey as keyof typeof componentsMap];
  if (!Component) return notFound();

  return <Component locale={locale} />;
}
