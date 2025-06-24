import { notFound } from 'next/navigation';
import ProductsPage from '../../(ux)/products/page';
import ProductDetailPage from '../../(ux)/products/[url]/page';
import CategoriesPage from '../../(ux)/categories/page';
import HomePage from '../../(ux)/page';
import { getTranslations } from 'next-intl/server';

const pages: Record<string, React.FC<{ params: { locale: string } }>> = {
    home: HomePage,
    products: ProductsPage,
    categories: CategoriesPage,
    productDetail: ProductDetailPage,
};

export default async function Page({
    params
}: {
    params: { locale: string; segments?: string[] };
}) {
    const { locale, segments } = await params;

    const t = await getTranslations({ locale });

    const routes = {
        [await t('routes.products')]: 'products',
        [await t('routes.categories')]: 'categories',
    };

    const rawSegment = segments?.[0] || '';
    const slug = segments?.[1];
    const segmentKey = routes[rawSegment] || 'home';

    const Component = pages[segmentKey];
    if (segmentKey === 'products' && slug) {
        return <ProductDetailPage params={{ locale, slug }} />;
    }
    if (!Component) notFound();

    return <Component params={{ locale }} />;
}
