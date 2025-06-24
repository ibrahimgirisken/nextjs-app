import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import ProductsPage from '../../(ux)/products/page';
import ProductDetailPage from '../../(ux)/products/[url]/page';
import CategoriesDetailPage from '../../(ux)/categories/[url]/page';
import CategoriesPage from '../../(ux)/categories/page';
import HomePage from '../../(ux)/page';
import AdminDashboardPage from '../../admin/dashboard/page';
import AdminProductsPage from '../../admin/products/page';
import AdminCategoriesPage from '../../admin/categories/page';
import UXLayout from '@/app/(ux)/layout';
import AdminHeader from '@/components/layout/AdminHeader';
import AdminLayout from '@/app/admin/layout';

const pages: Record<string, React.FC<{ params: any }>> = {
    home: HomePage,
    products: ProductsPage,
    categories: CategoriesPage,
    admin: AdminDashboardPage,
    adminProducts: AdminProductsPage,
    adminCategories: AdminCategoriesPage,
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
        admin: 'admin',
        'admin/products': 'adminProducts',
        'admin/categories': 'adminCategories',
    };

    const rawSegment = segments?.[0] || '';
    const slug = segments?.[1];
    const segmentKey = routes[rawSegment] || 'home';

    const Component = pages[segmentKey];
    if (segmentKey === 'products' && slug) {
        return <UXLayout children={<ProductDetailPage params={{ locale, slug }} />} />;
    }
    if (segmentKey === 'categories' && slug) {
        return <UXLayout children={<CategoriesDetailPage params={{ locale, slug }} />} />;
    }
    if (segmentKey === 'admin' && !slug) {
        return <AdminLayout children={<Component params={{ locale }} />} />;
    }
    if (!Component) notFound();

    return <UXLayout children={<Component params={{ locale }} />} />;
}
