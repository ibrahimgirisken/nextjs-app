import { notFound } from 'next/navigation';
import ProductsPage from '../../(ux)/products/page';
import CategoriesPage from '../../(ux)/categories/page';
import HomePage from '../../(ux)/page';
import { getTranslations } from 'next-intl/server';

const pages: Record<string, React.FC<{ params: { locale: string } }>> = {
    home: HomePage,
    products: ProductsPage,
    categories: CategoriesPage
};

export default async function Page({
    params
}: {
    params: { locale: string; segments?: string[] };
}) {
    const { locale, segments } = await params;

    const t = await getTranslations({ locale });

    // JSON dosyasındaki çeviri karşılıkları
    const routes = {
        [await t('routes.products')]: 'products',
        [await t('routes.categories')]: 'categories',
        // Anasayfa için segment olmayabilir
    };

    const rawSegment = segments?.[0] || '';
    const segmentKey = routes[rawSegment] || 'home';

    const Component = pages[segmentKey];
    if (!Component) notFound();

    return <Component params={{ locale }} />;
}
